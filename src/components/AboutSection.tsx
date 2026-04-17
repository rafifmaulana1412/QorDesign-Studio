"use client";

import { motion } from "framer-motion";
import { Brush, Clapperboard, PenTool, Layers } from "lucide-react";

const skills = [
  { icon: Brush, label: "Illustration", tools: "Photoshop · Ibis Paint X" },
  { icon: PenTool, label: "Graphic Design", tools: "Illustrator · Canva" },
  {
    icon: Clapperboard,
    label: "Animation",
    tools: "After Effect · Clip Studio",
  },
  {
    icon: Layers,
    label: "Motion Graphics",
    tools: "Premiere · Rough Animator",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#6B0000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Avatar card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative w-full max-w-sm mx-auto">
            {/* Background card */}
            <div className="absolute inset-0 rounded-3xl bg-yellow-400 translate-x-4 translate-y-4" />
            {/* Main card */}
            <div className="relative rounded-3xl bg-[#1a3a1a] border border-yellow-400/20 p-8 text-center">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 rounded-full bg-[#8B0000] border-4 border-yellow-400 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-yellow-400 text-5xl font-black">N</span>
              </div>
              <h3 className="text-white font-black text-xl mb-1">
                Mohammad Naufal
              </h3>
              <p className="text-yellow-400 text-sm mb-4">
                Visual Communication Design
              </p>
              <p className="text-white/50 text-xs">
                Universitas Negeri Makassar
              </p>

              {/* Skill badges */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["Illustration", "Design", "Animation", "Motion"].map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Text + skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase mb-3 block">
            About the Creator
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Beautiful Visuals,{" "}
            <span className="text-yellow-400">Powerful Stories</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            A visual creator with a strong passion for illustration, graphic
            design, and animation. With creativity, attention to detail, and the
            ability to blend aesthetics with meaningful messages.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            Every piece is crafted to not only captivate visually but also tell
            stories and evoke emotions — from character designs to full branding
            identities.
          </p>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {skill.label}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">
                      {skill.tools}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
