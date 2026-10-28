import test from 'node:test';
import assert from 'node:assert/strict';
import { Vector3 } from 'three';
import { createGlobeGraticule } from '../src/globe-graticule.js';
import { createGlobeLineMaterial } from '../src/globe-lines.js';

test('meridians and parallels share one toggleable group just above the globe', () => {
  const material = createGlobeLineMaterial('#4f8a78', .18);
  const group = createGlobeGraticule(2.28, material);
  assert.equal(group.name, 'globe-graticule');
  assert.equal(group.children.filter(line => line.name.startsWith('meridian-')).length, 24);
  assert.equal(group.children.filter(line => line.name.startsWith('parallel-')).length, 11);
  const point = new Vector3();
  for (const line of group.children) {
    assert.equal(line.material, material);
    const positions = line.geometry.getAttribute('instanceStart');
    for (let i = 0; i < positions.count; i++) {
      point.fromBufferAttribute(positions, i);
      assert(Math.abs(point.length() - 2.28 * 1.002) < 1e-6);
    }
    line.geometry.dispose();
  }
  material.dispose();
});
