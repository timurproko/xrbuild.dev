import { createParcelRenderer } from './parcel-renderer.js';

/** Render independently of the embedded page's blocking main-thread setup. */
export function createParcelLoader({ container, motionPreference }) {
  let worker = null, view = null, canvas = null;
  let active = false, frame = null, workerTimeout = null;
  let readyPromise = Promise.resolve(), resolveReady = null;
  const observer = new ResizeObserver(resize);
  const size = () => ({
    width: Math.max(1, container.clientWidth), height: Math.max(1, container.clientHeight),
    pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
  });

  function markReady() {
    clearTimeout(workerTimeout); workerTimeout = null;
    resolveReady?.(); resolveReady = null;
  }
  function makeCanvas() {
    canvas?.remove();
    canvas = document.createElement('canvas');
    canvas.className = 'loading-parcel'; canvas.setAttribute('aria-hidden', 'true');
    container.append(canvas);
  }
  function resize() {
    if (!active) return;
    if (worker) worker.postMessage({ type: 'resize', size: size() });
    else if (view) { view.resize(size()); view.render(performance.now(), motionPreference?.matches); }
  }
  function tick(now) {
    frame = null;
    view?.render(now, motionPreference?.matches);
    if (active && view && !motionPreference?.matches) frame = requestAnimationFrame(tick);
  }
  function fallback() {
    if (!active) return;
    clearTimeout(workerTimeout); workerTimeout = null;
    worker?.terminate(); worker = null;
    makeCanvas();
    try {
      view = createParcelRenderer({ canvas });
      canvas.dataset.renderer = 'main';
      resize(); container.classList.remove('is-unavailable');
      if (!motionPreference?.matches) frame = requestAnimationFrame(tick);
    } catch {
      canvas.remove(); canvas = null;
      container.classList.add('is-unavailable');
    }
    markReady();
  }
  function start() {
    // Repeated calls at the curtain handoff must not reset a running animation.
    if (active) return readyPromise;
    active = true;
    readyPromise = new Promise(resolve => { resolveReady = resolve; });
    container.classList.add('is-unavailable');
    makeCanvas(); observer.observe(container);
    if (typeof Worker === 'undefined' || !canvas.transferControlToOffscreen) {
      fallback(); return readyPromise;
    }
    try {
      const instance = new Worker(new URL('./parcel-loader.worker.js', import.meta.url), { type: 'module' });
      worker = instance;
      instance.onmessage = ({ data }) => {
        if (!active || worker !== instance) return;
        if (data.type === 'ready') {
          canvas.dataset.renderer = 'worker';
          container.classList.remove('is-unavailable'); markReady();
        } else if (data.type === 'error') fallback();
      };
      instance.onerror = event => {
        event.preventDefault();
        if (active && worker === instance) fallback();
      };
      const offscreen = canvas.transferControlToOffscreen();
      instance.postMessage({ type: 'init', canvas: offscreen, size: size(), reducedMotion: !!motionPreference?.matches }, [offscreen]);
      workerTimeout = setTimeout(() => { if (worker === instance) fallback(); }, 2500);
    } catch { fallback(); }
    return readyPromise;
  }
  function stop() {
    active = false; observer.disconnect();
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    if (worker) { worker.postMessage({ type: 'dispose' }); worker.terminate(); worker = null; }
    view?.dispose(); view = null;
    canvas?.remove(); canvas = null;
    markReady();
  }
  motionPreference?.addEventListener('change', () => {
    if (!active) return;
    if (worker) worker.postMessage({ type: 'motion', reducedMotion: motionPreference.matches });
    else if (view) {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null; view.render(performance.now(), motionPreference.matches);
      if (!motionPreference.matches) frame = requestAnimationFrame(tick);
    }
  });
  return { start, stop, whenReady: () => readyPromise };
}
