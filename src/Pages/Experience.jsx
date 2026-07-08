import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-16 py-24 overflow-hidden">

      {/* glow blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#D98D95]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6E0E15]/40 rounded-full blur-3xl -z-10" />

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
          Where I've worked
        </span>
        <h2 className="text-center text-4xl font-bold shimmer-text">Work Experience</h2>
        <p className="text-center text-[#f5d0d4]/50 mt-3">
          Professional journey and achievements in web development
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]" />
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-16 max-w-3xl mx-auto">

        {/* Vertical Line - animates in from top to bottom */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-4 md:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-[#F5C6CB] via-[#D98D95] to-[#6E0E15]"
        />

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative pl-16 md:pl-24"
        >

          {/* Dot */}
          <div className="absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-[#F5C6CB] to-[#D98D95]">
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(217,141,149,0.5)",
                  "0 0 0 8px rgba(217,141,149,0)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          </div>

          {/* Content */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/5 border border-[#D98D95]/20 backdrop-blur-md rounded-2xl p-6
            hover:border-[#D98D95]/50 hover:shadow-[0_0_30px_5px_rgba(217,141,149,0.2)]
            transition-all duration-300"
          >

            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#F5C6CB] to-[#D98D95] bg-clip-text text-transparent">
                Full Stack Developer
              </h3>
              <div className="flex items-center gap-2 text-[#D98D95]">
                <Calendar size={16} />
                <span className="text-sm">2024 - 2025</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#f5d0d4]/50 mt-2">
              <MapPin size={16} />
              <span className="text-sm">Kodu • Hisar, Haryana</span>
            </div>

            <ul className="mt-5 space-y-3">
              {[
                "Developed and maintained full-stack web apps using MERN",
                "Collaborated with teams to deliver high-quality solutions",
                "Built responsive UI and optimized performance",
                "Followed best practices & clean code standards",
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-[#f5d0d4]/70 text-sm"
                >
                  <CheckCircle className="text-[#D98D95] mt-0.5 shrink-0" size={18} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;