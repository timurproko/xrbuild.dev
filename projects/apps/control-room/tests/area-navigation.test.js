import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { AREAS, NAVIGATION_AREAS } from '../src/area-navigation.js';

test('title navigation includes all six destinations and each has a real reference screen', () => {
  assert.deepEqual(AREAS.map(area => area.id), ['product', 'plants', 'journey', 'bets', 'radar', 'scenario']);
  assert.deepEqual(AREAS.map(area => area.label), ['Create new product', 'Global Operations', 'Customer Journey', 'Big Bets', 'Threat Radar', 'Scenario Cockpit']);
  const reference = readFileSync(new URL('../public/reference/control-room.html', import.meta.url), 'utf8');
  const screens = reference.match(/const screens = \{([\s\S]*?)\n\};/)[1];
  for (const area of AREAS) {
    assert.match(screens, new RegExp(`\\b${area.id}: document\\.getElementById`));
    assert(area.category && area.description && area.icon);
  }
});

test('globe title metadata stays distinct from the six deep-dive destinations', () => {
  assert.equal(NAVIGATION_AREAS.length, 7);
  assert.equal(NAVIGATION_AREAS[0].id, 'overview');
  assert.equal(NAVIGATION_AREAS[0].label, 'Control Center');
  assert(NAVIGATION_AREAS[0].icon);
  assert.deepEqual(NAVIGATION_AREAS.slice(1), AREAS);
});

test('Control Center replaces the intro brand in the shared header navigation position', () => {
  const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../src/cinematic.css', import.meta.url), 'utf8');
  assert.match(source, /<header class="topbar">[\s\S]*class="header-identity"[\s\S]*id="open-area-menu"[\s\S]*Control Center[\s\S]*<\/header>/);
  assert.doesNotMatch(source, /class="title-block"|mainTitle.inert/);
  assert.match(css, /\.header-identity \.brand \{ opacity: 0; visibility: hidden/);
  assert.match(css, /\.is-intro \.header-identity \.brand \{ opacity: 1; visibility: visible/);
  assert.match(css, /\.is-intro \.header-menu \{ opacity: 0; visibility: hidden/);
});

test('deep dives use a plain title and an animated Back button, not another dropdown', () => {
  const source = readFileSync(new URL('../src/reference-rooms.js', import.meta.url), 'utf8');
  assert.match(source, /<h1 class="reference-room-title" tabindex="-1">/);
  assert.doesNotMatch(source, /onMenu|aria-haspopup|reference-room-note/);
  assert.match(source, /playControlFeedback\(event.currentTarget, motionPreference\)/);
  assert.match(source, /clearTimeout\(backTimer\)/);
});

test('experience header waits for loading and uses the cinematic reveal timing', () => {
  const source = readFileSync(new URL('../src/reference-rooms.js', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../src/area-navigation.css', import.meta.url), 'utf8');
  assert.match(source, /header.inert = loading/);
  assert.match(source, /status.focus\(\{ preventScroll: true \}\)/);
  assert.match(source, /win.showScreen\(current.id\);\s*ready = true; revealExperience\(\)/);
  assert.match(source, /if \(root.hidden \|\| !ready \|\| entranceTimer !== null\) return/);
  assert.match(source, /clearTimeout\(entranceTimer\)/);
  assert.match(source, /cancelRequestPaint\(\)/);
  assert.match(source, /requestPaint = requestAnimationFrame\(\(\) => \{\s*requestPaint = requestAnimationFrame/);
  assert.doesNotMatch(source, /revealTimer|loaderShownAt|900/);
  assert.match(source, /if \(loading\) parcelLoader.start\(\)/);
  assert.doesNotMatch(source, /loading && entranceTimer === null/);
  assert.match(css, /\.reference-room.is-entering \.reference-room-status \{[^}]*opacity: 0/);
  assert.match(source, /event.animationName === 'experience-curtain-close'/);
  assert.match(source, /event.pseudoElement === '::after'/);
  assert.doesNotMatch(css, /experience-loader-enter/);
  assert.match(css, /\.reference-room.is-loading \.reference-room-status \{ position: fixed; z-index: 4/);
  assert.match(css, /\.reference-room.is-loading \.reference-room-bar \{ visibility: hidden/);
  assert.match(css, /reference-header-enter 1.1s cubic-bezier\(\.22,1,\.36,1\)/);
  assert.match(css, /prefers-reduced-motion: reduce[\s\S]*reference-room-bar[^{}]*\{ animation: none/);
});

test('experience loading opens a plain parcel with reduced-motion support', () => {
  const source = readFileSync(new URL('../src/reference-rooms.js', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../src/area-navigation.css', import.meta.url), 'utf8');
  assert.match(source, /class="reference-parcel-loader" aria-hidden="true"/);
  assert.match(source, /<span>Opening experience…<\/span>/);
  assert.match(css, /\.reference-parcel-loader \{ display: none/);
  const loader = readFileSync(new URL('../src/parcel-loader.js', import.meta.url), 'utf8');
  const renderer = readFileSync(new URL('../src/parcel-renderer.js', import.meta.url), 'utf8');
  assert.match(renderer, /createDeliveryParcel\(material, \{ opening: true, smile: false, createCanvas \}\)/);
  assert.match(loader, /new Worker\(new URL\('\.\/parcel-loader.worker.js'/);
  assert.match(source, /parcelLoader.whenReady\(\).then/);
  assert.match(renderer, /Math.min\(\.05/);
  assert.match(renderer, /renderer.forceContextLoss\(\)/);
  assert.match(source, /parcelLoader.stop\(\)/);
  assert.doesNotMatch(source, /parcel-conveyor|parcel-spark|reference-loading-note|parcel-opening-light|Good things/);
});

test('destination panel uses a responsive card grid instead of a scrolling wheel', () => {
  const source = readFileSync(new URL('../src/area-navigation.js', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../src/area-navigation.css', import.meta.url), 'utf8');
  assert.match(source, /class="area-grid"/);
  assert.match(source, /\$\{AREAS.map\(area => `<button/);
  assert.doesNotMatch(source, /NAVIGATION_AREAS.map|onHome/);
  assert.match(source, /root.classList.add\('is-leaving'\)/);
  assert.match(css, /experience-curtain-close \.55s/);
  assert.match(source, /aria-labelledby="area-menu-title"/);
  assert.match(source, /aria-modal="true"/);
  assert.match(css, /grid-template-columns: repeat\(3,minmax\(0,1fr\)\)/);
  assert.match(css, /grid-template-columns: repeat\(2,minmax\(0,1fr\)\)/);
  assert.doesNotMatch(source, /carouselIndex|seek\(|scrollTo\(|pointermove/);
  assert.doesNotMatch(css, /scroll-snap|area-wheel|area-opacity|area-option:hover/);
  assert.doesNotMatch(source, /area-option-home|area-option-open|<small>|area-menu-help/);
  assert.match(source, /<strong>\$\{area.label\}<\/strong><span class="area-option-description">/);
  assert.match(css, /area-option\[aria-current="page"\] \{\s*border-color: var\(--action-color\)/);
});
