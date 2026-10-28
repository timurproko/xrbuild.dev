import * as THREE from 'three';
import { playControlFeedback } from './control-feedback.js';

/** Visible names activate their region just like its marker; selected names toggle closed. */
export function createGlobeLabels({ container, camera, world, nodes, colors, obstacles, onSelect, motionPreference, getViewport }) {
  const entries = nodes.map(node => {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = 'city-label';
    element.disabled = true;
    element.tabIndex = -1;
    element.setAttribute('aria-hidden', 'true');
    element.setAttribute('aria-label', `Explore ${node.userData.hub.name}`);
    const name = document.createElement('span');
    name.textContent = node.userData.hub.name;
    element.append(name);
    element.addEventListener('click', event => {
      event.stopPropagation();
      if (!element.disabled && !container.hidden) {
        playControlFeedback(element, motionPreference);
        onSelect(node.userData.hub);
      }
    });
    element.style.setProperty('--hub-accent', colors[node.userData.hub.status]);
    container.append(element);
    return { node, element, slot: 0 };
  });
  const point = new THREE.Vector3(), center = new THREE.Vector3(), eye = new THREE.Vector3();
  const normal = new THREE.Vector3(), towardEye = new THREE.Vector3(), projected = new THREE.Vector3(), view = new THREE.Vector3();
  const overlaps = (a, b) => a.x < b.x + b.w + 6 && a.x + a.w + 6 > b.x
    && a.y < b.y + b.h + 6 && a.y + a.h + 6 > b.y;

  function update({ enabled, selected, hovered, interactive = true, focusAmount = 0 }) {
    container.hidden = !enabled;
    if (!enabled) return;
    camera.updateMatrixWorld();
    camera.getWorldPosition(eye);
    world.getWorldPosition(center);
    const width = container.clientWidth, height = container.clientHeight;
    const viewport = getViewport?.() ?? { width, height, x: 0, y: 0 };
    // All obstacles share the globe's workspace coordinates. Ignore animated transforms.
    const occupied = obstacles.filter(element => !element.hidden
      && getComputedStyle(element).visibility !== 'hidden').map(element => ({
      x: element.offsetLeft, y: element.offsetTop, w: element.offsetWidth, h: element.offsetHeight,
    }));
    const visible = [];
    for (const entry of entries) {
      entry.show = false;
      entry.element.classList.toggle('is-selected', entry.node.userData.hub === selected);
      entry.element.style.setProperty('--label-focus', String(entry.node.userData.hub === selected ? THREE.MathUtils.clamp(focusAmount, 0, 1) : 0));
      if (!entry.node.visible) continue;
      if (entry.node.userData.labelColor) entry.element.style.setProperty('--hub-accent', entry.node.userData.labelColor);
      entry.node.getWorldPosition(point);
      const facing = normal.subVectors(point, center).normalize().dot(towardEye.subVectors(eye, point).normalize());
      projected.copy(point).project(camera);
      if (facing <= .08 || Math.abs(projected.x) > 1 || Math.abs(projected.y) > 1 || projected.z > 1 || projected.z < -1) continue;
      const depth = -view.copy(point).applyMatrix4(camera.matrixWorldInverse).z;
      entry.x = viewport.x + (projected.x + 1) * viewport.width / 2;
      entry.y = viewport.y + (1 - projected.y) * viewport.height / 2;
      entry.radius = (entry.node.userData.labelRadius ?? .11) * camera.projectionMatrix.elements[5] * viewport.height / (2 * depth);
      entry.w = entry.element.offsetWidth;
      entry.h = entry.element.offsetHeight;
      entry.opacity = THREE.MathUtils.clamp((facing - .08) / .18, 0, 1);
      entry.selected = entry.node.userData.hub === selected;
      entry.priority = entry.selected ? 2 : entry.node === hovered ? 1 : 0;
      visible.push(entry);
    }
    // Stable ordering and preferred positions keep neighbouring names from swapping around.
    visible.sort((a, b) => b.priority - a.priority);
    const markers = visible.map(entry => ({ x: entry.x - entry.radius, y: entry.y - entry.radius, w: entry.radius * 2, h: entry.radius * 2 }));
    for (const entry of visible) {
      const { x, y, w, h, radius } = entry, gap = radius + 10;
      const candidates = [
        [x + gap, y - h / 2], [x - gap - w, y - h / 2],
        [x - w / 2, y + gap], [x - w / 2, y - gap - h],
        [x + gap, y + gap], [x - gap - w, y + gap],
        [x + gap, y - gap - h], [x - gap - w, y - gap - h],
      ];
      const order = [entry.slot, ...candidates.map((_, index) => index).filter(index => index !== entry.slot)];
      for (const slot of order) {
        const [left, top] = candidates[slot], box = { x: left, y: top, w, h };
        if (left < 8 || top < 8 || left + w > width - 8 || top + h > height - 8) continue;
        if (occupied.some(other => overlaps(box, other)) || markers.some(other => overlaps(box, other))) continue;
        entry.slot = slot;
        entry.show = true;
        entry.left = left; entry.top = top;
        occupied.push(box);
        break;
      }
    }
    // Batch writes after measurements so tracking does not trigger per-label reflows.
    for (const entry of entries) {
      entry.element.classList.toggle('is-visible', entry.show);
      const canSelect = entry.show && interactive;
      entry.element.disabled = !canSelect;
      entry.element.tabIndex = canSelect ? 0 : -1;
      entry.element.setAttribute('aria-hidden', String(!canSelect));
      entry.element.setAttribute('aria-label', entry.node.userData.hub === selected
        ? `Close ${selected.name} and zoom out` : `Explore ${entry.node.userData.hub.name}`);
      entry.element.classList.toggle('is-hovered', entry.node === hovered);
      if (!entry.show) continue;
      entry.element.style.transform = `translate3d(${entry.left.toFixed(1)}px,${entry.top.toFixed(1)}px,0)`;
      entry.element.style.setProperty('--label-opacity', entry.opacity);
    }
  }

  return { update };
}
