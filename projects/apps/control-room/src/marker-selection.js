/** Highlight the existing surface ring; never add a second billboard/3D halo. */
export function updateMarkerRing(node, { selected, time, index }) {
  const ring = node.userData.hub.ring;
  ring.material.color.copy(node.material.color);
  if (selected) ring.material.color.set('#ffffff');
  ring.scale.setScalar(selected ? 1 : 1 + Math.sin(time * 2.2 + ring.userData.pulseOffset) * .22);
  ring.material.opacity = selected ? 1 : .43 + Math.sin(time * 2.2 + index) * .15;
}
