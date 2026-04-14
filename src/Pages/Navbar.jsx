import React, { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Hero");

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item === "Home" ? "Hero" : item.toLowerCase())
      );
      sections.forEach((sec) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-black/90 backdrop-blur-md border-b border-white/10 text-white sticky top-0 z-50">

      <h1 className="text-3xl font-bold shimmer-text">Portfolio</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        {navItems.map((item) => {
          const id = item === "Home" ? "Hero" : item.toLowerCase();
          const isActive = active === id;
          return (
            <li key={item} className="relative group cursor-pointer">
              <a
                href={`#${id}`}
                className={`font-medium transition-all duration-300 ${
                  isActive ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {item}
              </a>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          );
        })}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-2xl text-white/80 hover:text-white transition-all"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full px-6 py-6 bg-black/95 backdrop-blur-md border-b border-white/10 flex flex-col gap-5 md:hidden">
          {navItems.map((item) => {
            const id = item === "Home" ? "Hero" : item.toLowerCase();
            const isActive = active === id;
            return (
              <li key={item} onClick={() => setOpen(false)}>
                <a
                  href={`#${id}`}
                  className={`font-medium text-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
export default Navbar;
