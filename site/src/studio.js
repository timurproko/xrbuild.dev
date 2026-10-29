import { CubeCamera, EquirectangularReflectionMapping, HalfFloatType, PMREMGenerator, Scene, WebGLCubeRenderTarget } from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import studioUrl from './assets/studio-small.hdr?url';

export async function createStudio(renderer) {
  const panorama = await new RGBELoader().loadAsync(studioUrl);
  panorama.mapping = EquirectangularReflectionMapping;
  const studio = new Scene();
  studio.background = panorama;
  const cube = new WebGLCubeRenderTarget(512, { type: HalfFloatType });
  const pmrem = new PMREMGenerator(renderer);
  try {
    new CubeCamera(.1, 100, cube).update(renderer, studio);
    return pmrem.fromCubemap(cube.texture);
  } finally {
    panorama.dispose(); cube.dispose(); pmrem.dispose();
  }
}
