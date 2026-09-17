import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiJavascript, 
  SiHtml5, 
  SiGit, 
  SiVite 
} from "react-icons/si";
import { Terminal, Layers, Database, Sparkles } from "lucide-react";
import TiltCard from "../Components/TiltCard";

const CATEGORIES = [
  { id: "all", label: "All Skills", icon: Sparkles },
  { id: "frontend", label: "Frontend", icon: Layers },
  { id: "backend", label: "Backend", icon: Terminal },
  { id: "database", label: "Database & Tools", icon: Database },
];

const SKILLS = [
  { name: "React 19", category: "frontend", icon: SiReact, percent: 90, color: "#38BDF8", desc: "Hooks, Router, State Management" },
  { name: "JavaScript (ES6+)", category: "frontend", icon: SiJavascript, percent: 85, color: "#FACC15", desc: "Async/Await, DOM, Modern JS" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, percent: 92, color: "#38BDF8", desc: "Responsive Design, Flex/Grid, Themes" },
  { name: "HTML5 / CSS3", category: "frontend", icon: SiHtml5, percent: 90, color: "#FB923C", desc: "Semantic Web, CSS Animations" },
  { name: "Node.js", category: "backend", icon: SiNodedotjs, percent: 85, color: "#4ADE80", desc: "Event-driven runtime, NPM ecosystem" },
  { name: "Express.js", category: "backend", icon: SiExpress, percent: 88, color: "#E2E8F0", desc: "REST APIs, Middleware, Routing" },
  { name: "MongoDB & Mongoose", category: "database", icon: SiMongodb, percent: 82, color: "#22C55E", desc: "NoSQL Schemas, Aggregations, CRUD" },
  { name: "Git & GitHub", category: "database", icon: SiGit, percent: 86, color: "#F43F5E", desc: "Version control, branching, PRs" },
  { name: "Vite & Tooling", category: "database", icon: SiVite, percent: 88, color: "#A855F7", desc: "Modern builds, HMR, bundling" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative px-6 md:px-16 py-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] -z-10" />

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
          Technical Stack
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold shimmer-text tracking-tight">
          Skills & Proficiencies
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
          Core technologies and frameworks I use to engineer scalable, full-stack digital experiences.
        </p>
        <span className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]" />
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 max-w-2xl mx-auto">
        {CATEGORIES.map(({ id, label, icon: Icon }) => {
          const isActive = activeCategory === id;
          return (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.5)] border border-cyan-300/40"
                    : "bg-slate-900/70 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
            >
              <Icon size={15} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* 3D Skills Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <TiltCard key={skill.name} maxTilt={14} scale={1.03}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.08 }}
                className="h-full bg-[#0E1526]/80 border border-slate-800/90 backdrop-blur-xl rounded-2xl p-6
                  transition-all duration-300 group
                  hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(56,189,248,0.18)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900/90 border border-slate-700/60 shadow-inner group-hover:scale-110 transition-transform duration-300"
                      >
                        <Icon size={20} style={{ color: skill.color }} />
                      </div>
                      <div>
                        <h3 className="text-slate-100 font-bold text-base tracking-tight">
                          {skill.name}
                        </h3>
                        <p className="text-slate-400 text-xs mt-0.5">{skill.desc}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-cyan-400">
                      {skill.percent}%
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden mt-4 border border-slate-700/40">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
                    style={{
                      background: `linear-gradient(90deg, #38BDF8, ${skill.color})`,
                    }}
                    className="h-2 rounded-full relative overflow-hidden shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                  >
                    <motion.span
                      className="absolute inset-y-0 w-1/3"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                      }}
                      animate={{ x: ["-100%", "300%"] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1.5,
                        delay: 1,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;