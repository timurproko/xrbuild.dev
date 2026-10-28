import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createDeliveryParcel, setParcelOpening } from '../src/delivery-parcel.js';

function setup(t) {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'document');
  let strokes = 0;
  const context = { fillRect() {}, fillText() {}, beginPath() {}, moveTo() {}, lineTo() {}, quadraticCurveTo() {}, stroke() { strokes++; } };
  Object.defineProperty(globalThis, 'document', { configurable: true, value: { createElement: () => ({ getContext: () => context }) } });
  t.after(() => original ? Object.defineProperty(globalThis, 'document', original) : delete globalThis.document);
  return { material: (color, extra = {}) => new THREE.MeshStandardMaterial({ color, ...extra }), strokes: () => strokes };
}

test('shared cinematic parcel retains its materials and label; loader omits the smile', t => {
  const { material, strokes } = setup(t);
  const loader = createDeliveryParcel(material, { opening: true, smile: false });
  assert.equal(strokes(), 0);
  assert.equal(loader.userData.flaps.length, 2);
  assert.deepEqual(loader.userData.flaps.map(flap => flap.direction), [1, -1]);
  assert(loader.children.some(mesh => mesh.material?.color.getHex() === 0xba854f));
  const cinematic = createDeliveryParcel(material);
  assert.equal(strokes(), 2);
  assert.equal(cinematic.userData.flaps, undefined);
  assert(cinematic.children.some(mesh => mesh.material?.map?.isCanvasTexture));
});

test('two opposing lids expose the cavity and loop continuously without crossing', t => {
  const { material } = setup(t);
  const parcel = createDeliveryParcel(material, { opening: true, smile: false });
  const angles = () => parcel.userData.flaps.map(({ hinge, axis }) => Math.abs(hinge.rotation[axis]));
  setParcelOpening(parcel, 0);
  assert(angles().every(angle => angle === 0));
  setParcelOpening(parcel, .14);
  assert(angles()[0] > 0);
  assert.equal(angles()[0], angles()[1]);
  setParcelOpening(parcel, 1.4);
  assert(angles().every(angle => Math.abs(angle - 2.05) < 1e-9));
  parcel.updateMatrixWorld(true);
  const ray = new THREE.Raycaster(new THREE.Vector3(0, 3, 0), new THREE.Vector3(0, -1, 0));
  assert(ray.intersectObject(parcel, true)[0].point.y < -.5, 'open parcel must have a real interior rather than a solid top');
  // Every sampled step moves, including directly after the fully open pose.
  let previous = angles()[0];
  for (const time of [1.45, 1.6, 1.9, 2.2, 2.6, 2.75]) {
    setParcelOpening(parcel, time);
    assert(angles()[0] < previous);
    previous = angles()[0];
  }
  setParcelOpening(parcel, 2.8);
  assert(angles().every(angle => angle === 0));
  setParcelOpening(parcel, 2.85);
  assert(angles().every(angle => angle > 0));
  setParcelOpening(parcel, 0, true);
  assert(angles().every(angle => Math.abs(angle - 2.05) < 1e-9));
});
