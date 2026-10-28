import * as THREE from 'three';

/** Grazing-angle scattering, with a feathered outer edge instead of a tinted
 * solid sphere. Depth writes stay disabled so bars cannot acquire halo holes. */
export function createGlobeAtmosphere(radius, { opacity = .5, falloff = 3.5 } = {}) {
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide,
    uniforms: {
      atmosphereColor: { value: new THREE.Color('#a3e4ff') },
      strength: { value: opacity }, falloff: { value: falloff }, reveal: { value: 1 },
      keyDirection: { value: new THREE.Vector3(-.8, .85, .7).normalize() },
    },
    vertexShader: `
      varying vec3 atmosphereNormal;
      varying vec3 atmosphereView;
      void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        atmosphereNormal = normalMatrix * normal;
        atmosphereView = -viewPosition.xyz;
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 atmosphereColor;
      uniform vec3 keyDirection;
      uniform float strength;
      uniform float falloff;
      uniform float reveal;
      varying vec3 atmosphereNormal;
      varying vec3 atmosphereView;
      void main() {
        vec3 normal = normalize(atmosphereNormal);
        float facing = abs(dot(normal, normalize(atmosphereView)));
        float edge = pow(1.0 - facing, falloff) * smoothstep(0.0, .16, facing);
        float sunlight = .38 + .62 * smoothstep(-.4, .7, dot(normal, keyDirection));
        gl_FragColor = vec4(atmosphereColor, edge * sunlight * strength * reveal);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
  return new THREE.Mesh(new THREE.SphereGeometry(radius, 72, 72), material);
}
