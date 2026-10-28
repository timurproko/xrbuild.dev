/** Staggered KPI reveal, driven by the dashboard's existing animation loop. */
export function createCountUp({ elements, progress, motionPreference, duration = 1.35, stagger = .09, now = () => performance.now() / 1000 }) {
  const counters = [...elements].map(element => {
    const text = element.dataset.count;
    const decimals = text.includes('.') ? text.split('.')[1].length : 0;
    element.style.setProperty('--count-digits', text.length);
    return { element, text, target: Number(text), decimals, padded: /^0\d/.test(text) };
  });
  let active = false, startedAt = 0;

  function render(counter, fraction, index) {
    const eased = 1 - (1 - fraction) ** 3;
    let text = fraction === 1 ? counter.text : (counter.target * eased).toFixed(counter.decimals);
    if (counter.padded) text = text.padStart(counter.text.length, '0');
    if (counter.element.textContent !== text) counter.element.textContent = text;
    if (index === 0 && progress) progress.style.transform = `scaleX(${eased})`;
  }

  function finish() {
    active = false;
    counters.forEach((counter, index) => render(counter, 1, index));
  }

  function prepare() {
    active = false;
    if (motionPreference.matches) { finish(); return; }
    counters.forEach((counter, index) => render(counter, 0, index));
  }

  function start({ delay = 0 } = {}) {
    if (motionPreference.matches) { finish(); return; }
    prepare();
    startedAt = now() + delay;
    active = true;
  }

  function update(time) {
    if (!active) return;
    if (motionPreference.matches) { finish(); return; }
    let done = true;
    counters.forEach((counter, index) => {
      const fraction = Math.min(1, Math.max(0, (time - startedAt - index * stagger) / duration));
      render(counter, fraction, index);
      if (fraction < 1) done = false;
    });
    if (done) active = false;
  }

  return { prepare, start, finish, update, cancel() { active = false; }, get active() { return active; } };
}
