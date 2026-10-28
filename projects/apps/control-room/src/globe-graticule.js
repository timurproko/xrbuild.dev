import { Group, MathUtils, Vector3 } from 'three';
import { createGlobeLine } from './globe-lines.js';

/** Geographic guides sit just above the sphere to avoid surface z-fighting. */
export function createGlobeGraticule(radius, material) {
  const group = new Group();
  group.name = 'globe-graticule';
  const surface = radius * 1.002;
  function point(lat, lon) {
    const phi = MathUtils.degToRad(90 - lat), theta = MathUtils.degToRad(lon);
    return new Vector3(-surface * Math.sin(phi) * Math.cos(theta), surface * Math.cos(phi), surface * Math.sin(phi) * Math.sin(theta));
  }
  for (let lat = -75; lat <= 75; lat += 15) {
    const points = [];
    for (let lon = 0; lon <= 360; lon += 3) points.push(point(lat, lon));
    const line = createGlobeLine(points, material); line.name = `parallel-${lat}`;
    group.add(line);
  }
  for (let lon = 0; lon < 360; lon += 15) {
    const points = [];
    for (let lat = -90; lat <= 90; lat += 3) points.push(point(lat, lon));
    const line = createGlobeLine(points, material); line.name = `meridian-${lon}`;
    group.add(line);
  }
  return group;
}
