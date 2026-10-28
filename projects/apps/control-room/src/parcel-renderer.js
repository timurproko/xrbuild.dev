import * as THREE from 'three';
import { createDeliveryParcel, setParcelOpening } from './delivery-parcel.js';

/** Identical scene in a rendering worker or the compatibility fallback. */
export function createParcelRenderer({ canvas, createCanvas }) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1.2, .1, 30);
  camera.position.set(3.1, 2.25, 5.4); camera.lookAt(0, .38, 0);
  const material = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: .85, ...extra });
  const parcel = createDeliveryParcel(material, { opening: true, smile: false, createCanvas });
  scene.add(parcel);
  scene.add(new THREE.HemisphereLight(0xffe4bf, 0x24382c, 2.2));
  const key = new THREE.DirectionalLight(0xffdfb0, 3);
  key.position.set(-3, 5, 5); scene.add(key);
  const fill = new THREE.DirectionalLight(0xc6dac9, .8);
  fill.position.set(4, 2, -2); scene.add(fill);
  let elapsed = .2, lastTime = null;

  function render(now, reducedMotion = false) {
    // Never catch up with a burst after a suspended tab or a blocked fallback.
    if (lastTime !== null && !reducedMotion) elapsed += Math.min(.05, Math.max(0, (now - lastTime) / 1000));
    lastTime = now;
    setParcelOpening(parcel, elapsed, reducedMotion);
    renderer.render(scene, camera);
  }
  function resize({ width, height, pixelRatio }) {
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);
    camera.aspect = width / height; camera.updateProjectionMatrix();
  }
  function dispose() {
    const materials = new Set(), textures = new Set();
    scene.traverse(object => {
      object.geometry?.dispose();
      if (object.material) materials.add(object.material);
    });
    materials.forEach(mat => { if (mat.map) textures.add(mat.map); mat.dispose(); });
    textures.forEach(texture => texture.dispose());
    renderer.dispose(); renderer.forceContextLoss();
  }
  return { render, resize, dispose };
}
