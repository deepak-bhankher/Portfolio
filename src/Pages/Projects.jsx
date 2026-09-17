import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TiltCard from "../Components/TiltCard";

const PROJECTS = [
  {
    name: "Job Portal Platform",
    title: "Full-stack recruitment portal featuring job seekers & employers dashboard, role-based auth, resume upload, and real-time application tracking.",
    image: "/Job.jpg",
    tags: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demo: "https://job-portal-frontend-jet-nine.vercel.app/",
    github: "https://github.com/deepak-bhankher",
    featured: true,
  },
  {
    name: "Fresh-Eat Platform",
    title: "Modern food delivery platform with dynamic categorized menus, cart management, instant calculations, and responsive mobile-first UI.",
    image: "/fresh.jpg",
    tags: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    demo: "https://fresh-eat-blm5.vercel.app/",
    github: "https://github.com/deepak-bhankher",
    featured: true,
  },
  {
    name: "E-Commerce Experience",
    title: "High-conversion responsive e-commerce storefront with product filtering, cart drawer, pricing breakdown, and clean checkout states.",
    image: "/ecomers.jpg",
    tags: ["React", "Context API", "Tailwind CSS", "JavaScript"],
    demo: "https://fresh-eat-blm5.vercel.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Ice-Cream Artisan Brand",
    title: "Vibrantly animated brand website featuring interactive flavor carousels, custom ingredients showcase, and fluid motion animations.",
    image: "/icecreame.webp",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    demo: "https://moonlit-chimera-be5239.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Rosemary Cakes & Bakery",
    title: "Gourmet confectionery showcase with custom pastry order inquiries, seasonal catalogs, and high-resolution photo gallery.",
    image: "/cake.jpg",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demo: "https://sunny-gumption-55937f.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Culinary Restaurant Showcase",
    title: "High-end dining website featuring table reservation booking UI, chef specials carousel, and immersive menu navigation.",
    image: "/restor.jpg",
    tags: ["React", "Tailwind CSS", "Micro-interactions"],
    demo: "https://fanciful-malabi-9adc72.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "CirklX Digital Web",
    title: "Futuristic interactive web concept with smooth scroll parallax, 3D typography highlights, and dynamic visual cues.",
    image: "/Earth.jpg",
    tags: ["React", "Framer Motion", "3D Effects"],
    demo: "https://papaya-maamoul-bd89e6.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "FranchiseEats Hub",
    title: "Partner onboarding portal with validated auth workflows, franchise tier comparisons, and responsive application forms.",
    image: "/FOOO.jpg",
    tags: ["React", "Form Validation", "Tailwind CSS"],
    demo: "https://leafy-gnome-62e455.netlify.app/",
    github: "https://github.com/deepak-bhankher",
  },
  {
    name: "Shadow Eats Dark Experience",
    title: "Midnight aesthetic dark-mode restaurant and delivery UI engineered for nighttime foodies with sleek glassmorphic aesthetics.",
    image: "/fresheat.png",
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
  return (
    <section id="projects" className="relative px-6 md:px-16 py-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16"
      >
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase
          text-cyan-300 bg-cyan-950/40 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
          Selected Portfolio Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold shimmer-text tracking-tight">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
          Real-world full-stack web applications and modern responsive interfaces deployed in production.
        </p>
        <span className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]" />
      </motion.div>

      {/* 3D Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((item, index) => (
          <TiltCard key={item.name} maxTilt={12} scale={1.02}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
              className="h-full group bg-[#0E1526]/85 border border-slate-800/90 backdrop-blur-xl rounded-2xl overflow-hidden
                hover:border-cyan-500/40
                hover:shadow-[0_12px_40px_rgba(56,189,248,0.2)]
                transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Browser-style Header */}
                <div className="relative">
                  <div className="flex items-center justify-between px-3.5 py-2 bg-slate-950/90 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 tracking-wider">
                      {item.name.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                  </div>

                  {/* Screenshot Thumbnail with overlay */}
                  <div className="relative h-48 sm:h-44 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        // Fallback if image fails
                        e.target.style.display = "none";
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1526] via-transparent to-transparent opacity-80" />

                    {/* Featured badge if present */}
                    {item.featured && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.6)]">
                        Featured
                      </span>
                    )}

                    {/* Quick Live Preview hover CTA */}
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0 z-20 flex items-center justify-center opacity-0
                          group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-xs"
                      >
                        <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider
                          text-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:bg-cyan-300">
                          Launch Demo <ExternalLink size={14} />
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-cyan-300 transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {item.title}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-cyan-950/50 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold
                      bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold
                      bg-slate-900/80 text-slate-300 border border-slate-700/60 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-300"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
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