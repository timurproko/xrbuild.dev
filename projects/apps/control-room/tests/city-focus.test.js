import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createCityFocus } from '../src/city-focus.js';

const near = (actual, expected, tolerance = 1e-8) => assert(Math.abs(actual - expected) < tolerance, `${actual} != ${expected}`);
const geo = (lat, lon) => new THREE.Vector3().setFromSphericalCoords(2.3256, THREE.MathUtils.degToRad(90 - lat), THREE.MathUtils.degToRad(lon - 90));
function fixture(options = {}) {
  const world = new THREE.Group();
  world.position.x = -.45;
  world.rotation.y = -Math.atan2(geo(47.61, -122.33).x, geo(47.61, -122.33).z);
  const camera = new THREE.PerspectiveCamera(38, 16 / 9, .1, 100);
  camera.position.copy(world.position).add(new THREE.Vector3(0, .8, 8.2));
  const controls = new OrbitControls(camera);
  controls.target.copy(world.position);
  controls.minDistance = 3.4; controls.maxDistance = 11;
  controls.minPolarAngle = .22; controls.maxPolarAngle = Math.PI - .22;
  controls.enableDamping = true; controls.dampingFactor = .12;
  controls.update();
  const motionPreference = { matches: false };
  const focus = createCityFocus({ camera, world, controls, motionPreference, onTransitionChange() {}, ...options });
  return { camera, world, controls, motionPreference, focus };
}
function samples(f, startedAt, verify) {
  for (let i = 0; i <= 100; i++) {
    f.focus.update(startedAt + i * 1.35 / 100);
    verify();
  }
  f.focus.finish();
}
function projected(f, point) {
  f.camera.updateMatrixWorld(true);
  return point.clone().applyQuaternion(f.world.quaternion).add(f.world.position).project(f.camera);
}

test('every city uses a fixed, north-up globe, stationary pivot and monotonic dolly', () => {
  for (const [lat, lon] of [[47.61, -122.33], [40.71, -74], [-23.55, -46.63], [51.5, -.12], [-33.92, 18.42], [1.35, 103.82], [35.68, 139.69], [-33.87, 151.21]]) {
    const f = fixture(), orientation = f.world.quaternion.clone();
    let radius = f.camera.position.distanceTo(f.world.position);
    const startedAt = performance.now() / 1000;
    f.focus.focus(geo(lat, lon), -.23);
    samples(f, startedAt, () => {
      const next = f.camera.position.distanceTo(f.world.position);
      assert(next <= radius + 1e-8 && next >= 4.6 - 1e-8);
      radius = next;
      near(f.controls.target.distanceTo(f.world.position), 0);
      near(f.world.quaternion.angleTo(orientation), 0);
      near(new THREE.Vector3(1, 0, 0).applyQuaternion(f.camera.quaternion).y, 0);
    });
    near(radius, 4.6, .001);
    near(projected(f, geo(lat, lon)).x, -.23);
    near(projected(f, geo(lat, lon)).y, 0);
  }
});

test('label emphasis follows the smooth dolly rather than snapping on selection or return', () => {
  const f = fixture();
  near(f.focus.labelProgress, 0);
  let startedAt = performance.now() / 1000;
  f.focus.focus(geo(51.5, -.12), -.23);
  near(f.focus.labelProgress, 0);
  let previous = 0;
  samples(f, startedAt, () => {
    assert(f.focus.labelProgress >= previous - 1e-8);
    assert(f.focus.labelProgress <= 1);
    previous = f.focus.labelProgress;
  });
  near(f.focus.labelProgress, 1);
  startedAt = performance.now() / 1000;
  f.focus.restore(() => {});
  near(f.focus.labelProgress, 1);
  previous = 1;
  samples(f, startedAt, () => {
    assert(f.focus.labelProgress <= previous + 1e-8);
    assert(f.focus.labelProgress >= 0);
    previous = f.focus.labelProgress;
  });
  near(f.focus.labelProgress, 0);
});

test('longitude seam takes the two-degree turn, not a 358-degree spin', () => {
  const f = fixture();
  f.camera.position.setFromSphericalCoords(8.2, 1.1, THREE.MathUtils.degToRad(179)).add(f.world.position);
  f.controls.update();
  const point = new THREE.Vector3().setFromSphericalCoords(2.3256, 1.1, THREE.MathUtils.degToRad(-179)).applyQuaternion(f.world.quaternion.clone().invert());
  let previous = THREE.MathUtils.degToRad(179), travel = 0;
  const startedAt = performance.now() / 1000;
  f.focus.focus(point, 0);
  samples(f, startedAt, () => {
    const current = new THREE.Spherical().setFromVector3(f.camera.position.clone().sub(f.world.position)).theta;
    const step = Math.atan2(Math.sin(current - previous), Math.cos(current - previous));
    assert(step >= -1e-8);
    travel += step; previous = current;
  });
  near(travel, THREE.MathUtils.degToRad(2), .0001);
});

test('remaining native drag momentum is discarded without a start or finish jump', () => {
  const f = fixture();
  f.controls._rotateLeft(.4);
  f.controls._rotateUp(.15);
  f.controls.update();
  const visiblePosition = f.camera.position.clone();
  f.focus.focus(geo(1.35, 103.82), -.2);
  near(f.camera.position.distanceTo(visiblePosition), 0);
  f.focus.finish();
  const focusedPosition = f.camera.position.clone();
  f.controls.update();
  near(f.camera.position.distanceTo(focusedPosition), 0);
  f.focus.restore(() => {}); f.focus.finish();
  near(f.camera.position.distanceTo(visiblePosition), 0);
});

test('zoom stays on the same radial line, preserves framing and accumulates rapid clicks', () => {
  const f = fixture(), point = geo(-23.55, -46.63);
  f.focus.focus(point, -.3); f.focus.finish();
  const direction = f.camera.position.clone().sub(f.world.position).normalize();
  f.focus.zoom(1.16); f.focus.zoom(1.16);
  f.focus.update(performance.now() / 1000 + .17);
  near(f.camera.position.clone().sub(f.world.position).normalize().distanceTo(direction), 0);
  near(projected(f, point).x, -.3);
  f.focus.finish();
  near(f.camera.position.distanceTo(f.world.position), 4.6 * 1.16 ** 2);
  f.focus.zoom(100); f.focus.finish(); near(f.camera.position.distanceTo(f.world.position), 11);
  f.focus.zoom(.001); f.focus.finish(); near(f.camera.position.distanceTo(f.world.position), 3.4);
});

test('city zoom-in visibly interpolates and reset returns to city framing, not overview', () => {
  const f = fixture(), point = geo(47.61, -122.33);
  f.focus.focus(point, -.2); f.focus.finish();
  const startedAt = performance.now() / 1000;
  f.focus.zoom(.86);
  near(f.camera.position.distanceTo(f.world.position), 4.6);
  f.focus.update(startedAt + .325);
  const halfway = f.camera.position.distanceTo(f.world.position);
  assert(f.focus.active && halfway < 4.6 && halfway > 4.6 * .86);
  f.focus.finish(); near(f.camera.position.distanceTo(f.world.position), 4.6 * .86);
  f.focus.focus(point, -.2); f.focus.finish();
  near(f.camera.position.distanceTo(f.world.position), 4.6);
  assert(f.focus.focused);
  near(projected(f, point).x, -.2);
});

test('retarget, refocus and interrupted return preserve the original overview', () => {
  const f = fixture(), original = f.camera.position.clone();
  f.controls.autoRotate = true;
  f.focus.focus(geo(47.61, -122.33), -.2); f.focus.finish();
  f.focus.focus(geo(1.35, 103.82), -.3); f.focus.finish();
  let stale = 0, returned = 0;
  f.focus.restore(() => stale++);
  f.focus.update(performance.now() / 1000 + .4);
  f.focus.focus(geo(51.5, -.12), -.15); f.focus.finish();
  f.focus.restore(() => returned++); f.focus.finish();
  assert.equal(stale, 0); assert.equal(returned, 1);
  near(f.camera.position.distanceTo(original), 0);
  near(f.camera.filmOffset, 0);
  assert(f.controls.autoRotate && !f.focus.focused);
});

test('deselecting after a manually zoomed-in overview pulls back and smoothly shrinks labels', () => {
  for (const radius of [3.4, 5.5, 7]) {
    const f = fixture();
    f.camera.position.sub(f.world.position).setLength(radius).add(f.world.position); f.controls.update();
    f.focus.focus(geo(51.5, -.12), -.23); f.focus.finish();
    const label = f.focus.labelProgress;
    let distance = f.camera.position.distanceTo(f.world.position), previousLabel = label;
    const start = performance.now() / 1000;
    f.focus.restore(() => {});
    near(f.focus.labelProgress, label);
    samples(f, start, () => {
      const next = f.camera.position.distanceTo(f.world.position);
      assert(next >= distance - 1e-8);
      assert(f.focus.labelProgress <= previousLabel + 1e-8);
      distance = next; previousLabel = f.focus.labelProgress;
    });
    near(distance, Math.hypot(.8, 8.2));
    near(f.focus.labelProgress, 0); near(f.camera.filmOffset, 0);
    assert(!f.focus.focused);
  }
});

test('deselecting never pulls an already zoomed-out camera inward', () => {
  const f = fixture();
  f.focus.focus(geo(51.5, -.12), -.23); f.focus.finish();
  f.focus.zoom(10); f.focus.finish();
  near(f.camera.position.distanceTo(f.world.position), 11);
  f.focus.restore(() => {}); f.focus.finish();
  near(f.camera.position.distanceTo(f.world.position), 11);
  near(f.camera.filmOffset, 0);
});

test('home uses the data-driven overview without rotating the globe', () => {
  const offset = new THREE.Vector3(5, 4, -5).setLength(Math.hypot(.8, 8.2));
  const f = fixture({ getOverviewOffset: () => offset.clone() });
  const orientation = f.world.quaternion.clone();
  f.focus.zoom(.86); f.focus.finish();
  f.focus.home(); f.focus.finish();
  near(f.camera.position.distanceTo(f.world.position.clone().add(offset)), 0);
  near(f.world.quaternion.angleTo(orientation), 0);
  near(f.controls.target.distanceTo(f.world.position), 0);
});

test('reduced motion, home and reload reset settle cleanly without stale callbacks', () => {
  const f = fixture();
  f.motionPreference.matches = true;
  f.focus.focus(geo(35.68, 139.69), -.2);
  assert(!f.focus.active && f.focus.focused);
  f.focus.restore(() => {}); assert(!f.focus.active && !f.focus.focused);
  f.focus.zoom(1.16); assert(!f.focus.active);
  f.focus.home();
  near(f.camera.position.clone().sub(f.world.position).distanceTo(new THREE.Vector3(0, .8, 8.2)), 0);
  f.motionPreference.matches = false;
  f.focus.focus(geo(47.61, -122.33), -.2); f.focus.finish();
  let stale = 0;
  f.focus.restore(() => stale++); f.focus.reset(); f.focus.update(performance.now() / 1000 + 10);
  assert.equal(stale, 0); assert(!f.focus.active && !f.focus.focused);
  near(f.camera.filmOffset, 0);
});
