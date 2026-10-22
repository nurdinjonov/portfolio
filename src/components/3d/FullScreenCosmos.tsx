import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FullScreenCosmos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.035);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Main 3D World Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Central Spatial Torus Knot Core (Architectural Sculpture)
    const coreGeometry = new THREE.TorusKnotGeometry(2.4, 0.65, 120, 24);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      emissive: 0x312e81,
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreMesh.position.set(2.5, 0.5, -2);
    worldGroup.add(coreMesh);

    // 2. Inner Glowing Gem
    const gemGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const gemMaterial = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x065f46,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.8,
      wireframe: false,
      transparent: true,
      opacity: 0.45,
    });
    const gemMesh = new THREE.Mesh(gemGeometry, gemMaterial);
    gemMesh.position.copy(coreMesh.position);
    worldGroup.add(gemMesh);

    // 3. Floating Spatial Orbit Rings
    const orbitGroup = new THREE.Group();
    orbitGroup.position.copy(coreMesh.position);
    worldGroup.add(orbitGroup);

    const ringGeometry = new THREE.RingGeometry(3.6, 3.66, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 2.5;
    orbitGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    (ring2.material as THREE.MeshBasicMaterial).color.setHex(0x10b981);
    ring2.rotation.y = Math.PI / 3;
    orbitGroup.add(ring2);

    // 4. Massive 2,200 Particle Cosmic Field
    const particleCount = 2200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0x38bdf8), // Sky
      new THREE.Color(0xf59e0b), // Amber
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 6 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 4;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    worldGroup.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x6366f1, 4, 30);
    light1.position.set(6, 6, 6);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x10b981, 3, 25);
    light2.position.set(-6, -4, 4);
    scene.add(light2);

    // Mouse movement damping
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Click Shockwave
    const onClick = () => {
      let scale = 1.0;
      const expand = () => {
        scale += 0.04;
        coreMesh.scale.set(scale, scale, scale);
        gemMesh.scale.set(scale, scale, scale);
        if (scale < 1.16) {
          requestAnimationFrame(expand);
        } else {
          shrink();
        }
      };
      const shrink = () => {
        scale -= 0.02;
        coreMesh.scale.set(scale, scale, scale);
        gemMesh.scale.set(scale, scale, scale);
        if (scale > 1.0) {
          requestAnimationFrame(shrink);
        } else {
          coreMesh.scale.set(1, 1, 1);
          gemMesh.scale.set(1, 1, 1);
        }
      };
      expand();
    };

    window.addEventListener('click', onClick);

    // Scroll parallax
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.035;
      currentMouseY += (targetMouseY - currentMouseY) * 0.035;

      // Rotate group with mouse
      worldGroup.rotation.y = elapsedTime * 0.08 + currentMouseX * 0.45;
      worldGroup.rotation.x = currentMouseY * 0.35 + (scrollY * 0.0003);

      // Core complex rotation
      coreMesh.rotation.x = elapsedTime * 0.25;
      coreMesh.rotation.y = elapsedTime * 0.3;
      gemMesh.rotation.y = -elapsedTime * 0.35;

      // Orbit rings spin
      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Particles orbit
      particles.rotation.y = -elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      coreMaterial.dispose();
      gemGeometry.dispose();
      gemMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
};
