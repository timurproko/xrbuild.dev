import test from 'node:test';
import assert from 'node:assert/strict';
import { createCountUp } from '../src/count-up.js';

const targets = ['94.7', '96.4', '41.8', '82.1', '03'];
function fixture(reduced = false) {
  const elements = targets.map(count => ({ dataset: { count }, textContent: count, style: { setProperty(name, value) { this[name] = value; } } }));
  const progress = { style: {} }, motionPreference = { matches: reduced };
  let time = 0;
  const counter = createCountUp({ elements, progress, motionPreference, now: () => time });
  return { counter, elements, progress, motionPreference, setTime(value) { time = value; }, values: () => elements.map(element => element.textContent) };
}

test('reveal starts at zero, staggers rows, counts monotonically, and lands exactly', () => {
  const f = fixture();
  f.counter.prepare();
  assert.deepEqual(f.values(), ['0.0', '0.0', '0.0', '0.0', '00']);
  assert.equal(f.progress.style.transform, 'scaleX(0)');
  f.counter.start({ delay: .25 });
  f.counter.update(.24); assert.equal(f.values()[0], '0.0');
  f.counter.update(.3); assert(Number(f.values()[0]) > 0); assert.equal(f.values()[1], '0.0');
  let previous = f.values().map(Number);
  for (let time = .31; time < 2.5; time += .05) {
    f.counter.update(time);
    const values = f.values().map(Number);
    values.forEach((value, index) => assert(value >= previous[index] && value <= Number(targets[index])));
    previous = values;
  }
  assert.deepEqual(f.values(), targets);
  assert.equal(f.progress.style.transform, 'scaleX(1)');
  assert(!f.counter.active);
});

test('leaving cancels the count; a new reveal restarts without stale animation work', () => {
  const f = fixture();
  f.counter.start(); f.counter.update(.5);
  const partial = f.values();
  f.counter.cancel(); f.counter.update(10);
  assert.deepEqual(f.values(), partial);
  f.setTime(10); f.counter.prepare(); f.counter.start(); f.counter.update(10.05);
  assert(Number(f.values()[0]) < Number(partial[0]));
  f.counter.update(13); assert.deepEqual(f.values(), targets);
});

test('reduced motion immediately shows final values, including when enabled midway', () => {
  const f = fixture(true);
  f.counter.prepare(); f.counter.start({ delay: 10 });
  assert.deepEqual(f.values(), targets); assert(!f.counter.active);
  f.motionPreference.matches = false;
  f.counter.start(); f.counter.update(.3);
  assert.notDeepEqual(f.values(), targets);
  f.motionPreference.matches = true; f.counter.update(.4);
  assert.deepEqual(f.values(), targets); assert(!f.counter.active);
});

test('decimal precision, leading zeros, reserved widths and explicit finish are retained', () => {
  const f = fixture();
  assert.deepEqual(f.elements.map(element => element.style['--count-digits']), [4, 4, 4, 4, 2]);
  f.counter.start(); f.counter.update(.65);
  assert.match(f.values()[0], /^\d+\.\d$/);
  assert.match(f.values()[4], /^0\d$/);
  f.counter.finish(); assert.deepEqual(f.values(), targets);
  f.counter.update(100); assert.deepEqual(f.values(), targets);
});
