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

// Função de Ruído Simplex para ondas orgânicas
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Matemática de Camadas (FBM sutil)
float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float ratio = u_resolution.x / u_resolution.y;
    vec2 uv_ratio = vec2(uv.x * ratio, uv.y);
    vec2 mouse_ratio = vec2(u_mouse.x * ratio, u_mouse.y);

    // Criando as ondas suaves (sand waves)
    float waves = fbm(uv_ratio * 2.0 + u_time * 0.1);
    waves += sin(uv_ratio.x * 3.0 + u_time) * 0.1; // Ondulação horizontal

    // Cor base ultra profunda (quase preto)
    vec3 color = vec3(0.01, 0.01, 0.02);

    // Influência do mouse (Glow roxo atmosférico que ilumina as ondas)
    float dist = distance(uv_ratio, mouse_ratio);
    float m_glow = smoothstep(0.7, 0.0, dist);

    // Camadas de Roxo (tonalidades escuras e elegantes)
    vec3 darkPurple = vec3(0.08, 0.02, 0.15);
    vec3 lightPurple = vec3(0.2, 0.05, 0.4);
    vec3 waveColor = mix(darkPurple, lightPurple, waves);

    // Mistura final: Apenas ilumina as ondas onde o mouse está
    color = mix(color, waveColor, m_glow * 0.8);

    // Ruído de grão fino tátil (opacidade 0.02)
    float grain = noise(uv + u_time) * 0.02;
    color += grain;

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

    const container = canvas.parentElement ?? canvas;
    const onResize = (width: number, height: number) => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
      uniforms.u_resolution.value.set(width, height);
    };

    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const onMouseMove = (event: MouseEvent) => {
      targetMouse.set(event.clientX / window.innerWidth, 1 - event.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = Math.max(1, Math.floor(entry.contentRect.width));
      const height = Math.max(1, Math.floor(entry.contentRect.height));
      onResize(width, height);
    });
    resizeObserver.observe(container);
    onResize(Math.max(1, container.clientWidth), Math.max(1, container.clientHeight));

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
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
