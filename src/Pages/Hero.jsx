import React from "react";

function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12 overflow-hidden"
    >
      {/* Background */}
      <img
        src="Earth.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm Deepak
          </span>
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          MERN Stack Developer
        </h2>

        <p className="mt-5 text-gray-300 max-w-lg mx-auto md:mx-0">
          Passionate about creating scalable web applications with modern
          technologies. Specialized in MongoDB, Express.js, React.js and
          Node.js.
        </p>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <button
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-5 py-3 border cursor-pointer border-purple-500 rounded-lg text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300"
          >
            Learn More About Me ↓
          </button>

          <a href="/Final_Resume.pdf" download>
            <button className="px-5 py-3 bg-white cursor-pointer text-black rounded-lg hover:scale-105 transition-all duration-300">
              Download CV 📄
            </button>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center z-10">
        <div className="rounded-full p-2 shadow-[0_0_60px_15px_rgba(56,189,248,0.7)]">
          <img
            src="image.png"
            alt="profile"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-2 border-purple-500 hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;