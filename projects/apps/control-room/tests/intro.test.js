import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createDeliveryIntro } from '../src/intro.js';
import { getNetworkOverviewOffset } from '../src/network-overview.js';

// Only texture painting needs a DOM; camera/orbit behavior runs without WebGL.
const context = {
  fillRect() {}, fillText() {}, beginPath() {}, moveTo() {}, lineTo() {},
  quadraticCurveTo() {}, stroke() {},
  createRadialGradient: () => ({ addColorStop() {} }),
};

test('animated reveal, immediate finish and replay land on the same populated overview', t => {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  Object.defineProperty(globalThis, 'document', {
    configurable: true, value: { createElement: () => ({ getContext: () => context }) },
  });
  t.after(() => {
    if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
    else delete globalThis.document;
  });
  const world = new THREE.Group();
  world.position.x = -.45;
  world.add(new THREE.Group(), new THREE.Group());
  const camera = new THREE.PerspectiveCamera(38, 16 / 9, .1, 100);
  const geo = (lat, lon) => new THREE.Vector3().setFromSphericalCoords(
    2.3256, THREE.MathUtils.degToRad(90 - lat), THREE.MathUtils.degToRad(lon - 90),
  );
  const offset = getNetworkOverviewOffset([geo(50, 0), geo(25, 55), geo(19, 73), geo(1, 104)]);
  let reveals = 0, completes = 0, networkReveals = 0;
  const intro = createDeliveryIntro({
    camera, world, overviewOffset: offset, surfaceRadius: 2.3256,
    onReveal: () => reveals++, onComplete: () => completes++, onCaption() {},
    onNetworkReveal: () => networkReveals++,
  });
  const verify = () => {
    const expected = offset.clone().applyQuaternion(world.quaternion).add(world.position);
    assert(camera.position.distanceTo(expected) < 1e-8);
    assert(camera.up.equals(new THREE.Vector3(0, 1, 0)));
    assert.equal(camera.near, .1);
    assert(!intro.active);
    assert(world.children[1].visible, 'replay restores network layers, even after an interrupted intro');
    camera.updateMatrixWorld(true);
    const parcelSite = offset.clone().setLength(2.3256).applyQuaternion(world.quaternion).add(world.position).project(camera);
    assert(Math.hypot(parcelSite.x, parcelSite.y) < 1e-8, 'parcel site ends at the center of the revealed globe');
  };
  intro.start(-1);
  intro.start(0); // Also exercise a restart while the network is temporarily hidden.
  const orientation = world.quaternion.clone();
  const direction = offset.clone().applyQuaternion(world.quaternion).normalize();
  let radius = camera.position.distanceTo(world.position), previousRounding = 0;
  const facade = world.getObjectByName('intro-rounding-wall');
  const floor = world.getObjectByName('intro-rounding-floor');
  const squareCorner = facade.getVertexPosition(1, new THREE.Vector3()).length();
  for (let time = 0; time < 8.2; time += .05) {
    intro.update(time);
    const rounding = facade.morphTargetInfluences[0];
    assert(rounding >= previousRounding && rounding <= 1);
    assert.equal(floor.morphTargetInfluences[0], 0, 'the floor remains rectangular');
    if (time <= 5.45) assert.equal(rounding, 0, 'no rounding while the room is large');
    if (time <= 4.6) assert.equal(facade.parent.scale.x, .085);
    if (time >= 6.4) assert.equal(rounding, 1);
    if (rounding > 0) {
      const apparentSize = 10 * facade.parent.scale.x * camera.projectionMatrix.elements[5]
        / (2 * camera.position.distanceTo(facade.parent.getWorldPosition(new THREE.Vector3())));
      assert(apparentSize < .07, 'rounding begins only after the room becomes a small map feature');
    }
    previousRounding = rounding;
    assert.equal(networkReveals, time < 5.5 ? 0 : 1);
    assert(Number.isFinite(camera.position.length()));
    assert(world.quaternion.angleTo(orientation) < 1e-8);
    const eye = camera.position.clone().sub(world.position);
    assert(eye.angleTo(direction) < .15, 'pullback stays above the parcel instead of crossing regions');
    assert(eye.length() >= radius - 1e-8, 'camera only pulls outward');
    radius = eye.length();
  }
  intro.update(8.2);
  const finalCorner = facade.getVertexPosition(1, new THREE.Vector3());
  assert(finalCorner.length() < squareCorner);
  assert(Math.abs(Math.hypot(finalCorner.x, finalCorner.y) - 3.75) < 1e-6, 'final silhouette is a circle, not a capsule');
  const dotScale = .018 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / 7.5;
  assert(Math.abs(facade.parent.scale.x - dotScale) < 1e-9);
  assert(facade.parent.position.distanceTo(offset.clone().setLength(2.3256)) < 1e-8);
  assert(facade.position.equals(new THREE.Vector3(0, 0, -.175)));
  verify();
  const endCamera = camera.position.clone();
  intro.start(10);
  assert.equal(facade.morphTargetInfluences[0], 0);
  intro.finish(); // Reduced motion / skip.
  verify();
  assert(camera.position.distanceTo(endCamera) < 1e-8);
  world.rotation.y += 1;
  camera.position.set(3, 2, -4);
  intro.start(20); intro.update(28.2); // Reload after user interaction.
  verify();
  assert(camera.position.distanceTo(endCamera) < 1e-8);
  assert.equal(reveals, 3);
  assert.equal(completes, 3);
  assert.equal(networkReveals, 3);
  offset.copy(geo(-20, 130)).setLength(Math.hypot(.8, 8.2));
  intro.start(30); intro.finish(); // A different layer updates the overview for Reload.
  verify();
  assert(world.children.at(-1).position.angleTo(offset) < 1e-7);
});
