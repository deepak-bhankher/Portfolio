import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 9;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Parent 3D Group for mouse & scroll parallax
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 4. Floating 3D Geometric Mesh 1 (Outer Icosahedron Wireframe)
    const icosaGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);
    icosaMesh.position.set(4.5, 0.5, -2);
    worldGroup.add(icosaMesh);

    // 5. Floating 3D Geometric Mesh 2 (Inner Octahedron)
    const octaGeo = new THREE.OctahedronGeometry(1.4, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8, // Indigo
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(4.5, 0.5, -2);
    worldGroup.add(octaMesh);

    // 6. Floating 3D Geometric Mesh 3 (Left background Torus Knot)
    const torusGeo = new THREE.TorusKnotGeometry(1.6, 0.2, 80, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Purple-indigo
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(-4.8, -1.8, -3);
    worldGroup.add(torusMesh);

    // 7. Floating 3D Geometric Mesh 4 (Small Tetrahedrons floating in depth)
    const tetraGroup = new THREE.Group();
    const tetraGeo = new THREE.TetrahedronGeometry(0.5, 0);
    const tetraMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const tetraList = [];
    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(tetraGeo, tetraMat);
      mesh.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6 - 2
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      tetraGroup.add(mesh);
      tetraList.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.8 + Math.random() * 0.8,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }
    worldGroup.add(tetraGroup);

    // 8. 3D Particle Starfield & Cyber Dust (450 particles)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x22d3ee);
    const violetColor = new THREE.Color(0xa855f7);
    const blueColor = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 18;
      const z = (Math.random() - 0.5) * 14 - 1;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      // Color variation
      const rand = Math.random();
      const color = rand > 0.6 ? cyanColor : rand > 0.3 ? violetColor : blueColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(particles);

    // 9. Mouse and Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0006;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0006;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * 0.0015;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 10. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      targetScrollY += (scrollY - targetScrollY) * 0.05;

      worldGroup.rotation.y = targetX * 1.5;
      worldGroup.rotation.x = targetY * 1.2;
      worldGroup.position.y = -targetScrollY * 1.8;

      // Rotate primary geometries
      icosaMesh.rotation.x = elapsed * 0.15;
      icosaMesh.rotation.y = elapsed * 0.2;

      octaMesh.rotation.x = -elapsed * 0.25;
      octaMesh.rotation.z = elapsed * 0.3;

      torusMesh.rotation.x = elapsed * 0.12;
      torusMesh.rotation.y = elapsed * 0.16;

      // Animate small tetrahedrons
      tetraList.forEach(({ mesh, rotSpeedX, rotSpeedY, floatSpeed, floatOffset }) => {
        mesh.rotation.x += rotSpeedX;
        mesh.rotation.y += rotSpeedY;
        mesh.position.y += Math.sin(elapsed * floatSpeed + floatOffset) * 0.004;
      });

      // Wave motion on particles
      const posAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posAttr.array[i3 + 1] = initialPositions[i3 + 1] + Math.sin(elapsed * 0.8 + initialPositions[i3] * 0.5) * 0.25;
      }
      posAttr.needsUpdate = true;

      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Responsive Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      icosaGeo.dispose();
      icosaMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      tetraGeo.dispose();
      tetraMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
