import * as THREE from 'three';
import { createFlowerBasket } from './flower-basket.js';
import { createRoundingPanel } from './rounding-panel.js';
import { createDeliveryParcel } from './delivery-parcel.js';

const ease = (v) => { const x = THREE.MathUtils.clamp(v, 0, 1); return x * x * (3 - 2 * x); };
const mix = THREE.MathUtils.lerp;

/** A small, globe-anchored delivery scene. One camera takes us from doorstep to orbit. */
export function createDeliveryIntro({ camera, world, overviewOffset, surfaceRadius, onReveal, onComplete, onCaption, onNetworkReveal = () => {}, getDeliveryPoint, dotSize = .018, dotColor = 0x8bb8a8, dotOpacity = .58 }) {
  const networkLayers = world.children.slice(1);
  let networkVisibility = [];
  // The doorstep and final view share one geographic direction. Pull back from
  // this spot instead of starting in Seattle and turning toward another region.
  const destinationPoint = new THREE.Vector3();
  const surfacePoint = overviewOffset.clone().setLength(surfaceRadius);
  const dotTint = new THREE.Color(dotColor);
  const roomScale = .085;
  let dotScale = 0;
  const normal = surfacePoint.clone().normalize();
  const north = new THREE.Vector3(0, 1, 0).addScaledVector(normal, -normal.y).normalize();
  const east = north.clone().cross(normal).normalize();
  const surfaceOrientation = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(east, north, normal));
  const landing = new THREE.Group();
  // Keep the entire façade outside the globe's surface, not embedded in it.
  landing.position.copy(surfacePoint).addScaledVector(normal, .19);
  landing.quaternion.copy(surfaceOrientation);
  landing.name = 'delivery-room';
  landing.scale.setScalar(roomScale);
  world.add(landing);

  const materials = [];
  const material = (color, extra = {}) => {
    const mat = new THREE.MeshStandardMaterial({ color, roughness: .85, transparent: true, ...extra });
    mat.userData.baseOpacity = mat.opacity;
    materials.push(mat);
    return mat;
  };
  const stone = material(0x68736a);
  const wall = material(0xadc1ae);
  const wallColor = wall.color.clone();
  const door = material(0x183d33);
  const trim = material(0x334b40);
  const brass = material(0xffb85b, { metalness: .65, roughness: .3 });
  function box(parent, size, position, mat) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), mat);
    mesh.position.set(...position);
    parent.add(mesh);
    return mesh;
  }

  // Local Y is up along the façade; local Z points away from Earth's surface.
  const floor = createRoundingPanel(10, 6, .24, stone);
  floor.name = 'intro-rounding-floor'; floor.rotation.x = -Math.PI / 2; floor.position.set(0, -1.1, 0);
  const facade = createRoundingPanel(10, 7.5, .35, wall);
  facade.name = 'intro-rounding-wall'; facade.position.set(0, 2.55, -1.65);
  landing.add(floor, facade);
  box(landing, [5.3, .22, 2.8], [0, -.88, .5], trim);
  box(landing, [3.25, 6.3, .3], [0, 2.16, -1.4], trim);
  box(landing, [2.85, 5.9, .16], [0, 2.1, -1.18], door);
  box(landing, [2.3, 2.65, .05], [0, 3.2, -1.06], trim);
  box(landing, [2.3, 1.75, .05], [0, .72, -1.06], trim);
  box(landing, [.1, .42, .14], [1.03, 1.55, -.98], brass);
  box(landing, [3.2, .035, 1.5], [0, -.745, .5], material(0x665d43));
  const flowerBasket = createFlowerBasket(material);
  flowerBasket.position.set(3.1, -.98, -.5);
  landing.add(flowerBasket);
  box(landing, [.48, .7, .3], [-2.35, 2.5, -1.25], material(0xffda8a, { emissive: 0xffa94f, emissiveIntensity: 1.8 }));
  const porchLight = new THREE.PointLight(0xffcd8f, 1.5, 1.8, 1);
  porchLight.position.set(-.2, .3, .25);
  landing.add(porchLight);
  const warmFill = new THREE.AmbientLight(0xffe1b8, .85);
  landing.add(warmFill);

  const parcel = createDeliveryParcel(material);
  landing.add(parcel);

  // Soft contact shadow gives a clear landing without expensive shadow maps at 4K.
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = shadowCanvas.height = 128;
  const shadowCtx = shadowCanvas.getContext('2d');
  const gradient = shadowCtx.createRadialGradient(64, 64, 5, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(0,0,0,.65)'); gradient.addColorStop(1, 'rgba(0,0,0,0)');
  shadowCtx.fillStyle = gradient; shadowCtx.fillRect(0, 0, 128, 128);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 2.5), new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.set(0, -.719, .65); landing.add(shadow);

  const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffbb66, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(.9, .92, 96), ringMaterial);
  ring.rotation.x = -Math.PI / 2; ring.position.set(0, -.705, .65); landing.add(ring);

  // A separate long shot makes the destination legible before the UI enters.
  const endTarget = world.position.clone();
  const endCamera = new THREE.Vector3();
  const endOrbit = new THREE.Spherical();
  const startCamera = new THREE.Vector3();
  const startTarget = new THREE.Vector3();
  const startUp = new THREE.Vector3();
  const worldUp = new THREE.Vector3(0, 1, 0);
  const startOrbit = new THREE.Spherical();
  const pullOrbit = new THREE.Spherical();
  const target = new THREE.Vector3();
  let startedAt = 0, active = false, revealed = false, networkRevealed = false, lastCaption = -1;
  const captions = [
    '01 / STARTING',
    '02 / PREPARING VIEW',
    '03 / OPENING DASHBOARD',
    '04 / READY',
  ];

  function finish() {
    if (!active) return;
    active = false; landing.visible = false;
    landing.position.copy(destinationPoint); landing.scale.setScalar(dotScale);
    facade.position.set(0, 0, -.175); facade.morphTargetInfluences[0] = 1;
    networkLayers.forEach((layer, i) => { layer.visible = networkVisibility[i]; });
    camera.near = .1; camera.updateProjectionMatrix();
    camera.position.copy(endCamera); camera.up.copy(worldUp); camera.lookAt(endTarget);
    if (!networkRevealed) { networkRevealed = true; onNetworkReveal(); }
    if (!revealed) onReveal();
    onComplete();
  }
  function start(now) {
    // A restart during the pullback must not save its temporarily hidden layers.
    if (!active) networkVisibility = networkLayers.map(layer => layer.visible);
    startedAt = now; active = true; revealed = false; networkRevealed = false; lastCaption = -1;
    landing.visible = true;
    camera.near = .003; camera.updateProjectionMatrix();
    // Layer changes may provide a new data-dense overview before Reload.
    destinationPoint.copy(getDeliveryPoint ? getDeliveryPoint() : overviewOffset.clone().setLength(surfaceRadius));
    surfacePoint.copy(destinationPoint).setLength(surfaceRadius);
    // PointsMaterial uses height/2 rather than the mesh projection's focal
    // length. Match that exact dot diameter, not just its geographic position.
    dotScale = dotSize * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / (camera.zoom * 7.5);
    landing.scale.setScalar(roomScale);
    facade.position.set(0, 2.55, -1.65);
    facade.morphTargetInfluences[0] = floor.morphTargetInfluences[0] = 0;
    normal.copy(surfacePoint).normalize();
    north.set(0, 1, 0).addScaledVector(normal, -normal.y).normalize();
    east.copy(north).cross(normal).normalize();
    surfaceOrientation.setFromRotationMatrix(new THREE.Matrix4().makeBasis(east, north, normal));
    landing.position.copy(surfacePoint).addScaledVector(normal, .19);
    landing.quaternion.copy(surfaceOrientation);
    // Keep Earth's north axis upright, including after the intro. Move only the camera.
    world.rotation.set(0, -Math.atan2(normal.x, normal.z), 0);
    world.updateMatrixWorld(true);
    // Resolve after the delivery orientation is set, including on replay/skip.
    endTarget.copy(world.position);
    const worldOverviewOffset = overviewOffset.clone().applyQuaternion(world.quaternion);
    endCamera.copy(endTarget).add(worldOverviewOffset);
    endOrbit.setFromVector3(worldOverviewOffset);
    landing.localToWorld(startCamera.set(3.5, 2.1, 7.3));
    landing.localToWorld(startTarget.set(0, .1, .4));
    startUp.copy(north).applyQuaternion(world.quaternion);
    startOrbit.setFromVector3(startCamera.clone().sub(endTarget));
    update(now);
  }
  function update(now) {
    if (!active) return false;
    const t = Math.max(0, now - startedAt);
    // Large screen-space hub dots distract from the parcel at doorstep scale.
    networkLayers.forEach((layer, i) => { layer.visible = t >= 5.5 && networkVisibility[i]; });
    if (t >= 5.5 && !networkRevealed) { networkRevealed = true; onNetworkReveal(); }
    const fall = ease(t / 1.35);
    const bounce = t > 1.35 ? Math.sin((t - 1.35) * 14) * Math.exp(-(t - 1.35) * 9) * .1 : 0;
    parcel.position.set(0, mix(2.4, -.1, fall) + Math.max(0, bounce), .65);
    parcel.rotation.set(0, mix(-.18, .04, fall), mix(-.12, 0, fall));
    shadow.material.opacity = mix(.18, .9, fall);
    shadow.scale.setScalar(mix(1.4, .85, fall));
    const pulse = THREE.MathUtils.clamp((t - 1.4) / 1.6, 0, 1);
    ring.scale.setScalar(1 + pulse * 3.5);
    ringMaterial.opacity = t >= 1.4 ? (1 - pulse) * .6 : 0;
    const pull = ease((t - 2.8) / 4.6);
    const turn = ease((t - 4.6) / 2.8);
    const longitude = Math.atan2(Math.sin(endOrbit.theta - startOrbit.theta), Math.cos(endOrbit.theta - startOrbit.theta));
    pullOrbit.set(
      startOrbit.radius * Math.pow(endOrbit.radius / startOrbit.radius, pull),
      mix(startOrbit.phi, endOrbit.phi, turn),
      startOrbit.theta + longitude * turn,
    );
    // A single outward orbit: no competing camera lerps or globe tilting.
    target.copy(startTarget).lerp(endTarget, ease((t - 4.4) / 3));
    camera.position.setFromSpherical(pullOrbit).add(endTarget);
    camera.up.copy(startUp).lerp(worldUp, ease((t - 4.4) / 3)).normalize();
    camera.lookAt(target);
    // Keep an ordinary rectangular room throughout the close-up. Only after
    // the camera has pulled away do we collapse its scale toward one real land
    // dot. Never round a large room: gate the morph by apparent screen size too.
    const collapse = ease((t - 4.6) / 1.8);
    landing.scale.setScalar(roomScale * Math.pow(dotScale / roomScale, collapse));
    landing.position.copy(surfacePoint).addScaledVector(normal, .19).lerp(destinationPoint, collapse);
    const apparentSize = 10 * landing.scale.x * camera.projectionMatrix.elements[5]
      / (2 * camera.position.distanceTo(landing.getWorldPosition(target)));
    const rounding = ease((t - 5.45) / .85) * ease((.07 - apparentSize) / .05);
    facade.morphTargetInfluences[0] = rounding;
    facade.position.set(0, mix(2.55, 0, rounding), mix(-1.65, -.175, rounding));
    const details = 1 - rounding;
    materials.forEach(mat => { if (mat !== wall) mat.opacity = mat.userData.baseOpacity * details; });
    shadow.material.opacity *= details; ringMaterial.opacity *= details;
    porchLight.intensity = 1.5 * details;
    warmFill.intensity = .85 * details;
    // At the handoff the circle has the same center, size, color and opacity as
    // the existing dot beneath it. No extra marker or cross-screen jump.
    const handoff = ease((t - 6.4) / .45);
    wall.color.copy(wallColor).multiplyScalar(1 - rounding);
    wall.emissive.copy(dotTint).multiplyScalar(rounding);
    wall.opacity = mix(1, dotOpacity, rounding) * (1 - handoff);
    landing.visible = handoff < 1;
    const caption = t < 1.5 ? 0 : t < 3.2 ? 1 : t < 6.5 ? 2 : 3;
    if (caption !== lastCaption) { lastCaption = caption; onCaption(captions[caption]); }
    if (t >= 6.8 && !revealed) { revealed = true; onReveal(); }
    if (t >= 8.2) finish();
    return active;
  }
  // Scene resources intentionally persist for replay; no allocation in the animation loop.
  return { start, update, finish, get active() { return active; } };
}
