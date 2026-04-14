import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center gap-10 justify-between px-6 md:px-16 py-12 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="Earth.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover  -z-10"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="flex-1 text-center md:text-left">
        <h1 className="tetx-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
            Hi, I'm Deepak
          </span>
        </h1>
        <p className="mt-4 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Mern Stack Developer</p>
        <p className="text-sm mt-4 max-w-md mx-auto md:mx-0 text-gray-300">
          Passionate about creating scalable web applications with modern
          technologies. Specialized in MongoDB, Express.js, React.js, and
          Node.js.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4 font-bold text-white">
          <button
            onClick={() => {
              document.getElementById("about").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-4 py-2 border border-purple-500/50 bg-white/5 text-white font-bold rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:border-transparent hover:shadow-[0_0_20px_4px_rgba(236,72,153,0.4)] transition-all duration-300 cursor-pointer"
          >
            Learn More About Me ↓
          </button>
          <a href="/Deepak_CV.pdf" download>
            <button className="px-4 py-2 bg-white cursor-pointer text-black rounded hover:scale-105 transition-all">
              Download CV 📄
            </button>
          </a>
        </div>
      </div>

      {/* photo */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="p-2 rounded-full shadow-[0_0_60px_20px_rgba(80,199,248,8)]">
          <img
            src="DeepakPhoto.jpg"
            alt="profile"
            className="w-56 h-56 md:h-80 object-cover md:w-80 rounded-full border border-purple-600 hover:scale-105 duration-300"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
