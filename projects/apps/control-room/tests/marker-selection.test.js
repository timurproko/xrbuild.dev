import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { updateMarkerRing } from '../src/marker-selection.js';

function marker() {
  const node = new THREE.Mesh(new THREE.SphereGeometry(.045), new THREE.MeshBasicMaterial({ color: '#ffb94d' }));
  const ring = new THREE.Mesh(new THREE.RingGeometry(.07, .09), new THREE.MeshBasicMaterial({ transparent: true }));
  ring.userData.pulseOffset = .7;
  node.userData.hub = { ring };
  return { node, ring };
}

test('selection recolors the original ring without creating or enlarging a halo', () => {
  const { node, ring } = marker();
  const geometry = ring.geometry;
  updateMarkerRing(node, { selected: true, time: 2, index: 1 });
  assert.equal(ring.material.color.getHexString(), 'ffffff');
  assert.equal(ring.material.opacity, 1);
  assert.deepEqual(ring.scale.toArray(), [1, 1, 1]);
  assert.equal(ring.geometry, geometry);
  assert.equal(node.children.length, 0);
  assert.equal(node.material.color.getHexString(), 'ffb94d');
});

test('deselection restores the current layer color and existing pulse', () => {
  const { node, ring } = marker();
  updateMarkerRing(node, { selected: true, time: 0, index: 0 });
  node.material.color.set('#62b6ff');
  updateMarkerRing(node, { selected: false, time: 0, index: 0 });
  assert.equal(ring.material.color.getHexString(), '62b6ff');
  assert.equal(ring.material.opacity, .43);
  assert.equal(ring.scale.x, 1 + Math.sin(.7) * .22);
});
