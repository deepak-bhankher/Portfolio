import React, { useRef, useState } from "react";

export default function HolographicPortrait() {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-fit select-none cursor-crosshair flex items-center justify-center py-2"
    >
      {/* Soft Ambient Radial Glow Behind Deepak */}
      <div
        className="pointer-events-none absolute -inset-6 bg-gradient-to-t from-cyan-500/15 via-emerald-500/10 to-transparent rounded-full blur-3xl -z-10 transition-opacity duration-500"
        style={{ opacity: isHovered ? 0.75 : 0.3 }}
      />

      {/* Subtle floor shadow / ambient aura */}
      <div className="pointer-events-none absolute -bottom-2 w-52 h-8 rounded-[100%] bg-cyan-500/15 blur-xl -z-10 transform scale-y-50" />

      {/* Image Container (NO rotate, perfectly stable, sleek tech frame) */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.2)] flex items-center justify-center bg-slate-950">
        {/* BASE LAYER: Natural clean photo of Deepak with background */}
        <img
          src="/deepak-photo.png"
          alt="Deepak"
          className="w-72 sm:w-80 md:w-[370px] h-auto object-cover block"
          draggable="false"
        />

        {/* CYBERNETIC X-RAY / HOLOGRAPHIC REVEAL LAYER
            Revealed precisely at cursor position just like the reference photo */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200"
          style={{
            opacity: isHovered ? 1 : 0,
            WebkitMaskImage: `radial-gradient(circle 130px at ${coords.x}px ${coords.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 55%, transparent 100%)`,
            maskImage: `radial-gradient(circle 130px at ${coords.x}px ${coords.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 55%, transparent 100%)`,
          }}
        >
          {/* Cyber x-ray image */}
          <img
            src="/deepak-cyber.png"
            alt="Deepak Cyber Aesthetic"
            className="w-72 sm:w-80 md:w-[370px] h-auto object-cover block filter drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]"
            draggable="false"
          />

          {/* Holographic Wireframe Grid lines over the revealed area */}
          <div
            className="absolute inset-0 mix-blend-screen opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 242, 254, 0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.45) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />
        </div>

        {/* Luminous Cyber Ring Lens Tracking Cursor */}
        {isHovered && (
          <div
            className="pointer-events-none absolute w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/70 shadow-[0_0_25px_rgba(0,242,254,0.5),inset_0_0_15px_rgba(16,185,129,0.3)] transition-transform duration-75 ease-out"
            style={{
              left: `${coords.x}px`,
              top: `${coords.y}px`,
            }}
          >
            {/* Minimalist Tech Crosshair Cues */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2.5 bg-cyan-300" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2.5 bg-cyan-300" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2.5 bg-cyan-300" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2.5 bg-cyan-300" />
          </div>
        )}
      </div>
    </div>
  );
}
