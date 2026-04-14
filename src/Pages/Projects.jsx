import React from "react";

function Projects() {
  const project = [
    {
      name: "Job Portal",
      img: "finances icon.jpg",
      title: "A full stack job portal with authentication and dashboard.",
      demo: "https://job-portal-frontend-jet-nine.vercel.app/",
    },
    {
      name: "E-commerce",
      img: "ecomers.jpg",
      title: "A Frontend Responsive UI E-commerce website with cart.",
      demo: "https://fresh-eat-blm5.vercel.app/",
    },
    {
      name: "Ice-Cream",
      img: "icecreame.jpg",
      title: "A responsive ice-cream website with modern UI.",
      demo: "https://moonlit-chimera-be5239.netlify.app/",
    },
    {
      name: "Fresh-Eat",
      img: "fresh.jpg",
      title: "A Frontend Fresh-Eat website and order food items easily.",
      demo: "https://69d4af6f8a11fd0008167f93--hilarious-travesseiro-c20bd5.netlify.app/",
    },
    {
      name: "Restaurant",
      img: "restor.jpg",
      title: "A Frontend Restaurant Page and responsive UI design.",
      demo: "https://starlit-chaja-0471f4.netlify.app/",
    },
    {
      name: "Health Clinic",
      img: "health.jpg",
      title: "A Frontend UI of Health Clinic website and responsive UI design.",
      demo: "https://lighthearted-beignet-2a7b4b.netlify.app/",
    },
    {
      name: "Rosemary-Cakes",
      img: "cake.jpg",
      title: "A Rosemary cakes Frontend Responsive UI.",
      demo: "https://sunny-gumption-55937f.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="relative px-6 md:px-16 py-20 bg-black overflow-hidden">

      {/* bg glow blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

      <h1 className="text-center text-4xl font-bold shimmer-text">Projects</h1>
      <p className="text-center text-lg mt-3 text-white/50">
        Explore some of the projects I've built and deployed using modern web technologies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {project.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.2)] transition-all duration-300"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover  hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="p-5 space-y-3">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {item.name}
              </h1>
              <p className="text-white/60 text-sm">{item.title}</p>
              {item.demo && (
                <a href={item.demo} target="_blank" rel="noreferrer">
                  <button className="mt-2 px-5 py-2 rounded-lg text-sm font-bold text-white border border-purple-500/50 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:border-transparent hover:shadow-[0_0_20px_4px_rgba(236,72,153,0.4)] transition-all duration-300 cursor-pointer">
                    Live Demo →
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
