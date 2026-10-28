import test from 'node:test';
import assert from 'node:assert/strict';
import { createDepthField, projectDepthField, gridLightStrength, createDepthBackdrop } from '../src/depth-backdrop.js';

function fixture(t, reduced = false) {
  const windowTarget = Object.assign(new EventTarget(), { innerWidth: 1920, innerHeight: 1080, devicePixelRatio: 2 });
  let gradientPaints = 0;
  const gradient = () => ({ addColorStop() {} });
  const atmosphereContext = {
    setTransform() {}, save() {}, restore() {}, translate() {}, scale() {}, fillRect() {},
    createLinearGradient() { gradientPaints++; return gradient(); }, createRadialGradient: gradient,
  };
  const documentTarget = { documentElement: new EventTarget(), createElement: () => ({ getContext: () => atmosphereContext }) };
  for (const [key, value] of Object.entries({ window: windowTarget, document: documentTarget })) {
    const original = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, value });
    t.after(() => original ? Object.defineProperty(globalThis, key, original) : delete globalThis[key]);
  }
  let draws = 0, lines = [], dots = [], imageDraws = 0;
  const dashes = [];
  const halos = [];
  const context = {
    clearRect() { draws++; lines = []; dots = []; }, setTransform() {}, beginPath() {}, moveTo() {}, closePath() {}, fillRect() {}, fill() {}, stroke() {},
    save() {}, restore() {}, clip() {}, createLinearGradient: gradient,
    setLineDash(value) { dashes.push(value); },
    lineTo(x, y) { lines.push({ x, y }); },
    drawImage(image, x, y, width, height) {
      imageDraws++;
      if (image.width === 512) halos.push({ x, y, width, height });
    },
    arc(x, y, radius) { dots.push({ x, y, radius }); },
  };
  const canvas = { clientWidth: 1920, clientHeight: 1080, getContext: () => context };
  const motionPreference = { matches: reduced };
  const backdrop = createDepthBackdrop({ canvas, motionPreference });
  // Isolate geometry tests from the independent travelling-light animation.
  const update = backdrop.update;
  backdrop.update = (delta, options = {}) => update(delta, { animateLight: false, ...options });
  const move = (clientX, clientY, pointerType = 'mouse', buttons = 0) => {
    windowTarget.dispatchEvent(Object.assign(new Event('pointermove'), { clientX, clientY, pointerType, buttons }));
  };
  const settle = options => { for (let i = 0; i < 100; i++) backdrop.update(.05, options); };
  return { backdrop, canvas, motionPreference, move, settle, halos, dashes,
    get draws() { return draws; }, get lines() { return lines; }, get dots() { return dots; },
    get gradientPaints() { return gradientPaints; }, get imageDraws() { return imageDraws; },
  };
}

test('curved grid has bounded detail, continuous curvature and faded edges at every size', () => {
  for (const [width, height] of [[390, 844], [1920, 1080], [3840, 2160]]) {
    const points = createDepthField(width, height);
    assert(points.length <= 129 * 97);
    assert(points.every(p => Object.values(p).every(Number.isFinite)));
    assert(points.every(p => p.opacity >= 0 && p.opacity <= .38));
    const middleRow = points.filter(point => point.row === 48);
    assert(middleRow[0].depth > middleRow[middleRow.length >> 1].depth);
    // Nearer side columns spread vertically more than the distant center.
    const upperRow = points.filter(point => point.row === 36);
    assert(upperRow[8].y < upperRow[upperRow.length >> 1].y);
    assert.equal(points[0].opacity, 0);
  }
});

test('enclosure rolls continuously toward the viewer below the rear wall', () => {
  const points = createDepthField(1920, 1080);
  const center = points.filter(point => point.column === 64);
  const wall = center.find(point => point.row === 58);
  const roll = center.find(point => point.row === 80);
  const front = center.at(-1);
  assert.equal(wall.bend, 0);
  assert(roll.bend > 0 && front.bend > roll.bend);
  assert(roll.surfaceZ < wall.surfaceZ && front.surfaceZ < roll.surfaceZ);
  assert(front.surfaceY > roll.surfaceY && roll.surfaceY > wall.surfaceY);
  const lip = center.find(point => point.row === 60);
  assert(lip.bend > 0 && lip.bend < roll.bend);
});

test('grid rotation is perspective-correct rather than a flat screen translation', () => {
  const points = createDepthField(1920, 1080);
  const resting = projectDepthField(points, 1920, 1080, 0, 0);
  points.forEach((point, i) => {
    assert(Math.abs(resting[i * 2] - point.x) < .001);
    assert(Math.abs(resting[i * 2 + 1] - point.y) < .001);
  });
  const buffer = new Float32Array(resting.length);
  assert.equal(projectDepthField(points, 1920, 1080, .15, .08, buffer), buffer);
  assert(buffer.every(Number.isFinite));
  const displacements = points.filter(p => p.row === 48).map(p => buffer[p.index * 2] - resting[p.index * 2]);
  assert(Math.max(...displacements) - Math.min(...displacements) > 10);
});

test('globe orbit rotates the grid with easing, seam continuity and a replay reset', t => {
  const f = fixture(t);
  f.backdrop.resize(); f.backdrop.reveal();
  f.backdrop.setViewOrigin({ yaw: 0, pitch: 0 }); f.settle();
  const resting = [...f.lines];
  const orbit = { view: { yaw: .7, pitch: .2 } };
  f.backdrop.update(.05, orbit);
  assert.notDeepEqual(f.lines, resting);
  const firstStep = Math.abs(f.lines[0].x - resting[0].x);
  f.settle(orbit);
  assert(Math.abs(f.lines[0].x - resting[0].x) > firstStep);
  assert.equal(f.gradientPaints, 1);
  f.backdrop.setViewOrigin({ yaw: Math.PI - .01, pitch: 0 });
  f.settle({ view: { yaw: -Math.PI + .01, pitch: 0 } });
  assert(Math.abs(f.lines[0].x - resting[0].x) < 10);
  f.motionPreference.matches = true; f.backdrop.update(.05, orbit);
  assert.deepEqual(f.lines, resting);
  f.motionPreference.matches = false;
  f.backdrop.hide(); f.backdrop.reveal();
  f.settle({ view: { yaw: 2, pitch: .3 } });
  assert.deepEqual(f.lines, resting);
  f.backdrop.dispose();
});

test('halo tracks the supplied projected globe position and radius without easing behind it', t => {
  const f = fixture(t, true);
  f.backdrop.resize(); f.backdrop.reveal();
  f.backdrop.update(.05, { globe: { x: 960, y: 600, radius: 400 } });
  let halo = f.halos.at(-1);
  assert(Math.abs(halo.width - 880) < 1e-8);
  assert.equal(halo.width, halo.height);
  assert(Math.abs(halo.x + halo.width / 2 - 960) < 1e-8);
  f.backdrop.update(.05, { globe: { x: 800, y: 600, radius: 800 } });
  halo = f.halos.at(-1);
  assert(Math.abs(halo.width - 1760) < 1e-8);
  assert(Math.abs(halo.x + halo.width / 2 - 800) < 1e-8);
  assert(Math.abs(halo.y + halo.height / 2 - 600) < 1e-8);
  assert.equal(f.gradientPaints, 1); // Zoom scales the cached texture, not the full-screen lighting.
  f.backdrop.dispose();
});

test('light band travels across the grid surface, stays gentle, and loops outside the visible edges', () => {
  const points = createDepthField(1920, 1080);
  const left = points.find(p => p.row === 48 && p.column === 32);
  const right = points.find(p => p.row === 48 && p.column === 96);
  const leftTime = (.25 + .06 + .25) * 18 / 1.65;
  const rightTime = (.75 + .06 + .25) * 18 / 1.65;
  assert(gridLightStrength(left, leftTime) > .99);
  assert(gridLightStrength(right, leftTime) < .01);
  assert(gridLightStrength(right, rightTime) > .99);
  assert(gridLightStrength(left, rightTime) < .01);
  assert(Math.abs(gridLightStrength(left, leftTime + 18) - gridLightStrength(left, leftTime)) < 1e-8);
});

test('travelling light animates while idle but pauses for menus and reduced motion', t => {
  const f = fixture(t);
  f.backdrop.resize(); f.backdrop.reveal(); f.settle({ animateLight: true });
  let draws = f.draws;
  f.backdrop.update(.05, { animateLight: true }); assert(f.draws > draws);
  draws = f.draws;
  f.settle({ animateLight: true, interactive: false }); assert.equal(f.draws, draws);
  f.motionPreference.matches = true;
  f.backdrop.update(.05, { animateLight: true }); draws = f.draws;
  f.settle({ animateLight: true }); assert.equal(f.draws, draws);
  f.backdrop.dispose();
});

test('reveal stays hidden during intro, caches gradients, settles with the sweep paused and replays', t => {
  const f = fixture(t);
  f.backdrop.resize(); f.backdrop.hide();
  const hiddenDraws = f.draws;
  f.backdrop.update(.05);
  assert.equal(f.draws, hiddenDraws);
  f.backdrop.reveal(); f.backdrop.update(.05);
  assert.equal(f.lines.length, 0);
  f.settle(); assert(f.lines.length > 0 && f.imageDraws > 0);
  assert.equal(f.gradientPaints, 1);
  const settledDraws = f.draws;
  f.backdrop.update(.05); assert.equal(f.draws, settledDraws);
  assert.equal(f.canvas.width, 2880);
  f.backdrop.hide(); assert.equal(f.lines.length, 0);
  f.backdrop.reveal(); f.backdrop.update(.05); assert.equal(f.lines.length, 0);
  f.backdrop.dispose();
});

test('mouse parallax is small and eased; touch, dragging and reduced motion stay still', t => {
  const f = fixture(t);
  f.backdrop.resize(); f.backdrop.reveal(); f.settle();
  const resting = [...f.lines];
  f.move(1920, 1080, 'touch'); f.backdrop.update(.05);
  assert.deepEqual(f.lines, resting);
  f.move(1920, 1080, 'mouse', 1); f.backdrop.update(.05);
  assert.deepEqual(f.lines, resting);
  f.move(1920, 1080); f.backdrop.update(.05);
  const firstStep = resting[0].x - f.lines[0].x;
  assert(firstStep > 0 && firstStep < 3);
  f.settle();
  f.lines.forEach((point, index) => {
    assert(Math.abs(point.x - resting[index].x) <= 18);
    assert(Math.abs(point.y - resting[index].y) <= 12);
  });
  assert.equal(f.gradientPaints, 1);
  f.motionPreference.matches = true; f.backdrop.update(.05);
  assert.deepEqual(f.lines, resting);
  const draws = f.draws;
  f.move(0, 0); f.settle(); assert.equal(f.draws, draws);
  f.backdrop.dispose();
});

test('constellation grid uses fine dotted strokes and sparse subpixel intersections', t => {
  const f = fixture(t, true);
  f.backdrop.resize(); f.backdrop.reveal(); f.backdrop.update(.05);
  assert(f.dashes.some(dash => dash.length === 2 && dash[0] === .2 && dash[1] === 6));
  assert.deepEqual(f.dashes.at(-1), []);
  assert(f.dots.length > 0 && f.dots.length < 100);
  assert(f.dots.every(dot => dot.radius <= .65));
  f.backdrop.dispose();
});

test('reduced-motion startup immediately shows the gradient and static curved grid', t => {
  const f = fixture(t, true);
  f.backdrop.resize(); f.backdrop.reveal(); f.backdrop.update(.05);
  assert(f.lines.length > 0 && f.imageDraws === 1);
  const draws = f.draws;
  f.settle(); assert.equal(f.draws, draws);
  f.canvas.clientWidth = 3840; f.canvas.clientHeight = 2160;
  f.backdrop.resize(); f.backdrop.update(.05);
  assert.equal(f.canvas.width * f.canvas.height, 3840 * 2160);
  assert.equal(f.gradientPaints, 2);
  f.backdrop.dispose();
});
