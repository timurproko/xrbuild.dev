// The app's 3D icon: the globe with its land detail and atmosphere. The launcher shows it in 3D; the icon view
// (xrb-icon.js) renders it straight-on as the PNG icon.
import * as THREE from 'three';
import { createGlobeSurfaceMaterial } from './globe-surface.js';
import { createGlobeLandMask } from './globe-land-mask.js';
import { createGlobeAtmosphere } from './globe-atmosphere.js';
import { decodeLand } from './land-geography.js';
import earthTextureUrl from './data/earth-blue-marble.webp';
import landTopology from './data/land-110m.json';

const R = 1;

export default function createIcon() {
  const group = new THREE.Group();
  const landMask = createGlobeLandMask(decodeLand(landTopology));
  let loaded;
  const ready = new Promise((resolve) => { loaded = resolve; });
  const earthMap = new THREE.TextureLoader().load(earthTextureUrl, loaded, undefined, loaded);
  earthMap.colorSpace = THREE.SRGBColorSpace;
  earthMap.wrapS = THREE.RepeatWrapping;
  const globe = new THREE.Mesh(new THREE.SphereGeometry(R, 72, 72), createGlobeSurfaceMaterial({ landMask, earthMap }));
  // Europe and Africa toward the viewer, slightly tilted like the app's overview.
  globe.rotation.set(0.35, 1.32, 0);
  group.add(globe);
  for (const [factor, opacity, falloff] of [[1.026, 0.82, 3.5], [1.075, 0.22, 2.8]]) group.add(createGlobeAtmosphere(R * factor, { opacity, falloff }));
  group.userData.ready = ready;
  group.userData.update = (seconds) => { globe.rotation.y = 1.32 + Math.sin(seconds * 0.4) * 0.35; };
  return group;
}
