import * as THREE from 'three';

const overviewRadius = Math.hypot(.8, 8.2);

/** Find a north-up overview centered on the densest visible city data. */
export function getNetworkOverviewOffset(points) {
  const directions = points.filter(point =>
    Number.isFinite(point.x) && Number.isFinite(point.y) && Number.isFinite(point.z)
    && point.lengthSq() > 0,
  ).map(point => point.clone().normalize());
  if (!directions.length) return new THREE.Vector3(0, .8, 8.2);

  // A spherical search avoids longitude-seam errors and averages over empty oceans.
  // Avoid polar flyovers that pack distant cities around an empty Arctic center.
  const rim = Math.cos(THREE.MathUtils.degToRad(65));
  const candidate = new THREE.Vector3();
  const best = new THREE.Vector3();
  let bestScore = -1;
  for (let latitude = -54; latitude <= 54; latitude += 2) {
    for (let longitude = -180; longitude < 180; longitude += 2) {
      candidate.setFromSphericalCoords(1,
        THREE.MathUtils.degToRad(90 - latitude), THREE.MathUtils.degToRad(longitude));
      let score = 0;
      for (const direction of directions) {
        const alignment = candidate.dot(direction);
        score += Math.max(0, (alignment - rim) / (1 - rim));
      }
      // Favor readable central cities over extra distant dots around an empty center.
      if (score > bestScore) {
        bestScore = score;
        best.copy(candidate);
      }
    }
  }
  return best.multiplyScalar(overviewRadius);
}
