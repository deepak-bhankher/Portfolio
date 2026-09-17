import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { Download } from "lucide-react";
import MagneticButton from "../Components/MagneticButton";

const NAV_ITEMS = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Cyan-violet scroll-progress bar under the navbar
  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 24);

      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 4) {
        setHidden(true);
        setOpen(false);
      } else if (currentY < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item === "Home" ? "Hero" : item.toLowerCase())
      );
      sections.forEach((sec) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: hidden ? -110 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          y: { type: "spring", stiffness: 260, damping: 30 },
          opacity: { duration: 0.25 },
        }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 pt-4"
      >
        <div
          className={`relative max-w-5xl mx-auto rounded-2xl px-5 overflow-hidden
            bg-[#0B0F17]/80 backdrop-blur-xl
            transition-all duration-500 ${
              scrolled
                ? "border border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(56,189,248,0.15)]"
                : "border border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            }`}
        >
          <div className="flex items-center justify-between h-[64px]">
            {/* Logo */}
            <a href="#Hero">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <span
                  className="relative w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm text-slate-950"
                  style={{
                    background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                    boxShadow: "0 0 16px rgba(56,189,248,0.5)",
                  }}
                >
                  D
                  <motion.span
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(56,189,248,0.5)",
                        "0 0 0 6px rgba(56,189,248,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </span>
                <span className="font-bold text-[18px] tracking-tight shimmer-text">
                  Deepak
                </span>
              </motion.div>
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 list-none m-0 p-0">
              {NAV_ITEMS.map((item, i) => {
                const id = item === "Home" ? "Hero" : item.toLowerCase();
                const isActive = active === id;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                    className="relative list-none"
                  >
                    <motion.a
                      href={`#${id}`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 block rounded-xl
                        ${isActive ? "text-cyan-300" : "text-slate-400 hover:text-cyan-200"}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_12px_rgba(56,189,248,0.2)] overflow-hidden"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                        >
                          <motion.span
                            className="absolute inset-y-0 w-1/3"
                            style={{
                              background:
                                "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
                            }}
                            animate={{ x: ["-40%", "160%"] }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 1,
                            }}
                          />
                        </motion.span>
                      )}
                      <span className="relative z-10">{item}</span>
                    </motion.a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Desktop CTA button */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="hidden md:block"
            >
              <MagneticButton>
                <a href="/Final_Resume.pdf" download>
                  <motion.button
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer
                      text-slate-950 border border-cyan-400/30
                      bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500
                      shadow-[0_0_18px_rgba(56,189,248,0.4)]
                      hover:shadow-[0_0_26px_rgba(56,189,248,0.7)]
                      transition-shadow duration-300"
                  >
                    <Download size={14} />
                    <span>Resume</span>
                  </motion.button>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden cursor-pointer border border-cyan-500/30
                p-2.5 rounded-xl text-cyan-300
                bg-slate-900/80 shadow-[0_0_12px_rgba(56,189,248,0.2)]
                hover:border-cyan-400 transition-all duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  {open ? <RxCross1 size={19} /> : <CiMenuFries size={21} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Scroll progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] origin-left"
            style={{
              scaleX: progressWidth,
              width: "100%",
              background: "linear-gradient(90deg, #38BDF8, #818CF8)",
            }}
          />
        </div>
      </motion.nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-md md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[84px] left-4 right-4 z-40 md:hidden"
          >
            <div
              className="bg-[#0B0F17]/95 backdrop-blur-2xl rounded-2xl
              border border-cyan-500/30
              shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.15)]
              overflow-hidden"
            >
              <ul className="flex flex-col list-none px-3 py-3 gap-1">
                {NAV_ITEMS.map((item, i) => {
                  const id = item === "Home" ? "Hero" : item.toLowerCase();
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.22 }}
                      className="list-none"
                    >
                      <motion.a
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl
                          text-sm font-medium transition-all duration-200
                          ${
                            isActive
                              ? "text-cyan-300 bg-cyan-500/15 border border-cyan-500/30"
                              : "text-slate-300 hover:bg-slate-800/50 hover:text-cyan-200"
                          }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{
                            background: isActive ? "#38BDF8" : "#64748B",
                            boxShadow: isActive ? "0 0 8px #38BDF8" : "none",
                          }}
                        />
                        {item}
                      </motion.a>
                    </motion.li>
                  );
                })}

                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.22 }}
                  className="list-none mt-1 pt-3 border-t border-slate-800"
                >
                  <a
                    href="/Final_Resume.pdf"
                    download
                    onClick={() => setOpen(false)}
                  >
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex justify-center items-center gap-2
                      py-3 px-6 rounded-xl cursor-pointer
                      text-sm font-bold text-slate-950
                      bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500
                      shadow-[0_0_20px_rgba(56,189,248,0.45)]
                      transition-shadow duration-300"
                    >
                      <Download size={16} /> Download CV
                    </motion.button>
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
