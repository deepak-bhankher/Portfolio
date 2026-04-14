import React from "react";
import { CheckCircle, Calendar, MapPin } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-16 py-20 bg-black overflow-hidden">

      {/* bg glow blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <h2 className="text-center text-4xl font-bold shimmer-text">Work Experience</h2>
      <p className="text-center text-white/50 mt-3">
        Professional journey and achievements in web development
      </p>

      {/* Timeline */}
      <div className="relative mt-16 max-w-3xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

        {/* Card */}
        <div className="relative pl-16 md:pl-24">

          {/* Dot */}
          <div className="absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_4px_rgba(168,85,247,0.5)]" />

          {/* Content */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.2)] transition-all duration-300">

            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack Developer
              </h3>
              <div className="flex items-center gap-2 text-purple-400">
                <Calendar size={16} />
                <span className="text-sm">2024 - 2025</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/50 mt-2">
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
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <CheckCircle className="text-cyan-400 mt-0.5 shrink-0" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
