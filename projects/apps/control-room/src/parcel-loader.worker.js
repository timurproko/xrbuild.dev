import { createParcelRenderer } from './parcel-renderer.js';

let view = null, frame = null, reducedMotion = false;
const requestFrame = globalThis.requestAnimationFrame?.bind(globalThis) ?? (callback => setTimeout(() => callback(performance.now()), 16));
const cancelFrame = globalThis.cancelAnimationFrame?.bind(globalThis) ?? clearTimeout;

function tick(now) {
  frame = null;
  view?.render(now, reducedMotion);
  if (view && !reducedMotion) frame = requestFrame(tick);
}
function redraw() {
  if (frame !== null) cancelFrame(frame);
  frame = null;
  view?.render(performance.now(), reducedMotion);
  if (view && !reducedMotion) frame = requestFrame(tick);
}
self.onmessage = ({ data }) => {
  try {
    if (data.type === 'init') {
      reducedMotion = data.reducedMotion;
      view = createParcelRenderer({ canvas: data.canvas, createCanvas: () => new OffscreenCanvas(512, 384) });
      view.resize(data.size);
      redraw();
      self.postMessage({ type: 'ready' });
    } else if (data.type === 'resize') {
      view?.resize(data.size); redraw();
    } else if (data.type === 'motion') {
      reducedMotion = data.reducedMotion; redraw();
    } else if (data.type === 'dispose') {
      if (frame !== null) cancelFrame(frame);
      view?.dispose(); view = null;
      self.close();
    }
  } catch {
    if (frame !== null) cancelFrame(frame);
    self.postMessage({ type: 'error' });
  }
};
