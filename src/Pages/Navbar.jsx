import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";

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

  // Gold scroll-progress bar under the navbar
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

      // Hide on scroll down, reveal on scroll up (ignore tiny jitter + top of page)
      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 4) {
        setHidden(true);
        setOpen(false); // close mobile menu if user scrolls away
      } else if (currentY < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item === "Home" ? "Hero" : item.toLowerCase()),
      );
      sections.forEach((sec) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) setActive(sec.id);
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
            bg-[#2A0608]/70 backdrop-blur-xl
            transition-all duration-500 ${
              scrolled
                ? "border border-[#D98D95]/35 shadow-[0_8px_32px_rgba(217,141,149,0.25)]"
                : "border border-[#D98D95]/15 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            }`}
        >
          <div className="flex items-center justify-between h-[62px]">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: -4 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <span
                className="relative w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-[#2A0608]"
                style={{
                  background: "linear-gradient(135deg, #F5C6CB, #D98D95)",
                  boxShadow: "0 0 16px rgba(217,141,149,0.5)",
                }}
              >
                D
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 0 0 rgba(245,198,203,0.6)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(245,198,203,0.45)",
                      "0 0 0 6px rgba(245,198,203,0)",
                    ],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </span>
              <span className="font-bold text-[17px] tracking-tight shimmer-text">
                Deepak
              </span>
            </motion.div>

            {/* Desktop Links - centered absolute */}
            <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 list-none m-0 p-0">
              {NAV_ITEMS.map((item, i) => {
                const id = item === "Home" ? "Hero" : item.toLowerCase();
                const isActive = active === id;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                    className="relative list-none"
                  >
                    <motion.a
                      href={`#${id}`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 block rounded-lg
                        ${isActive ? "text-[#F5C6CB]" : "text-white/55 hover:text-[#F5C6CB]"}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="pill"
                          className="absolute inset-0 rounded-lg bg-black/40 border border-white/10 overflow-hidden"
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
                                "linear-gradient(90deg, transparent, rgba(245,198,203,0.25), transparent)",
                            }}
                            animate={{ x: ["-40%", "160%"] }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 1.2,
                            }}
                          />
                        </motion.span>
                      )}
                      <span className="relative">{item}</span>
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
              <a href="/Final_Resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer
                    text-[#2A0608] border border-black/10
                    bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]
                    hover:shadow-[0_0_22px_rgba(217,141,149,0.5)]
                    transition-shadow duration-300"
                >
                  Download CV 📄
                </motion.button>
              </a>
            </motion.div>

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.87 }}
              onClick={() => setOpen(!open)}
              className="md:hidden cursor-pointer border border-black/10
                p-2 rounded-xl text-[#2A0608]
                bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]
                shadow-[0_0_14px_rgba(217,141,149,0.4)]
                transition-all duration-300"
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
              background: "linear-gradient(90deg, #F5C6CB, #D98D95)",
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
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[82px] left-4 right-4 z-40 md:hidden"
          >
            <div
              className="bg-[#2A0608]/90 backdrop-blur-xl rounded-2xl
              border border-[#D98D95]/25
              shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(217,141,149,0.12)]
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
                          ${isActive ? "text-[#F5C6CB] bg-black/30" : "text-white/70 hover:bg-black/20 hover:text-[#F5C6CB]"}`}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background: isActive ? "#F5C6CB" : "#D98D95",
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
                  className="list-none mt-1 pt-3 border-t border-white/10"
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
                      text-sm font-semibold text-[#2A0608] border border-black/10
                      bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]
                      shadow-[0_0_20px_rgba(217,141,149,0.45)]
                      transition-shadow duration-300"
                    >
                      Download CV 📄
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
