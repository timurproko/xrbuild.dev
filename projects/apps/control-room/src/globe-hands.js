// Hand interaction with the globe on a 3D display:
//  - hand INSIDE the globe and moving: the globe spins about its axis (Trackball3D),
//    with the glowing dot shell showing while the hand touches it;
//  - PINCH near a hub marker (thumb-index point within ~6 cm): selects the hub;
//  - PINCH or GRAB on the globe away from hubs: the globe turns with the palm and
//    stays where it is left on release;
//  - hovering the pinch point near a hub enlarges it, so you see what a pinch would hit.
import * as THREE from 'three';
import { DotShell, GrabRotate, Trackball, nearestTarget, palmQuaternion, pinchCentre } from '@xr-build/sdk';

const SELECT_RADIUS_M = 0.06;  // pinch selection usually reaches 5-7.5 cm
const GRAB_MARGIN_M = 0.075;   // pinch reach around the object

export function createGlobeHands({ xrb, world, radius, camera, controls, hubMeshes, onHover, onSelect, onPinchEmpty = () => {} }) {
  // smoothTime 0.06 s instead of 0.15 s (right for a noisy depth point cloud):
  // our keypoints are already filtered, and the extra smoothing reads as lag.
  const trackball = new Trackball(world, { radius, axis: 'y', smoothTime: 0.06 });
  const shell = new DotShell({ radius: radius * 1.01 });
  world.add(shell);
  const grab = new GrabRotate(world, { axis: 'y' });
  let grabHandId = null;
  const wasEngaged = new Map();  // hand id -> pinching||grabbing last frame
  const tmp = new THREE.Vector3(), centre = new THREE.Vector3(), toCam = new THREE.Vector3();

  function targets() {
    world.getWorldPosition(centre);
    toCam.copy(camera.position).sub(centre);
    return hubMeshes().filter((m) => m.visible && m.material.visible).map((m) => {
      const p = m.getWorldPosition(new THREE.Vector3());
      // Markers on the far side of the globe cannot be reached.
      return { id: m, position: p, enabled: p.clone().sub(centre).dot(toCam) > 0 };
    });
  }

  function update(dt) {
    const hands = xrb.currentHands;
    const points = xrb.handsInScene();
    const metre = xrb.metre;
    world.getWorldPosition(centre);
    const globeRadius = radius * world.scale.x;
    const hubs = targets();
    let hover = null;

    // Hands around: let the user's hand, not the slow auto-rotation, drive the globe.
    if (hands.length) controls.autoRotate = false;

    hands.forEach((hand, i) => {
      const kp = points[i];
      const pc = pinchCentre(kp, tmp.clone());
      const engaged = hand.pinching || hand.grabbing;
      const started = engaged && !wasEngaged.get(hand.id);
      wasEngaged.set(hand.id, engaged);

      if (!engaged) {
        const near = nearestTarget(hubs, pc, SELECT_RADIUS_M * metre);
        if (near && !hover) hover = near.id;
      }
      if (started && grabHandId === null) {
        const hub = hand.pinching ? nearestTarget(hubs, pc, SELECT_RADIUS_M * metre) : null;
        if (hub) {
          onSelect(hub.id);
        } else if (pc.distanceTo(centre) < globeRadius + GRAB_MARGIN_M * metre) {
          grabHandId = hand.id;
          trackball.stop();
          grab.begin(palmQuaternion(kp, hand.handedness));
        } else if (hand.pinching) {
          onPinchEmpty();
        }
      }
      if (hand.id === grabHandId) {
        if (engaged) grab.update(palmQuaternion(kp, hand.handedness), dt);
        else { grab.end(); grabHandId = null; }
      }
    });
    // Grabbing hand lost.
    if (grabHandId !== null && !hands.some((h) => h.id === grabHandId)) { grab.end(); grabHandId = null; }
    for (const id of [...wasEngaged.keys()]) if (!hands.some((h) => h.id === id)) wasEngaged.delete(id);

    trackball.enabled = grabHandId === null;
    trackball.update(dt, grabHandId === null ? points.flat() : []);
    shell.active = trackball.touching;
    shell.update(dt);
    onHover(hover);
  }

  return { update, get touching() { return trackball.touching; }, get grabbing() { return grabHandId !== null; } };
}
