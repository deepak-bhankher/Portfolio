import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TiltCard from "../Components/TiltCard";
import MagneticButton from "../Components/MagneticButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [copied, setCopied] = useState(false);

  const emailAddress = "deepakbhankhor758@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 1000);
  };

  return (
    <section id="contact" className="relative px-6 md:px-16 py-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-16"
      >
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase
          text-cyan-300 bg-cyan-950/40 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
          Get in touch
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold shimmer-text tracking-tight">
          Let's Build Something Great
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-lg">
          Have an exciting project, full-time opportunity, or inquiry? Reach out directly or drop a message below.
        </p>
        <span className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_10px_#38BDF8]" />
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
        {/* LEFT COLUMN (2 Cols) — Direct Contact Info & Socials */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-6 sm:p-7 rounded-2xl bg-[#0E1526]/85 border border-slate-800/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Feel free to email me directly or copy my email address to your clipboard.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a href={`mailto:${emailAddress}`} className="text-sm font-medium text-slate-200 hover:text-cyan-300 truncate block transition-colors">
                    {emailAddress}
                  </a>
                </div>
              </div>

              <MagneticButton>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email"
                  className="p-2.5 rounded-lg bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500/25 border border-cyan-500/30 cursor-pointer transition-all duration-200 shrink-0"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </MagneticButton>
            </div>

            {/* Location & Status */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin size={17} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Location</span>
                  <span className="font-semibold text-slate-200">Hisar, Haryana, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Sparkles size={17} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Current Status</span>
                  <span className="font-semibold text-emerald-400">Available for Opportunities</span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Connect Online
              </span>
              <div className="flex items-center gap-3">
                <MagneticButton>
                  <a
                    href="https://github.com/deepak-bhankher"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 text-xs font-semibold transition-all duration-300"
                  >
                    <FaGithub size={15} />
                    <span>GitHub</span>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 text-xs font-semibold transition-all duration-300"
                  >
                    <FaLinkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (3 Cols) — 3D Tilt Contact Form */}
        <div className="lg:col-span-3">
          <TiltCard maxTilt={8} scale={1.01}>
            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              onSubmit={handleSubmit}
              className="relative bg-[#0E1526]/85 border border-slate-800/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8
                shadow-[0_12px_40px_rgba(0,0,0,0.4)] space-y-5"
            >
              <h3 className="text-xl font-bold text-slate-100 tracking-tight mb-2">
                Send a Message
              </h3>

              {/* Name Field */}
              <div className="relative">
                <User size={18} className="absolute left-4 top-4 text-cyan-400 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl bg-slate-900/90 border border-slate-700/80
                    text-slate-100 placeholder-slate-500 outline-none
                    focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                    transition-all duration-300 text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-4 text-cyan-400 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl bg-slate-900/90 border border-slate-700/80
                    text-slate-100 placeholder-slate-500 outline-none
                    focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                    transition-all duration-300 text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-4 text-cyan-400 pointer-events-none" />
                <textarea
                  name="message"
                  placeholder="Tell me about your project, role, or proposal..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl bg-slate-900/90 border border-slate-700/80
                    text-slate-100 placeholder-slate-500 outline-none
                    focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                    transition-all duration-300 resize-none text-sm"
                />
              </div>

              {/* Submit Button with animated states */}
              <MagneticButton className="w-full">
                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={status === "idle" ? { scale: 1.01 } : {}}
                  whileTap={status === "idle" ? { scale: 0.99 } : {}}
                  className="w-full py-4 rounded-xl font-bold cursor-pointer relative overflow-hidden
                    text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500
                    shadow-[0_0_24px_rgba(56,189,248,0.4)]
                    hover:shadow-[0_0_32px_rgba(56,189,248,0.7)]
                    transition-all duration-300 disabled:cursor-default disabled:opacity-80 text-sm"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2 font-extrabold uppercase tracking-wider"
                      >
                        <span>Send Message</span>
                        <Send size={15} />
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2 font-bold uppercase tracking-wider"
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-slate-950/40 border-t-slate-950 rounded-full"
                        />
                        <span>Sending...</span>
                      </motion.span>
                    )}
                    {status === "sent" && (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2 text-emerald-950 font-bold uppercase tracking-wider"
                      >
                        <CheckCircle2 size={18} />
                        <span>Message Sent Successfully!</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </MagneticButton>
            </motion.form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export default Contact;