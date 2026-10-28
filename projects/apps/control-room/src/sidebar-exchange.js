/** Sequential card exchange: only one sidebar card is visible at a time. */
export function createSidebarExchange({ healthPanel, regionPanel, motionPreference }) {
  const panels = [healthPanel, regionPanel];
  let regionSelected = false;
  let revision = 0;
  let activeAnimation = null;
  let onSettled = null;

  function displayRegion(visible) {
    healthPanel.hidden = visible;
    healthPanel.inert = visible;
    regionPanel.hidden = !visible;
    regionPanel.inert = !visible;
  }

  function settle() {
    activeAnimation?.cancel();
    activeAnimation = null;
    displayRegion(regionSelected);
    panels.forEach(panel => panel.classList.remove('is-exchanging'));
    const callback = onSettled;
    onSettled = null;
    callback?.();
  }

  async function play(panel, keyframes, duration) {
    const animation = panel.animate(keyframes, {
      duration, easing: 'cubic-bezier(.22,.8,.22,1)', fill: 'both',
    });
    activeAnimation = animation;
    // Cancellation is expected when another selection or intro replay takes over.
    await animation.finished.catch(() => {});
    animation.cancel();
    if (activeAnimation === animation) activeAnimation = null;
  }

  async function showRegion(visible, { animate = true, onComplete } = {}) {
    const previous = regionSelected;
    const request = ++revision;
    activeAnimation?.cancel();
    regionSelected = visible;
    onSettled = onComplete;
    displayRegion(previous);

    if (!animate || motionPreference.matches || previous === visible) {
      settle();
      return;
    }

    const outgoing = visible ? healthPanel : regionPanel;
    const incoming = visible ? regionPanel : healthPanel;
    const direction = visible ? 1 : -1;
    panels.forEach(panel => { panel.inert = true; panel.classList.add('is-exchanging'); });
    const resting = 'perspective(1200px) translateX(0) translateZ(0) rotateY(0)';
    await play(outgoing, [
      { opacity: 1, transform: resting },
      { opacity: 0, transform: `perspective(1200px) translateX(${-direction * 28}px) translateZ(-90px) rotateY(${direction * 8}deg)` },
    ], 200);
    if (request !== revision) return;

    outgoing.hidden = true;
    incoming.hidden = false;
    await play(incoming, [
      { opacity: 0, transform: `perspective(1200px) translateX(${direction * 28}px) translateZ(-70px) rotateY(${-direction * 8}deg)` },
      { opacity: 1, transform: resting },
    ], 320);
    if (request === revision) settle();
  }

  motionPreference.addEventListener('change', () => {
    if (motionPreference.matches && activeAnimation) {
      ++revision;
      settle();
    }
  });

  return { showRegion, get regionSelected() { return regionSelected; } };
}
