import { DataTexture, Float32BufferAttribute, LinearFilter, LinearMipmapLinearFilter, RepeatWrapping } from 'three';

// A continuous optical-thickness field, not a baked rainbow painted on the page.
// Its periodic waves tile seamlessly while the GPU interpolates the coating.
export function createCoating() {
  const size = 256;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size * Math.PI * 2, v = y / size * Math.PI * 2;
    const thickness = .5 + .25 * Math.sin(u + .8 * Math.sin(v)) + .2 * Math.cos(v - .65 * Math.sin(u));
    const value = Math.round(thickness * 255);
    const i = (y * size + x) * 4;
    pixels[i] = pixels[i + 1] = pixels[i + 2] = value; pixels[i + 3] = 255;
  }
  const texture = new DataTexture(pixels, size, size);
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

export function addCoatingCoordinates(geometry) {
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  const ranges = ['x', 'y', 'z'].map((axis, index) => ({ index, axis, size: box.max[axis] - box.min[axis] })).sort((a, b) => b.size - a.size);
  const [a, b] = ranges;
  const position = geometry.attributes.position;
  const uv = new Float32Array(position.count * 2);
  for (let i = 0; i < position.count; i++) {
    uv[i * 2] = (position.getComponent(i, a.index) - box.min[a.axis]) / (a.size || 1);
    uv[i * 2 + 1] = (position.getComponent(i, b.index) - box.min[b.axis]) / (b.size || 1);
  }
  geometry.setAttribute('uv', new Float32BufferAttribute(uv, 2));
}
