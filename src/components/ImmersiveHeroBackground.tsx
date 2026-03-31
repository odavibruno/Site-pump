import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_uv;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(
    0.211324865405187,
    0.366025403784439,
   -0.577350269189626,
    0.024390243902439
  );

  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i);
  vec3 p = permute(
    permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
    0.5 - vec3(
      dot(x0, x0),
      dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)
    ),
    0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float grain(vec2 uv) {
  return fract(sin(dot(uv, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = v_uv;
  vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
  vec2 centered = (uv - 0.5) * aspect;
  vec2 mouse = (u_mouse - 0.5) * aspect;

  float t = u_time * 0.08;
  float n1 = snoise(centered * 1.8 + vec2(t, -t * 0.6));
  float n2 = snoise(centered * 3.2 - vec2(t * 0.7, t * 0.9));
  float flow = n1 * 0.65 + n2 * 0.35;

  vec3 deepBlue = vec3(0.043, 0.059, 0.141);
  vec3 darkPurple = vec3(0.192, 0.082, 0.278);
  vec3 magenta = vec3(0.659, 0.157, 0.761);

  float baseMix = smoothstep(-0.85, 0.8, flow);
  vec3 color = mix(deepBlue, darkPurple, baseMix);

  vec2 hotspotPos = mouse * 0.9 + vec2(
    snoise(centered * 1.0 + vec2(t * 0.8, -t * 0.3)) * 0.16,
    snoise(centered * 1.0 + vec2(-t * 0.4, t * 0.5)) * 0.16
  );
  float hotspot = exp(-length(centered - hotspotPos) * 3.2);
  hotspot += exp(-length(centered + hotspotPos * 0.7 + vec2(0.22, -0.14)) * 4.5) * 0.5;

  color = mix(color, magenta, clamp(hotspot, 0.0, 1.0) * 0.75);

  float vignette = smoothstep(1.3, 0.15, length(centered));
  color *= vignette * 0.92 + 0.08;

  float filmGrain = grain(gl_FragCoord.xy);
  float grainAmount = (filmGrain - 0.5) * 0.16;
  color += grainAmount;

  gl_FragColor = vec4(color, 1.0);
}
`;

export function ImmersiveHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      uniforms.u_resolution.value.set(width, height);
    };

    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const onMouseMove = (event: MouseEvent) => {
      targetMouse.set(event.clientX / window.innerWidth, 1 - event.clientY / window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    onResize();

    let rafId = 0;
    const clock = new THREE.Clock();
    const renderFrame = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      uniforms.u_mouse.value.lerp(targetMouse, 0.06);
      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(renderFrame);
    };
    renderFrame();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-screen w-screen pointer-events-none"
      aria-hidden="true"
    />
  );
}
