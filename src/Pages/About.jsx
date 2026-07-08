import React from "react";
import { motion } from "framer-motion";
import { Clock, FolderGit2, MapPin, Sparkles } from "lucide-react";

const CARDS = [
  { title: "6 Months", sub: "Experience", icon: Clock },
  { title: "5+", sub: "Projects", icon: FolderGit2 },
  { title: "Hisar, Haryana", sub: "Location", icon: MapPin },
  { title: "Open to Work", sub: "Availability", icon: Sparkles },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* glow blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#D98D95]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#6E0E15]/40 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center mb-14"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase
          text-[#F5C6CB] bg-white/5 backdrop-blur-md border border-[#D98D95]/30">
          Get to know me
        </span>
        <h2 className="text-center font-bold text-4xl shimmer-text">
          About Me
        </h2>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]" />
      </motion.div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* LEFT - TEXT */}
        <div className="flex-1 space-y-5">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-[#f5d0d4]/75 text-lg leading-relaxed border-l-4 border-[#D98D95]/60 pl-4"
          >
            I'm a passionate{" "}
            <span className="font-semibold bg-gradient-to-r from-[#F5C6CB] to-[#D98D95] bg-clip-text text-transparent">
              Full Stack MERN Developer
            </span>{" "}
            with 6 months of professional experience at Kodu in Hisar. I
            specialize in building scalable web applications using modern
            technologies and best practices.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-[#f5d0d4]/75 text-lg leading-relaxed border-l-4 border-[#D98D95]/40 pl-4"
          >
            My expertise lies in the{" "}
            <span className="font-semibold bg-gradient-to-r from-[#F5C6CB] to-[#D98D95] bg-clip-text text-transparent">
              MERN stack
            </span>{" "}
            (MongoDB, Express.js, React.js, Node.js), and I'm constantly
            learning new technologies to stay current with industry trends. I
            enjoy solving complex problems and creating user-friendly
            applications that make a difference.
          </motion.p>
        </div>

        {/* RIGHT - CARDS */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white/5 border border-[#D98D95]/20 backdrop-blur-md p-6 rounded-2xl text-center
                  transition-all duration-300
                  hover:border-[#D98D95]/50 hover:shadow-[0_0_30px_5px_rgba(217,141,149,0.2)]"
              >
                <div className="mx-auto mb-3 w-10 h-10 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-[#F5C6CB]/20 to-[#D98D95]/20 border border-[#D98D95]/30
                  group-hover:from-[#F5C6CB]/30 group-hover:to-[#D98D95]/30 transition-all duration-300">
                  <Icon size={18} className="text-[#F5C6CB]" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#F5C6CB] to-[#D98D95] bg-clip-text text-transparent">
                  {card.title}
                </h3>
                <p className="text-[#f5d0d4]/50 mt-1">{card.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;