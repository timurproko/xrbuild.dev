import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';
import './cinematic.css';
import './area-navigation.css';
import './ui-scale.css';
import { updateMarkerRing } from './marker-selection.js';
import { createDepthBackdrop } from './depth-backdrop.js';
import { createGlobeGraticule } from './globe-graticule.js';
import { createGlobeSurfaceMaterial } from './globe-surface.js';
import { createGlobeLandMask } from './globe-land-mask.js';
import { createGlobeAtmosphere } from './globe-atmosphere.js';
import { extendGlobeViewport } from './globe-viewport.js';
import earthTextureUrl from './data/earth-blue-marble.webp';
import { createGlobeCoastlines } from './globe-coastlines.js';
import { decodeLand, isLandAt } from './land-geography.js';
import landTopology from './data/land-110m.json';
import { playControlFeedback, playActionFeedback } from './control-feedback.js';
import { createDeliveryIntro } from './intro.js';
import { createSidebarExchange } from './sidebar-exchange.js';
import { attachGalleryDrag } from './gallery-drag.js';
import { createCityFocus } from './city-focus.js';
import { createGlobeLabels } from './globe-labels.js';
import { createCountUp } from './count-up.js';
import { getNetworkOverviewOffset } from './network-overview.js';
import { createGlobeLine, createGlobeLineMaterial, updateGlobeLineDetail } from './globe-lines.js';
import { DEFAULT_GLOBE_LAYER, GLOBE_LAYERS, MARKETS, marketDetails } from './globe-layer-data.js';
import { createGlobeLayers } from './globe-layers.js';
import { createAreaNavigation, NAVIGATION_AREAS } from './area-navigation.js';
import { createReferenceRooms } from './reference-rooms.js';
import { inXrbHost, setupXrb, xrbStereo } from './xrb-mode.js';
import { setupIcon } from './xrb-icon.js';
import { createGlobeHands } from './globe-hands.js';

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

const icon = (name, size = 16) => {
  const icons = {
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z"/>',
    grid: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
    box: '<path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z"/><path d="M12 11v10"/>',
    truck: '<path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    bolt: '<path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a2 2 0 0 0 .4 2.2l.1.1-2.6 2.6-.1-.1a2 2 0 0 0-2.2-.4 2 2 0 0 0-1.2 1.8V21h-3.6v-.2A2 2 0 0 0 9 19a2 2 0 0 0-2.2.4l-.1.1-2.6-2.6.1-.1A2 2 0 0 0 4.6 15a2 2 0 0 0-1.8-1.2H3v-3.6h.2A2 2 0 0 0 5 9a2 2 0 0 0-.4-2.2l-.1-.1 2.6-2.6.1.1A2 2 0 0 0 9 4.6a2 2 0 0 0 1.2-1.8V3h3.6v.2A2 2 0 0 0 15 5a2 2 0 0 0 2.2-.4l.1-.1 2.6 2.6-.1.1a2 2 0 0 0-.4 2.2 2 2 0 0 0 1.8 1.2h.2v3.6h-.2A2 2 0 0 0 19.4 15Z"/>',
    layers: '<path d="m12 3-9 5 9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    fullscreen: '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
};
const spark = (points) => `<svg class="spark" width="62" height="28" viewBox="0 0 62 28"><path d="${points}" fill="none" stroke="#9fe870" stroke-width="1.4"/><path d="M0 27H62" stroke="rgba(255,255,255,.08)"/></svg>`;

const brandMarkup = `<div class="brand"><div class="brand-mark">a</div><div class="brand-copy"><strong>Global Operations</strong><span>Intelligence Center</span></div></div>`;

document.querySelector('#app').innerHTML = `
<div class="app-shell is-intro">
  <div class="dashboard-plane">
  <canvas class="depth-backdrop" aria-hidden="true"></canvas>
  <section class="intro-overlay" aria-label="Opening delivery sequence">
    <div class="intro-footer"><div id="intro-step" role="status" aria-live="polite">01 / STARTING</div><div class="intro-timeline" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div>
  </section>
  <header class="topbar">
    <div class="header-identity">
      ${brandMarkup}
      <h1 class="header-menu"><button type="button" class="title-menu-trigger" id="open-area-menu" aria-haspopup="dialog" aria-controls="area-menu" aria-expanded="false"><svg class="title-menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${NAVIGATION_AREAS.find(area => area.id === 'overview').icon}"/></svg><span class="title-menu-copy"><span>Control Center</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m5 9 7 7 7-7"/></svg></button></h1>
    </div>
    <div class="globe-layer-selector" role="group" aria-label="Globe layers"><div class="globe-layer-options">${GLOBE_LAYERS.map(layer=>`<button type="button" class="globe-layer-button" data-layer="${layer.id}" aria-pressed="${layer.id===DEFAULT_GLOBE_LAYER}" style="--layer-accent:${layer.color}">${layer.label}</button>`).join('')}</div></div>
    <div class="top-actions"><button class="replay-button" id="replay-intro" aria-label="Reload">â†» <span>Reload</span></button></div>
  </header>
  <main class="workspace">
    <div class="globe-stage"><canvas id="scene"></canvas><div class="city-labels" hidden></div></div>
    <div class="map-controls"><button class="control-button" id="zoom-in" aria-label="Zoom in">+</button><button class="control-button" id="zoom-out" aria-label="Zoom out">âˆ’</button><button class="control-button" id="reset-view" aria-label="Reset globe view">${icon('fullscreen',14)}</button><button class="control-button" id="toggle-lines" aria-label="Show globe data visualizations and meridians" aria-pressed="true">${icon('layers',14)}</button></div>
    <aside class="stats-panel sidebar-panel">
      <div class="panel-head"><h2>Network Health</h2></div>
      <div class="network-health-body" role="region" aria-label="Network health metrics" tabindex="0">
      <div class="overall"><div class="overall-label"><span>Composite score</span><b>Optimal</b></div><div class="overall-value"><span data-count="94.7">94.7</span><small>/ 100</small></div><div class="progress-track"><div></div></div></div>
      <div class="metrics">
        <div class="metric"><div><div class="metric-name">Customer promise</div><div class="metric-meta">On-time delivery</div></div><div class="metric-value"><span data-count="96.4">96.4</span>%<span class="trend">â†‘ 1.2%</span></div></div>
        <div class="metric"><div><div class="metric-name">Fulfillment velocity</div><div class="metric-meta">Orders / minute</div></div><div class="metric-value"><span data-count="41.8">41.8</span>K<span class="trend">â†‘ 4.7%</span></div></div>
        <div class="metric"><div><div class="metric-name">Capacity utilization</div><div class="metric-meta">Global average</div></div><div class="metric-value"><span data-count="82.1">82.1</span>%<span class="trend down">â†“ 0.8%</span></div></div>
        <div class="metric"><div><div class="metric-name">Active incidents</div><div class="metric-meta">Priority 1â€“2</div></div><div class="metric-value"><span data-count="03">03</span><span class="trend down">+1 today</span></div></div>
      </div>
      </div>
      <div class="panel-foot"><button class="drill-button" id="open-analytics-1">Full report â†—</button><span>UPDATED 12 SEC AGO</span></div>
    </aside>
    <aside class="hub-detail sidebar-panel" id="hub-detail" hidden inert aria-label="Selected region">
      <div class="hub-top"><div><div class="hub-code" id="hub-code">REGION Â· NA-EAST</div><h3 id="hub-name">New York Metro</h3><div class="hub-location" id="hub-location">40.7Â° N, 74.0Â° W Â· 23 facilities</div></div><button class="control-button close-detail" id="close-detail" aria-label="Close region details">${icon('close',20)}</button></div>
      <div class="hub-grid"><div class="hub-stat"><b id="hub-volume">6.8M</b><span id="hub-volume-label">Daily units</span></div><div class="hub-stat"><b id="hub-ontime">97.2%</b><span id="hub-ontime-label">On time</span></div><div class="hub-stat"><b id="hub-capacity">84%</b><span id="hub-capacity-label">Capacity</span></div></div>
      <button class="drill-button" id="drill-button">Open regional command view â†—</button>
    </aside>
    <section class="bottom-strip gallery-strip" aria-label="Live portfolio gallery">
      <div class="gallery-caption"><small id="gallery-count" aria-live="polite">01 / 06</small></div>
      <button class="gallery-arrow control-button" id="gallery-prev" aria-label="Previous metric">â€¹</button>
      <div class="kpi-gallery is-3d" id="kpi-gallery" role="group" aria-label="Performance cards. Drag left or right to browse.">
        <button class="kpi active" data-metric="Gross sales"><span class="kpi-label">Gross sales</span><span class="kpi-value">$1.84B <i class="kpi-change">+6.2%</i></span>${spark('M0 20 L9 17 L16 19 L24 10 L32 13 L40 7 L48 9 L61 2')}</button>
        <button class="kpi" data-metric="Units shipped"><span class="kpi-label">Units shipped</span><span class="kpi-value">29.7M <i class="kpi-change">+3.8%</i></span>${spark('M0 22 L8 21 L15 15 L23 18 L31 12 L39 14 L47 6 L61 8')}</button>
        <button class="kpi" data-metric="Promise accuracy"><span class="kpi-label">Promise accuracy</span><span class="kpi-value">96.4% <i class="kpi-change">+1.2%</i></span>${spark('M0 18 L8 17 L16 18 L24 15 L32 16 L40 11 L48 10 L61 6')}</button>
        <button class="kpi" data-metric="Carbon intensity"><span class="kpi-label">Carbon intensity</span><span class="kpi-value">84.2 <i class="kpi-change">âˆ’5.1%</i></span>${spark('M0 5 L8 8 L16 7 L24 13 L32 11 L40 16 L48 15 L61 21')}</button>
        <button class="kpi" data-metric="Network capacity"><span class="kpi-label">Network capacity</span><span class="kpi-value">82.1% <i class="kpi-change">+2.4%</i></span>${spark('M0 19 L8 16 L16 18 L24 12 L32 14 L40 8 L48 10 L61 4')}</button>
        <button class="kpi alert-card" data-metric="Active exceptions"><span class="kpi-label">Active exceptions</span><span class="kpi-value">03 <i class="kpi-change">+1 today</i></span>${spark('M0 21 L8 21 L16 15 L24 19 L32 10 L40 14 L48 8 L61 11')}</button>
      </div>
      <button class="gallery-arrow control-button" id="gallery-next" aria-label="Next metric">â€º</button>
    </section>
  </main>
  </div>
    <section class="analytics-drawer" id="analytics-drawer" inert role="dialog" aria-modal="true" aria-labelledby="analytics-title">
      <div class="drawer-head"><div><h2 id="analytics-title">Global Performance Analytics</h2><p>Cross-network performance Â· trailing 24 hours</p></div><button class="control-button drawer-close" id="drawer-close" aria-label="Close full report">${icon('close',20)}</button></div>
      <div class="drawer-grid">
        <article class="chart-card"><div class="card-title"><h3>Order velocity vs. plan</h3><span>HOURLY Â· UTC</span></div><svg class="chart-large" viewBox="0 0 650 240" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fe870" stop-opacity=".22"/><stop offset="1" stop-color="#9fe870" stop-opacity="0"/></linearGradient></defs><g stroke="rgba(255,255,255,.08)"><path d="M0 40H650M0 90H650M0 140H650M0 190H650"/></g><path d="M0 200 C50 190,60 170,100 176 S160 120,210 142 S275 95,320 110 S390 50,430 72 S500 42,540 57 S610 28,650 38 L650 230 L0 230Z" fill="url(#area)"/><path d="M0 200 C50 190,60 170,100 176 S160 120,210 142 S275 95,320 110 S390 50,430 72 S500 42,540 57 S610 28,650 38" fill="none" stroke="#9fe870" stroke-width="2"/><path d="M0 193 C90 185 120 160 190 152 S280 128 360 110 S470 83 650 54" fill="none" stroke="#82988f" stroke-width="1" stroke-dasharray="5 6"/></svg></article>
        <article class="chart-card"><div class="card-title"><h3>Regional throughput</h3><span>UNITS / HR</span></div><div class="bar-list"><div><div class="bar-row-label">North America <span>14.8M</span></div><div class="bar-line"><i style="width:93%"></i></div></div><div><div class="bar-row-label">Europe <span>8.2M</span></div><div class="bar-line"><i style="width:72%"></i></div></div><div><div class="bar-row-label">Asia Pacific <span>7.1M</span></div><div class="bar-line"><i style="width:64%"></i></div></div><div><div class="bar-row-label">LATAM <span>3.4M</span></div><div class="bar-line"><i style="width:39%"></i></div></div><div><div class="bar-row-label">MENA <span>1.9M</span></div><div class="bar-line"><i style="width:25%"></i></div></div></div></article>
        <article class="chart-card"><div class="card-title"><h3>Exceptions requiring attention</h3><span>03 ACTIVE</span></div><div class="risk-list"><div class="risk-item"><i style="background:#ff756b"></i><div>Weather constraint<span> Â· US Southeast</span></div><b>P1</b></div><div class="risk-item"><i style="background:#ffb445"></i><div>Linehaul capacity<span> Â· DE Central</span></div><b>P2</b></div><div class="risk-item"><i style="background:#ffb445"></i><div>Inventory imbalance<span> Â· JP East</span></div><b>P2</b></div><div class="risk-item"><i style="background:#6aa799"></i><div>Port congestion<span> Â· UK South</span></div><b>WATCH</b></div></div></article>
      </div>
    </section>
</div>`;

const depthBackdrop = createDepthBackdrop({ canvas: document.querySelector('.depth-backdrop'), motionPreference });
const canvas = document.querySelector('#scene');
// MSAA off in XR Build mode: it is the biggest GPU cost at side-by-side resolution.
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !inXrbHost, alpha: true });
renderer.setPixelRatio(1); // Updated responsively in resize() to cap the render budget at 4K.
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x061512, 0.045);
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
const xrb = setupXrb({ renderer, canvas, scene });
let globeViewport={width:1,height:1,x:0,y:0};
camera.position.set(-.45, .8, 8.2);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = .12; controls.enablePan = false;
controls.minDistance = 3.4; controls.maxDistance = 11; controls.rotateSpeed = .45; controls.zoomSpeed = .7;
controls.minPolarAngle = .22; controls.maxPolarAngle = Math.PI - .22;
controls.autoRotate = !motionPreference.matches; controls.autoRotateSpeed = .16;

const world = new THREE.Group();
// XR Build: the dashboard panels are hidden, so the globe sits in the middle of the panel.
world.position.x = inXrbHost ? 0 : -.45; scene.add(world);
controls.target.copy(world.position);
camera.lookAt(controls.target);
const R = 2.28;
// Icon render (xrb-host --render-icon): the 3D icon (icon.js) alone becomes the app icon.
const appIcon = setupIcon();
const landPolygons=decodeLand(landTopology);
const landMask=createGlobeLandMask(landPolygons);
const earthMap=new THREE.TextureLoader().load(earthTextureUrl,()=>{globe.material.uniforms.detailStrength.value=1;},undefined,()=>{console.warn('Earth detail texture unavailable; retaining the geographic land fill.');});
earthMap.colorSpace=THREE.SRGBColorSpace; earthMap.wrapS=THREE.RepeatWrapping;
earthMap.anisotropy=landMask.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
const globe = new THREE.Mesh(new THREE.SphereGeometry(R,72,72),createGlobeSurfaceMaterial({landMask,earthMap}));
globe.material.uniforms.detailStrength.value=0;
world.add(globe);

const gridMaterial = createGlobeLineMaterial(0x4f8a78, .18 * 1.15);
const goodsFlowColor = GLOBE_LAYERS.find(layer => layer.id === 'flow').color;
const routeMaterial = createGlobeLineMaterial(goodsFlowColor, .25);
const alertRouteMaterial = createGlobeLineMaterial(goodsFlowColor, .52);
const globeLineMaterials = [gridMaterial, routeMaterial, alertRouteMaterial];
const graticule = createGlobeGraticule(R, gridMaterial);
world.add(graticule);

const landPoints=[];
for(let lat=-82,row=0;lat<=82;lat+=2.1,row++)for(let lon=-180,column=0;lon<180;lon+=2.1,column++){
  if(isLandAt(landPolygons,lat,lon)&&(row*31+column*17)%19>2){
    const point=geo(lat,lon,R*1.006);landPoints.push(point.x,point.y,point.z);
  }
}
const coastlineMaterial=createGlobeLineMaterial(0x87adc4,.42);
const coastlines=createGlobeCoastlines(landPolygons,geo,R*1.004,coastlineMaterial);
world.add(coastlines);globeLineMaterials.push(coastlineMaterial);
const landGeo=new THREE.BufferGeometry(); landGeo.setAttribute('position',new THREE.Float32BufferAttribute(landPoints,3));
const landDotSize=.018;
const landMaterial = new THREE.PointsMaterial({color:0x8bb8a8,size:landDotSize,transparent:true,opacity:.58,sizeAttenuation:true});
world.add(new THREE.Points(landGeo,landMaterial));
const globeAtmospheres=[];
let atmosphereTime=0,atmosphereRevealing=false;
for(const [name,factor,opacity,falloff] of [['inner',1.026,.82,3.5],['outer',1.075,.22,2.8]]){
  const atmosphere=createGlobeAtmosphere(R*factor,{opacity,falloff});
  atmosphere.name=`globe-${name}-atmosphere`;world.add(atmosphere);globeAtmospheres.push(atmosphere);
}
scene.add(new THREE.HemisphereLight(0x7be4c6,0x03100d,1.2));
const light=new THREE.DirectionalLight(0xb6ffe8,1.4);light.position.set(-3,4,6);scene.add(light);

function geo(lat,lon,radius=R*1.02){const phi=THREE.MathUtils.degToRad(90-lat),theta=THREE.MathUtils.degToRad(lon);return new THREE.Vector3(-radius*Math.sin(phi)*Math.cos(theta),radius*Math.cos(phi),radius*Math.sin(phi)*Math.sin(theta));}
const hubs=[
  {name:'Seattle Gateway',code:'NA-WEST Â· SEA',lat:47.61,lon:-122.33,facilities:18,volume:'5.4M',ontime:'98.1%',capacity:'79%',status:'ok'},
  {name:'New York Metro',code:'NA-EAST Â· JFK',lat:40.71,lon:-74,facilities:23,volume:'6.8M',ontime:'97.2%',capacity:'84%',status:'ok'},
  {name:'SÃ£o Paulo',code:'LATAM Â· GRU',lat:-23.55,lon:-46.63,facilities:12,volume:'2.1M',ontime:'94.8%',capacity:'81%',status:'watch'},
  {name:'London South',code:'EU-WEST Â· LHR',lat:51.5,lon:-.12,facilities:16,volume:'4.6M',ontime:'96.4%',capacity:'86%',status:'ok'},
  {name:'Frankfurt Central',code:'EU-CENTRAL Â· FRA',lat:50.11,lon:8.68,facilities:19,volume:'5.1M',ontime:'92.9%',capacity:'91%',status:'watch'},
  {name:'Cape Town',code:'AF-SOUTH Â· CPT',lat:-33.92,lon:18.42,facilities:7,volume:'980K',ontime:'95.1%',capacity:'73%',status:'ok'},
  {name:'Dubai Gateway',code:'MENA Â· DXB',lat:25.2,lon:55.27,facilities:11,volume:'2.7M',ontime:'96.8%',capacity:'77%',status:'ok'},
  {name:'Mumbai Metro',code:'AP-SOUTH Â· BOM',lat:19.07,lon:72.88,facilities:21,volume:'5.9M',ontime:'95.7%',capacity:'88%',status:'ok'},
  {name:'Singapore Hub',code:'AP-SE Â· SIN',lat:1.35,lon:103.82,facilities:14,volume:'3.4M',ontime:'98.4%',capacity:'82%',status:'ok'},
  {name:'Tokyo East',code:'AP-NE Â· NRT',lat:35.67,lon:139.65,facilities:17,volume:'4.9M',ontime:'93.6%',capacity:'89%',status:'watch'},
  {name:'Sydney Network',code:'AP-SOUTH Â· SYD',lat:-33.86,lon:151.2,facilities:10,volume:'1.8M',ontime:'97.7%',capacity:'76%',status:'ok'}
];
const globeLocations = [...hubs, ...MARKETS];
const overviewOffset = getNetworkOverviewOffset(MARKETS.map(market => geo(market.lat, market.lon)));
const getOverviewOffset = () => overviewOffset.clone().applyQuaternion(world.quaternion);
function getDeliveryPoint(){
  const positions=landGeo.getAttribute('position'),point=new THREE.Vector3(),closest=new THREE.Vector3();
  let best=-Infinity;
  for(let index=0;index<positions.count;index++){
    point.fromBufferAttribute(positions,index);
    const score=point.dot(overviewOffset);
    if(score>best){best=score;closest.copy(point);}
  }
  return closest;
}
const backdropDirection = new THREE.Vector3(), backdropWorldRotation = new THREE.Quaternion(), backdropCenter = new THREE.Vector3();
function getBackdropView() {
  // Globe-local eye direction follows both OrbitControls and city-focus rotation,
  // but ignores zoom distance so dollying does not stretch the background.
  world.getWorldQuaternion(backdropWorldRotation).invert();
  backdropDirection.copy(camera.position).sub(world.position).applyQuaternion(backdropWorldRotation).normalize();
  return { yaw: Math.atan2(backdropDirection.x, backdropDirection.z), pitch: Math.asin(THREE.MathUtils.clamp(backdropDirection.y, -1, 1)) };
}
function getBackdropGlobe() {
  camera.updateMatrixWorld();
  backdropCenter.copy(world.position).project(camera);
  const workspace = canvas.parentElement.parentElement;
  const distance = camera.position.distanceTo(world.position);
  return {
    x: workspace.offsetLeft + globeViewport.x + (backdropCenter.x + 1) * globeViewport.width / 2,
    y: (1 - backdropCenter.y) * globeViewport.height / 2,
    // Perspective silhouette radius, including camera zoom and the lens shift
    // used to frame a selected country next to its details panel.
    radius: globeViewport.height * .5 * camera.projectionMatrix.elements[5] * R / Math.sqrt(Math.max(.001, distance * distance - R * R)),
  };
}
// Share the exact status palette between globe markers and their sidebar cards.
const hubStatusColors={ok:'#9fe870',watch:'#ffa629'};
const nodeMeshes=[],routeGroup=new THREE.Group();world.add(routeGroup);
globeLocations.forEach((hub,index)=>{
  const p=geo(hub.lat,hub.lon),color=hubStatusColors[hub.status];
  const node=new THREE.Mesh(new THREE.SphereGeometry(.045,16,16),new THREE.MeshBasicMaterial({color}));
  node.position.copy(p);node.userData={hub,index,labelRadius:hub.kind==='market'?.18:.11};nodeMeshes.push(node);world.add(node);
  const ring=new THREE.Mesh(new THREE.RingGeometry(.07,.09,24),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.55,side:THREE.DoubleSide,depthWrite:false}));
  ring.position.copy(p);ring.lookAt(new THREE.Vector3());ring.userData.pulseOffset=index*.7;world.add(ring);hub.ring=ring;
});
function addArc(a,b,index){const start=geo(a.lat,a.lon,R*1.025),end=geo(b.lat,b.lon,R*1.025),mid=start.clone().add(end).multiplyScalar(.5).normalize().multiplyScalar(R*(1.24+start.distanceTo(end)*.035)),curve=new THREE.QuadraticBezierCurve3(start,mid,end),line=createGlobeLine(curve.getPoints(70),index%4===0?alertRouteMaterial:routeMaterial);routeGroup.add(line);const packet=new THREE.Mesh(new THREE.SphereGeometry(.018,8,8),new THREE.MeshBasicMaterial({color:goodsFlowColor}));routeGroup.add(packet);packet.userData={curve,offset:index*.113};}
[[0,1],[1,3],[1,2],[3,4],[3,6],[4,7],[6,7],[7,8],[8,9],[8,10],[0,9],[2,5],[5,6]].forEach(([a,b],i)=>addArc(hubs[a],hubs[b],i));

const globeLayers=createGlobeLayers({camera,world,geo,radius:R,nodes:nodeMeshes,routeGroup,motionPreference});
globeLineMaterials.push(...globeLayers.materials);
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let hovered=null,linesVisible=true;
function clearHover(){
  hovered=null;
  canvas.style.cursor='grab';
}
window.addEventListener('resize',clearHover);
function pointerCoords(e){const rect=canvas.getBoundingClientRect();pointer.x=((e.clientX-rect.left)/rect.width)*2-1;pointer.y=-((e.clientY-rect.top)/rect.height)*2+1;}
function hitHub(e) {
  if (!controls.enabled) return null;
  pointerCoords(e); raycaster.setFromCamera(pointer,camera);
  // Visible pies are overlays: their full circle is clickable, even where Earth
  // would otherwise win the depth test. Faded-out/far-side pies are not pickable.
  if(globeLayers.active==='share')return raycaster.intersectObjects(globeLayers.pickables,false)[0]?.object??null;
  // Other layers retain geographic depth occlusion.
  const hit = raycaster.intersectObjects([globe, ...nodeMeshes.filter(node=>node.visible&&node.material.visible), ...globeLayers.pickables])[0];
  return hit?.object.userData.hub ? hit.object : null;
}
let pointerDown = null;
canvas.addEventListener('pointerdown', e => { pointerDown = [e.clientX, e.clientY]; });
canvas.addEventListener('pointermove',e=>{
  hovered=e.pointerType==='touch'?null:hitHub(e);
  canvas.style.cursor=hovered?'pointer':'grab';
});
canvas.addEventListener('pointerleave',clearHover);
canvas.addEventListener('click',e=>{
  if(!controls.enabled||!pointerDown||Math.hypot(e.clientX-pointerDown[0],e.clientY-pointerDown[1])>6)return;
  const node=hitHub(e);
  if(node)selectHub(node.userData.hub);
  else if(focusedHub)closeHub();
});
const statsPanel=document.querySelector('.stats-panel');
const healthCounts=createCountUp({elements:statsPanel.querySelectorAll('[data-count]'),progress:statsPanel.querySelector('.progress-track div'),motionPreference});
const hubDetail=document.querySelector('#hub-detail');
const sidebarExchange=createSidebarExchange({healthPanel:statsPanel,regionPanel:hubDetail,motionPreference});
const shell=document.querySelector('.app-shell');
const introBrand=document.querySelector('.header-identity .brand');
const galleryStrip=document.querySelector('.gallery-strip');
const mapControls=document.querySelector('.map-controls');
function alignMapControls(){
  const panel=statsPanel.hidden?hubDetail:statsPanel;
  // Use resting layout bounds so the controls don't follow the sidebar's 3D
  // exchange animation. ResizeObserver also catches font/content and panel swaps.
  const centered=panel.offsetTop+(panel.offsetHeight-mapControls.offsetHeight)/2;
  const maxTop=Math.max(0,mapControls.parentElement.clientHeight-mapControls.offsetHeight);
  mapControls.style.setProperty('--map-controls-top',`${Math.max(0,Math.min(centered,maxTop))}px`);
}
const sidebarAlignment=new ResizeObserver(alignMapControls);
[statsPanel,hubDetail,mapControls,mapControls.parentElement].forEach(element=>sidebarAlignment.observe(element));
const cityLabels=createGlobeLabels({container:document.querySelector('.city-labels'),camera,world,nodes:nodeMeshes,colors:hubStatusColors,
  obstacles:[mapControls,statsPanel,hubDetail,galleryStrip],onSelect:selectHub,motionPreference,
  getViewport:()=>globeViewport});
let focusedHub=null;
const cityFocus=createCityFocus({camera,world,controls,motionPreference,getOverviewOffset,
  onTransitionChange:(active,{lockMap=true}={})=>{mapControls.inert=active&&lockMap;}
});
function cityScreenX(){
  // Use resting layout bounds, not sidebar/report animation transforms.
  const width=canvas.parentElement.clientWidth;
  const panel=statsPanel.hidden?hubDetail:statsPanel;
  const left=Math.min(width*.2,mapControls.offsetLeft+mapControls.offsetWidth+24);
  const right=Math.max(left+40,panel.offsetLeft-24);
  return THREE.MathUtils.clamp((left+right)/width-1,-.45,0);
}
function setCityMode(active){
  if(active)galleryDrag.cancel();
  shell.classList.toggle('is-city-focused',active);
  document.querySelector('#reset-view').setAttribute('aria-label',active?'Refocus selected city':'Reset globe view');
  galleryStrip.inert=active;
}
function renderHubDetail(h){
  const layer=GLOBE_LAYERS.find(layer=>layer.id===globeLayers.active);
  hubDetail.style.setProperty('--hub-accent',h.kind==='market'?layer.color:hubStatusColors[h.status]);
  document.querySelector('#hub-code').textContent=h.kind==='market'?`${h.code} Â· ${layer.label}`:h.code;
  document.querySelector('#hub-name').textContent=h.name;
  document.querySelector('#hub-location').textContent=`${Math.abs(h.lat).toFixed(1)}Â° ${h.lat>=0?'N':'S'}, ${Math.abs(h.lon).toFixed(1)}Â° ${h.lon>=0?'E':'W'} Â· ${h.kind==='market'?'Illustrative country data':`${h.facilities} facilities`}`;
  const details=h.kind==='market'?marketDetails(h,globeLayers.active):[[h.volume,'Daily units'],[h.ontime,'On time'],[h.capacity,'Capacity']];
  ['hub-volume','hub-ontime','hub-capacity'].forEach((id,index)=>{
    document.getElementById(id).textContent=details[index][0];
    document.getElementById(`${id}-label`).textContent=details[index][1];
  });
}
function selectHub(h){
  areaNavigation.close({restoreFocus:false});
  if(h===focusedHub&&!cityFocus.returning){closeHub();return;}
  healthCounts.cancel();
  renderHubDetail(h);
  clearHover();
  focusedHub=h;
  setCityMode(true);
  cityFocus.focus(geo(h.lat,h.lon),cityScreenX());
  sidebarExchange.showRegion(true);
}
function closeHub(){
  if(cityFocus.returning)return;
  clearHover();
  healthCounts.prepare();
  sidebarExchange.showRegion(false,{onComplete:()=>healthCounts.start()});
  cityFocus.restore(()=>{
    focusedHub=null;
    setCityMode(false);
  });
}
document.querySelector('#close-detail').onclick=event=>{playActionFeedback(event.currentTarget,motionPreference);closeHub();};
document.querySelector('#zoom-in').onclick=()=>cityFocus.zoom(.86);
document.querySelector('#zoom-out').onclick=()=>cityFocus.zoom(1.16);
document.querySelector('#reset-view').onclick=()=>{
  clearHover();
  if(focusedHub&&cityFocus.focused){
    cityFocus.focus(geo(focusedHub.lat,focusedHub.lon),cityScreenX());
    return;
  }
  cityFocus.home();
};
document.querySelectorAll('#zoom-in,#zoom-out,#reset-view,#gallery-prev,#gallery-next,#toggle-lines').forEach(button=>{
  button.addEventListener('click',()=>playControlFeedback(button,motionPreference));
});
document.querySelector('#toggle-lines').onclick=()=>{linesVisible=!linesVisible;globeLayers.setDataVisible(linesVisible);document.querySelector('#toggle-lines').setAttribute('aria-pressed',String(linesVisible));};
const layerButtons=[...document.querySelectorAll('.globe-layer-button')];
function applyGlobeLayer(id){
  if(!globeLayers.setLayer(id))return;
  const layer=GLOBE_LAYERS.find(layer=>layer.id===id);
  layerButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.layer===id)));
  overviewOffset.copy(getNetworkOverviewOffset((id==='flow'?hubs:MARKETS).map(h=>geo(h.lat,h.lon))));
}
function changeGlobeLayer(id){
  if(id===globeLayers.active||shell.classList.contains('is-intro'))return;
  // Layer selection is independent of the camera, including an in-flight zoom.
  clearHover();
  applyGlobeLayer(id);
  if(focusedHub&&!cityFocus.returning)renderHubDetail(focusedHub);
}
layerButtons.forEach(button=>button.addEventListener('click',()=>changeGlobeLayer(button.dataset.layer)));
const drawer=document.querySelector('#analytics-drawer');
const dashboardPlane=document.querySelector('.dashboard-plane');
function openDrawer(title='Global Performance Analytics'){
  if(shell.classList.contains('is-intro'))return;
  document.querySelector('#analytics-title').textContent=title;
  areaNavigation.close({restoreFocus:false});
  galleryDrag.cancel();
  clearHover();
  dashboardPlane.inert=true;
  shell.classList.add('is-report-open');
  drawer.inert=false;
  drawer.classList.add('open');
}
function closeDrawer(){
  drawer.classList.remove('open');
  drawer.inert=true;
  shell.classList.remove('is-report-open');
  dashboardPlane.inert=false;
}
document.querySelectorAll('#open-analytics-1,#drill-button').forEach(button=>{
  button.onclick=()=>{playActionFeedback(button,motionPreference);openDrawer();};
});
document.querySelector('#drawer-close').onclick=event=>{playActionFeedback(event.currentTarget,motionPreference);closeDrawer();};

const gallery=document.querySelector('#kpi-gallery'),galleryCards=[...gallery.querySelectorAll('.kpi')],galleryCount=document.querySelector('#gallery-count');
let galleryIndex=0,galleryGrabPose=null;
function renderGalleryCards(position,{settled=false}={}){
  const count=galleryCards.length;
  const front=((Math.round(position)%count)+count)%count;
  galleryCards.forEach((card,i)=>{
    let offset=i-position;
    if(offset>count/2)offset-=count;
    if(offset<-count/2)offset+=count;
    const depth=Math.abs(offset);
    // Ease the card's captured pose into the flow over the first third of
    // the gesture, including a grab during an unfinished gallery transition.
    const grabWeight=galleryGrabPose&&i===galleryIndex?Math.max(0,1-Math.abs(position-galleryIndex)*3):0;
    const grabDepth=grabWeight?` + (${galleryGrabPose.m43}px - var(--gallery-front-depth)) * ${grabWeight}`:'';
    card.classList.toggle('active',i===front);
    card.style.setProperty('--card-x',`${offset*82}%`);
    card.style.setProperty('--card-y',`${grabWeight?galleryGrabPose.m42*grabWeight:0}px`);
    card.style.setProperty('--card-z',`calc(var(--gallery-front-depth) * ${Math.max(0,1-depth)} - ${depth*110}px${grabDepth})`);
    card.style.setProperty('--card-rotate',`${offset*-18}deg`);
    card.style.setProperty('--card-scale',String(Math.max(.72,1-depth*.12)));
    card.style.zIndex=String(Math.round(100-depth*10));
    card.style.opacity=String(Math.max(0,1-depth*.34));
    // Keep the grabbed card interactive until release, even as slots change.
    if(settled){
      const selectable=depth<=2; // Both inner and outer visible cards can come forward.
      card.style.pointerEvents=selectable?'auto':'none';
      card.setAttribute('aria-hidden',String(!selectable));
      card.inert=!selectable;
      card.setAttribute('aria-label',`${card.dataset.metric}${i===front?' Â· Open analytics':' Â· Bring forward'}`);
      card.tabIndex=selectable?0:-1;
    }
  });
  galleryCount.textContent=`${String(front+1).padStart(2,'0')} / ${String(count).padStart(2,'0')}`;
}
function showGalleryCard(index){
  galleryDrag.cancel();
  galleryGrabPose=null;
  galleryIndex=(index+galleryCards.length)%galleryCards.length;
  renderGalleryCards(galleryIndex,{settled:true});
}
document.querySelector('#gallery-prev').onclick=()=>showGalleryCard(galleryIndex-1);
document.querySelector('#gallery-next').onclick=()=>showGalleryCard(galleryIndex+1);
galleryCards.forEach((card,index)=>{
  card.onclick=()=>{if(galleryIndex===index)openDrawer(card.dataset.metric);else showGalleryCard(index);};
});
const galleryDrag=attachGalleryDrag(gallery,{
  getStepWidth:()=>galleryCards[galleryIndex].offsetWidth*.82,
  onDragStart:()=>{galleryGrabPose=new DOMMatrixReadOnly(getComputedStyle(galleryCards[galleryIndex]).transform);},
  onDrag:progress=>renderGalleryCards(galleryIndex+progress),
  onNavigate:direction=>showGalleryCard(galleryIndex+direction),
  onCancel:()=>{galleryGrabPose=null;renderGalleryCards(galleryIndex,{settled:true});}
});
showGalleryCard(0);
document.querySelectorAll('.nav-button').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.nav-button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');});

const titleMenuTrigger=document.querySelector('#open-area-menu');
const referenceRooms=createReferenceRooms({
  motionPreference,
  onBack:returnToOverview,
  onOpenChange:active=>{dashboardPlane.inert=active||areaNavigation.isOpen||drawer.classList.contains('open');}
});
const areaNavigation=createAreaNavigation({motionPreference,
  onNavigate:area=>{galleryDrag.cancel();clearHover();closeDrawer();referenceRooms.open(area);},
  onOpenChange:active=>{
    dashboardPlane.inert=active||referenceRooms.isOpen||drawer.classList.contains('open');
    referenceRooms.inert=active;
    if(active){galleryDrag.cancel();clearHover();}
  }
});
function returnToOverview(){
  areaNavigation.close({restoreFocus:false});
  referenceRooms.close();
  closeDrawer();
  titleMenuTrigger.focus({preventScroll:true});
}
titleMenuTrigger.addEventListener('click',()=>{
  if(!shell.classList.contains('is-intro'))areaNavigation.open(titleMenuTrigger);
});

const introOverlay=document.querySelector('.intro-overlay');
const dashboardLayers=[document.querySelector('.topbar'),...document.querySelector('.workspace').children];
const intro=createDeliveryIntro({camera,world,overviewOffset,surfaceRadius:R*1.02,
  getDeliveryPoint,dotSize:landDotSize,dotColor:landMaterial.color,dotOpacity:landMaterial.opacity,
  onCaption(step){
    document.querySelector('#intro-step').textContent=step;
    introOverlay.dataset.step=step.slice(0,2);
  },
  onNetworkReveal(){globeLayers.reveal();atmosphereRevealing=true;},
  onReveal(){shell.classList.add('is-revealing');depthBackdrop.reveal();},
  onComplete(){
    depthBackdrop.reveal();
    shell.classList.remove('is-intro','is-revealing');
    introBrand.setAttribute('aria-hidden','true');
    introOverlay.hidden=true;
    dashboardLayers.forEach(el=>{el.inert=el.id==='hub-detail';});
    controls.enabled=true;controls.target.copy(world.position);
    controls.update();controls.autoRotate=!motionPreference.matches;
    depthBackdrop.setViewOrigin(getBackdropView());
    healthCounts.start({delay:.25});
  }
});
function startIntro(){
  depthBackdrop.hide();
  areaNavigation.close({restoreFocus:false});
  referenceRooms.close();
  healthCounts.prepare();
  galleryDrag.cancel();
  cityFocus.reset();
  focusedHub=null;
  setCityMode(false);
  clearHover();
  closeDrawer();sidebarExchange.showRegion(false,{animate:false});
  applyGlobeLayer(DEFAULT_GLOBE_LAYER);
  globeLayers.prepareReveal();
  atmosphereTime=0;atmosphereRevealing=false;
  globeAtmospheres.forEach(mesh=>{mesh.material.uniforms.reveal.value=0;});
  shell.classList.remove('is-revealing');shell.classList.add('is-intro');
  introBrand.removeAttribute('aria-hidden');
  introOverlay.hidden=false;
  dashboardLayers.forEach(el=>{el.inert=true;});
  controls.enabled=false;controls.autoRotate=false;
  // XR Build: no opening sequence. Jump to the final view at once and let the
  // globe grow in while the network and atmosphere play their own reveals.
  intro.start(performance.now()/1000);
  intro.finish();
  globeRevealStart=performance.now();
}
// Globe reveal: scale 0.82 -> 1 with an ease-out over 1.4 s.
let globeRevealStart=-Infinity;
function updateGlobeReveal(now){
  const k=Math.min(1,Math.max(0,(now-globeRevealStart)/1400));
  world.scale.setScalar(motionPreference.matches?1:.82+.18*(1-(1-k)**3));
}
document.querySelector('#replay-intro').onclick=startIntro;
motionPreference.addEventListener('change',()=>{if(motionPreference.matches){intro.finish();cityFocus.finish();healthCounts.finish();controls.autoRotate=false;}});

function resize(){
  depthBackdrop.resize();
  if(appIcon){appIcon.resize();return;}
  if(xrb){
    // The SDK sizes the canvas (two eyes) and owns the projection; the camera only needs one eye's aspect.
    xrb.setSize();
    const view=xrb.viewSize();
    camera.clearViewOffset();camera.aspect=view.width/view.height;camera.updateProjectionMatrix();
    globeViewport={width:view.width,height:view.height,x:0,y:0};
    landMaterial.size=landDotSize;controls.rotateSpeed=.45;
    return;
  }
  const stage=canvas.parentElement,width=stage.clientWidth,height=stage.clientHeight;
  const topInset=parseFloat(getComputedStyle(stage.parentElement).top)||0;
  globeViewport=extendGlobeViewport(camera,width,height,topInset);
  canvas.style.top=`${globeViewport.y}px`;canvas.style.height=`${globeViewport.height}px`;
  const pixelBudget=3840*2160,adaptiveDpr=Math.min(devicePixelRatio,Math.sqrt(pixelBudget/(width*globeViewport.height)),2);
  renderer.setPixelRatio(Math.max(1,adaptiveDpr));renderer.setSize(width,globeViewport.height,false);
  // Point sprites and OrbitControls use canvas height, not camera projection.
  // Compensate for overscan so dots and drag sensitivity retain their size.
  landMaterial.size=landDotSize*height/globeViewport.height;
  controls.rotateSpeed=.45*globeViewport.height/height;
  if(focusedHub&&cityFocus.focused&&!cityFocus.returning)cityFocus.focus(geo(focusedHub.lat,focusedHub.lon),cityScreenX());
}
window.addEventListener('resize',resize);resize();
startIntro();
appIcon?.whenComplete(()=>globe.material.uniforms.detailStrength.value===1);
// XR Build: hands drive the globe directly (trackball spin, pinch to select, grab to turn).
const globeHands=xrb?createGlobeHands({xrb,world,radius:R,camera,controls,hubMeshes:()=>nodeMeshes,
  onHover:mesh=>{hovered=mesh;},
  onSelect:mesh=>selectHub(mesh.userData.hub),
  onPinchEmpty:()=>{if(focusedHub)closeHub();}}):null;
const clock=new THREE.Clock();
const markerScale=new THREE.Vector3();
function animate(){
  requestAnimationFrame(animate);
  if(referenceRooms.isOpen)return;
  const delta=Math.min(clock.getDelta(),.05),t=motionPreference.matches?0:clock.elapsedTime;
  controls.dampingFactor=1-Math.exp(-8*delta);
  updateGlobeReveal(performance.now());
  if(intro.active)intro.update(performance.now()/1000);
  else if(cityFocus.active)cityFocus.update(performance.now()/1000);
  else if(!areaNavigation.isOpen)controls.update(delta);
  // The hub focus animation moves the globe itself; hands wait until it is done.
  if(globeHands&&!intro.active&&!cityFocus.active)globeHands.update(delta);
  healthCounts.update(performance.now()/1000);
  depthBackdrop.update(delta, {
    interactive: !intro.active && !areaNavigation.isOpen && !drawer.classList.contains('open'),
    view: intro.active ? null : getBackdropView(),
    globe: getBackdropGlobe(),
  });
  globeLayers.update(delta,t,intro.active?null:focusedHub);
  if(atmosphereRevealing)atmosphereTime=motionPreference.matches?2.6:Math.min(2.6,atmosphereTime+delta);
  globeAtmospheres.forEach(mesh=>{mesh.material.uniforms.reveal.value=THREE.MathUtils.smoothstep(atmosphereTime,0,2.6);});
  gridMaterial.userData.revealProgress=coastlineMaterial.userData.revealProgress=globeLayers.revealProgress;
  updateGlobeLineDetail(globeLineMaterials,camera.position.distanceTo(world.position),renderer.getPixelRatio());
  globeLocations.forEach((h,i)=>{
    const selected=h===focusedHub&&!cityFocus.returning&&!intro.active;
    updateMarkerRing(nodeMeshes[i], { selected, time: t, index: i });
    h.ring.material.opacity*=globeLayers.revealProgress;
  });
  routeGroup.children.forEach(obj=>{if(obj.userData.curve){const p=(t*.075+obj.userData.offset)%1;obj.position.copy(obj.userData.curve.getPoint(p));}});
  nodeMeshes.forEach(n=>{
    const selected=n.userData.hub===focusedHub&&!cityFocus.returning;
    const scale=selected?1:n===hovered?1.5+Math.sin(t*4)*.12:1;
    n.scale.lerp(markerScale.setScalar(scale),motionPreference.matches?1:1-Math.exp(-12*delta));
  });
  graticule.visible=linesVisible&&globeLayers.revealProgress>0;
  if(xrb)xrb.render(scene,camera);else renderer.render(scene,camera);
  cityLabels.update({enabled:!intro.active,selected:focusedHub,hovered,interactive:!cityFocus.active,focusAmount:cityFocus.labelProgress});
}
animate();
