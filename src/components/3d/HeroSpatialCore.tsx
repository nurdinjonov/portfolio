import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroSpatialCore: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for mouse parallax
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core - Glowing Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(2.1, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // 2. Inner Solid Glowing Orb
    const innerGeometry = new THREE.IcosahedronGeometry(1.4, 3);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5,
      emissive: 0x312e81,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // 3. Orbiting Geometric Rings (representing .NET CLR and execution cycles)
    const ringGeometry = new THREE.TorusGeometry(3.1, 0.025, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.6,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    ringMesh2.rotation.y = Math.PI / 4;
    (ringMesh2.material as THREE.MeshBasicMaterial).color.setHex(0x818cf8);
    coreGroup.add(ringMesh2);

    // 4. Floating Particle Cloud
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorChoices = [
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0x38bdf8), // Sky
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 2.5, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x10b981, 2, 20);
    pointLight2.position.set(-5, -5, -3);
    scene.add(pointLight2);

    // Mouse tracking for subtle parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (event.clientX / innerWidth - 0.5) * 0.8;
      targetY = (event.clientY / innerHeight - 0.5) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Shockwave click effect
    const handleClick = () => {
      let scale = 1.0;
      const expand = () => {
        scale += 0.05;
        coreGroup.scale.set(scale, scale, scale);
        if (scale < 1.15) {
          requestAnimationFrame(expand);
        } else {
          shrink();
        }
      };
      const shrink = () => {
        scale -= 0.02;
        coreGroup.scale.set(scale, scale, scale);
        if (scale > 1.0) {
          requestAnimationFrame(shrink);
        } else {
          coreGroup.scale.set(1, 1, 1);
        }
      };
      expand();
    };

    mount.addEventListener('click', handleClick);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    // Intersection Observer to pause rendering when not in viewport (0% battery drain)
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(mount);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group rotation with mouse damping
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      coreGroup.rotation.y = elapsedTime * 0.2 + currentX * 1.5;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + currentY * 1.5;

      // Pulse inner core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.04;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Rings spin on independent axes
      ringMesh1.rotation.z = elapsedTime * 0.4;
      ringMesh2.rotation.x = elapsedTime * 0.35;

      // Particles orbit gently
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mount.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[540px] flex items-center justify-center cursor-pointer select-none">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute bottom-2 text-xs text-slate-500 font-mono tracking-wider pointer-events-none bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800/80 backdrop-blur-md">
        ⚡ CLR 3D SPATIAL ENGINE • CLICK TO IMPULSE
      </div>
    </div>
  );
};
