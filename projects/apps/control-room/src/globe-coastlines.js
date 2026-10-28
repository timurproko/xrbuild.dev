import * as THREE from 'three';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';

/** Batch all coastline rings into one draw call, just above the globe surface. */
export function createGlobeCoastlines(polygons, geo, radius, material) {
  const positions = [];
  const from = new THREE.Vector3(), to = new THREE.Vector3(), point = new THREE.Vector3();
  for (const polygon of polygons) for (const ring of polygon.coastRings ?? polygon.rings) {
    for (let index = 1; index < ring.length; index++) {
      const a = ring[index - 1], b = ring[index];
      // The dataset's cut at ±180° is not a physical coastline.
      if (Math.abs(a[0]) > 179.99 && Math.abs(b[0]) > 179.99) continue;
      from.copy(geo(a[1], a[0], radius)); to.copy(geo(b[1], b[0], radius));
      const steps = Math.max(1, Math.ceil(from.angleTo(to) / THREE.MathUtils.degToRad(2)));
      for (let step = 0; step < steps; step++) {
        for (const t of [step / steps, (step + 1) / steps]) {
          point.copy(from).lerp(to, t).setLength(radius);
          positions.push(point.x, point.y, point.z);
        }
      }
    }
  }
  const lines = new LineSegments2(new LineSegmentsGeometry().setPositions(positions), material);
  lines.name = 'globe-coastlines';
  return lines;
}
