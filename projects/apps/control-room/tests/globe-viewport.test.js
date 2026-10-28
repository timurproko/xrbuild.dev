import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { extendGlobeViewport } from '../src/globe-viewport.js';

test('header overscan preserves workspace framing, scale and lens shift at every size', () => {
  for (const [width, height, top] of [[1920, 965, 115.5], [1280, 620, 100], [3840, 1929, 231], [390, 800, 140]]) {
    for (const zoom of [1, 1.4]) {
      const camera = new THREE.PerspectiveCamera(38, width / height, .1, 100);
      camera.position.set(-.45, .8, 8.2); camera.lookAt(-.45, 0, 0);
      camera.filmOffset = 2; camera.zoom = zoom; camera.updateProjectionMatrix(); camera.updateMatrixWorld();
      const points = [new THREE.Vector3(-.45, 0, 0), new THREE.Vector3(-2, 1, 1), new THREE.Vector3(1, -1, .5)];
      const before = points.map(point => {
        const p = point.clone().project(camera);
        return [(p.x + 1) * width / 2, (1 - p.y) * height / 2];
      });
      const focal = camera.projectionMatrix.elements[5] * height;
      const viewport = extendGlobeViewport(camera, width, height, top);
      assert.equal(viewport.y, -top);
      assert.equal(viewport.height, height + top);
      assert.equal(camera.aspect, width / height);
      assert(Math.abs(camera.projectionMatrix.elements[5] * viewport.height - focal) < 1e-8);
      points.forEach((point, index) => {
        const p = point.clone().project(camera);
        const x = viewport.x + (p.x + 1) * viewport.width / 2;
        const y = viewport.y + (1 - p.y) * viewport.height / 2;
        assert(Math.abs(x - before[index][0]) < 1e-8);
        assert(Math.abs(y - before[index][1]) < 1e-8);
      });
    }
  }
});
