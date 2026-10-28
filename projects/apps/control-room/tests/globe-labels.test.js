import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createGlobeLabels } from '../src/globe-labels.js';

function element() {
  const classes = new Set(), attributes = {}, listeners = {};
  return {
    children: [], feedback: [], offsetWidth: 140, offsetHeight: 28, clientWidth: 1000, clientHeight: 800,
    getAnimations() { return []; },
    animate(frames, options) { this.feedback.push({ frames, options }); return {}; },
    classList: {
      toggle(name, on) { if (on) classes.add(name); else classes.delete(name); },
      contains: name => classes.has(name),
    },
    style: { setProperty(name, value) { this[name] = value; } },
    setAttribute(name, value) { attributes[name] = value; },
    getAttribute: name => attributes[name],
    append(...children) { this.children.push(...children); },
    addEventListener(name, callback) { listeners[name] = callback; },
    click() { listeners.click({ stopPropagation() {} }); },
  };
}

test('visible labels activate their region, selected labels toggle, and transitions lock them', t => {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  Object.defineProperty(globalThis, 'document', {
    configurable: true, value: { createElement: element },
  });
  t.after(() => {
    if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
    else delete globalThis.document;
  });
  const container = element(), world = new THREE.Group();
  const camera = new THREE.PerspectiveCamera(38, 1.25, .1, 100);
  camera.position.z = 8.2;
  const node = new THREE.Object3D();
  node.position.z = 2.3;
  node.userData.hub = { name: 'Frankfurt Central', status: 'watch' };
  world.add(node); world.updateMatrixWorld(true);
  const activated = [];
  const labels = createGlobeLabels({ container, camera, world, nodes: [node],
    colors: { watch: '#ffa629' }, obstacles: [], onSelect: hub => activated.push(hub),
  });
  const button = container.children[0];
  labels.update({ enabled: true, selected: null });
  button.click(); assert.deepEqual(activated, [node.userData.hub]);
  assert.equal(button.feedback.length, 1);
  assert.equal(button.feedback[0].options.duration, 650);
  assert(!button.disabled); assert.equal(button.tabIndex, 0);
  assert.equal(button.getAttribute('aria-label'), 'Explore Frankfurt Central');

  labels.update({ enabled: true, selected: node.userData.hub, hovered: node });
  assert(!button.disabled); assert.equal(button.tabIndex, 0);
  assert.equal(button.getAttribute('aria-label'), 'Close Frankfurt Central and zoom out');
  assert.equal(button.getAttribute('aria-hidden'), 'false');
  assert(button.classList.contains('is-hovered'));
  assert.equal(button.children.length, 1);
  assert.equal(button.children[0].textContent, 'Frankfurt Central');
  assert.equal(button.style['--label-focus'], '0'); // Clicking alone never enlarges text.
  camera.position.z = 4.6;
  labels.update({ enabled: true, selected: node.userData.hub, focusAmount: 1 });
  assert.equal(button.style['--label-focus'], '1');
  button.click(); assert.deepEqual(activated, [node.userData.hub, node.userData.hub]);
  assert.equal(button.feedback.length, 2);
  labels.update({ enabled: true, selected: node.userData.hub, focusAmount: .5, interactive: false });
  assert.equal(button.style['--label-focus'], '0.5');
  assert(button.classList.contains('is-selected')); // Retain styling while dollying out.

  node.visible = false;
  labels.update({ enabled: true, selected: null });
  assert(button.disabled && !button.classList.contains('is-visible'));
  assert(!button.classList.contains('is-selected'));
  node.visible = true;

  labels.update({ enabled: true, selected: node.userData.hub, interactive: false });
  button.click(); assert.equal(activated.length, 2); assert(button.disabled);
  labels.update({ enabled: false, selected: node.userData.hub });
  assert(container.hidden); button.click(); assert.equal(activated.length, 2);

  node.position.z = -2.3; world.updateMatrixWorld(true);
  labels.update({ enabled: true, selected: node.userData.hub });
  assert(button.disabled); assert.equal(button.tabIndex, -1);
  assert.equal(button.getAttribute('aria-hidden'), 'true');
  assert(!button.classList.contains('is-visible'));
});
