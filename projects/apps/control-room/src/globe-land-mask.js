import * as THREE from 'three';

/** A cached equirectangular mask keeps translucent-looking land fills aligned
 * with the exact polygons used by the coastline strokes and dotted geography. */
export function createGlobeLandMask(polygons, width = 2048, height = 1024) {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const context = canvas.getContext('2d');
  context.fillStyle = '#000'; context.fillRect(0, 0, width, height);
  context.fillStyle = '#fff';
  for (const { rings } of polygons) for (const shift of [-360, 0, 360]) {
    context.beginPath();
    for (const ring of rings) {
      ring.forEach(([lon, lat], index) => {
        const x = (lon + shift + 180) / 360 * width, y = (90 - lat) / 180 * height;
        if (index) context.lineTo(x, y); else context.moveTo(x, y);
      });
      context.closePath();
    }
    context.fill('evenodd');
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.name = 'globe-land-mask';
  texture.wrapS = THREE.RepeatWrapping;
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}
