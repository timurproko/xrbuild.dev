import { AREAS } from './area-navigation.js';
import { playControlFeedback } from './control-feedback.js';
import { createParcelLoader } from './parcel-loader.js';

/** Lazy-load the supplied working destinations without leaking their globals/styles into the globe. */
export function createReferenceRooms({ onBack, onOpenChange, motionPreference }) {
  const root = document.createElement('section');
  root.className = 'reference-room'; root.hidden = true;
  root.innerHTML = `<header class="reference-room-bar">
    <button type="button" class="control-button reference-home" aria-label="Back to Control Center">‹</button>
    <h1 class="reference-room-title" tabindex="-1"><strong></strong></h1>
  </header><div class="reference-room-body"><div class="reference-room-status" role="status" tabindex="-1">
    <div class="reference-parcel-loader" aria-hidden="true"><div class="parcel-shadow"></div></div>
    <span>Opening experience…</span>
    <button type="button" class="reference-retry" hidden>Try again</button>
  </div></div>`;
  document.body.append(root);
  const body = root.querySelector('.reference-room-body'), title = root.querySelector('.reference-room-title');
  const header = root.querySelector('.reference-room-bar');
  const status = root.querySelector('.reference-room-status'), statusText = status.querySelector('span'), retry = root.querySelector('.reference-retry');
  const parcelLoader = createParcelLoader({ container: root.querySelector('.reference-parcel-loader'), motionPreference });
  let frame = null, current = null, ready = false, timeout = null, backTimer = null;
  let entranceTimer = null, requestPaint = null, requestRevision = 0, requestWaiting = false;

  function revealExperience() {
    if (root.hidden || !ready || entranceTimer !== null) return;
    status.hidden = true; setLoading(false);
    title.focus({ preventScroll: true });
  }
  function finishEntrance() {
    clearTimeout(entranceTimer); entranceTimer = null;
    // The warm renderer keeps its phase through this handoff; never replay it
    // when the curtains finish or the experience finishes initializing.
    if (root.classList.contains('is-loading')) parcelLoader.start();
    root.classList.remove('is-entering');
    scheduleExperienceRequest();
    revealExperience();
  }
  function beginEntrance() {
    if (motionPreference?.matches) { finishEntrance(); return; }
    root.classList.add('is-entering');
    // animationend drives the handoff; this only recovers if CSS is unavailable.
    entranceTimer = setTimeout(finishEntrance, 1500);
  }

  root.addEventListener('animationend', event => {
    if (event.target === root && event.animationName === 'experience-curtain-close'
      && event.pseudoElement === '::after' && entranceTimer !== null) finishEntrance();
  });

  function cancelRequestPaint() {
    ++requestRevision; requestWaiting = false;
    if (requestPaint !== null) cancelAnimationFrame(requestPaint);
    requestPaint = null;
  }
  function scheduleExperienceRequest() {
    if (root.hidden || !root.classList.contains('is-loading') || entranceTimer !== null
      || frame || requestPaint !== null || requestWaiting) return;
    requestWaiting = true;
    const revision = ++requestRevision;
    // Wait for an actual rendered worker frame, not merely an empty canvas.
    // The worker then continues animating while the iframe blocks the UI thread.
    parcelLoader.whenReady().then(() => {
      if (revision !== requestRevision || root.hidden) return;
      requestWaiting = false;
      requestPaint = requestAnimationFrame(() => {
        requestPaint = requestAnimationFrame(() => {
          requestPaint = null;
          if (!root.hidden && root.classList.contains('is-loading') && !frame) requestExperience();
        });
      });
    });
  }

  function updateTitle(area) {
    current = area;
    title.querySelector('strong').textContent = area.label;
    root.setAttribute('aria-label', area.label);
    if (frame) frame.title = area.label;
  }
  function setLoading(loading) {
    root.classList.toggle('is-loading', loading);
    root.setAttribute('aria-busy', String(loading));
    header.inert = loading;
    if (loading) parcelLoader.start();
    else parcelLoader.stop();
  }
  function fail() {
    clearTimeout(entranceTimer); entranceTimer = null;
    cancelRequestPaint();
    root.classList.remove('is-entering');
    status.hidden = false; retry.hidden = false;
    statusText.textContent = 'This experience could not be opened. Retry or return to the globe.';
    // Restore the Back control on failure as well, so loading never traps users.
    setLoading(false);
    retry.focus({ preventScroll: true });
  }
  function load() {
    clearTimeout(timeout); frame?.remove(); frame = null; ready = false;
    cancelRequestPaint();
    status.hidden = false; retry.hidden = true; statusText.textContent = 'Opening experience…';
    setLoading(true);
    status.focus({ preventScroll: true });
    scheduleExperienceRequest();
  }
  function requestExperience() {
    const next = document.createElement('iframe'); frame = next;
    next.className = 'reference-room-frame'; next.title = current.label;
    next.setAttribute('allow', 'fullscreen');
    const url = new URL('reference/control-room.html', new URL(import.meta.env.BASE_URL, location.href));
    url.searchParams.set('embedded', '1');
    next.src = url.href;
    next.addEventListener('load', () => {
      if (frame !== next || root.hidden) return;
      clearTimeout(timeout);
      try {
        const win = next.contentWindow;
        if (typeof win.showScreen !== 'function') { fail(); return; }
        const navigate = win.showScreen.bind(win);
        // Internal "Continue to" actions stay in sync with the host navigation.
        win.showScreen = id => {
          if (id === 'control') { onBack(); return; }
          const area = AREAS.find(area => area.id === id);
          if (!area) return;
          updateTitle(area); navigate(id);
          win.document.querySelectorAll('.app-screen').forEach(screen => { screen.inert = !screen.classList.contains('active'); });
          win.document.getElementById('stage').inert = true;
        };
        const style = win.document.createElement('style');
        style.textContent = '#fx,.navbtn.back{display:none!important}#stage.inactive,.app-screen:not(.active){visibility:hidden!important}html,body,#stage,.app-screen{cursor:auto!important}';
        win.document.head.append(style);
        win.document.addEventListener('keydown', event => {
          if (event.key === 'Escape' && !event.defaultPrevented) { event.preventDefault(); onBack(); }
        });
        win.showScreen(current.id);
        ready = true; revealExperience();
      } catch { fail(); }
    });
    next.addEventListener('error', () => { if (frame === next) fail(); });
    body.append(next);
    timeout = setTimeout(() => { if (!ready && frame === next && !root.hidden) fail(); }, 20000);
  }
  function open(area) {
    if (!AREAS.some(item => item.id === area.id)) return;
    updateTitle(area); root.hidden = false;
    onOpenChange(true);
    if (ready && frame) frame.contentWindow.showScreen(area.id);
    else if (!frame) { beginEntrance(); load(); }
  }
  function close() {
    if (root.hidden) return;
    clearTimeout(timeout);
    clearTimeout(backTimer); backTimer = null;
    clearTimeout(entranceTimer); entranceTimer = null;
    cancelRequestPaint();
    root.classList.remove('is-entering');
    root.hidden = true; root.inert = false;
    parcelLoader.stop();
    frame?.remove(); frame = null; ready = false; current = null;
    // Removing the iframe releases the reference's animation loops and WebGL contexts.
    onOpenChange(false);
  }
  root.querySelector('.reference-home').addEventListener('click', event => {
    if (backTimer !== null) return;
    playControlFeedback(event.currentTarget, motionPreference);
    if (motionPreference?.matches) onBack();
    else backTimer = setTimeout(onBack, 220);
  });
  motionPreference?.addEventListener('change', () => {
    if (motionPreference.matches && !root.hidden && root.classList.contains('is-loading')) finishEntrance();
  });
  retry.addEventListener('click', load);
  root.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); onBack(); }
  });
  return { open, close, set inert(value) { root.inert = value; }, get isOpen() { return !root.hidden; } };
}
