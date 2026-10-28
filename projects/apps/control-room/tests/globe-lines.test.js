import test from 'node:test';
import assert from 'node:assert/strict';
import { Vector3 } from 'three';
import { createGlobeLine, createGlobeLineMaterial, updateGlobeLineDetail } from '../src/globe-lines.js';

const near = (actual, expected) => assert(Math.abs(actual - expected) < 1e-8);

test('grid and route strokes smoothly thin on zoom and restore on zoom-out at any DPR', () => {
  const materials = [createGlobeLineMaterial(0x4f8a78, .13), createGlobeLineMaterial(0x77d7ba, .25), createGlobeLineMaterial(0xffa629, .52)];
  for (const dpr of [1, 1.5, 2]) {
    updateGlobeLineDetail(materials, 8.3, dpr);
    for (const material of materials) {
      near(material.linewidth * dpr, 1);
      near(material.opacity, material.userData.overviewOpacity);
      assert(!material.worldUnits && !material.alphaToCoverage && !material.depthWrite);
    }
    let previous = 1;
    for (let distance = 8.2; distance >= 3.4; distance -= .1) {
      updateGlobeLineDetail(materials, distance, dpr);
      const width = materials[0].linewidth * dpr;
      assert(width <= previous + 1e-8 && width >= .55 - 1e-8);
      previous = width;
    }
    for (const material of materials) {
      near(material.linewidth * dpr, .55);
      near(material.opacity, material.userData.overviewOpacity * .75);
    }
    updateGlobeLineDetail(materials, 11, dpr);
    near(materials[0].linewidth * dpr, 1);
    near(materials[0].opacity, .13);
  }
  materials.forEach(material => material.dispose());
});

test('screen-space line geometry preserves the original route points', () => {
  const material = createGlobeLineMaterial(0x77d7ba, .25);
  const line = createGlobeLine([new Vector3(1, 2, 3), new Vector3(4, 5, 6), new Vector3(7, 8, 9)], material);
  assert(line.isLine2);
  assert.equal(line.material, material);
  const starts = line.geometry.attributes.instanceStart, ends = line.geometry.attributes.instanceEnd;
  assert.equal(starts.count, 2);
  near(starts.getX(0), 1); near(ends.getZ(1), 9);
  line.geometry.dispose(); material.dispose();
});
