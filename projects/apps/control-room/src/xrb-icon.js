// App icon render (xrb-host --render-icon, page opened with ?xrb-icon=<size>): the 3D icon (icon.js) alone,
// drawn straight-on by the SDK's icon stage on a transparent square. That one PNG becomes the package thumbnail
// and the window/taskbar icon. With `&interactive` (the control panel's icon studio) dragging turns the globe and
// Take captures the current view. In a normal run nothing here is active.
import * as THREE from 'three';
import { iconControls, iconRender, iconReady, IconStage, serveIconCapture } from '@xr-build/sdk';
import createIcon from './icon.js';
import './xrb-icon.css';

export const iconRequest = iconRender();

/** Takes over the page for the icon view; null outside an icon render. */
export function setupIcon() {
  if (!iconRequest) return null;
  const size = iconRequest.size;
  const canvas = document.createElement('canvas');
  canvas.id = 'xrb-icon-canvas';
  document.body.classList.add('xrb-icon');
  document.body.appendChild(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(1);
  renderer.setSize(size, size, false);
  canvas.style.width = canvas.style.height = `${size}px`;
  const stage = new IconStage(createIcon());
  // The icon holds still: drawn once loaded and after each turn, zoom or reset in the studio.
  const draw = () => stage.draw(renderer);
  draw();
  void stage.ready.then(draw);
  if (iconRequest.interactive) {
    // Drag turns, right-drag or scroll zooms; Reset in the studio restores the starting view.
    iconControls(canvas, stage, size, draw);
    serveIconCapture(canvas, draw, size, undefined, { reset: () => { stage.reset(); draw(); }, pausable: false });
  } else {
    void stage.ready.then(() => requestAnimationFrame(() => requestAnimationFrame(iconReady)));
  }
  // The app keeps its own canvas hidden underneath; resize and completion are the icon stage's.
  return { resize() {}, whenComplete() {} };
}
