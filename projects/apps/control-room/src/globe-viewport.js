/** Extend the camera's existing frame upward without changing the globe's
 * apparent size or its position inside the dashboard workspace. */
export function extendGlobeViewport(camera, width, height, topInset) {
  camera.setViewOffset(width, height, 0, -topInset, width, height + topInset);
  return { width, height: height + topInset, x: 0, y: -topInset };
}
