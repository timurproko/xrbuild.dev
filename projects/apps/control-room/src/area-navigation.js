import { playControlFeedback, playActionFeedback } from './control-feedback.js';

export const AREAS = [
  { id: 'product', category: 'Product Studio', label: 'Create new product', description: 'Design, prototype and launch', icon: 'M7 4h10v8H7zM9 8h.01M15 8h.01M9 16h6v4H9zM4 7v3M20 7v3M12 12v4' },
  { id: 'plants', category: 'Fulfillment & AWS', label: 'Global Operations', description: 'Explore the operating network', icon: 'M6 15a4 4 0 0 1 0-8 6 6 0 0 1 11-1 4.5 4.5 0 0 1 1 9M8 21v-8m-3 3 3-3 3 3m5 5v-8m-3 3 3-3 3 3' },
  { id: 'journey', category: 'Growth Lab', label: 'Customer Journey', description: 'Follow acquisition to advocacy', icon: 'M3 16c5-15 10 8 18-8M3 16h.01M9 9h.01M15 14h.01M21 8h.01' },
  { id: 'bets', category: 'Capital Allocation', label: 'Big Bets', description: 'Shape the investment portfolio', icon: 'M3 12h5v9H3zM10 6h5v15h-5zM17 15h5v6h-5zM11 3h3' },
  { id: 'radar', category: 'War Room', label: 'Threat Radar', description: 'Explore risks and counter-moves', icon: 'M12 2a10 10 0 1 0 10 10M12 6a6 6 0 1 0 6 6M12 10a2 2 0 1 0 2 2M12 12l8-8M17 5h.01M5 15h.01' },
  { id: 'scenario', category: 'Stress Test', label: 'Scenario Cockpit', description: 'Test assumptions and outcomes', icon: 'M4 3v18M12 3v18M20 3v18M1 8h6M9 16h6M17 6h6' },
];

export const NAVIGATION_AREAS = [
  { id: 'overview', category: 'Network intelligence', label: 'Control Center', description: 'Explore the global operating picture', icon: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z' },
  ...AREAS,
];

/** All destinations are visible and immediately actionable, with no carousel step. */
export function createAreaNavigation({ onNavigate, onOpenChange, motionPreference }) {
  const root = document.createElement('div');
  root.className = 'area-navigation'; root.hidden = true;
  root.innerHTML = `<section class="area-menu" id="area-menu" role="dialog" aria-modal="true" aria-labelledby="area-menu-title">
    <header class="area-menu-head">
      <div><span class="eyebrow">Control Center</span><h2 id="area-menu-title">Choose your destination</h2></div>
      <button type="button" class="control-button area-menu-close" aria-label="Close navigation">×</button>
    </header>
    <div class="area-grid" role="group" aria-label="Destinations">
      ${AREAS.map(area => `<button type="button" class="area-option" data-area="${area.id}">
        <span class="area-option-copy"><strong>${area.label}</strong><span class="area-option-description">${area.description}</span></span>
        <span class="area-option-art" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="${area.icon}"/></svg></span>
      </button>`).join('')}
    </div>
  </section>`;
  document.body.append(root);
  const panel = root.querySelector('.area-menu');
  const buttons = [...root.querySelectorAll('.area-option')];
  let anchor = null, navigationTimer = null;

  function close({ restoreFocus = true } = {}) {
    if (root.hidden) return;
    root.hidden = true;
    clearTimeout(navigationTimer); navigationTimer = null;
    root.classList.remove('is-leaving');
    anchor?.setAttribute('aria-expanded', 'false');
    onOpenChange(false);
    if (restoreFocus && anchor?.isConnected) anchor.focus({ preventScroll: true });
  }
  function open(trigger, area = 'overview') {
    playControlFeedback(trigger, motionPreference);
    if (!root.hidden) { close(); return; }
    anchor = trigger;
    const currentIndex = AREAS.findIndex(item => item.id === area);
    buttons.forEach((button, index) => {
      if (index === currentIndex) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    root.hidden = false;
    anchor.setAttribute('aria-expanded', 'true');
    onOpenChange(true);
    panel.scrollTop = 0;
    buttons[Math.max(0, currentIndex)].focus({ preventScroll: true });
  }
  root.querySelector('.area-menu-close').addEventListener('click', event => {
    clearTimeout(navigationTimer); navigationTimer = null;
    playActionFeedback(event.currentTarget, motionPreference);
    if (motionPreference?.matches) close();
    else navigationTimer = setTimeout(close, 220);
  });
  root.addEventListener('click', event => { if (event.target === root) close(); });
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (navigationTimer !== null) return;
      playControlFeedback(button, motionPreference);
      const navigate = () => {
        close({ restoreFocus: false });
        onNavigate(AREAS[index]);
      };
      // Pulse first, then recede the menu before the cinematic handoff.
      // Escape/backdrop dismissal cancels either stage of pending navigation.
      if (motionPreference?.matches) navigate();
      else navigationTimer = setTimeout(() => {
        root.classList.add('is-leaving');
        navigationTimer = setTimeout(navigate, 240);
      }, 220);
    });
  });
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); close(); return; }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      buttons[event.key === 'Home' ? 0 : buttons.length - 1].focus();
    }
    if (event.key === 'Tab') {
      const focusable = [...panel.querySelectorAll('button')], index = focusable.indexOf(document.activeElement);
      event.preventDefault();
      focusable[(index + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length].focus();
    }
  });
  return { open, close, get isOpen() { return !root.hidden; } };
}
