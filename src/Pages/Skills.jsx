import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  const skills = [
    { name: "HTML", percent: 85, gradient: "from-[#F5C6CB] to-[#D98D95]" },
    { name: "CSS", percent: 80, gradient: "from-[#e8b4ba] to-[#c97d85]" },
    { name: "JavaScript", percent: 80, gradient: "from-[#F5C6CB] to-[#b06070]" },
    { name: "React", percent: 90, gradient: "from-[#D98D95] to-[#6E0E15]" },
    { name: "Tailwind CSS", percent: 90, gradient: "from-[#F5C6CB] to-[#D98D95]" },
    { name: "Node.js", percent: 80, gradient: "from-[#e8b4ba] to-[#c97d85]" },
    { name: "Express.js", percent: 85, gradient: "from-[#D98D95] to-[#45080C]" },
    { name: "MongoDB", percent: 80, gradient: "from-[#F5C6CB] to-[#D98D95]" },
  ];

  return (
    <section id="skills" className="relative px-6 md:px-16 py-24 overflow-hidden">

      {/* glow blobs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-[#D98D95]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#6E0E15]/40 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase
          text-[#F5C6CB] bg-white/5 backdrop-blur-md border border-[#D98D95]/30">
          What I work with
        </span>
        <h1 className="text-center text-4xl font-bold shimmer-text">Technical Skills</h1>
        <p className="text-center text-lg mt-3 text-[#f5d0d4]/50 max-w-xl">
          Proficient in modern web development technologies and frameworks
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 2) * 0.1 + Math.floor(index / 2) * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-white/5 border border-[#D98D95]/20 backdrop-blur-md rounded-2xl p-5
              transition-all duration-300
              hover:border-[#D98D95]/50 hover:shadow-[0_0_30px_5px_rgba(217,141,149,0.2)]"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-[#F5C6CB] font-semibold text-lg">{skill.name}</h2>
              <span className={`text-sm font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                {skill.percent}%
              </span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
                className={`bg-gradient-to-r ${skill.gradient} h-2 rounded-full relative overflow-hidden`}
              >
                <motion.span
                  className="absolute inset-y-0 w-1/3"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                  }}
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1.5,
                    delay: 1.2,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Skills;