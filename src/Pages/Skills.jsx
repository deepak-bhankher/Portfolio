import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", percent: 85, gradient: "from-orange-400 to-red-500" },
    { name: "CSS", percent: 80, gradient: "from-blue-400 to-cyan-500" },
    { name: "JavaScript", percent: 80, gradient: "from-yellow-400 to-orange-400" },
    { name: "React", percent: 90, gradient: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", percent: 90, gradient: "from-teal-400 to-cyan-500" },
    { name: "Node.js", percent: 80, gradient: "from-green-400 to-emerald-500" },
    { name: "Express.js", percent: 85, gradient: "from-purple-400 to-pink-500" },
    { name: "MongoDB", percent: 80, gradient: "from-green-500 to-teal-500" },
  ];

  return (
    <section id="skills" className="relative px-6 md:px-16 py-20 overflow-hidden">

      {/* Background Image */}
      <img src="download.jpg" alt="bg" className="absolute inset-0 w-full h-full object-cover  z-0" />
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* glow blobs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-center text-4xl font-bold shimmer-text">Technical Skills</h1>
        <p className="text-center text-lg mt-3 text-white/50">
          Proficient in modern web development technologies and frameworks
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 hover:scale-105 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.2)]"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-white font-semibold text-lg">{skill.name}</h2>
                <span className={`text-sm font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${skill.gradient} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
