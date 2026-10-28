import { MathUtils } from 'three';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

export function createGlobeLineMaterial(color, opacity) {
  // Native WebGL lines ignore fractional linewidth. Screen-space geometry allows
  // genuinely finer, antialiased strokes in the close-up without scaling with Earth.
  const material = new LineMaterial({
    color, opacity, linewidth: 1, worldUnits: false,
    // Renderer MSAA smooths edges; alpha-to-coverage would stipple faint routes.
    transparent: true, depthWrite: false, alphaToCoverage: false,
  });
  material.userData.overviewOpacity = opacity;
  return material;
}

export function createGlobeLine(points, material) {
  const geometry = new LineGeometry().setPositions(points.flatMap(point => point.toArray()));
  return new Line2(geometry, material);
}

export function updateGlobeLineDetail(materials, distance, pixelRatio) {
  const closeUp = 1 - MathUtils.smoothstep(distance, 4.6, Math.hypot(.8, 8.2));
  for (const material of materials) {
    // Keep overview at the original one-device-pixel width, including HiDPI.
    material.linewidth = MathUtils.lerp(1, .55, closeUp) / pixelRatio;
    material.opacity = material.userData.overviewOpacity * MathUtils.lerp(1, .75, closeUp) * (material.userData.revealProgress ?? 1);
  }
}
