import React from "react";

function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 py-20 bg-black overflow-hidden">

      {/* bg glow blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <h2 className="text-center font-bold text-4xl shimmer-text mb-14">
        About Me
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* LEFT - TEXT */}
        <div className="flex-1 space-y-5">
          <p className="text-white/70 text-lg leading-relaxed border-l-4 border-purple-500 pl-4">
            I'm a passionate Full Stack MERN Developer with 6 months of
            professional experience at Kodu in Hisar. I specialize in building
            scalable web applications using modern technologies and best
            practices.
          </p>
          <p className="text-white/70 text-lg leading-relaxed border-l-4 border-cyan-500 pl-4">
            My expertise lies in the MERN stack (MongoDB, Express.js, React.js,
            Node.js), and I'm constantly learning new technologies to stay
            current with industry trends. I enjoy solving complex problems and
            creating user-friendly applications that make a difference.
          </p>
        </div>

        {/* RIGHT - CARDS */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {[
            { title: "6 Months", sub: "Experience" },
            { title: "5+", sub: "Projects" },
            { title: "Hisar, Haryana", sub: "Location" },
            { title: "Open to Work", sub: "Availability" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.2)]"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-white/60 mt-1">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
