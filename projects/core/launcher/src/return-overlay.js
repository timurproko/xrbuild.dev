import * as THREE from 'three';
import { X } from 'lucide';
import { createXrb, rendererOptions } from '@xr-build/sdk';
import { Button, COLORS, play } from '@xr-build/ui-kit';

const rawReturn = new URLSearchParams(location.search).get('xrb-return');
let returnUrl = null;
try {
  const parsed = rawReturn ? new URL(rawReturn) : null;
  if (parsed && /^https?:$/.test(parsed.protocol)) returnUrl = parsed.href;
} catch {
  // Ignore malformed return URLs; directly opened apps have no launcher overlay.
}

if (returnUrl) {
  const renderer = new THREE.WebGLRenderer({ ...rendererOptions(), alpha: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  Object.assign(renderer.domElement.style, {
    position: 'fixed', inset: '0', width: '100%', height: '100%',
    zIndex: '1000', pointerEvents: 'none', touchAction: 'none',
  });
  document.body.append(renderer.domElement);

  const xrb = createXrb(renderer, {
    mapping: { mode: 'world', center: new THREE.Vector3(), scale: 1 },
    pointer: false,
  });
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight('#dfe8ff', '#11141a', 1.8));
  const key = new THREE.DirectionalLight('#dbe7ff', 2.5);
  key.position.set(-0.35, 0.5, 0.8);
  scene.add(key);
  const camera = new THREE.PerspectiveCamera(34, 16 / 9, 0.01, 5);
  camera.position.set(0, 0, 0.67);

  const close = new Button({ title: 'Back to launcher', shape: 'round', text: '', icon: X });
  close.title.visible = close.status.visible = false;
  const closeRestZ = 0.012;
  close.position.set(0.266, 0.142, closeRestZ);
  close.scale.setScalar(0.55);
  close.attach(xrb.interaction);
  const cursor = new THREE.Group();
  const cursorMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthTest: false, depthWrite: false });
  const cursorRing = new THREE.Mesh(new THREE.RingGeometry(0.0043, 0.006, 40), cursorMaterial);
  const cursorDot = new THREE.Mesh(new THREE.CircleGeometry(0.00135, 24), cursorMaterial.clone());
  cursorDot.position.z = 0.0002;
  for (const part of [cursorRing, cursorDot]) { part.renderOrder = 1000; part.raycast = () => {}; }
  cursor.add(cursorRing, cursorDot);
  cursor.position.set(close.position.x, close.position.y, close.position.z + 0.013);
  cursor.visible = false;
  scene.add(close, cursor);

  let leaving = false;
  const leave = () => {
    if (leaving) return;
    leaving = true;
    setTimeout(() => location.assign(returnUrl), 60);
  };
  let pressed = false;
  close.on('click', () => { pressed = true; });
  close.on('release', () => {
    if (!pressed) return;
    pressed = false;
    leave();
  });

  let mouseHover = false;
  let mouseDown = false;
  const hits = [document.createElement('button'), document.createElement('button')];
  hits.forEach((hit, index) => {
    hit.type = 'button';
    hit.tabIndex = -1;
    hit.setAttribute('aria-label', 'Back to launcher');
    Object.assign(hit.style, {
      position: 'fixed', top: '0', width: '160px', height: '140px', zIndex: '1001',
      right: index ? '0' : '50%', padding: '0', border: '0', outline: '0',
      background: 'rgba(0, 0, 0, 0.001)', opacity: '0.001', cursor: 'pointer', touchAction: 'none',
      pointerEvents: 'auto', appearance: 'none', WebkitAppearance: 'none', boxShadow: 'none',
      color: 'transparent', fontSize: '0',
    });
    hit.addEventListener('pointerenter', () => {
      mouseHover = true;
      cursor.visible = true;
    });
    hit.addEventListener('pointerleave', () => {
      mouseHover = false;
      mouseDown = false;
      cursor.visible = false;
    });
    hit.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      mouseHover = true;
      mouseDown = true;
      cursor.visible = true;
      play('press');
    });
    hit.addEventListener('pointerup', () => {
      mouseDown = false;
      play('release');
    });
    hit.addEventListener('pointercancel', () => { mouseDown = false; });
    hit.addEventListener('focus', () => hit.blur());
    hit.addEventListener('click', (event) => {
      event.preventDefault();
      leave();
    });
    document.body.append(hit);
  });

  const sync = () => {
    xrb.setSize();
    const size = xrb.viewSize();
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    hits[0].style.display = xrb.stereo ? 'block' : 'none';
  };
  addEventListener('resize', sync);
  addEventListener('keydown', (event) => { if (event.key === 'Escape') leave(); });
  xrb.onView(sync);
  sync();

  let last = performance.now();
  xrb.setAnimationLoop((now) => {
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    const targetScale = mouseDown ? 0.54 : mouseHover ? 0.565 : 0.55;
    const targetZ = mouseDown ? closeRestZ - 0.004 : closeRestZ;
    const amount = 1 - Math.exp(-dt * 20);
    const scale = THREE.MathUtils.lerp(close.scale.x, targetScale, amount);
    close.scale.setScalar(scale);
    close.position.z = THREE.MathUtils.lerp(close.position.z, targetZ, amount);
    cursor.position.z = close.position.z + 0.013;
    close.update(dt);
    xrb.render(scene, camera);
  });
}
