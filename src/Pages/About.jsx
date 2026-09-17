import React from "react";
import { motion } from "framer-motion";
import { Clock, FolderGit2, MapPin, Sparkles, Code2, Server, Database } from "lucide-react";
import TiltCard from "../Components/TiltCard";

const CARDS = [
  { title: "6+ Months", sub: "Production Experience", icon: Clock, color: "text-cyan-400" },
  { title: "9+ Web Apps", sub: "Completed & Deployed", icon: FolderGit2, color: "text-indigo-400" },
  { title: "Hisar, Haryana", sub: "Location (India)", icon: MapPin, color: "text-sky-400" },
  { title: "Open to Work", sub: "Immediate Joiner", icon: Sparkles, color: "text-emerald-400" },
];

const STACK_PILLS = [
  { icon: Code2, label: "Frontend", desc: "React, Next.js, Tailwind CSS, Vite" },
  { icon: Server, label: "Backend", desc: "Node.js, Express.js, REST APIs, JWT" },
  { icon: Database, label: "Database", desc: "MongoDB, Mongoose, Data Modeling" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-16 py-28 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase
          text-cyan-300 bg-cyan-950/40 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
          Get to know me
        </span>
        <h2 className="font-extrabold text-4xl sm:text-5xl shimmer-text tracking-tight">
          About Me
        </h2>
        <span className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]" />
      </motion.div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT - TEXT BIO */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#0E1526]/70 border border-slate-800/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a results-driven{" "}
              <span className="font-bold text-cyan-300">
                Full Stack MERN Developer
              </span>{" "}
              with 6 months of hands-on industry experience building modern, responsive web applications at <span className="text-indigo-300 font-medium">Kodu</span> in Hisar. I specialize in turning design concepts and system requirements into production-ready web platforms.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#0E1526]/70 border border-slate-800/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              My core strengths lie in the{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                MERN Stack
              </span>{" "}
              (MongoDB, Express.js, React.js, Node.js), complemented by Tailwind CSS, Vite, and Three.js 3D interactions. I love architecting intuitive user experiences, writing clean modular code, and building high-performance APIs.
            </p>
          </motion.div>

          {/* Quick highlight stack list */}
          <div className="grid sm:grid-cols-3 gap-3 pt-2">
            {STACK_PILLS.map((pill, i) => {
              const Icon = pill.icon;
              return (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-cyan-500/15 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1">
                    <Icon size={16} />
                    <span>{pill.label}</span>
                  </div>
                  <p className="text-xs text-slate-400">{pill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT - 3D TILT STATS CARDS */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <TiltCard key={i} maxTilt={15} scale={1.03}>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                  className="h-full bg-[#0E1526]/80 border border-slate-800/90 backdrop-blur-xl p-7 rounded-2xl text-center
                    transition-all duration-300 group
                    hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(56,189,248,0.2)]"
                >
                  <div className="mx-auto mb-4 w-12 h-12 rounded-xl flex items-center justify-center
                    bg-cyan-500/10 border border-cyan-500/20
                    group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]
                    transition-all duration-300">
                    <Icon size={22} className={card.color} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-100 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1.5 font-medium">{card.sub}</p>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;