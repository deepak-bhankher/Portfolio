import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Layers, ShoppingBag, Utensils } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TiltCard from "../Components/TiltCard";

const CATEGORIES = [
  { id: "all", label: "All Projects", icon: Sparkles },
  { id: "fullstack", label: "Full Stack MERN", icon: Layers },
  { id: "ecommerce", label: "E-Commerce & Food", icon: Utensils },
  { id: "frontend", label: "Modern UI / 3D", icon: ShoppingBag },
];

const PROJECTS = [
  {
    name: "Job Portal Platform",
    category: "fullstack",
    title: "Full-stack recruitment portal featuring job seeker & recruiter dashboards, role-based auth, resume upload, and real-time application tracking.",
    image: "/projects/job-portal.jpg",
    tags: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demo: "https://job-portal-frontend-jet-nine.vercel.app/",
    github: "https://github.com/deepak-bhankher",
    featured: true,
  },
  {
    name: "Fresh-Eat Platform",
    category: "ecommerce",
    title: "Modern food delivery platform with dynamic categorized menus, cart management, instant calculations, and responsive mobile-first UI.",
    image: "/projects/fresh-eat.jpg",
    tags: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    demo: "https://fresh-eat-blm5.vercel.app/",
    github: "https://github.com/deepak-bhankher",
    featured: true,
  },
  {
    name: "E-Commerce Experience",
    category: "ecommerce",
    title: "High-conversion responsive e-commerce storefront with product filtering, cart drawer, pricing breakdown, and clean checkout states.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Context API", "Tailwind CSS", "JavaScript"],
    demo: "https://fresh-eat-blm5.vercel.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Ice-Cream Artisan Brand",
    category: "frontend",
    title: "Vibrantly animated brand website featuring interactive flavor carousels, custom ingredients showcase, and fluid motion animations.",
    image: "/projects/ice-cream.jpg",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demo: "https://moonlit-chimera-be5239.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Rosemary Cakes & Bakery",
    category: "ecommerce",
    title: "Gourmet confectionery showcase with custom pastry order inquiries, seasonal catalogs, and high-resolution visual gallery.",
    image: "/projects/bakery-cakes.jpg",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demo: "https://sunny-gumption-55937f.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Culinary Restaurant Showcase",
    category: "ecommerce",
    title: "High-end dining website featuring table reservation booking UI, chef specials carousel, and immersive menu navigation.",
    image: "/projects/restaurant.jpg",
    tags: ["React", "Tailwind CSS", "Micro-interactions"],
    demo: "https://fanciful-malabi-9adc72.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "CirklX Digital Web",
    category: "frontend",
    title: "Futuristic interactive web concept with smooth scroll parallax, 3D typography highlights, and dynamic visual cues.",
    image: "/projects/cirklx.jpg",
    tags: ["React", "Framer Motion", "3D Effects"],
    demo: "https://papaya-maamoul-bd89e6.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "FranchiseEats Hub",
    category: "fullstack",
    title: "Partner onboarding portal with validated auth workflows, franchise tier comparisons, and responsive application forms.",
    image: "/projects/franchise.jpg",
    tags: ["React", "Form Validation", "Tailwind CSS"],
    demo: "https://leafy-gnome-62e455.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Shadow Eats Dark Experience",
    category: "frontend",
    title: "Midnight aesthetic dark-mode restaurant and delivery UI engineered for nighttime foodies with sleek glassmorphic aesthetics.",
    image: "/projects/shadow-eats.jpg",
    tags: ["React", "Tailwind CSS", "Dark UI"],
    demo: "https://clever-pika-a514a8.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const handleCardClick = (demoUrl) => {
    if (demoUrl) {
      window.open(demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="relative z-10 px-6 md:px-16 py-28 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-12"
      >
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase
          text-cyan-300 bg-cyan-950/40 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
          Selected Portfolio Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold shimmer-text tracking-tight">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
          Click any project card to launch the live interactive demo or inspect the source code.
        </p>
        <span className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]" />
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12 max-w-2xl mx-auto">
        {CATEGORIES.map(({ id, label, icon: Icon }) => {
          const isActive = activeFilter === id;
          return (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.5)] border border-cyan-300/40"
                    : "bg-slate-900/70 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
            >
              <Icon size={14} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((item, index) => (
          <TiltCard
            key={item.name}
            maxTilt={12}
            scale={1.02}
            className="cursor-pointer"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.08 }}
              onClick={() => handleCardClick(item.demo)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCardClick(item.demo);
              }}
              className="h-full group bg-[#0E1526]/90 border border-slate-800/90 backdrop-blur-xl rounded-2xl overflow-hidden
                hover:border-cyan-400/50 hover:shadow-[0_16px_45px_rgba(56,189,248,0.25)]
                cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Browser-style Header */}
                <div className="relative">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400/70 tracking-wider">
                      {item.name.toLowerCase().replace(/\s+/g, "-")}.vercel.app
                    </span>
                  </div>

                  {/* Thumbnail Banner with local clean image */}
                  <div className="relative h-52 sm:h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1526] via-transparent to-transparent opacity-80" />

                    {/* Top-left Featured Badge */}
                    {item.featured && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.7)]">
                        Featured
                      </span>
                    )}

                    {/* Top-right Live indicator pill */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Demo</span>
                    </div>

                    {/* Hover launch overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/50 backdrop-blur-xs">
                      <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider
                        text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 shadow-[0_0_25px_rgba(56,189,248,0.8)]">
                        Open Project <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors duration-200">
                      {item.name}
                    </h3>
                    <ExternalLink size={18} className="text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5" />
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {item.title}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-500/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider
                      bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] cursor-pointer transition-all duration-300"
                  >
                    <span>Launch App</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold
                      bg-slate-900/90 text-slate-300 border border-slate-700/80 hover:text-white hover:border-slate-500 hover:bg-slate-800 cursor-pointer transition-all duration-300"
                  >
                    <FaGithub size={15} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;