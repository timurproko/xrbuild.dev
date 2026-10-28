import test from 'node:test';
import assert from 'node:assert/strict';
import { playControlFeedback, playActionFeedback } from '../src/control-feedback.js';

test('shared feedback pulses only the inset ring and cancels a prior pulse', () => {
  let cancelled = false, frames, timing;
  const animation = {};
  const button = {
    getAnimations: () => [{ id: 'control-feedback', cancel() { cancelled = true; } }],
    animate(keyframes, options) { frames = keyframes; timing = options; return animation; },
  };
  playControlFeedback(button, { matches: false });
  assert(cancelled);
  assert.equal(animation.id, 'control-feedback');
  assert.equal(timing.duration, 650);
  assert(frames.every(frame => Object.keys(frame).length === 1 && frame.boxShadow));
});

test('Full report and X actions use the same pulse with the orange action accent', () => {
  let frames, timing;
  const animation = {};
  playActionFeedback({
    getAnimations: () => [],
    animate(keyframes, options) { frames = keyframes; timing = options; return animation; },
  }, { matches: false });
  assert.equal(animation.id, 'control-feedback');
  assert.equal(timing.duration, 650);
  assert.equal(timing.easing, 'ease-out');
  assert(frames.every(frame => Object.keys(frame).length === 1 && frame.boxShadow.includes('255,185,77')));
});

test('reduced-motion feedback never starts an animation', () => {
  const button = { animate() { assert.fail('unexpected animation'); } };
  playControlFeedback(button, { matches: true });
  playActionFeedback(button, { matches: true });
});
