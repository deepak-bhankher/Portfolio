import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Projects() {
  const project = [
    {
      name: "Job Portal",
      title: "A full stack job portal with authentication and dashboard.",
      demo: "https://job-portal-frontend-jet-nine.vercel.app/",
    },
    {
      name: "E-commerce",
      title: "A Frontend Responsive UI E-commerce website with cart.",
      demo: "https://fresh-eat-blm5.vercel.app/",
    },
    {
      name: "Ice-Cream",
      title: "A responsive ice-cream website with modern UI.",
      demo: "https://moonlit-chimera-be5239.netlify.app/",
    },
    {
      name: "Fresh-Eat",
      title: "A Frontend Fresh-Eat website and order food items easily.",
      demo: "https://69d4af6f8a11fd0008167f93--hilarious-travesseiro-c20bd5.netlify.app/",
    },
    {
      name: "Restaurant",
      title: "A Frontend Restaurant Page and responsive UI design.",
      demo: "https://fanciful-malabi-9adc72.netlify.app/",
    },
    {
      name: "Shadow Eats",
      title: "A Frontend UI of  Shadow Eats website and responsive UI design.",
      demo: "https://clever-pika-a514a8.netlify.app/",
    },
    {
      name: "Rosemary-Cakes",
      title: "A Rosemary cakes Frontend Responsive UI.",
      demo: "https://sunny-gumption-55937f.netlify.app/",
    },
     {
      name: "CiklX",
      title: "A CirklX  Website Frontend Responsive UI and motions .",
      demo: "https://papaya-maamoul-bd89e6.netlify.app/",
    },
     {
      name: "FranchiseEats",
      title: "A FranchiseEats login and signUp  Frontend Responsive UI  .",
      demo: "https://leafy-gnome-62e455.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="relative px-6 md:px-16 py-24 overflow-hidden">

      {/* glow blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#D98D95]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#6E0E15]/40 rounded-full blur-3xl -z-10" />

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
          Selected work
        </span>
        <h1 className="text-center text-4xl font-bold shimmer-text">Projects</h1>
        <p className="text-center text-lg mt-3 text-[#f5d0d4]/50 max-w-xl">
          Explore some of the projects I've built and deployed using modern web technologies.
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {project.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="group bg-white/5 border border-[#D98D95]/20 backdrop-blur-md rounded-2xl overflow-hidden
              hover:border-[#D98D95]/50
              hover:shadow-[0_0_30px_5px_rgba(217,141,149,0.2)]
              transition-all duration-300"
          >
            {/* Header panel replacing the old image */}
            <div className="relative">
              {/* fake browser bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-black/30 border-b border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#F5C6CB]/50" />
                <span className="w-2 h-2 rounded-full bg-[#D98D95]/50" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>

              <div className="relative w-full h-40 overflow-hidden flex items-center justify-center
                bg-gradient-to-br from-[#3a0a0f] via-[#2A0608] to-[#45080C]">

                {/* decorative oversized initial */}
                <span
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-extrabold uppercase select-none
                    text-[6rem] leading-none whitespace-nowrap"
                  style={{
                    WebkitTextStroke: "1px rgba(217,141,149,0.18)",
                    color: "transparent",
                  }}
                >
                  {item.name.slice(0, 2)}
                </span>

                {/* project index badge */}
                <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full
                  bg-black/40 backdrop-blur-md border border-white/10 text-[#F5C6CB] z-10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* project name */}
                <h1 className="relative z-10 text-2xl font-bold text-center px-4
                  bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95] bg-clip-text text-transparent">
                  {item.name}
                </h1>

                {/* hover overlay CTA */}
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0
                      group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                      text-[#2A0608] bg-gradient-to-r from-[#F5C6CB] via-[#F0A0A8] to-[#D98D95]
                      shadow-[0_0_24px_rgba(217,141,149,0.5)]">
                      View Project <ArrowUpRight size={16} />
                    </span>
                  </a>
                )}
              </div>
            </div>

            <div className="p-5 space-y-3">
              <p className="text-[#f5d0d4]/60 text-sm">{item.title}</p>
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F5C6CB]
                    hover:gap-2.5 transition-all duration-300"
                >
                  Live Demo <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Projects;