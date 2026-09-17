import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Parent interactive group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 4. Outer Wireframe 3D Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 5. Inner Core 3D Octahedron
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 6. Orbital Cyber Rings
    const ringGeo1 = new THREE.TorusGeometry(3.0, 0.018, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.3, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 7. Particle Cloud
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8);
    const color2 = new THREE.Color(0x818cf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 3, 20);
    pointLight1.position.set(4, 5, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xc084fc, 2.5, 20);
    pointLight2.position.set(-4, -5, -4);
    scene.add(pointLight2);

    // 9. Mouse interaction & animation
    let targetRotX = 0;
    let targetRotY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0012;
      mouseY = (e.clientY - windowHalfY) * 0.0012;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Constant gentle floating & spinning
      outerMesh.rotation.x = elapsedTime * 0.25;
      outerMesh.rotation.y = elapsedTime * 0.35;

      innerMesh.rotation.x = -elapsedTime * 0.4;
      innerMesh.rotation.z = elapsedTime * 0.45;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.x = elapsedTime * 0.12;

      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = elapsedTime * 0.03;

      // Dynamic mouse tilt lerp
      targetRotY += (mouseX - targetRotY) * 0.06;
      targetRotX += (mouseY - targetRotX) * 0.06;

      mainGroup.rotation.y = targetRotY;
      mainGroup.rotation.x = targetRotX;

      // Subtle float
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.18;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full pointer-events-none ${className}`}
      style={{ overflow: "hidden" }}
    />
  );
}
