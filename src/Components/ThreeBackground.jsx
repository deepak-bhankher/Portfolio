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
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 10;

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

    // 3. Parent World Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 4. Futuristic Multi-Axis Holographic Gyroscope (Top-Right Parallax)
    const gyroGroup = new THREE.Group();
    gyroGroup.position.set(4.2, 1.2, -2.5);
    worldGroup.add(gyroGroup);

    // Ring 1 - Outer Cyan Ring
    const ring1Geo = new THREE.TorusGeometry(2.6, 0.02, 16, 90);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    gyroGroup.add(ring1);

    // Ring 2 - Middle Sky Blue Ring (tilted)
    const ring2Geo = new THREE.TorusGeometry(2.0, 0.02, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Sky Blue
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    gyroGroup.add(ring2);

    // Ring 3 - Inner Indigo Ring
    const ring3Geo = new THREE.TorusGeometry(1.4, 0.02, 16, 70);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8, // Indigo
      transparent: true,
      opacity: 0.5,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    gyroGroup.add(ring3);

    // Core Crystal (Wireframe Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    gyroGroup.add(core);

    // Left Secondary Holographic Element (Abstract Torus Knot)
    const knotGeo = new THREE.TorusKnotGeometry(1.5, 0.15, 90, 16, 2, 3);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0x4f46e5,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.position.set(-5.0, -2.0, -3.5);
    worldGroup.add(knotMesh);

    // 5. Constellation Neural Web (Interconnected Cyber Nodes)
    const nodeCount = 85;
    const maxDistance = 2.4;
    const nodePositions = [];
    const nodeVelocities = [];

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8 - 1
      );
      nodePositions.push(pos);
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.004
        )
      );
    }

    // Node Points
    const pointsGeo = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(nodeCount * 3);
    const pointColors = new Float32Array(nodeCount * 3);

    const cyanCol = new THREE.Color(0x22d3ee);
    const blueCol = new THREE.Color(0x38bdf8);
    const purpleCol = new THREE.Color(0x818cf8);

    for (let i = 0; i < nodeCount; i++) {
      pointPositions[i * 3] = nodePositions[i].x;
      pointPositions[i * 3 + 1] = nodePositions[i].y;
      pointPositions[i * 3 + 2] = nodePositions[i].z;

      const col = i % 3 === 0 ? cyanCol : i % 3 === 1 ? blueCol : purpleCol;
      pointColors[i * 3] = col.r;
      pointColors[i * 3 + 1] = col.g;
      pointColors[i * 3 + 2] = col.b;
    }

    pointsGeo.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(pointColors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    worldGroup.add(pointsMesh);

    // Neural Connection Lines
    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    linesGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    worldGroup.add(linesMesh);

    // 6. Ambient Dust Starfield (Deep Background)
    const starCount = 200;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 26;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 4;
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeo, starMat);
    worldGroup.add(stars);

    // 7. Mouse & Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0004;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0004;
    };

    const onScroll = () => {
      scrollY = window.scrollY * 0.0012;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // 8. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth Parallax
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      targetScrollY += (scrollY - targetScrollY) * 0.04;

      worldGroup.rotation.y = targetX * 1.2;
      worldGroup.rotation.x = targetY * 0.9;
      worldGroup.position.y = -targetScrollY * 1.5;

      // Rotate Holographic Gyroscope
      ring1.rotation.z = elapsed * 0.18;
      ring1.rotation.x = elapsed * 0.12;

      ring2.rotation.y = -elapsed * 0.22;
      ring2.rotation.z = elapsed * 0.15;

      ring3.rotation.x = elapsed * 0.25;
      ring3.rotation.y = elapsed * 0.2;

      core.rotation.x = -elapsed * 0.3;
      core.rotation.y = -elapsed * 0.35;

      // Animate secondary knot
      knotMesh.rotation.x = elapsed * 0.1;
      knotMesh.rotation.y = elapsed * 0.14;

      // Animate Constellation Nodes
      const positionsArr = pointsGeo.attributes.position.array;
      let lineIdx = 0;

      for (let i = 0; i < nodeCount; i++) {
        const pos = nodePositions[i];
        const vel = nodeVelocities[i];

        pos.add(vel);

        // Boundary bounce
        if (Math.abs(pos.x) > 9) vel.x *= -1;
        if (Math.abs(pos.y) > 7) vel.y *= -1;
        if (Math.abs(pos.z) > 4) vel.z *= -1;

        positionsArr[i * 3] = pos.x;
        positionsArr[i * 3 + 1] = pos.y;
        positionsArr[i * 3 + 2] = pos.z;

        // Check distance with other nodes to draw lines
        for (let j = i + 1; j < nodeCount; j++) {
          const other = nodePositions[j];
          const dist = pos.distanceTo(other);

          if (dist < maxDistance) {
            const alpha = (1.0 - dist / maxDistance) * 0.3;

            linePositions[lineIdx * 6] = pos.x;
            linePositions[lineIdx * 6 + 1] = pos.y;
            linePositions[lineIdx * 6 + 2] = pos.z;

            linePositions[lineIdx * 6 + 3] = other.x;
            linePositions[lineIdx * 6 + 4] = other.y;
            linePositions[lineIdx * 6 + 5] = other.z;

            // Gradient line color
            lineColors[lineIdx * 6] = cyanCol.r * alpha;
            lineColors[lineIdx * 6 + 1] = cyanCol.g * alpha;
            lineColors[lineIdx * 6 + 2] = cyanCol.b * alpha;

            lineColors[lineIdx * 6 + 3] = blueCol.r * alpha;
            lineColors[lineIdx * 6 + 4] = blueCol.g * alpha;
            lineColors[lineIdx * 6 + 5] = blueCol.b * alpha;

            lineIdx++;
          }
        }
      }

      pointsGeo.attributes.position.needsUpdate = true;
      linesGeo.setDrawRange(0, lineIdx * 2);
      linesGeo.attributes.position.needsUpdate = true;
      linesGeo.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-85"
    />
  );
}
