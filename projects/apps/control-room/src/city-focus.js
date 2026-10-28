import * as THREE from 'three';

const ease = value => {
  const t = THREE.MathUtils.clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
};

/** One north-up camera orbit, a fixed globe, and a separate horizontal lens shift. */
export function createCityFocus({ camera, world, controls, motionPreference, onTransitionChange,
  getOverviewOffset = () => new THREE.Vector3(0, .8, 8.2),
}) {
  let overview = null;
  let tween = null;
  let phase = 'overview';
  let framing = 0;
  const orbit = new THREE.Spherical();
  const eye = new THREE.Vector3();

  function frame(screenX) {
    framing = screenX;
    // Lens shift positions the city beside the sidebar without moving the orbit pivot.
    camera.filmOffset = -screenX * camera.getFilmWidth() * camera.aspect
      * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / camera.zoom;
    camera.updateProjectionMatrix();
  }

  function stopOrbit() {
    const position = camera.position.clone();
    const target = controls.target.clone();
    const damping = controls.enableDamping;
    controls.autoRotate = false;
    controls.enableDamping = false;
    controls.update(); // Clear drag momentum, but do not apply its remaining travel.
    camera.position.copy(position);
    controls.target.copy(target);
    controls.update();
    controls.enableDamping = damping;
    controls.enabled = false;
  }

  function pose(position, screenX, autoRotate) {
    return {
      position: position.clone(), target: controls.target.clone(),
      orbit: new THREE.Spherical().setFromVector3(position.clone().sub(world.position)),
      screenX, autoRotate,
    };
  }

  function snapshot(autoRotate = false) {
    return pose(camera.position, framing, autoRotate);
  }

  function apply(progress) {
    tween.progress = progress;
    const { from, to, kind } = tween;
    // Turn first on entry; pull back first on return. Neither axis overshoots.
    const turning = ease(kind === 'return' ? (progress - .16) / .84 : progress / .84);
    const dollying = ease(kind === 'focus' || kind === 'home' ? (progress - .16) / .84 : progress / .84);
    const zooming = kind === 'zoom' ? ease(progress) : dollying;
    orbit.set(
      THREE.MathUtils.lerp(from.orbit.radius, to.orbit.radius, zooming),
      THREE.MathUtils.lerp(from.orbit.phi, to.orbit.phi, turning),
      from.orbit.theta + tween.azimuthDelta * turning,
    );
    camera.position.copy(world.position).add(eye.setFromSpherical(orbit));
    controls.target.copy(world.position);
    camera.up.set(0, 1, 0);
    camera.lookAt(controls.target);
    frame(THREE.MathUtils.lerp(from.screenX, to.screenX, ease(progress)));
  }

  function finish() {
    if (!tween) return;
    const completed = tween;
    camera.position.copy(completed.to.position);
    controls.target.copy(completed.to.target);
    camera.up.set(0, 1, 0);
    camera.lookAt(controls.target);
    frame(completed.to.screenX);
    tween = null;
    controls.enabled = true;
    controls.update();
    controls.autoRotate = completed.to.autoRotate && !motionPreference.matches;
    onTransitionChange(false);
    completed.onComplete();
  }

  function begin(to, kind, onComplete = () => {}) {
    const from = snapshot();
    const delta = to.orbit.theta - from.orbit.theta;
    const labelFrom = labelProgress();
    tween = {
      from, to, kind, onComplete, labelFrom, progress: 0, startedAt: performance.now() / 1000,
      duration: kind === 'zoom' ? .65 : 1.35,
      azimuthDelta: Math.atan2(Math.sin(delta), Math.cos(delta)),
    };
    onTransitionChange(true, { lockMap: kind !== 'zoom' });
    if (motionPreference.matches) finish();
  }

  function focus(surfacePoint, screenX) {
    const autoRotate = tween?.to.autoRotate ?? controls.autoRotate;
    stopOrbit();
    if (!overview) overview = snapshot(autoRotate);
    phase = 'focusing';
    // Only the camera moves. Earth's geographic north remains world-up throughout.
    const destination = new THREE.Spherical().setFromVector3(surfacePoint.clone().applyQuaternion(world.quaternion));
    destination.radius = THREE.MathUtils.clamp(4.6, controls.minDistance, controls.maxDistance);
    destination.phi = THREE.MathUtils.clamp(destination.phi, controls.minPolarAngle, controls.maxPolarAngle);
    const position = world.position.clone().add(new THREE.Vector3().setFromSpherical(destination));
    begin(pose(position, screenX, false), 'focus', () => { phase = 'focused'; });
  }

  function restore(onComplete) {
    if (!overview) { onComplete(); return; }
    if (phase === 'returning') return;
    stopOrbit();
    phase = 'returning';
    // A close-up saved before selection is not a useful deselected overview.
    // Preserve its viewing direction, but pull back at least to the home radius
    // and never zoom inward when the user has already zoomed farther out.
    const destination = { ...overview, orbit: overview.orbit.clone(), position: overview.position.clone() };
    destination.orbit.radius = THREE.MathUtils.clamp(Math.max(overview.orbit.radius,
      getOverviewOffset().length(), camera.position.distanceTo(world.position)), controls.minDistance, controls.maxDistance);
    destination.position.copy(world.position).add(new THREE.Vector3().setFromSpherical(destination.orbit));
    destination.screenX = 0;
    begin(destination, 'return', () => {
      overview = null;
      phase = 'overview';
      onComplete();
    });
  }

  function zoom(factor) {
    if (tween && tween.kind !== 'zoom') return;
    const autoRotate = tween?.to.autoRotate ?? controls.autoRotate;
    const radius = THREE.MathUtils.clamp(
      (tween?.to.orbit.radius ?? camera.position.distanceTo(world.position)) * factor,
      controls.minDistance, controls.maxDistance,
    );
    stopOrbit();
    const position = camera.position.clone().sub(world.position).setLength(radius).add(world.position);
    begin(pose(position, framing, autoRotate), 'zoom');
  }

  function home() {
    stopOrbit();
    const position = world.position.clone().add(getOverviewOffset());
    begin(pose(position, 0, !motionPreference.matches), 'home');
  }

  function reset() {
    stopOrbit();
    tween = null;
    overview = null;
    phase = 'overview';
    frame(0);
    onTransitionChange(false);
  }

  function update(now) {
    if (!tween) return;
    const progress = THREE.MathUtils.clamp((now - tween.startedAt) / tween.duration, 0, 1);
    if (progress === 1) finish();
    else apply(progress);
  }

  function labelProgress() {
    if (!overview) return 0;
    if (tween?.kind === 'return') {
      const span = tween.to.orbit.radius - tween.from.orbit.radius;
      const remaining = Math.abs(span) < .01 ? 1 - ease(tween.progress)
        : THREE.MathUtils.clamp((tween.to.orbit.radius - camera.position.distanceTo(world.position)) / span, 0, 1);
      return tween.labelFrom * remaining;
    }
    const span = overview.orbit.radius - THREE.MathUtils.clamp(4.6, controls.minDistance, controls.maxDistance);
    if (Math.abs(span) < .01) return 0;
    return THREE.MathUtils.clamp((overview.orbit.radius - camera.position.distanceTo(world.position)) / span, 0, 1);
  }

  return { focus, restore, zoom, home, reset, update, finish,
    get active() { return tween !== null; },
    get focused() { return overview !== null; },
    get returning() { return phase === 'returning'; },
    // Text emphasis follows the actual dolly in both directions, not a click's
    // selected/unselected class. Extra zoom never makes the labels unbounded.
    get labelProgress() { return labelProgress(); },
  };
}
