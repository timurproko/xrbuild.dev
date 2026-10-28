const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };
const GRID_OPACITY = .38 * 1.18;
const HALO_SIZE = 512;

/** A continuous concave enclosure: the rear wall wraps around the globe, then
 * rolls gently toward the viewer below it. No hard wall/floor seam or tiled plane. */
export function createDepthField(width, height) {
  const columns = width < 720 ? 65 : 129, rows = 97;
  return Array.from({ length: columns * rows }, (_, index) => {
    const column = index % columns, row = Math.floor(index / columns);
    const u = (column / (columns - 1) - .5) * 2;
    const v = (row / (rows - 1) - .5) * 2.7;
    const angle = u * 1.45 + v * .07;
    const bend = Math.max(0, v - .3);
    const surfaceX = Math.sin(angle) * .72;
    const surfaceY = v <= .3 ? v * .84 : .252 + .84 * Math.sin(bend);
    const surfaceZ = 1.15 + .7 * Math.cos(angle) - .84 * (1 - Math.cos(bend));
    const depth = 1 / surfaceZ;
    const x = .5 + surfaceX * depth;
    const y = .48 + surfaceY * depth;
    const edge = smooth(Math.min(x, 1 - x, y, 1 - y) / .1);
    const distance = Math.hypot((x - .5) * 1.2, y - .48);
    const quietCenter = .3 + .7 * smooth((distance - .1) / .38);
    return {
      x: x * width, y: y * height, depth, index, row, column, columns, rows,
      surfaceX, surfaceY, surfaceZ, bend,
      opacity: GRID_OPACITY * Math.min(1, depth) * edge * quietCenter * (1 - smooth(bend) * .45),
      delay: clamp(distance / .8) * .55,
    };
  });
}

/** Rotate the curved surface in 3D before perspective projection. Reuse the
 * output buffer so globe dragging does not allocate a new mesh every frame. */
export function projectDepthField(points, width, height, yaw, pitch, positions = new Float32Array(points.length * 2)) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  points.forEach((point, index) => {
    const localZ = point.surfaceZ - 1.85;
    const rotatedX = point.surfaceX * cy + localZ * sy;
    const rotatedZ = -point.surfaceX * sy + localZ * cy;
    const rotatedY = point.surfaceY * cp - rotatedZ * sp;
    const depth = 1 / (1.85 + point.surfaceY * sp + rotatedZ * cp);
    positions[index * 2] = (.5 + rotatedX * depth) * width;
    positions[index * 2 + 1] = (.48 + rotatedY * depth) * height;
  });
  return positions;
}

/** Continuous grazing light follows the projected enclosure rather than
 * coloring individual grid cells (which would make it look tiled). */
function paintDepthShell(context, points, positions, alpha, x, y, width, time) {
  if (alpha <= .001) return;
  const { columns, rows } = points[0];
  const size = Math.max(.75, Math.min(2, width / 1920));
  const xy = (index, axis) => positions[index * 2 + axis] - (axis ? y * 5 : x * 7) * points[index].depth ** 2;
  function rowPath(row) {
    const first = Math.floor(row), blend = row - first;
    context.beginPath();
    for (let column = 0; column < columns; column++) {
      const index = first * columns + column, next = Math.min(first + 1, rows - 1) * columns + column;
      const px = xy(index, 0) * (1 - blend) + xy(next, 0) * blend;
      const py = xy(index, 1) * (1 - blend) + xy(next, 1) * blend;
      if (!column) context.moveTo(px, py);
      else context.lineTo(px, py);
    }
  }
  const breathing = .94 + .06 * Math.cos(time * .33);
  context.save();
  // Clip continuous shading to the curved surface's projected silhouette.
  rowPath(0);
  for (let row = 1; row < rows; row++) {
    const index = row * columns + columns - 1;
    context.lineTo(xy(index, 0), xy(index, 1));
  }
  for (let column = columns - 2; column >= 0; column--) {
    const index = (rows - 1) * columns + column;
    context.lineTo(xy(index, 0), xy(index, 1));
  }
  for (let row = rows - 2; row > 0; row--) {
    const index = row * columns;
    context.lineTo(xy(index, 0), xy(index, 1));
  }
  context.closePath(); context.clip();
  const middle = columns >> 1;
  const top = xy(32 * columns + middle, 1), bottom = xy((rows - 1) * columns + middle, 1);
  const shade = context.createLinearGradient(0, top, 0, bottom);
  shade.addColorStop(0, 'rgba(153,163,160,0)');
  shade.addColorStop(.5, 'rgba(153,163,160,.16)');
  shade.addColorStop(.7, 'rgba(153,163,160,.23)');
  shade.addColorStop(1, 'rgba(25,31,30,0)');
  context.globalAlpha = alpha * breathing;
  context.fillStyle = shade;
  context.fillRect(-width, Math.min(top, bottom), width * 3, Math.abs(bottom - top));
  rowPath(62 + .6 * Math.sin(time * .24));
  context.filter = `blur(${32 * size}px)`;
  context.strokeStyle = '#b3c0bb';
  context.lineWidth = 100 * size;
  context.globalAlpha = alpha * breathing * .15;
  context.stroke();
  context.restore();

  // Thin reflected-light contours give the lower sweep a readable curved edge.
  for (const row of [60, 64]) {
    rowPath(row);
    context.strokeStyle = '#c6d4ce';
    context.lineWidth = .85 * size;
    context.globalAlpha = alpha * (row === 60 ? .2 : .1);
    context.stroke();
  }
}

/** A slow band travels in surface coordinates, so it turns with the grid. */
export function gridLightStrength(point, time) {
  const head = (time % 18) / 18 * 1.65 - .25;
  const distance = point.column / (point.columns - 1) + .12 * point.row / (point.rows - 1) - head;
  return Math.exp(-((distance / .09) ** 2));
}

function paintHalo(context) {
  const half = HALO_SIZE / 2;
  const gradient = context.createRadialGradient(half, half, 0, half, half, half);
  // The projected globe edge sits at 1 / 1.1 of this texture's radius.
  for (const [offset, color] of [
    [0, 'rgba(32,63,91,0)'], [.73, 'rgba(32,63,91,0)'],
    [.86, 'rgba(51,87,113,.04)'], [.91, 'rgba(66,104,137,.2)'],
    [.95, 'rgba(39,72,99,.08)'], [1, 'rgba(32,63,91,0)'],
  ]) gradient.addColorStop(offset, color);
  context.fillStyle = gradient;
  context.fillRect(0, 0, HALO_SIZE, HALO_SIZE);
}

/** Cache the expensive full-screen gradients; only the fine grid needs to move. */
function paintAtmosphere(context, width, height) {
  const base = context.createLinearGradient(0, 0, width, height);
  base.addColorStop(0, '#0c1114');
  base.addColorStop(.45, '#080f12');
  base.addColorStop(1, '#04090b');
  context.fillStyle = base;
  context.fillRect(0, 0, width, height);

  function glow(x, y, rx, ry, stops) {
    context.save();
    context.translate(x * width, y * height);
    context.scale(rx * width, ry * height);
    const gradient = context.createRadialGradient(0, 0, 0, 0, 0, 1);
    for (const [offset, color] of stops) gradient.addColorStop(offset, color);
    context.fillStyle = gradient;
    context.fillRect(-1, -1, 2, 2);
    context.restore();
  }
  glow(.5, .48, .72, .9, [[0, 'rgba(0,4,10,0)'], [.4, 'rgba(0,4,10,0)'], [1, 'rgba(0,4,10,.75)']]);
}

/** Decorative only. Reuse the app's frame loop; the light sweep is capped at
 * 30Hz when the scene is still, and pauses behind menus or in reduced motion. */
export function createDepthBackdrop({ canvas, motionPreference }) {
  const context = canvas.getContext('2d');
  const atmosphere = document.createElement('canvas');
  const atmosphereContext = atmosphere.getContext('2d');
  const halo = document.createElement('canvas');
  halo.width = halo.height = HALO_SIZE;
  const haloContext = halo.getContext('2d');
  if (haloContext) paintHalo(haloContext);
  let points = [], positions = new Float32Array(0), width = 0, height = 0, dpr = 1;
  let viewOrigin = null, yaw = 0, pitch = 0;
  let visible = false, elapsed = 0, dirty = true;
  let x = 0, y = 0, targetX = 0, targetY = 0;
  let wasReduced = motionPreference.matches;
  let lastGlobe = null, pulseTime = 0;

  function resetPointer() { targetX = targetY = 0; }
  function pointer(event) {
    if (!visible || motionPreference.matches || event.pointerType !== 'mouse' || event.buttons) return;
    targetX = Math.max(-1, Math.min(1, event.clientX / Math.max(1, window.innerWidth) * 2 - 1));
    targetY = Math.max(-1, Math.min(1, event.clientY / Math.max(1, window.innerHeight) * 2 - 1));
  }
  window.addEventListener('pointermove', pointer, { passive: true });
  document.documentElement.addEventListener('pointerleave', resetPointer);
  window.addEventListener('blur', resetPointer);

  function resize() {
    width = canvas.clientWidth; height = canvas.clientHeight;
    // Decorative raster budget: never exceed one 4K surface or 1.5x DPR.
    dpr = Math.min(window.devicePixelRatio || 1, 1.5, Math.sqrt(3840 * 2160 / Math.max(1, width * height)));
    canvas.width = atmosphere.width = Math.max(1, Math.round(width * dpr));
    canvas.height = atmosphere.height = Math.max(1, Math.round(height * dpr));
    points = createDepthField(width, height);
    positions = new Float32Array(points.length * 2);
    if (atmosphereContext && width && height) {
      atmosphereContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      paintAtmosphere(atmosphereContext, width, height);
    }
    dirty = true;
  }
  function hide() {
    visible = false; elapsed = pulseTime = 0; x = y = yaw = pitch = 0; viewOrigin = null; lastGlobe = null; resetPointer(); dirty = true;
    if (context) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  function reveal() {
    if (visible) return;
    visible = true; elapsed = motionPreference.matches ? 3 : 0; dirty = true;
  }
  function setViewOrigin(view) {
    viewOrigin = { ...view }; yaw = pitch = 0; dirty = true;
  }
  function update(delta, { interactive = true, view = null, globe = null, animateLight = true } = {}) {
    if (!context || !visible || !width || !height) return;
    const reduced = motionPreference.matches;
    if (reduced !== wasReduced) { dirty = true; wasReduced = reduced; }
    if (reduced || !interactive) resetPointer();
    const dt = Math.max(0, Math.min(delta, .05));
    const previousPulseFrame = Math.floor(pulseTime * 30);
    const lightActive = animateLight && interactive && !reduced && !document.hidden;
    if (lightActive) pulseTime += dt;
    const lightChanged = Math.floor(pulseTime * 30) !== previousPulseFrame;
    const globeChanged = globe ? !lastGlobe || globe.x !== lastGlobe.x || globe.y !== lastGlobe.y || globe.radius !== lastGlobe.radius : lastGlobe !== null;
    const previousX = x, previousY = y, previousYaw = yaw, previousPitch = pitch;
    const ease = 1 - Math.exp(-4 * dt);
    if (view && !viewOrigin) setViewOrigin(view);
    // A slower, bounded turn of the background, driven by the globe's actual
    // viewing direction. Sin keeps full orbits continuous across the ±π seam.
    const targetYaw = reduced || !view ? 0 : -Math.sin(view.yaw - viewOrigin.yaw) * .18;
    const targetPitch = reduced || !view ? 0 : Math.max(-.12, Math.min(.12, (view.pitch - viewOrigin.pitch) * .16));
    yaw = reduced ? 0 : yaw + (targetYaw - yaw) * ease;
    pitch = reduced ? 0 : pitch + (targetPitch - pitch) * ease;
    if (Math.abs(targetYaw - yaw) < .00001) yaw = targetYaw;
    if (Math.abs(targetPitch - pitch) < .00001) pitch = targetPitch;
    x = reduced ? 0 : x + (targetX - x) * ease;
    y = reduced ? 0 : y + (targetY - y) * ease;
    if (Math.abs(targetX - x) < .0005) x = targetX;
    if (Math.abs(targetY - y) < .0005) y = targetY;
    const revealing = elapsed < 3;
    elapsed = reduced ? 3 : Math.min(3, elapsed + dt);
    if (!dirty && !revealing && !lightChanged && !globeChanged && x === previousX && y === previousY && yaw === previousYaw && pitch === previousPitch) return;
    dirty = false;
    lastGlobe = globe ? { ...globe } : null;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, width, height);
    context.globalAlpha = smooth(elapsed / 1.8);
    if (atmosphereContext) context.drawImage(atmosphere, 0, 0, width, height);
    projectDepthField(points, width, height, yaw, pitch, positions);
    paintDepthShell(context, points, positions, smooth((elapsed - .15) / 1.8), x, y, width, !reduced && animateLight ? pulseTime : 0);
    const detailScale = Math.max(.75, Math.min(2, width / 1920));
    context.strokeStyle = '#b7c4be';
    context.lineWidth = detailScale;
    context.lineCap = 'round';
    context.setLineDash([.2 * detailScale, 6 * detailScale]);

    // Tiny dotted strokes reveal the curved lattice without a separate particle
    // cloud. Bucket segments by opacity to retain the travelling-light fade.
    const buckets = Array.from({ length: 12 }, () => []);
    for (const point of points) {
      if (point.row % 4 !== 0 && point.column % 4 !== 0) continue;
      const light = !reduced && animateLight ? gridLightStrength(point, pulseTime) * .5 : 0;
      const alpha = point.opacity * (1 + light) * smooth((elapsed - point.delay - .15) / 1.8);
      const bucket = Math.round(alpha / (GRID_OPACITY * 1.5) * 11);
      if (bucket > 0) buckets[bucket].push(point);
    }
    for (let bucket = 1; bucket < buckets.length; bucket++) {
      if (!buckets[bucket].length) continue;
      context.globalAlpha = bucket / 11 * GRID_OPACITY * 1.5;
      context.beginPath();
      for (const point of buckets[bucket]) {
        const neighbours = [];
        if (point.row % 4 === 0 && point.column > 0) neighbours.push(points[point.index - 1]);
        if (point.column % 4 === 0 && point.row > 0) neighbours.push(points[point.index - point.columns]);
        for (const neighbour of neighbours) {
          context.moveTo(positions[point.index * 2] - x * 7 * point.depth ** 2, positions[point.index * 2 + 1] - y * 5 * point.depth ** 2);
          context.lineTo(positions[neighbour.index * 2] - x * 7 * neighbour.depth ** 2, positions[neighbour.index * 2 + 1] - y * 5 * neighbour.depth ** 2);
        }
      }
      context.stroke();
    }
    context.setLineDash([]);
    context.lineCap = 'butt';
    // Sparse, restrained constellation intersections belong to the same surface.
    context.fillStyle = '#d1dcd7';
    for (const point of points) {
      if (point.row % 12 !== 0 || point.column % 12 !== 0 || point.opacity < .02) continue;
      const light = !reduced && animateLight ? gridLightStrength(point, pulseTime) : 0;
      context.globalAlpha = point.opacity * (1.1 + light * .4) * smooth((elapsed - point.delay - .15) / 1.8);
      const px = positions[point.index * 2] - x * 7 * point.depth ** 2;
      const py = positions[point.index * 2 + 1] - y * 5 * point.depth ** 2;
      context.beginPath();
      context.arc(px, py, .65 * detailScale, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = smooth(elapsed / 1.8);
    if (haloContext && globe && Number.isFinite(globe.radius) && globe.radius > 0) {
      // Keep the illuminated globe in front of the shaded enclosure.
      const radius = globe.radius * 1.1;
      context.drawImage(halo, globe.x - radius, globe.y - radius, radius * 2, radius * 2);
    }
    context.globalAlpha = 1;
  }
  function dispose() {
    window.removeEventListener('pointermove', pointer);
    document.documentElement.removeEventListener('pointerleave', resetPointer);
    window.removeEventListener('blur', resetPointer);
    hide();
    atmosphere.width = atmosphere.height = halo.width = halo.height = 1;
  }
  return { resize, hide, reveal, setViewOrigin, update, dispose };
}
