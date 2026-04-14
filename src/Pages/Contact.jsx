import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className="relative px-6 md:px-16 py-20 overflow-hidden">

      {/* Background Image */}
      <img src="contact.jpg" alt="bg" className="absolute inset-0 w-full h-full object-cover  z-0" />
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* glow blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-center text-4xl font-bold shimmer-text mb-12">Contact Me</h1>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-purple-500 focus:shadow-[0_0_15px_2px_rgba(168,85,247,0.3)] transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-purple-500 focus:shadow-[0_0_15px_2px_rgba(168,85,247,0.3)] transition-all duration-300"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 outline-none focus:border-purple-500 focus:shadow-[0_0_15px_2px_rgba(168,85,247,0.3)] transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-white border border-purple-500/50 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:border-transparent hover:shadow-[0_0_20px_4px_rgba(236,72,153,0.4)] transition-all duration-300 cursor-pointer"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
