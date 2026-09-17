import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/15 bg-[#050811]/90 backdrop-blur-xl mt-20 overflow-hidden">
      {/* Top subtle glow bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center font-bold text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                D
              </span>
              <span className="font-bold text-xl tracking-tight shimmer-text">
                Deepak
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">
              Full Stack MERN Developer crafting high-performance, interactive, and scalable web solutions.
            </p>
          </div>

          {/* Nav Quicklinks */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item === "Home" ? "Hero" : item.toLowerCase()}`}
                className="hover:text-cyan-300 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <MagneticButton>
              <a
                href="https://github.com/deepak-bhankher"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="mailto:deepakbhankhor758@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </MagneticButton>

            {/* Back to top button */}
            <MagneticButton>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] cursor-pointer transition-all duration-300"
              >
                <ArrowUp size={18} />
              </button>
            </MagneticButton>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Deepak. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-cyan-400">React</span>, <span className="text-indigo-400">Three.js</span> & <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
