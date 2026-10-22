import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FullScreenCosmos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Deep Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.028);

    // 2. Camera with Wide Depth
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 14);

    // 3. Renderer with ACES Filmic Tone Mapping
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Main 3D World Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // -------------------------------------------------------------
    // A. GRAND HOLOGRAPHIC CYBER CORE (Kibernetik Kvant Yadrosi)
    // -------------------------------------------------------------
    const coreGroup = new THREE.Group();
    // Center it with slight offset so it frames the hero text majestically
    coreGroup.position.set(1.8, 0.8, -1.5);
    worldGroup.add(coreGroup);

    // 1. Outer Geodesic Hologram Sphere (Large & majestic)
    const geoRadius = 3.6;
    const outerGeoGeometry = new THREE.IcosahedronGeometry(geoRadius, 3);
    const outerGeoMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1, // Indigo
      emissive: 0x3730a3,
      emissiveIntensity: 0.5,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const outerCoreMesh = new THREE.Mesh(outerGeoGeometry, outerGeoMaterial);
    coreGroup.add(outerCoreMesh);

    // 2. Inner Rotating Octahedron Gem (Emerald Core)
    const innerGemGeometry = new THREE.OctahedronGeometry(2.0, 1);
    const innerGemMaterial = new THREE.MeshStandardMaterial({
      color: 0x10b981, // Emerald
      emissive: 0x065f46,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerGemMesh = new THREE.Mesh(innerGemGeometry, innerGemMaterial);
    coreGroup.add(innerGemMesh);

    // 3. Dual Holographic Neon Orbital Rings
    const ring1Geom = new THREE.TorusGeometry(5.2, 0.04, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Sky neon
      transparent: true,
      opacity: 0.65,
    });
    const orbitRing1 = new THREE.Mesh(ring1Geom, ring1Mat);
    orbitRing1.rotation.x = Math.PI / 2.3;
    coreGroup.add(orbitRing1);

    const ring2Geom = new THREE.TorusGeometry(4.6, 0.035, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Emerald neon
      transparent: true,
      opacity: 0.6,
    });
    const orbitRing2 = new THREE.Mesh(ring2Geom, ring2Mat);
    orbitRing2.rotation.y = Math.PI / 2.8;
    coreGroup.add(orbitRing2);

    // 4. Glowing Data Node Satellites on Orbit
    const satelliteGroup = new THREE.Group();
    coreGroup.add(satelliteGroup);
    const nodeCount = 8;
    const nodeGeom = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 4.6, 0, Math.sin(angle) * 4.6);
      satelliteGroup.add(node);
    }

    // -------------------------------------------------------------
    // B. EXPANSIVE 3D CYBER WAVE GRID (Kibernetik To'lqin Maydoni)
    // -------------------------------------------------------------
    const gridCols = 50;
    const gridRows = 50;
    const gridCount = gridCols * gridRows;
    const waveGeometry = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(gridCount * 3);
    const waveColors = new Float32Array(gridCount * 3);

    const cEmerald = new THREE.Color(0x10b981);
    const cIndigo = new THREE.Color(0x6366f1);
    const cSky = new THREE.Color(0x38bdf8);

    let idx = 0;
    for (let ix = 0; ix < gridCols; ix++) {
      for (let iz = 0; iz < gridRows; iz++) {
        const x = (ix - gridCols / 2) * 0.9;
        const z = (iz - gridRows / 2) * 0.9 - 6;
        const y = -4.5; // Bottom terrain

        wavePositions[idx * 3] = x;
        wavePositions[idx * 3 + 1] = y;
        wavePositions[idx * 3 + 2] = z;

        // Gradient color based on distance
        const tColor = (ix + iz) / (gridCols + gridRows);
        const col = tColor > 0.5 ? cIndigo.clone().lerp(cSky, (tColor - 0.5) * 2) : cEmerald.clone().lerp(cIndigo, tColor * 2);

        waveColors[idx * 3] = col.r;
        waveColors[idx * 3 + 1] = col.g;
        waveColors[idx * 3 + 2] = col.b;

        idx++;
      }
    }

    waveGeometry.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const wavePoints = new THREE.Points(waveGeometry, waveMaterial);
    worldGroup.add(wavePoints);

    // -------------------------------------------------------------
    // C. 2,600 FLOATING STARDUST GALAXY PARTICLES
    // -------------------------------------------------------------
    const galaxyCount = 2600;
    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyPositions = new Float32Array(galaxyCount * 3);
    const galaxyColors = new Float32Array(galaxyCount * 3);

    const palette = [
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0x38bdf8), // Sky
      new THREE.Color(0xa855f7), // Purple
      new THREE.Color(0xf59e0b), // Amber
    ];

    for (let i = 0; i < galaxyCount; i++) {
      const radius = 6 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      galaxyPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      galaxyPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      galaxyPositions[i * 3 + 2] = radius * Math.cos(phi) - 5;

      const col = palette[Math.floor(Math.random() * palette.length)];
      galaxyColors[i * 3] = col.r;
      galaxyColors[i * 3 + 1] = col.g;
      galaxyColors[i * 3 + 2] = col.b;
    }

    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));

    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const galaxyParticles = new THREE.Points(galaxyGeometry, galaxyMaterial);
    worldGroup.add(galaxyParticles);

    // -------------------------------------------------------------
    // D. LIGHTING & ATMOSPHERE
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pLight1 = new THREE.PointLight(0x6366f1, 5, 35);
    pLight1.position.set(8, 8, 8);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0x10b981, 4, 30);
    pLight2.position.set(-8, -4, 6);
    scene.add(pLight2);

    // -------------------------------------------------------------
    // E. MOUSE & SCROLL INTERACTIONS
    // -------------------------------------------------------------
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Click Shockwave expansion
    let pulseScale = 1.0;
    let isPulsing = false;
    const onClick = () => {
      if (isPulsing) return;
      isPulsing = true;
      let expand = true;
      const pulseInterval = setInterval(() => {
        if (expand) {
          pulseScale += 0.035;
          if (pulseScale >= 1.25) expand = false;
        } else {
          pulseScale -= 0.02;
          if (pulseScale <= 1.0) {
            pulseScale = 1.0;
            isPulsing = false;
            clearInterval(pulseInterval);
          }
        }
        coreGroup.scale.set(pulseScale, pulseScale, pulseScale);
      }, 16);
    };
    window.addEventListener('click', onClick);

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // -------------------------------------------------------------
    // F. ANIMATION TICK LOOP
    // -------------------------------------------------------------
    let animationFrameId: number;
    let clock = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock += 0.016;

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      // Group rotation based on mouse & scroll parallax
      worldGroup.rotation.y = clock * 0.06 + currentMouseX * 0.35;
      worldGroup.rotation.x = currentMouseY * 0.25 + scrollY * 0.0003;

      // Core rotation
      outerCoreMesh.rotation.x = clock * 0.18;
      outerCoreMesh.rotation.y = clock * 0.22;
      innerGemMesh.rotation.y = -clock * 0.35;
      innerGemMesh.rotation.z = clock * 0.15;

      // Orbital rings rotation
      orbitRing1.rotation.z = clock * 0.25;
      orbitRing2.rotation.z = -clock * 0.2;
      satelliteGroup.rotation.y = clock * 0.35;

      // Animate wave points (Sinusoidal Cyber Ocean)
      const positions = waveGeometry.attributes.position.array as Float32Array;
      let pIdx = 0;
      for (let ix = 0; ix < gridCols; ix++) {
        for (let iz = 0; iz < gridRows; iz++) {
          const yIdx = pIdx * 3 + 1;
          const u = ix * 0.2;
          const v = iz * 0.2;
          positions[yIdx] = -4.5 + Math.sin(u + clock * 2) * 0.45 + Math.cos(v + clock * 1.5) * 0.45;
          pIdx++;
        }
      }
      waveGeometry.attributes.position.needsUpdate = true;

      // Floating galaxy slow rotation
      galaxyParticles.rotation.y = -clock * 0.02;

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
      outerGeoGeometry.dispose();
      outerGeoMaterial.dispose();
      innerGemGeometry.dispose();
      innerGemMaterial.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      waveGeometry.dispose();
      waveMaterial.dispose();
      galaxyGeometry.dispose();
      galaxyMaterial.dispose();
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
