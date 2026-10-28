import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { decodeLand, isLandAt } from '../src/land-geography.js';
import { createGlobeCoastlines } from '../src/globe-coastlines.js';
import { createGlobeLineMaterial } from '../src/globe-lines.js';

const polygons = decodeLand(JSON.parse(readFileSync(new URL('../src/data/land-110m.json', import.meta.url), 'utf8')));

test('dot fill and outlines share real land polygons, including islands and ocean gaps', () => {
  assert.equal(polygons.length, 125);
  for (const [lat, lon] of [[40, -100], [-10, -55], [25, 20], [50, 15], [40, 100], [-25, 135], [65, -45], [-20, 47], [67, 179], [-89, 0]]) {
    assert(isLandAt(polygons, lat, lon), `expected land at ${lat}, ${lon}`);
  }
  for (const [lat, lon] of [[0, -130], [0, 0], [20, -40], [-35, 80], [0, 170], [68, 0], [71, 0], [66, -30]]) {
    assert(!isLandAt(polygons, lat, lon), `expected ocean at ${lat}, ${lon}`);
  }
  assert(polygons.every(p => p.rings.every(r => r.length >= 4 && r.flat().every(Number.isFinite))));
});

test('all coastline segments fit one render object and stay above the opaque globe', () => {
  const radius = 2.28 * 1.004;
  const geo = (lat, lon, r) => new THREE.Vector3().setFromSphericalCoords(r, THREE.MathUtils.degToRad(90 - lat), THREE.MathUtils.degToRad(lon));
  const material = createGlobeLineMaterial(0x87adc4, .42);
  const coastlines = createGlobeCoastlines(polygons, geo, radius, material);
  assert.equal(coastlines.name, 'globe-coastlines');
  assert.equal(coastlines.children.length, 0);
  const starts = coastlines.geometry.getAttribute('instanceStart');
  const ends = coastlines.geometry.getAttribute('instanceEnd');
  assert(starts.count > 4000 && starts.count < 15000);
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  for (let i = 0; i < starts.count; i++) {
    a.fromBufferAttribute(starts, i); b.fromBufferAttribute(ends, i);
    assert(Math.abs(a.length() - radius) < 1e-6 && Math.abs(b.length() - radius) < 1e-6);
    assert(a.lerp(b, .5).length() > 2.28, 'coastline chords must not sink into the surface');
  }
  coastlines.geometry.dispose(); material.dispose();
});
