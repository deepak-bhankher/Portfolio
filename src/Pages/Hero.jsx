import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowRight, Download } from "lucide-react";
import MagneticButton from "../Components/MagneticButton";
import HolographicPortrait from "../Components/HolographicPortrait";

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/deepak-bhankher", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: HiOutlineMail, href: "mailto:deepakbhankhor758@gmail.com", label: "Email" },
];

function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20 md:pt-28 md:pb-12 overflow-hidden"
    >
      {/* Soft Ambient Glow Behind Content */}
      <div className="pointer-events-none absolute -top-40 -left-20 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[160px]" />

      {/* Main split layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] items-center gap-14 md:gap-10">

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
              text-cyan-300 bg-cyan-950/40 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Available for Opportunities</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block text-slate-100"
            >
              Hi, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="block shimmer-text font-black text-5xl sm:text-6xl lg:text-7xl"
            >
              Deepak
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto md:mx-0 font-normal"
          >
            MERN Stack Developer building responsive UI designs with scalable and high-performance backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block mt-6 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]"
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
                  text-slate-950 border border-cyan-300/50
                  bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500
                  shadow-[0_0_24px_rgba(56,189,248,0.45)]
                  hover:shadow-[0_0_32px_rgba(56,189,248,0.75)]
                  transition-all duration-300"
              >
                <span>Featured Work</span>
                <ArrowRight size={16} />
              </motion.button>
            </MagneticButton>

            <MagneticButton>
              <a href="/Resume.pdf">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-6 py-3.5 cursor-pointer rounded-xl font-semibold text-sm
                    bg-[#0E1526]/80 backdrop-blur-xl border border-cyan-500/30 text-cyan-300
                    hover:bg-[#131D33] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]
                    transition-all duration-300"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </motion.button>
              </a>
            </MagneticButton>

            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-3.5 cursor-pointer rounded-xl text-slate-300 font-medium text-sm
                  bg-white/5 border border-slate-700/60 hover:border-slate-500 hover:text-white
                  transition-all duration-300"
              >
                Contact Me
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
                    bg-[#0E1526]/80 border border-slate-700/60 text-slate-300 backdrop-blur-xl
                    hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_18px_rgba(56,189,248,0.4)]
                    transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Standalone Holographic Cutout Portrait (No box, 3D Tilt & Cyber Cursor Spotlight) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="order-1 md:order-2 relative mx-auto md:mx-0 w-fit"
        >
          <HolographicPortrait />
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