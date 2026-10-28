import * as THREE from 'three';
import { createGlobeLine, createGlobeLineMaterial } from './globe-lines.js';
import { DEFAULT_GLOBE_LAYER, GLOBE_LAYERS, MARKETS, LEO_MARKETS, shareRows, barHeights } from './globe-layer-data.js';

/** Reference-style country charts, operational routes and illustrative Leo orbits. */
export function createGlobeLayers({ camera, world, geo, radius, nodes, routeGroup, motionPreference }) {
  const group = new THREE.Group();
  group.name = 'globe-data-layers';
  world.add(group);
  const pies = new THREE.Group(), bars = new THREE.Group(), sites = new THREE.Group(), leo = new THREE.Group();
  pies.name = 'market-share-pies'; bars.name = 'country-value-bars'; sites.name = 'aws-region-sites'; leo.name = 'leo-orbits';
  group.add(pies, bars, sites, leo);
  const barMeshes = [], pieMeshes = [], siteMeshes = [], shells = [];
  const pieByMarket = new Map();
  const eye = new THREE.Vector3(), center = new THREE.Vector3(), point = new THREE.Vector3();
  const surfaceNormal = new THREE.Vector3(), towardEye = new THREE.Vector3();
  const barGeometry = new THREE.BoxGeometry(1, 1, 1).translate(0, .5, 0);
  const defaultLayer = GLOBE_LAYERS.find(layer => layer.id === DEFAULT_GLOBE_LAYER);
  const barMaterial = new THREE.MeshStandardMaterial({ color: defaultLayer.color, emissive: defaultLayer.color, emissiveIntensity: .25, roughness: .5 });
  const siteGeometry = new THREE.OctahedronGeometry(.032);
  const siteMaterial = new THREE.MeshBasicMaterial({ color: '#62b6ff' });
  const up = new THREE.Vector3(0, 1, 0);
  const materials = [];
  let active = DEFAULT_GLOBE_LAYER, routesVisible = true, dataVisible = true;
  let revealTime = Infinity, revealing = false;
  const revealProgress = () => THREE.MathUtils.smoothstep(revealTime, 0, 1.2);
  const itemProgress = index => THREE.MathUtils.smoothstep(revealTime - index * .025, 0, 1.1);

  for (const market of MARKETS) {
    const position = geo(market.lat, market.lon);
    const normal = position.clone().normalize();
    const orientation = new THREE.Quaternion().setFromUnitVectors(up, normal);
    const chart = document.createElement('canvas');
    chart.width = chart.height = 256;
    const ctx = chart.getContext('2d');
    let angle = -Math.PI / 2;
    for (const row of shareRows(market)) {
      const end = angle + row.share / 100 * Math.PI * 2;
      ctx.beginPath(); ctx.moveTo(128, 128); ctx.arc(128, 128, 115, angle, end); ctx.closePath();
      ctx.fillStyle = row.color; ctx.fill(); angle = end;
    }
    ctx.beginPath(); ctx.arc(128, 128, 117, 0, Math.PI * 2);
    ctx.strokeStyle = '#e6f4e9'; ctx.lineWidth = 4; ctx.stroke();
    const texture = new THREE.CanvasTexture(chart);
    texture.colorSpace = THREE.SRGBColorSpace;
    // Draw the whole billboard above the sphere; geographic fading replaces depth clipping.
    const pie = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false, fog: false }));
    pie.renderOrder = 1;
    pie.position.copy(position).addScaledVector(normal, .025);
    const size = .18 + Math.sqrt(market.revenue / 470) * .1;
    pie.scale.set(size, size, 1);
    pie.userData.hub = market; pie.userData.baseSize = size;
    pies.add(pie); pieMeshes.push(pie); pieByMarket.set(market.id, pie);

    const bar = new THREE.Mesh(barGeometry, barMaterial);
    bar.position.copy(position); bar.quaternion.copy(orientation); bar.scale.set(.065, .001, .065);
    bar.userData = { hub: market, target: .001, currentHeight: .001, focusVisibility: 1 };
    bars.add(bar); barMeshes.push(bar);
    const stack = new THREE.Group();
    stack.position.copy(geo(market.lat, market.lon + 4)); stack.quaternion.copy(orientation);
    for (let i = 0; i < market.regions; i++) {
      const diamond = new THREE.Mesh(siteGeometry, siteMaterial);
      diamond.position.y = .05 + i * .085; diamond.userData.hub = market;
      stack.add(diamond); siteMeshes.push(diamond);
    }
    sites.add(stack);
  }

  const satelliteGeometry = new THREE.OctahedronGeometry(.03);
  const satelliteMaterial = new THREE.MeshBasicMaterial({ color: '#dac7ff' });
  for (const [index, [factor, inclination, count]] of [[1.3, 51.9, 26], [1.36, 42, 22], [1.42, 33, 14]].entries()) {
    const shell = new THREE.Group(); shell.rotation.x = THREE.MathUtils.degToRad(inclination);
    const satellites = new THREE.Group();
    const orbitRadius = radius * factor;
    for (let i = 0; i < count; i++) {
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial), angle = i / count * Math.PI * 2;
      satellite.position.set(Math.cos(angle) * orbitRadius, 0, Math.sin(angle) * orbitRadius);
      satellites.add(satellite);
    }
    const material = createGlobeLineMaterial('#bb9aff', .48); materials.push(material);
    const points = Array.from({ length: 121 }, (_, i) => new THREE.Vector3(Math.cos(i / 120 * Math.PI * 2) * orbitRadius, 0, Math.sin(i / 120 * Math.PI * 2) * orbitRadius));
    shell.add(createGlobeLine(points, material), satellites); leo.add(shell);
    shells.push({ satellites, speed: .045 + index * .015 });
  }
  const coverage = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.012, 48, 24, 0, Math.PI * 2, THREE.MathUtils.degToRad(34), THREE.MathUtils.degToRad(112)),
    new THREE.MeshBasicMaterial({ color: '#bb9aff', transparent: true, opacity: .045, depthWrite: false }),
  );
  leo.add(coverage);
  const coverageMaterial = new THREE.MeshBasicMaterial({ color: '#ffb445', transparent: true, opacity: .85, side: THREE.DoubleSide, depthWrite: false });
  const coverageGeometry = new THREE.RingGeometry(.11, .125, 40);
  for (const market of MARKETS.filter(market => LEO_MARKETS.includes(market.id))) {
    const ring = new THREE.Mesh(coverageGeometry, coverageMaterial);
    ring.position.copy(geo(market.lat, market.lon, radius * 1.025)); ring.lookAt(ring.position.clone().multiplyScalar(2));
    leo.add(ring);
  }

  const fadingMaterials = new Map();
  function collectMaterial(object) {
    const mat = object.material;
    if (!mat || object.isSprite || fadingMaterials.has(mat)) return;
    fadingMaterials.set(mat, mat.opacity);
    mat.transparent = true;
  }
  group.traverse(collectMaterial); routeGroup.traverse(collectMaterial); nodes.forEach(collectMaterial);
  function applyReveal(focused = null) {
    const amount = revealProgress();
    for (const [mat, base] of fadingMaterials) {
      if (mat.userData.overviewOpacity !== undefined) mat.userData.revealProgress = amount;
      mat.opacity = base * amount;
    }
    barMeshes.forEach((bar, index) => {
      const progress = itemProgress(index) * bar.userData.focusVisibility;
      bar.visible = progress > .001 && bar.userData.hub !== focused;
      bar.scale.y = Math.max(.0001, bar.userData.currentHeight * progress);
    });
    pieMeshes.forEach((pie, index) => {
      const size = pie.userData.baseSize * itemProgress(index);
      pie.scale.set(size, size, 1);
    });
    sites.children.forEach((stack, index) => stack.scale.setScalar(itemProgress(index)));
    if (active === 'share') updatePieVisibility();
  }
  function prepareReveal() {
    revealing = false; revealTime = 0;
    barMeshes.forEach(bar => { bar.userData.currentHeight = bar.userData.target; bar.userData.focusVisibility = 1; });
    applyReveal();
  }
  function finishReveal() { revealing = false; revealTime = Infinity; applyReveal(); }
  function reveal() {
    if (motionPreference.matches) finishReveal();
    else revealing = true;
  }

  function setLayer(id) {
    const layer = GLOBE_LAYERS.find(layer => layer.id === id);
    if (!layer) return false;
    active = id;
    const heights = barHeights(id);
    pies.visible = id === 'share'; bars.visible = Boolean(heights); sites.visible = id === 'ppl'; leo.visible = id === 'leo';
    routeGroup.visible = id === 'flow' && routesVisible && dataVisible;
    barMaterial.color.set(layer.color); barMaterial.emissive.set(layer.color);
    for (const bar of barMeshes) {
      bar.userData.target = heights?.get(bar.userData.hub) ?? .001;
      if (motionPreference.matches) bar.userData.currentHeight = bar.scale.y = bar.userData.target;
    }
    for (const node of nodes) {
      const market = node.userData.hub.kind === 'market';
      node.visible = market ? id !== 'flow' : id === 'flow';
      node.userData.hub.ring.visible = dataVisible && node.visible && id !== 'share';
      // Pies use their own flat outline instead of the dot and surface ring.
      node.material.visible = dataVisible && !(market && id === 'share');
      if (market) {
        node.userData.labelColor = layer.color;
        node.material.color.set(layer.color);
        node.userData.hub.ring.material.color.set(layer.color);
      }
    }
    if (id === 'share') updatePieVisibility();
    return true;
  }
  function setRoutesVisible(visible) {
    routesVisible = visible;
    routeGroup.visible = active === 'flow' && visible && dataVisible;
  }
  function setDataVisible(visible) {
    dataVisible = Boolean(visible);
    group.visible = dataVisible;
    // Node visibility still identifies which layer's labels should be shown;
    // hide only the rendered marker material and ring, not its label anchor.
    setLayer(active);
  }
  function updatePieVisibility() {
    camera.getWorldPosition(eye);
    world.getWorldPosition(center);
    for (const pie of pieMeshes) {
      pie.getWorldPosition(point);
      const facing = surfaceNormal.subVectors(point, center).normalize()
        .dot(towardEye.subVectors(eye, point).normalize());
      // Use the perspective horizon, not distance to the camera: this works while
      // rotating, zooming or focusing a city and does not expose far-side markers.
      pie.material.opacity = THREE.MathUtils.smoothstep(facing, 0, .45) * revealProgress();
      pie.visible = pie.material.opacity > .001;
    }
  }
  function update(delta, time, focused = null) {
    if (revealing) {
      revealTime += Math.max(0, delta);
      if (motionPreference.matches || revealTime >= 1.5) { revealing = false; revealTime = Infinity; }
    }
    for (const bar of barMeshes) {
      bar.userData.currentHeight = motionPreference.matches ? bar.userData.target : THREE.MathUtils.damp(bar.userData.currentHeight, bar.userData.target, 8, delta);
      // A focused bar stays out of the way. Once the camera returns, restore
      // its height from the surface instead of exposing a full-size extrusion.
      bar.userData.focusVisibility = bar.userData.hub === focused ? 0 : motionPreference.matches ? 1 : THREE.MathUtils.damp(bar.userData.focusVisibility, 1, 6, delta);
      if (bar.userData.focusVisibility > .999) bar.userData.focusVisibility = 1;
    }
    applyReveal(focused);
    if (active === 'leo' && !motionPreference.matches) {
      for (const { satellites, speed } of shells) satellites.rotation.y = time * speed;
    }
  }
  setLayer(active);
  return { group, materials, setLayer, setRoutesVisible, setDataVisible, prepareReveal, reveal, finishReveal, update,
    get revealProgress() { return revealProgress(); },
    markerOpacity(market) { return active === 'share' ? (pieByMarket.get(market.id)?.material.opacity ?? 1) : 1; },
    get active() { return active; },
    get pickables() { return !dataVisible || revealProgress() <= .001 ? [] : active === 'share' ? pieMeshes.filter(pie => pie.visible && pie.material.opacity > .05) : active === 'ppl' ? [...barMeshes.filter(bar => bar.visible), ...siteMeshes] : bars.visible ? barMeshes.filter(bar => bar.visible) : []; },
  };
}
