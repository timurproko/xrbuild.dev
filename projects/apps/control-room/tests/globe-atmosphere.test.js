import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createGlobeAtmosphere } from '../src/globe-atmosphere.js';
import { createGlobeSurfaceMaterial } from '../src/globe-surface.js';

test('atmosphere is a feathered, revealable shell that never writes depth', () => {
  const shell = createGlobeAtmosphere(2.28 * 1.026);
  assert.equal(shell.material.side, THREE.BackSide);
  assert.equal(shell.material.depthWrite, false);
  assert.equal(shell.material.transparent, true);
  assert.equal(shell.material.uniforms.reveal.value, 1);
  assert(shell.material.uniforms.strength.value > 0 && shell.material.uniforms.strength.value < 1);
  assert(shell.material.uniforms.atmosphereColor.value.b > shell.material.uniforms.atmosphereColor.value.r);
  assert(Math.abs(shell.material.uniforms.keyDirection.value.length() - 1) < 1e-8);
  shell.geometry.dispose(); shell.material.dispose();
});

test('translucent-looking continent fill retains an opaque globe and a texture-free fallback', () => {
  const material = createGlobeSurfaceMaterial();
  assert.equal(material.transparent, false);
  assert.equal(material.depthWrite, true);
  assert(material.uniforms.landOpacity.value > 0 && material.uniforms.landOpacity.value < .5);
  assert.equal(material.uniforms.detailStrength.value, 0);
  assert.equal(material.uniforms.landMask.value.isDataTexture, true);
  assert.equal(material.uniforms.earthMap.value.isDataTexture, true);
  material.uniforms.landMask.value.dispose(); material.dispose();
});
