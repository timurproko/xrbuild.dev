import * as THREE from 'three';

/** Globe-only studio lighting, in view space. It remains stable through orbit
 * and focus without changing chart colors, adding shadow maps, or moving UI. */
export function createGlobeSurfaceMaterial({ landMask = null, earthMap = null } = {}) {
  const fallback = !landMask || !earthMap ? new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1) : null;
  if (fallback) fallback.needsUpdate = true;
  return new THREE.ShaderMaterial({
    uniforms: {
      surfaceColor: { value: new THREE.Color('#103b59') },
      landColor: { value: new THREE.Color('#87a7b4') },
      landOpacity: { value: .28 },
      landMask: { value: landMask ?? fallback },
      earthMap: { value: earthMap ?? fallback },
      detailStrength: { value: earthMap ? 1 : 0 },
      lightColor: { value: new THREE.Color('#e4f2ff') },
      rimColor: { value: new THREE.Color('#8dbbd6') },
      keyDirection: { value: new THREE.Vector3(-.8, .85, .7).normalize() },
      fillDirection: { value: new THREE.Vector3(.8, -.2, .7).normalize() },
    },
    vertexShader: `
      varying vec3 surfaceNormal;
      varying vec3 surfaceView;
      varying vec2 surfaceUv;
      void main() {
        surfaceUv = uv + vec2(.5, 0.0);
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        surfaceNormal = normalMatrix * normal;
        surfaceView = -viewPosition.xyz;
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 surfaceColor;
      uniform vec3 landColor;
      uniform float landOpacity;
      uniform sampler2D landMask;
      uniform sampler2D earthMap;
      uniform float detailStrength;
      uniform vec3 lightColor;
      uniform vec3 rimColor;
      uniform vec3 keyDirection;
      uniform vec3 fillDirection;
      varying vec3 surfaceNormal;
      varying vec3 surfaceView;
      varying vec2 surfaceUv;
      void main() {
        vec3 normal = normalize(surfaceNormal);
        vec3 view = normalize(surfaceView);
        float facing = max(dot(normal, view), 0.0);
        float key = max(dot(normal, keyDirection), 0.0);
        float fill = max(dot(normal, fillDirection), 0.0);
        // A broad satin highlight, not a hard glossy hotspot. A low fill keeps
        // the shaded hemisphere readable without flattening the terminator.
        vec3 halfVector = normalize(keyDirection + view);
        float land = texture2D(landMask, surfaceUv).r;
        vec3 terrain = texture2D(earthMap, surfaceUv).rgb;
        float relief = sqrt(max(dot(terrain, vec3(.2126, .7152, .0722)), 0.0));
        vec3 terrainTint = landColor * mix(1.0, .7 + relief * .5, detailStrength);
        terrainTint = mix(terrainTint, terrain * vec3(.5, .72, .95), .18 * detailStrength);
        // Blend land into the opaque ocean surface, not a depth-writing overlay.
        // This gives a translucent fill without leaking far-side geography.
        vec3 albedo = mix(surfaceColor, terrainTint, land * landOpacity);
        float highlight = pow(max(dot(normal, halfVector), 0.0), 22.0)
          * .055 * mix(1.0, .35, land);
        float sunlight = smoothstep(-.3, .65, dot(normal, keyDirection));
        float rim = pow(1.0 - facing, 3.5) * (.045 + .13 * sunlight);
        vec3 color = albedo * (.18 + key * 1.7 + fill * .16)
          + lightColor * highlight + rimColor * rim;
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
}
