import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Sparkles, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#060913] via-[#04060C] to-[#020307] backdrop-blur-2xl mt-24 overflow-hidden">
      {/* Top subtle luxury laser line with moving glow */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[180px] bg-gradient-to-b from-cyan-500/15 to-transparent rounded-full blur-[110px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Status Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                }}
              >
                D
              </span>
              <div>
                <span className="font-extrabold text-2xl tracking-tight shimmer-text block">
                  Deepak
                </span>
                <span className="text-[11px] font-mono tracking-wider text-cyan-400/80 uppercase">
                  MERN Stack Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building high-performance, responsive web architectures with modern clean code and scalable backend systems.
            </p>

            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available for Full-time Roles & Projects</span>
            </div>
          </div>

          {/* Quicklinks (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 list-none p-0 m-0">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item} className="list-none">
                  <a
                    href={`#${item === "Home" ? "Hero" : item.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-cyan-300 flex items-center gap-2 transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-[1.5px] bg-slate-600 group-hover:w-3 group-hover:bg-cyan-400 transition-all duration-300" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Top Action (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-3">
                Let's Connect
              </span>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Have a question or want to work together? Let's chat.
              </p>
              <div className="flex items-center gap-3">
                <MagneticButton>
                  <a
                    href="https://github.com/deepak-bhankher"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-xl bg-[#0B0F17]/90 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-300"
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
                    className="w-11 h-11 rounded-xl bg-[#0B0F17]/90 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-300"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="mailto:deepakbhankhor758@gmail.com"
                    aria-label="Email"
                    className="w-11 h-11 rounded-xl bg-[#0B0F17]/90 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                </MagneticButton>

                {/* Back to top button */}
                <MagneticButton>
                  <button
                    onClick={scrollToTop}
                    title="Back to Top"
                    aria-label="Back to top"
                    className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 flex items-center justify-center text-slate-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] cursor-pointer transition-all duration-300"
                  >
                    <ArrowUp size={18} />
                  </button>
                </MagneticButton>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Terminal size={14} className="text-cyan-400" />
              <span>Hisar, Haryana • Open for Remote</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Deepak. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-indigo-400 font-semibold">Tailwind CSS</span> & <span className="text-sky-400 font-semibold">Three.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
