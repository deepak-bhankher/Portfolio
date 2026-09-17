import React, { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
  glare = true,
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransform({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      scale,
      glareX,
      glareY,
      glareOpacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
      {...props}
    >
      <div
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${transform.scale}, ${transform.scale}, ${transform.scale})`,
          transition: transform.scale === 1 ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)" : "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-2xl"
      >
        {children}

        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30 overflow-hidden"
            style={{
              opacity: transform.glareOpacity,
              background: `radial-gradient(circle 320px at ${transform.glareX}% ${transform.glareY}%, rgba(56, 189, 248, 0.35), transparent 70%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
