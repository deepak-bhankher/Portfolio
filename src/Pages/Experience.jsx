import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MapPin, Briefcase } from "lucide-react";
import TiltCard from "../Components/TiltCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Experience() {
  const achievements = [
    "Architected and maintained full-stack web applications utilizing the MERN stack (MongoDB, Express, React, Node.js).",
    "Engineered robust RESTful APIs with secure token-based JWT authentication, validation, and role authorizations.",
    "Designed and implemented high-performance, responsive user interfaces using modern CSS frameworks, Tailwind CSS, and React hooks.",
    "Collaborated in cross-functional agile sprints, code reviews, and Git version control workflows following clean architecture principles.",
    "Optimized web load times, state management, and database queries for smooth user experiences across mobile and desktop devices."
  ];

  const techBadges = [
    "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Git"
  ];

  return (
    <section id="experience" className="relative px-6 md:px-16 py-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] -z-10" />

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
          Career Journey
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold shimmer-text tracking-tight">
          Work Experience
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-xl">
          Professional hands-on experience developing and deploying production software.
        </p>
        <span className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]" />
      </motion.div>

      {/* Timeline Layout */}
      <div className="relative mt-12 max-w-3xl mx-auto">
        {/* Animated vertical gradient timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-4 md:left-8 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent shadow-[0_0_8px_#38BDF8]"
        />

        {/* Timeline Node */}
        <div className="relative pl-14 md:pl-24 pb-6">
          {/* Pulsing 3D Dot */}
          <div className="absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 flex items-center justify-center shadow-[0_0_15px_#38BDF8]">
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(56,189,248,0.6)",
                  "0 0 0 8px rgba(56,189,248,0)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="w-2 h-2 rounded-full bg-slate-950" />
          </div>

          {/* 3D Tilt Experience Card */}
          <TiltCard maxTilt={10} scale={1.02}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-[#0E1526]/85 border border-slate-800/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8
                hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(56,189,248,0.2)]
                transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-cyan-400 shrink-0" size={18} />
                    <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                      Full Stack Developer
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm mt-1.5">
                    <MapPin size={15} />
                    <span>Kodu • Hisar, Haryana</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold self-start sm:self-auto">
                  <Calendar size={14} />
                  <span>2024 - 2025 (6 Months)</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="mt-5 space-y-3">
                {achievements.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 + i * 0.08 }}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="text-cyan-400 mt-0.5 shrink-0" size={17} />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Technologies used */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Core Technologies Employed
                </span>
                <div className="flex flex-wrap gap-2">
                  {techBadges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700/60"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export default Experience;