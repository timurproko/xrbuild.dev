import {
  ACESFilmicToneMapping, Box3, CanvasTexture, Color, Group, HalfFloatType, HemisphereLight, Mesh, MeshBasicMaterial,
  MeshPhysicalMaterial, PerspectiveCamera, PlaneGeometry, Scene, SRGBColorSpace, Vector2, Vector3,
  WebGLRenderer, WebGLRenderTarget,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { createStudio } from './studio.js';
import { createCoating, addCoatingCoordinates } from './coating.js';
import modelUrl from './assets/optical-glasses.glb?url';

const stage = document.querySelector('.scene-stage');
const hero = document.querySelector('.hero');
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const capture = new URLSearchParams(location.search).has('capture');
const FIELD = '#0b0c0e';
const FOV = 32;
const BACKDROP_DEPTH = 9;

// Framing per orientation: where the eyewear sits in normalized screen space,
// how much of the viewport width it spans and the camera's constant distance,
// so perspective is identical on every screen and only the crop changes.
function framing(width, height) {
  const aspect = width / height;
  if (aspect < .95) return { anchor: [.3, .18], span: .98, distance: 13.5, yaw: -.46, pitch: -.1, glow: [.24, .18] };
  if (aspect < 1.35) return { anchor: [.66, .22], span: .6, distance: 16, yaw: -.5, pitch: -.18, glow: [.7, .12] };
  // Below 1200px the headline grows relative to the viewport, so the eyewear moves further right.
  const narrow = width < 1200;
  if (height < 620) return { anchor: [narrow ? .72 : .6, .02], span: narrow ? .46 : .5, distance: 16.5, yaw: -.46, pitch: -.18, glow: [narrow ? .74 : .66, -.02] };
  return { anchor: [narrow ? .7 : .58, .04], span: width > 2000 ? .4 : narrow ? .46 : .5, distance: 16.5, yaw: -.46, pitch: -.18, glow: [narrow ? .72 : .66, .02] };
}

// The light behind the eyewear lives in the scene: lenses transmit it, the
// no-WebGL still inherits it and it never tints the typography.
function createBackdrop() {
  const size = 512;
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
  const context = canvas.getContext('2d');
  const texture = new CanvasTexture(canvas); texture.colorSpace = SRGBColorSpace;
  const material = new MeshBasicMaterial({ map: texture, toneMapped: false });
  const mesh = new Mesh(new PlaneGeometry(1, 1), material);
  function paint(u, v) {
    const x = u * size, y = (1 - v) * size;
    context.fillStyle = FIELD; context.fillRect(0, 0, size, size);
    const cool = context.createRadialGradient(x, y, 0, x, y, size * .38);
    cool.addColorStop(0, 'rgba(104, 134, 170, .78)'); cool.addColorStop(.4, 'rgba(70, 90, 118, .3)'); cool.addColorStop(1, 'rgba(11, 12, 14, 0)');
    context.fillStyle = cool; context.fillRect(0, 0, size, size);
    const warm = context.createRadialGradient(x - size * .07, y + size * .08, 0, x - size * .07, y + size * .08, size * .18);
    warm.addColorStop(0, 'rgba(178, 132, 170, .26)'); warm.addColorStop(1, 'rgba(11, 12, 14, 0)');
    context.fillStyle = warm; context.fillRect(0, 0, size, size);
    texture.needsUpdate = true;
  }
  return { mesh, texture, material, paint };
}

function fallback() {
  document.documentElement.classList.remove('has-scene');
  document.documentElement.classList.add('no-webgl');
  if (stage) stage.dataset.state = 'fallback';
}

async function start() {
  if (!stage || !hero) return;
  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power', preserveDrawingBuffer: capture }); }
  catch { fallback(); return; }
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  const scene = new Scene();
  scene.background = new Color(FIELD);
  const camera = new PerspectiveCamera(FOV, 1, .1, 100);
  scene.add(new HemisphereLight(0xeef3f7, 0x1b1e23, .2));
  const results = await Promise.allSettled([createStudio(renderer), new GLTFLoader().loadAsync(modelUrl)]);
  if (results.some(result => result.status !== 'fulfilled')) {
    if (results[0].status === 'fulfilled') results[0].value.dispose();
    renderer.dispose(); fallback(); return;
  }
  const environment = results[0].value;
  scene.environment = environment.texture;
  scene.environmentRotation.y = -.55;
  const model = results[1].value.scene;
  const bounds = new Box3().setFromObject(model);
  model.position.sub(bounds.getCenter(new Vector3()));
  const normalized = new Group();
  normalized.add(model); normalized.scale.setScalar(8 / bounds.getSize(new Vector3()).x);
  const sculpture = new Group(); sculpture.add(normalized); scene.add(sculpture);
  const backdrop = createBackdrop(); scene.add(backdrop.mesh);

  const geometryCache = new Set(), materialCache = new Set(), textureCache = new Set();
  const coating = createCoating(); textureCache.add(coating); textureCache.add(backdrop.texture);
  const titanium = new MeshPhysicalMaterial({ color: 0xb3bcc6, metalness: 1, roughness: .15, clearcoat: .7, envMapIntensity: 1.15, iridescence: .9, iridescenceIOR: 1.8, iridescenceThicknessRange: [110, 650], iridescenceThicknessMap: coating });
  const acetate = new MeshPhysicalMaterial({ color: 0x252b32, metalness: .12, roughness: .23, clearcoat: .8, clearcoatRoughness: .12 });
  const nosepad = new MeshPhysicalMaterial({ color: 0xe6eff2, transmission: .94, thickness: .001, ior: 1.45, roughness: .1 });
  const lens = new MeshPhysicalMaterial({
    color: 0xeaf0f5, transmission: .96, thickness: .0014, ior: 1.46,
    roughness: .055, metalness: 0, clearcoat: .7, clearcoatRoughness: .065,
    iridescence: 1, iridescenceIOR: 1.8, iridescenceThicknessRange: [110, 650], iridescenceThicknessMap: coating, envMapIntensity: 1.15,
  });
  [titanium, acetate, nosepad, lens, backdrop.material].forEach(material => materialCache.add(material));
  geometryCache.add(backdrop.mesh.geometry);
  // Geometry is licensed; original branded textures are not used in the study.
  model.traverse(node => {
    if (!node.isMesh) return;
    geometryCache.add(node.geometry);
    for (const material of Array.isArray(node.material) ? node.material : [node.material]) {
      materialCache.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) textureCache.add(value);
    }
    if (/Interior/i.test(node.name)) { node.visible = false; return; }
    addCoatingCoordinates(node.geometry);
    node.material = /Lens/i.test(node.name) ? lens : /Earhook/i.test(node.name) ? acetate : /Nose/i.test(node.name) ? nosepad : titanium;
  });

  const target = new WebGLRenderTarget(1, 1, { type: HalfFloatType, samples: Math.min(4, renderer.capabilities.maxSamples) });
  const composer = new EffectComposer(renderer, target);
  const passes = [new RenderPass(scene, camera), new OutputPass(), new ShaderPass(FXAAShader)];
  passes.forEach(pass => composer.addPass(pass));
  const canvas = renderer.domElement; canvas.setAttribute('aria-hidden', 'true'); stage.prepend(canvas);
  let frame = 0, phaseMs = 0, lastDraw = 0, lastTick = 0, visible = true, disposed = false;
  let renderCount = 0;
  let baseRotation = [-.18, -.46, -.23];
  const anchorWorld = new Vector3();
  // Pointer parallax: a few degrees of lean toward the cursor, eased per frame.
  const pointerTarget = new Vector2(), pointer = new Vector2();
  function pointerMove(event) {
    if (!finePointer.matches || event.pointerType === 'touch') return;
    pointerTarget.set(event.clientX / innerWidth * 2 - 1, -(event.clientY / innerHeight * 2 - 1));
  }
  function pointerLeave() { pointerTarget.set(0, 0); }

  function draw() {
    if (disposed) return;
    const seconds = phaseMs / 1000;
    coating.offset.set(seconds * .012 % 1, seconds * .007 % 1);
    stage.dataset.coating = coating.offset.toArray().map(value => value.toFixed(6)).join(',');
    pointer.lerp(pointerTarget, .08);
    sculpture.rotation.set(
      baseRotation[0] + Math.sin(seconds * Math.PI * 2 / 22) * .012 - pointer.y * .07,
      baseRotation[1] + Math.sin(seconds * Math.PI * 2 / 28) * .026 + pointer.x * .1,
      baseRotation[2] + pointer.x * .015,
    );
    composer.render();
    stage.dataset.rotation = sculpture.rotation.toArray().slice(0, 3).map(value => value.toFixed(6)).join(',');
    stage.dataset.renderCount = String(++renderCount);
  }
  function eligible() { return !disposed && visible && !document.hidden && !motion.matches && !capture; }
  function animate(now) {
    frame = 0;
    if (!eligible()) { stage.dataset.animating = 'false'; return; }
    // Active elapsed time only: hidden tabs cannot accumulate a resume jump.
    phaseMs += Math.min(Math.max(now - lastTick, 0), 70);
    lastTick = now;
    const elapsed = now - lastDraw;
    if (elapsed >= 1000 / 30) {
      lastDraw = now - elapsed % (1000 / 30);
      draw();
    }
    frame = requestAnimationFrame(animate);
  }
  function refresh() {
    cancelAnimationFrame(frame); frame = 0;
    lastDraw = lastTick = performance.now();
    stage.dataset.animating = String(eligible());
    if (eligible()) frame = requestAnimationFrame(animate);
  }
  function resize() {
    if (disposed) return;
    const { width, height } = stage.getBoundingClientRect();
    if (!width || !height) return;
    const { anchor, span, distance, yaw, pitch, glow } = framing(width, height);
    camera.aspect = width / height;
    camera.position.set(0, 0, distance);
    camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
    const halfHeight = distance * Math.tan(FOV / 2 * Math.PI / 180), halfWidth = halfHeight * camera.aspect;
    // Eight world units of eyewear width spans `span` of the viewport width.
    sculpture.scale.setScalar(span * halfWidth * 2 / 8);
    anchorWorld.set(anchor[0] * halfWidth, anchor[1] * halfHeight, 0);
    sculpture.position.copy(anchorWorld);
    baseRotation = [pitch, yaw, -.23];
    // The backdrop is a square far enough back to cover any aspect ratio; the
    // glow is painted where the eyewear anchors.
    const depth = distance + BACKDROP_DEPTH;
    const backHalfHeight = depth * Math.tan(FOV / 2 * Math.PI / 180), backHalfWidth = backHalfHeight * camera.aspect;
    const side = Math.max(backHalfWidth, backHalfHeight) * 2.1;
    backdrop.mesh.position.set(0, 0, -BACKDROP_DEPTH);
    backdrop.mesh.scale.setScalar(side);
    backdrop.paint(.5 + glow[0] * backHalfWidth / side, .5 + glow[1] * backHalfHeight / side);
    const ratio = Math.min(devicePixelRatio || 1, 1.75, Math.sqrt(4_000_000 / (width * height)));
    renderer.setPixelRatio(ratio); renderer.setSize(width, height, false);
    composer.setPixelRatio(ratio); composer.setSize(width, height);
    passes[2].uniforms.resolution.value.set(1 / (width * ratio), 1 / (height * ratio));
    stage.dataset.camera = camera.position.toArray().join(',');
    draw();
  }
  const sizeObserver = new ResizeObserver(resize);
  const visibilityObserver = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; refresh(); });
  function restore() { resize(); refresh(); }
  function pageHide(event) { if (event.persisted) { cancelAnimationFrame(frame); frame = 0; } else dispose(); }
  function dispose() {
    if (disposed) return;
    disposed = true; cancelAnimationFrame(frame);
    sizeObserver.disconnect(); visibilityObserver.disconnect();
    document.removeEventListener('visibilitychange', refresh);
    motion.removeEventListener('change', refresh);
    window.removeEventListener('pageshow', restore);
    window.removeEventListener('pagehide', pageHide);
    window.removeEventListener('pointermove', pointerMove);
    document.removeEventListener('pointerleave', pointerLeave);
    geometryCache.forEach(geometry => geometry.dispose()); materialCache.forEach(material => material.dispose());
    textureCache.forEach(texture => texture.dispose());
    environment.dispose(); passes.forEach(pass => pass.dispose?.()); composer.dispose(); renderer.dispose(); canvas.remove();
  }
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); dispose(); fallback(); }, { once: true });
  document.addEventListener('visibilitychange', refresh);
  motion.addEventListener('change', refresh);
  window.addEventListener('pageshow', restore);
  window.addEventListener('pagehide', pageHide);
  window.addEventListener('pointermove', pointerMove, { passive: true });
  document.addEventListener('pointerleave', pointerLeave);
  if (import.meta.hot) import.meta.hot.dispose(dispose);
  sizeObserver.observe(stage); visibilityObserver.observe(hero);
  resize();
  await new Promise(resolve => requestAnimationFrame(resolve));
  draw();
  document.documentElement.classList.remove('no-webgl'); document.documentElement.classList.add('has-scene');
  stage.dataset.state = 'ready';
  refresh();
}
start().catch(fallback);
