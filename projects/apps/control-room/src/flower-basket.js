import * as THREE from 'three';

/** Reusable porch bouquet. Use the intro's material factory so it fades with the scene. */
export function createFlowerBasket(material) {
  const basket = new THREE.Group();
  basket.name = 'flower-basket';
  const wicker = material(0xa97745);
  const weave = material(0xd6ac72);
  const soil = material(0x382b20);
  const stemMaterial = material(0x396340);
  const leafMaterial = material(0x629451);
  const petalMaterials = [material(0xf4a9b9), material(0xffedcf), material(0xd97091)];
  const pollen = material(0xe8b14e);
  const roundedGeometry = new THREE.SphereGeometry(1, 12, 8);

  function mesh(geometry, mat, position, scale = [1, 1, 1], parent = basket) {
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(...position);
    object.scale.set(...scale);
    parent.add(object);
    return object;
  }

  // Tapered wicker body, raised horizontal weave and vertical ribs.
  mesh(new THREE.CylinderGeometry(.48, .35, .72, 32), wicker, [0, .36, 0]);
  for (let i = 0; i < 9; i++) {
    const y = .06 + i * .08;
    const radius = .35 + .13 * y / .72;
    const band = mesh(new THREE.TorusGeometry(radius, .018, 5, 32), weave, [0, y, 0]);
    band.rotation.x = Math.PI / 2;
  }
  for (let i = 0; i < 24; i++) {
    const angle = i / 24 * Math.PI * 2;
    const bottom = new THREE.Vector3(.355 * Math.cos(angle), .03, .355 * Math.sin(angle));
    const top = new THREE.Vector3(.485 * Math.cos(angle), .71, .485 * Math.sin(angle));
    const rib = mesh(new THREE.CylinderGeometry(.011, .011, bottom.distanceTo(top), 5), weave, bottom.clone().lerp(top, .5).toArray());
    rib.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), top.sub(bottom).normalize());
  }
  mesh(new THREE.CylinderGeometry(.435, .435, .035, 32), soil, [0, .705, 0]);
  const rim = mesh(new THREE.TorusGeometry(.465, .045, 8, 32), weave, [0, .74, 0]);
  rim.rotation.x = Math.PI / 2;

  // An arched handle sits behind the flowers, leaving the blooms unobstructed.
  const handlePoints = Array.from({ length: 25 }, (_, i) => {
    const angle = i / 24 * Math.PI;
    return new THREE.Vector3(.46 * Math.cos(angle), .73 + .85 * Math.sin(angle), -.18);
  });
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(handlePoints), 24, .032, 6, false), weave, [0, 0, 0]);

  const flowers = [
    { position: [-.35, 1.53, .04], color: 0, size: 1 },
    { position: [.04, 1.93, -.08], color: 1, size: 1.05 },
    { position: [.4, 1.66, .02], color: 2, size: .95 },
    { position: [-.12, 1.3, .34], color: 1, size: .9 },
    { position: [.29, 1.23, .33], color: 0, size: .85 },
  ];
  flowers.forEach(({ position, color, size }, index) => {
    const tip = new THREE.Vector3(...position);
    const root = new THREE.Vector3(tip.x * .3, .7, tip.z * .3);
    const curve = new THREE.QuadraticBezierCurve3(root, new THREE.Vector3(tip.x * .65, tip.y * .75, tip.z), tip);
    mesh(new THREE.TubeGeometry(curve, 10, .018, 6, false), stemMaterial, [0, 0, 0]);

    for (let side = -1; side <= 1; side += 2) {
      const point = curve.getPoint(side === -1 ? .35 : .6);
      const leaf = mesh(roundedGeometry, leafMaterial, [point.x + side * .11, point.y + .035, point.z], [.17, .055, .075]);
      leaf.rotation.z = side * .5;
    }

    const bloom = new THREE.Group();
    bloom.position.copy(tip);
    bloom.scale.setScalar(size);
    // Tilt toward the viewer and the sky so petals read clearly in the opening shot.
    bloom.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(tip.x * .4, .55, 1).normalize());
    basket.add(bloom);
    for (let petal = 0; petal < 7; petal++) {
      const angle = petal / 7 * Math.PI * 2 + index * .3;
      const petalMesh = mesh(roundedGeometry, petalMaterials[color], [.145 * Math.cos(angle), .145 * Math.sin(angle), .015], [.135, .075, .045], bloom);
      petalMesh.rotation.z = angle;
    }
    mesh(roundedGeometry, pollen, [0, 0, .065], [.085, .085, .055], bloom);
  });
  return basket;
}
