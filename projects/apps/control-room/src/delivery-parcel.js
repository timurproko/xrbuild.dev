import * as THREE from 'three';

/** Shared cardboard, dark tape and shipping label for the cinematic and loader. */
export function createDeliveryParcel(material, { opening = false, smile = true, createCanvas = () => document.createElement('canvas') } = {}) {
  const parcel = new THREE.Group();
  parcel.name = 'delivery-parcel';
  const cardboard = material(0xba854f);
  const tape = material(0x252c27);
  function box(parent, size, position, mat) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), mat);
    mesh.position.set(...position); parent.add(mesh);
    return mesh;
  }

  if (opening) {
    // Real thin walls and a floor leave a cavity when the hinged lids open.
    box(parcel, [1.7, .03, 1.22], [0, -.585, 0], cardboard);
    box(parcel, [1.7, 1.2, .03], [0, 0, .595], cardboard);
    box(parcel, [1.7, 1.2, .03], [0, 0, -.595], cardboard);
    box(parcel, [.03, 1.2, 1.16], [-.835, 0, 0], cardboard);
    box(parcel, [.03, 1.2, 1.16], [.835, 0, 0], cardboard);
    const flaps = [];
    function flap(position, size, offset, axis, direction, taped = false) {
      const hinge = new THREE.Group(); hinge.position.set(...position); parcel.add(hinge);
      const lid = box(hinge, size, offset, cardboard);
      if (taped) box(lid, [.25, .008, size[2]], [0, .018, 0], tape);
      flaps.push({ hinge, axis, direction });
    }
    // Two opposing half-depth lids cover the top without crossing each other.
    flap([0, .6, .61], [1.7, .025, .61], [0, 0, -.305], 'x', 1, true);
    flap([0, .6, -.61], [1.7, .025, .61], [0, 0, .305], 'x', -1, true);
    parcel.userData.flaps = flaps;
  } else {
    box(parcel, [1.7, 1.2, 1.22], [0, 0, 0], cardboard);
    box(parcel, [.25, .014, 1.23], [0, .607, 0], tape);
  }
  box(parcel, [.25, 1.2, .014], [0, 0, -.616], tape);

  const labelCanvas = createCanvas();
  labelCanvas.width = 512; labelCanvas.height = 384;
  const ctx = labelCanvas.getContext('2d');
  ctx.fillStyle = '#ba854f'; ctx.fillRect(0, 0, 512, 384);
  ctx.fillStyle = '#242c27'; ctx.fillRect(220, 0, 72, 105);
  ctx.fillStyle = '#f0eddb'; ctx.fillRect(330, 40, 140, 95);
  ctx.fillStyle = '#293b31';
  for (let i = 0; i < 27; i++) ctx.fillRect(342 + i * 4, 79, i % 3 === 0 ? 3 : 1, 32);
  ctx.font = 'bold 15px monospace'; ctx.fillText('LAST MILE', 339, 64);
  if (smile) {
    ctx.strokeStyle = '#252c27'; ctx.lineWidth = 11; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(105, 232); ctx.quadraticCurveTo(242, 325, 396, 215); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(360, 215); ctx.lineTo(400, 211); ctx.lineTo(393, 250); ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(labelCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const front = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.2), material(0xffffff, { map: texture }));
  front.position.z = .616; parcel.add(front);
  return parcel;
}

/** Continuous opening/closing, with no held pose or pause between cycles. */
export function setParcelOpening(parcel, time, reducedMotion = false) {
  const cycle = (1 - Math.cos((time % 2.8) / 2.8 * Math.PI * 2)) / 2;
  for (const { hinge, axis, direction } of parcel.userData.flaps) {
    const opening = reducedMotion ? 1 : cycle;
    hinge.rotation[axis] = direction * opening * 2.05;
  }
}
