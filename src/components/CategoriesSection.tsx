"use client";

import { motion } from "framer-motion";
import { Palette, Users, Layout, Film, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Palette,
    title: "Illustrations",
    desc: "Digital paintings, character portraits, and scene illustrations",
    count: "12+ assets",
    color: "#FFD700",
    bg: "#1a3a1a",
  },
  {
    icon: Users,
    title: "Character Designs",
    desc: "Full character sheets, expressions, poses, and concept art",
    count: "8+ assets",
    color: "#FFD700",
    bg: "#8B0000",
  },
  {
    icon: Layout,
    title: "Graphic Designs",
    desc: "Banners, branding kits, UI mockups, and promotional materials",
    count: "15+ assets",
    color: "#FFD700",
    bg: "#1a3a1a",
  },
  {
    icon: Film,
    title: "Animations",
    desc: "Motion graphics, 2D animations, and animated assets",
    count: "10+ assets",
    color: "#FFD700",
    bg: "#8B0000",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CategoriesSection() {
  return (
    <section
      id="products"
      className="py-24 bg-[#6B0000] relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FFD700 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Digital Design <span className="text-yellow-400">Categories</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Premium assets crafted with passion — from hand-drawn illustrations
            to polished motion graphics.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl p-6 border border-yellow-400/10 hover:border-yellow-400/40 transition-all duration-300 overflow-hidden"
                style={{ background: cat.bg }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-yellow-400" />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cat.color}20` }}
                >
                  <Icon size={22} style={{ color: cat.color }} />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">
                  {cat.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-xs font-medium">
                    {cat.count}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-white/30 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-yellow-400/40 text-yellow-400 font-medium px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-[#6B0000] transition-all duration-300"
          >
            Browse All Products <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
