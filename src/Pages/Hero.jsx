import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import ThreeScene from "../Components/ThreeScene";
import TiltCard from "../Components/TiltCard";
import MagneticButton from "../Components/MagneticButton";

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/deepak-bhankher", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: HiOutlineMail, href: "mailto:deepakbhankhor758@gmail.com", label: "Email" },
];

const CHIPS = [
  { icon: SiReact, label: "React 19", color: "#38BDF8", className: "-top-5 -left-6 md:-left-10" },
  { icon: SiNodedotjs, label: "Node.js", color: "#4ADE80", className: "top-1/2 -right-6 md:-right-10 -translate-y-1/2" },
  { icon: SiMongodb, label: "MongoDB", color: "#22C55E", className: "-bottom-5 -left-4 md:-left-8" },
];

function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20 md:pt-28 md:pb-12 overflow-hidden"
    >
      {/* 3D Interactive Three.js Background Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <ThreeScene />
      </div>

      {/* Ambient ambient glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[550px] h-[550px] rounded-full bg-indigo-600/15 blur-[150px]" />

      {/* Oversized background typography */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none z-0 leading-none opacity-20">
        <motion.span
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="whitespace-nowrap font-extrabold uppercase leading-[0.95] tracking-tight text-[13vw] md:text-[7.5vw]"
          style={{ WebkitTextStroke: "1px rgba(56,189,248,0.3)", color: "transparent" }}
        >
          FULL STACK
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          className="whitespace-nowrap font-extrabold uppercase leading-[0.95] tracking-tight text-[13vw] md:text-[7.5vw]"
          style={{ WebkitTextStroke: "1px rgba(129,140,248,0.3)", color: "transparent" }}
        >
          DEVELOPER
        </motion.span>
      </div>

      {/* Main split layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] items-center gap-14 md:gap-10">

        {/* LEFT — Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase
              text-cyan-300 bg-cyan-950/40 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span>Open for Full-Time Roles & Projects</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block text-slate-200"
            >
              Hi, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="block shimmer-text font-black"
            >
              Deepak
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto md:mx-0 font-normal"
          >
            MERN Stack Developer architecting interactive, responsive, and high-performance web applications with clean code & modern 3D interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block mt-5 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]"
          />

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4"
          >
            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3.5 cursor-pointer rounded-xl font-bold text-sm
                  text-slate-950 border border-cyan-300/40
                  bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500
                  shadow-[0_0_24px_rgba(56,189,248,0.5)]
                  hover:shadow-[0_0_32px_rgba(56,189,248,0.8)]
                  transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </motion.button>
            </MagneticButton>

            <MagneticButton>
              <a href="/Final_Resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-6 py-3.5 cursor-pointer rounded-xl font-semibold text-sm
                    bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300
                    hover:bg-slate-800/80 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]
                    transition-all duration-300"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </motion.button>
              </a>
            </MagneticButton>

            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-3.5 cursor-pointer rounded-xl text-slate-300 font-medium text-sm
                  bg-white/5 border border-slate-700/50 hover:border-slate-500 hover:text-white
                  transition-all duration-300"
              >
                About Me ↓
              </motion.button>
            </MagneticButton>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex items-center justify-center md:justify-start gap-3.5"
          >
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <MagneticButton key={label}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl
                    bg-slate-900/80 border border-slate-700/60 text-slate-300 backdrop-blur-md
                    hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_18px_rgba(56,189,248,0.4)]
                    transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D Tilt Viewfinder Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="order-1 md:order-2 relative mx-auto md:mx-0 w-fit"
        >
          <TiltCard maxTilt={14} scale={1.03}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-2"
            >
              {/* Corner viewfinder brackets in cyber cyan */}
              <span className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg shadow-[0_0_10px_#38BDF8]" />
              <span className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg shadow-[0_0_10px_#38BDF8]" />
              <span className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg shadow-[0_0_10px_#38BDF8]" />
              <span className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg shadow-[0_0_10px_#38BDF8]" />

              <div className="p-1.5 rounded-3xl bg-gradient-to-br from-cyan-500/40 via-indigo-500/30 to-transparent border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <img
                  src="/image.png"
                  alt="Deepak - Full Stack Developer"
                  className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-[1.25rem] object-cover
                    shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Floating 3D tech chips */}
              {CHIPS.map(({ icon: Icon, label, color, className }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  className={`absolute ${className} hidden sm:flex z-20`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl
                      bg-[#0B0F17]/90 backdrop-blur-xl border border-cyan-500/30 text-slate-200
                      shadow-[0_8px_24px_rgba(0,0,0,0.5),0_0_15px_rgba(56,189,248,0.2)]"
                  >
                    <Icon size={18} style={{ color }} />
                    <span className="text-xs font-bold tracking-wide whitespace-nowrap">{label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-400/70 font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1.5px] h-8 bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_8px_#38BDF8]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;