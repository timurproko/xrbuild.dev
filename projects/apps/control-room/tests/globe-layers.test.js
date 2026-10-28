import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { DEFAULT_GLOBE_LAYER, GLOBE_LAYERS, SHARE_COLORS, MARKETS, shareRows, barHeights, marketDetails } from '../src/globe-layer-data.js';
import { createGlobeLayers } from '../src/globe-layers.js';

const near = (actual, expected) => assert(Math.abs(actual - expected) < 1e-8);

test('reference modes use country-level demo values and complete market-share pies', () => {
  assert.deepEqual(GLOBE_LAYERS.map(layer => layer.id), ['rev', 'share', 'aws', 'ppl', 'flow', 'leo']);
  assert.equal(DEFAULT_GLOBE_LAYER, 'rev');
  assert.equal(GLOBE_LAYERS.find(layer => layer.id === 'rev').color, '#ffb94d');
  assert.equal(GLOBE_LAYERS.find(layer => layer.id === 'share').color, '#c99ba3');
  assert.equal(GLOBE_LAYERS.find(layer => layer.id === 'flow').color, '#55d6df');
  assert.equal(new Set(GLOBE_LAYERS.map(layer => layer.color)).size, GLOBE_LAYERS.length);
  assert.equal(SHARE_COLORS[0], GLOBE_LAYERS.find(layer => layer.id === 'share').color);
  assert.equal(MARKETS.length, 14);
  for (const market of MARKETS) {
    near(shareRows(market).reduce((sum, row) => sum + row.share, 0), 100);
    for (const id of ['rev', 'share', 'aws', 'ppl', 'flow', 'leo']) {
      assert.equal(marketDetails(market, id).length, 3);
      assert(marketDetails(market, id).every(row => row.every(value => typeof value === 'string' && value.length)));
    }
  }
  const us = MARKETS.find(m => m.id === 'US'), germany = MARKETS.find(m => m.id === 'DE');
  assert.equal(marketDetails(us, 'rev')[0][0], '$470.0B');
  assert.equal(marketDetails(germany, 'share')[0][0], '46%');
  assert.deepEqual(marketDetails(germany, 'flow')[0], ['City-level', 'Flow data']);
  assert.deepEqual(marketDetails(germany, 'flow')[1], ['—', 'Country aggregate']);
  for (const id of ['rev', 'aws', 'ppl']) {
    const heights = barHeights(id);
    near(heights.get(us), 1.07);
    assert(heights.get(germany) > .12 && heights.get(germany) < heights.get(us));
  }
  assert.equal(barHeights('share'), null);
});

test('six layers switch actual charts, markers, pick targets and animation without stale objects', t => {
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  const context = { beginPath() {}, moveTo() {}, arc() {}, closePath() {}, fill() {}, stroke() {} };
  Object.defineProperty(globalThis, 'document', { configurable: true, value: { createElement: () => ({ getContext: () => context }) } });
  t.after(() => {
    if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
    else delete globalThis.document;
  });
  const world = new THREE.Group(), routeGroup = new THREE.Group(); world.add(routeGroup);
  const motionPreference = { matches: false };
  const places = [...MARKETS, { kind: 'city', name: 'Seattle' }];
  const nodes = places.map(hub => {
    const node = new THREE.Mesh(new THREE.SphereGeometry(.045), new THREE.MeshBasicMaterial());
    node.userData.hub = { ...hub, ring: new THREE.Mesh(new THREE.RingGeometry(.07, .09), new THREE.MeshBasicMaterial()) };
    world.add(node, node.userData.hub.ring); return node;
  });
  const geo = (lat, lon, radius = 2.3256) => new THREE.Vector3().setFromSphericalCoords(radius, THREE.MathUtils.degToRad(90 - lat), THREE.MathUtils.degToRad(lon - 90));
  const camera = new THREE.PerspectiveCamera(38, 16 / 9, .1, 100);
  camera.position.z = 8.2;
  const layers = createGlobeLayers({ camera, world, geo, radius: 2.28, nodes, routeGroup, motionPreference });
  const pies = layers.group.getObjectByName('market-share-pies');
  const bars = layers.group.getObjectByName('country-value-bars');
  const sites = layers.group.getObjectByName('aws-region-sites');
  const leo = layers.group.getObjectByName('leo-orbits');
  assert.equal(layers.active, DEFAULT_GLOBE_LAYER);
  assert(bars.visible && !pies.visible && !routeGroup.visible);
  assert.equal(bars.children[0].material.color.getHexString(), 'ffb94d');
  assert.equal(bars.children[0].material.emissive.getHexString(), 'ffb94d');
  layers.setLayer('share');
  assert(pies.visible && !bars.visible && !routeGroup.visible);
  assert(layers.pickables.length > 0 && layers.pickables.length < 14);
  for (const pie of pies.children) {
    assert(!pie.material.depthTest && !pie.material.depthWrite && pie.renderOrder === 1);
  }
  // At both overview and close-up distances, full circles fade continuously
  // toward the perspective horizon and never expose the far hemisphere.
  const pie = pies.children[0];
  const normal = pie.position.clone().normalize();
  const tangent = normal.clone().cross(new THREE.Vector3(0, 1, 0)).normalize();
  world.position.set(-.45, .2, -.1); world.rotation.y = .73;
  for (const distance of [8.2, 4.6]) {
    const horizon = Math.acos(pie.position.length() / distance);
    let previous = 1;
    for (let step = 0; step <= 40; step++) {
      const angle = (horizon + .15) * step / 40;
      camera.position.copy(normal).multiplyScalar(Math.cos(angle)).addScaledVector(tangent, Math.sin(angle))
        .applyQuaternion(world.quaternion).multiplyScalar(distance).add(world.position);
      layers.update(.016, 1);
      assert(pie.material.opacity <= previous + 1e-8);
      if (!step) near(pie.material.opacity, 1);
      previous = pie.material.opacity;
    }
    near(pie.material.opacity, 0);
    assert(!pie.visible && !layers.pickables.includes(pie));
    near(layers.markerOpacity(pie.userData.hub), 0);
    camera.position.copy(normal).multiplyScalar(Math.cos(horizon - .15)).addScaledVector(tangent, Math.sin(horizon - .15))
      .applyQuaternion(world.quaternion).multiplyScalar(distance).add(world.position);
    layers.update(.016, 1);
    assert(pie.visible && pie.material.opacity > .05 && pie.material.opacity < .8);
    assert(layers.pickables.includes(pie));
  }
  assert(nodes[0].visible && !nodes[0].material.visible && !nodes.at(-1).visible);
  const childCount = layers.group.children.length;
  for (const id of ['rev', 'aws', 'ppl']) {
    assert(layers.setLayer(id));
    assert(bars.visible && !pies.visible && !leo.visible && !routeGroup.visible);
    assert.equal(sites.visible, id === 'ppl');
    assert.equal(layers.pickables.length, 14 + (id === 'ppl' ? MARKETS.reduce((sum, market) => sum + market.regions, 0) : 0));
    const start = bars.children[0].scale.y;
    layers.update(.016, 1);
    assert(bars.children[0].scale.y > start && bars.children[0].scale.y < bars.children[0].userData.target);
    layers.update(.016, 1, MARKETS[0]);
    assert(!bars.children[0].visible && bars.children[1].visible);
    assert(!layers.pickables.includes(bars.children[0]));
    layers.update(.016, 1, MARKETS[1]);
    assert(bars.children[0].visible && !bars.children[1].visible);
    layers.update(.016, 1);
    assert(bars.children.every(bar => bar.visible));
  }
  layers.setLayer('rev'); motionPreference.matches = true; layers.update(.1, 2);
  motionPreference.matches = false;
  const returningBar = bars.children[0];
  layers.update(.016, 2, MARKETS[0]);
  assert(!returningBar.visible && returningBar.userData.focusVisibility === 0);
  layers.update(.016, 2);
  assert(returningBar.visible && returningBar.scale.y < returningBar.userData.target * .15);
  let returningHeight = returningBar.scale.y;
  for (let i = 0; i < 20; i++) {
    layers.update(.1, 2 + i * .1);
    assert(returningBar.scale.y >= returningHeight);
    returningHeight = returningBar.scale.y;
  }
  near(returningHeight, returningBar.userData.target);
  motionPreference.matches = true;
  layers.update(.016, 4, MARKETS[0]); layers.update(.016, 4);
  near(returningBar.scale.y, returningBar.userData.target);
  motionPreference.matches = false;
  layers.setLayer('flow');
  assert(routeGroup.visible && nodes.at(-1).visible && !nodes[0].visible);
  assert.equal(layers.pickables.length, 0);
  layers.setRoutesVisible(false); assert(!routeGroup.visible);
  layers.setLayer('share'); layers.setLayer('flow'); assert(!routeGroup.visible);
  layers.setRoutesVisible(true); assert(routeGroup.visible);
  layers.setLayer('leo'); assert(leo.visible && !routeGroup.visible && !sites.visible && !bars.visible);
  layers.update(.1, 2);
  const satelliteGroup = leo.children[0].children[1];
  assert(satelliteGroup.rotation.y > 0);
  const rotation = satelliteGroup.rotation.y;
  motionPreference.matches = true; layers.update(.1, 5); near(satelliteGroup.rotation.y, rotation);
  layers.setLayer('rev'); near(bars.children[0].scale.y, 1.07);
  assert(!layers.setLayer('invalid')); assert.equal(layers.active, 'rev');
  assert.equal(layers.group.children.length, childCount);
  camera.filmOffset = 2;
  camera.zoom = 1.3;
  camera.updateProjectionMatrix();
  const pose = () => [camera.position.toArray(), camera.quaternion.toArray(), camera.zoom,
    camera.filmOffset, camera.projectionMatrix.toArray(), world.position.toArray(), world.quaternion.toArray()];
  const before = pose();
  for (const { id } of GLOBE_LAYERS) {
    layers.setLayer(id);
    layers.update(.016, 6, MARKETS[0]);
    assert.deepEqual(pose(), before, `${id} must not change camera zoom or framing`);
  }
  // Keep charts at zero for the whole doorstep shot, then stagger their growth
  // from geographic anchors. Replay resets even after an interrupted reveal.
  motionPreference.matches = false;
  layers.setLayer('rev'); layers.prepareReveal();
  for (let i = 0; i < 200; i++) layers.update(.05, i * .05);
  assert.equal(layers.revealProgress, 0);
  assert(bars.children.every(bar => !bar.visible && bar.scale.y === .0001));
  assert.deepEqual(layers.pickables, []);
  layers.reveal(); layers.update(.1, 11);
  assert(layers.revealProgress > 0 && layers.revealProgress < 1);
  assert(bars.children[0].scale.y > .0001 && bars.children.at(-1).scale.y === .0001);
  let previousHeight = bars.children[0].scale.y;
  for (let i = 0; i < 20; i++) {
    layers.update(.1, 11 + i * .1);
    assert(bars.children[0].scale.y >= previousHeight);
    previousHeight = bars.children[0].scale.y;
  }
  assert.equal(layers.revealProgress, 1);
  near(bars.children[0].scale.y, bars.children[0].userData.target);
  for (const { id } of GLOBE_LAYERS) {
    layers.setLayer(id); layers.prepareReveal(); layers.reveal(); layers.update(.3, 14);
    assert(layers.revealProgress > 0 && layers.revealProgress < 1);
    layers.prepareReveal(); assert.equal(layers.revealProgress, 0);
    motionPreference.matches = true; layers.reveal();
    assert.equal(layers.revealProgress, 1);
    assert(pies.children.every(pie => pie.scale.x === pie.userData.baseSize));
    assert(sites.children.every(stack => stack.scale.x === 1));
    motionPreference.matches = false;
  }
  // Hiding visualizations preserves layer-specific label anchors, including
  // after switching tabs, and must not leave invisible charts pickable.
  layers.setDataVisible(false);
  for (const { id } of GLOBE_LAYERS) {
    layers.setLayer(id); layers.update(.016, 6);
    assert(!layers.group.visible && !routeGroup.visible);
    assert.deepEqual(layers.pickables, []);
    assert(nodes.every(node => !node.material.visible && !node.userData.hub.ring.visible));
    assert.equal(nodes[0].visible, id !== 'flow');
    assert.equal(nodes.at(-1).visible, id === 'flow');
    layers.setDataVisible(true);
    assert(layers.group.visible);
    assert.equal(routeGroup.visible, id === 'flow');
    assert.equal(nodes[0].material.visible, id !== 'share');
    layers.setDataVisible(false);
  }
  layers.setLayer('flow'); layers.setRoutesVisible(false); layers.setDataVisible(true);
  assert(!routeGroup.visible);
  layers.setRoutesVisible(true); assert(routeGroup.visible);
  world.traverse(object => {
    object.geometry?.dispose();
    if (object.material) { object.material.map?.dispose(); object.material.dispose(); }
  });
});
