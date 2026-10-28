// XR Build mode: only active inside xrb-host, in 3D (side by side) or in 2D (one view) - the host
// can switch between the two while the app runs and the SDK follows (same scene, hands kept).
// In a normal browser nothing here runs and the app behaves exactly as before.
import { createXrb, getHostInfo, loadReturnOverlay } from '@xr-build/sdk';
import './xrb-mode.css';

export const xrbHost = getHostInfo();
export const inXrbHost = !!xrbHost;

/**
 * Takes over the globe canvas for a 3D display: full page, both eyes side by side,
 * hands as pointer input (pinch = click, pinch and move = rotate).
 * DOM overlays would reach one eye only, so they are hidden in this mode.
 */
export function setupXrb({ renderer, canvas, scene }) {
  // Opened from a launcher (?xrb-return=): its close control over the app. createXrb loads it in XR Build mode.
  if (!inXrbHost) { void loadReturnOverlay(); return null; }
  document.body.classList.add('xrb-stereo');
  document.body.appendChild(canvas);
  // Hands act on the globe in 3D (globe-hands.js), not as a mouse pointer.
  const xrb = createXrb(renderer, { pointer: false });
  scene.add(xrb.handsObject);
  return xrb;
}
