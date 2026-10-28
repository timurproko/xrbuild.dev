import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { getNetworkOverviewOffset } from '../src/network-overview.js';

const geo = (lat, lon) => new THREE.Vector3().setFromSphericalCoords(
  2.3256, THREE.MathUtils.degToRad(90 - lat), THREE.MathUtils.degToRad(lon - 90),
);
const comfortableCount = (points, offset) => points.filter(point =>
  point.clone().normalize().dot(offset.clone().normalize()) >= Math.cos(THREE.MathUtils.degToRad(65)),
).length;

test('overview favors the larger city cluster rather than the first city or global average', () => {
  const points = [[0, -110], [20, 40], [30, 45], [25, 55], [15, 50]].map(([lat, lon]) => geo(lat, lon));
  const originals = points.map(point => point.clone());
  const offset = getNetworkOverviewOffset(points);
  assert.equal(comfortableCount(points, offset), 4);
  assert(offset.clone().normalize().dot(geo(23, 48).normalize()) > .99);
  assert(Math.abs(offset.length() - Math.hypot(.8, 8.2)) < 1e-8);
  points.forEach((point, i) => assert(point.equals(originals[i])));
});

test('clusters spanning the date line stay together', () => {
  const points = [[10, 178], [12, -178], [8, 175], [0, 0]].map(([lat, lon]) => geo(lat, lon));
  const offset = getNetworkOverviewOffset(points);
  assert.equal(comfortableCount(points, offset), 3);
  assert(offset.clone().normalize().dot(geo(10, 178).normalize()) > .99);
});

test('current network reveals substantially more cities than the Seattle-facing angle', () => {
  const points = [[47.61, -122.33], [40.71, -74], [-23.55, -46.63], [51.5, -.12],
    [50.11, 8.68], [-33.92, 18.42], [25.2, 55.27], [19.07, 72.88],
    [1.35, 103.82], [35.67, 139.65], [-33.86, 151.2]].map(([lat, lon]) => geo(lat, lon));
  const offset = getNetworkOverviewOffset(points);
  const previous = geo(THREE.MathUtils.radToDeg(Math.atan2(.8, 8.2)), -122.33);
  assert(comfortableCount(points, offset) >= 6);
  assert(comfortableCount(points, offset) > comfortableCount(points, previous));
});

test('empty, invalid, single-city and polar data produce safe overview positions', () => {
  assert(getNetworkOverviewOffset([]).equals(new THREE.Vector3(0, .8, 8.2)));
  assert(getNetworkOverviewOffset([new THREE.Vector3(), new THREE.Vector3(NaN, 0, 1)])
    .equals(new THREE.Vector3(0, .8, 8.2)));
  const city = geo(-32, 150);
  assert(getNetworkOverviewOffset([city]).normalize().dot(city.normalize()) > .999);
  const polar = new THREE.Spherical().setFromVector3(getNetworkOverviewOffset([geo(90, 0)]));
  assert(polar.phi >= .22 && polar.phi <= Math.PI - .22);
});
