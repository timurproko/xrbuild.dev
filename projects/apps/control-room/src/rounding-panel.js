import * as THREE from 'three';

/** Fixed-topology extruded panel. Its single morph target rounds the silhouette
 * without rebuilding geometry during the intro's camera pullback. */
export function createRoundingPanel(width, height, depth, material) {
  const segments = 12;
  const outline = (radius, w, h) => {
    const points = [];
    for (let corner = 0; corner < 4; corner++) {
      const cx = (corner === 0 || corner === 3 ? 1 : -1) * (w / 2 - radius);
      const cy = (corner < 2 ? 1 : -1) * (h / 2 - radius);
      for (let step = 0; step <= segments; step++) {
        const angle = (corner + step / segments) * Math.PI / 2;
        points.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
      }
    }
    return points;
  };
  function vertices(radius, w = width, h = height) {
    const points = outline(radius, w, h), result = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length], z = depth / 2;
      result.push(0, 0, z, ...a, z, ...b, z, 0, 0, -z, ...b, -z, ...a, -z);
      result.push(...a, z, ...a, -z, ...b, -z, ...a, z, ...b, -z, ...b, z);
    }
    return new Float32Array(result);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices(.001), 3));
  geometry.computeVertexNormals();
  const rounded = new THREE.BufferGeometry();
  const diameter = Math.min(width, height);
  rounded.setAttribute('position', new THREE.BufferAttribute(vertices(diameter / 2, diameter, diameter), 3));
  rounded.computeVertexNormals();
  geometry.morphAttributes.position = [rounded.attributes.position];
  geometry.morphAttributes.normal = [rounded.attributes.normal];
  geometry.computeBoundingSphere();
  return new THREE.Mesh(geometry, material);
}
