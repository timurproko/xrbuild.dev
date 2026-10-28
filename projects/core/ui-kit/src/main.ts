// UI Kit: every basic control of the UI kit on one board, with a checklist
// of what to try. Hands work directly (poke, touch-drag, pinch, reach into the trackball) through
// the SDK's interaction core; the mouse drives the same controls (in a browser and on a 3D display,
// where the SDK cursor shows where it points).
//
// One scene unit = one metre, and the scene origin is the centre of the glass with +z toward
// the viewer (world mapping, scale 1). Controls stand slightly in front of the glass so a
// fingertip can reach their surfaces.
import * as THREE from 'three';
import { createXrb, rendererOptions } from '@xr-build/sdk';
import { Button, COLORS, Dial, Dialog, Label, Segmented, Slider, Switch, Trackball, play, type Control } from '@xr-build/ui-kit';
import { ArrowRight } from 'lucide';
import { Checklist } from './kit/checklist.ts';
import createIcon from './icon.ts';

const renderer = new THREE.WebGLRenderer(rendererOptions());
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);
const xrb = createXrb(renderer, {
  mapping: { mode: 'world', center: new THREE.Vector3(0, 0, 0), scale: 1 },
  pointer: false,  // hands act directly on the controls; a pinch is not a click here
  icon: { create: createIcon },  // the icon view draws src/icon.ts (the robot) instead of this scene
});

const scene = new THREE.Scene();
scene.background = new THREE.Color(COLORS.background);
scene.add(new THREE.HemisphereLight('#dfe8ff', '#1a1e26', 1.6));
const key = new THREE.DirectionalLight('#ffffff', 2.2);
key.position.set(-0.3, 0.5, 0.8);
scene.add(key);
scene.add(xrb.handsObject);

// The nominal viewer, 0.6 m in front of the glass: rendering replaces its projection with the
// panel window, and the mouse raycasts from it.
const camera = new THREE.PerspectiveCamera(38, 16 / 9, 0.01, 5);
camera.position.set(0, 0, 0.6);

// ---- the board (panel 0.597 x 0.336 m) ------------------------------------------------------

const pill = new Button({ title: 'Button (pill)', shape: 'pill', text: 'Press' });
const round = new Button({ title: 'Button (round)', shape: 'round', text: '', icon: ArrowRight });
const toggle = new Switch('Switch');
const interactable = new Switch('Interactable', true);
const stepped = new Slider({ title: 'Stepped slider', steps: 5, value: 0.25, length: 0.13 });
const slider = new Slider({ title: 'Slider', value: 0.5, length: 0.13 });
const trackball = new Trackball('Trackball', 0.056);
const mode = new Segmented('', ['Full', 'X', 'Y', 'Z']);
const dial = new Dial('Dial');
const dialogButton = new Button({ title: 'Dialog', shape: 'pill', text: 'Open' });
// Floats 7 cm in front of the board on frosted glass: a 3D display shows it closer than the board behind it.
const dialog = new Dialog({ title: 'Glass dialog', text: 'A sheet 7 cm in front of the board.\nThe board shows through, blurred.' });
mode.title.visible = mode.status.visible = false;  // the trackball's status shows the mode

// First row: pill, dialog, switches, and the round button above the dial. While the checklist is
// shown the row packs left of it; collapsed (Tab), it spreads across the board.
const row1 = [pill, dialogButton, toggle, interactable, round];
function layoutRow1(checklistShown: boolean): void {
  const xs = checklistShown ? [-0.24, -0.15, -0.062, 0.028, 0.12] : [-0.235, -0.14, -0.045, 0.045, 0.215];
  row1.forEach((c, i) => c.position.set(xs[i], 0.105, 0));
}
layoutRow1(true);
stepped.position.set(-0.19, -0.02, 0);
slider.position.set(-0.19, -0.1, 0);
trackball.position.set(0, -0.01, 0.02);
mode.position.set(0, -0.128, 0);
dial.position.set(0.215, -0.075, 0);
dialog.position.set(0, 0, 0);

const controls: Control[] = [pill, round, toggle, interactable, stepped, slider, trackball, mode, dial, dialogButton, dialog];
scene.add(...controls);
for (const c of controls) c.attach(xrb.interaction);
xrb.bindMouse();
scene.add(xrb.cursorObject);

const hint = new Label('Poke buttons with a fingertip  ·  touch-drag or pinch slider handles  ·  pinch the dial’s edge and circle  ·  reach into the sphere  ·  Tab: checklist', { size: 0.0058, weight: 500, color: COLORS.muted });
hint.position.set(0, -0.158, 0);
scene.add(hint);

// ---- checklist ----------------------------------------------------------------------------

const CL_W = 0.13, EDGE = 0.012;
const checklist = new Checklist([
  { id: 'pill', text: 'Button (pill): press' },
  { id: 'round', text: 'Button (round): press' },
  { id: 'switch', text: 'Switch: on and off' },
  { id: 'slider-ends', text: 'Slider: drag to both ends' },
  { id: 'slider-touch', text: 'Slider: touch-drag' },
  { id: 'slider-pinch', text: 'Slider: pinch-drag' },
  { id: 'stepped', text: 'Stepped slider: last step, then first' },
  { id: 'stepped-pinch', text: 'Stepped slider: pinch' },
  { id: 'dial', text: 'Dial: turn to both ends' },
  { id: 'mode', text: 'Mode: pick every option' },
  { id: 'tb-free', text: 'Trackball: rotate in Full' },
  { id: 'tb-x', text: 'Trackball: rotate in X' },
  { id: 'tb-y', text: 'Trackball: rotate in Y' },
  { id: 'tb-z', text: 'Trackball: rotate in Z' },
  { id: 'interactable', text: 'Interactable: off, then on' },
  { id: 'dialog', text: 'Dialog: open, then close' },
], CL_W);
// Top-right corner with the same margin to the top and right edges of the glass (0.597 x 0.336 m).
const clH = (checklist.geometry as THREE.PlaneGeometry).parameters.height;
checklist.position.set(0.597 / 2 - EDGE - CL_W / 2, 0.336 / 2 - EDGE - clH / 2, 0);
scene.add(checklist);

const seen = { sliderMin: false, sliderMax: false, steppedLast: false, dialMin: false, dialMax: false, modes: new Set<number>([0]), interactableOff: false };

pill.on('click', () => checklist.check('pill'));
dialogButton.on('click', (e) => dialog.open(e.source as 'hand' | 'mouse'));
dialog.on('close', () => checklist.check('dialog'));
round.on('click', () => checklist.check('round'));
let toggleSeen = new Set<boolean>();
toggle.on('change', (e) => {
  toggleSeen.add(e.on as boolean);
  if (toggleSeen.size === 2) checklist.check('switch');
});
slider.on('grab', (e) => { if (e.mode === 'touch') checklist.check('slider-touch'); if (e.mode === 'pinch') checklist.check('slider-pinch'); });
slider.on('change', (e) => {
  if (e.value === 0) seen.sliderMin = true;
  if (e.value === 1) seen.sliderMax = true;
  if (seen.sliderMin && seen.sliderMax) checklist.check('slider-ends');
});
stepped.on('grab', (e) => { if (e.mode === 'pinch') checklist.check('stepped-pinch'); });
stepped.on('change', (e) => {
  if (e.step === stepped.steps! - 1) seen.steppedLast = true;
  if (e.step === 0 && seen.steppedLast) checklist.check('stepped');
});
dial.on('change', (e) => {
  if (e.value === 0) seen.dialMin = true;
  if (e.value === 1) seen.dialMax = true;
  if (seen.dialMin && seen.dialMax) checklist.check('dial');
});
const AXES = ['free', 'x', 'y', 'z'] as const;
mode.on('change', (e) => {
  trackball.axis = AXES[e.index as number];
  seen.modes.add(e.index as number);
  if (seen.modes.size === AXES.length) checklist.check('mode');
});
trackball.on('rotate', (e) => {
  if ((e.total as number) > 90) checklist.check(`tb-${e.axis}`);
});
// Interactable: off disables every other control (dimmed, no input), on brings them back.
interactable.on('change', (e) => {
  for (const c of controls) if (c !== interactable && c !== dialog) c.setEnabled(e.on as boolean);
  interactable.status.set(`${e.on ? 'On' : 'Off: other controls ignore input'}`);
  if (!e.on) seen.interactableOff = true;
  else if (seen.interactableOff) checklist.check('interactable');
});
interactable.status.set('On');

let metronome = 0;
addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {  // collapse / show the checklist
    e.preventDefault();
    checklist.visible = !checklist.visible;
    layoutRow1(checklist.visible);
    return;
  }
  if (e.key === 's' || e.key === 'S') {  // sound test: the same click every 400 ms, for judging playback
    if (metronome) { clearInterval(metronome); metronome = 0; console.log('[sound] metronome off'); }
    else { metronome = setInterval(() => play('press'), 400) as unknown as number; console.log('[sound] metronome on'); }
    return;
  }
  if (e.key !== 'r' && e.key !== 'R') return;
  checklist.reset();
  Object.assign(seen, { sliderMin: false, sliderMax: false, steppedLast: false, dialMin: false, dialMax: false, modes: new Set([mode.index]), interactableOff: false });
  toggleSeen = new Set();
  for (const k of AXES) trackball.turned[k] = 0;
});

// ---- input, icon, loop ----------------------------------------------------------------------

function resize(): void {
  xrb.setSize();
  const size = xrb.viewSize();
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
xrb.onView(resize);
resize();

// Three.js drives the frame loop; XR Build renders the correct view each frame.
let last = performance.now();
let stableFrames = 0;
renderer.setAnimationLoop((now) => {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (!xrb.icon) for (const c of controls) c.update(dt);
  xrb.render(scene, camera);
  if (!document.body.classList.contains('ready') && ++stableFrames >= 3) document.body.classList.add('ready');
});
