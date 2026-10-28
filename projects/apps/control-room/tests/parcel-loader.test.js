import test from 'node:test';
import assert from 'node:assert/strict';
import { createParcelLoader } from '../src/parcel-loader.js';

function setup(t) {
  const saved = new Map(['document', 'window', 'Worker', 'ResizeObserver'].map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  const workers = [], canvases = [], classes = new Set();
  const container = {
    clientWidth: 288, clientHeight: 240,
    classList: { add: value => classes.add(value), remove: value => classes.delete(value) },
    append: canvas => canvases.push(canvas),
  };
  const globals = {
    document: { createElement: () => ({ dataset: {}, setAttribute() {}, transferControlToOffscreen: () => ({}), remove() { this.removed = true; } }) },
    window: { devicePixelRatio: 3 },
    ResizeObserver: class { observe() {} disconnect() {} },
    Worker: class {
      constructor() { this.messages = []; workers.push(this); }
      postMessage(message) { this.messages.push(message); }
      terminate() { this.terminated = true; }
    },
  };
  for (const [key, value] of Object.entries(globals)) Object.defineProperty(globalThis, key, { configurable: true, value });
  const motion = { matches: false, addEventListener(type, callback) { this.change = callback; } };
  const loader = createParcelLoader({ container, motionPreference: motion });
  t.after(() => {
    loader.stop();
    for (const [key, descriptor] of saved) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  });
  return { loader, workers, canvases, motion };
}

test('parcel worker renders before readiness and never restarts at the curtain handoff', async t => {
  const { loader, workers, canvases, motion } = setup(t);
  const ready = loader.start();
  assert.equal(loader.start(), ready);
  assert.equal(workers.length, 1);
  assert.equal(workers[0].messages[0].type, 'init');
  assert.equal(workers[0].messages[0].size.pixelRatio, 2);
  let resolved = false; ready.then(() => { resolved = true; });
  await Promise.resolve(); assert.equal(resolved, false);
  workers[0].onmessage({ data: { type: 'ready' } });
  await ready; assert.equal(resolved, true);
  assert.equal(canvases[0].dataset.renderer, 'worker');
  loader.start(); assert.equal(workers[0].messages.length, 1, 'no reset/start message at handoff');
  motion.matches = true; motion.change();
  assert.deepEqual(workers[0].messages.at(-1), { type: 'motion', reducedMotion: true });
  loader.stop();
  assert(workers[0].terminated && canvases[0].removed);
});

test('cancelling worker startup releases readiness and ignores stale completion', async t => {
  const { loader, workers, canvases } = setup(t);
  const ready = loader.start();
  loader.stop(); await ready;
  workers[0].onmessage({ data: { type: 'ready' } });
  assert.equal(canvases[0].dataset.renderer, undefined);
  loader.start(); assert.equal(workers.length, 2);
});
