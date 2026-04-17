"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const floatingShapes = [
  { size: 80, x: "10%", y: "20%", delay: 0, color: "#FFD700" },
  { size: 50, x: "85%", y: "15%", delay: 0.5, color: "#FFD700" },
  { size: 120, x: "75%", y: "65%", delay: 1, color: "#A50000" },
  { size: 40, x: "20%", y: "75%", delay: 1.5, color: "#FFD700" },
  { size: 60, x: "50%", y: "85%", delay: 0.8, color: "#2a5a2a" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#6B0000]"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #FFD700 0%, transparent 70%)",
            top: "-200px",
            right: "-100px",
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #1a3a1a 0%, transparent 70%)",
            bottom: "-100px",
            left: "-100px",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating decorative shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10 pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
          }}
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      {/* Ink splash decorative SVG */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        <svg width="500" height="500" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 10 C140 10, 190 50, 190 100 C190 150, 150 190, 100 190 C50 190, 10 150, 10 100 C10 50, 60 10, 100 10Z"
            fill="#FFD700"
          />
          <path
            d="M100 30 C130 20, 170 60, 160 100 C150 140, 120 170, 80 160 C40 150, 20 110, 40 80 C60 50, 70 40, 100 30Z"
            fill="#8B0000"
          />
        </svg>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">
              Digital Design Assets
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
          >
            <span className="block">QorDesign</span>
            <span className="block text-yellow-400">Studio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/70 text-lg md:text-xl mb-2 font-light italic"
          >
            Beautiful Visuals, Powerful Stories
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/60 text-base mb-10 max-w-md leading-relaxed"
          >
            Premium digital design assets — illustrations, character designs,
            graphic design packs, and motion graphics. Ready to download.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 bg-yellow-400 text-[#6B0000] font-bold px-7 py-3.5 rounded-full hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/20"
            >
              Browse Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              View Portfolio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "50+", label: "Design Assets" },
              { value: "4", label: "Categories" },
              { value: "100%", label: "Original Work" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-yellow-400">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Visual card stack */}
        <div className="relative h-[420px] hidden md:block">
          {/* Card 3 (back) */}
          <motion.div
            initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 12, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-8 right-0 w-64 h-80 rounded-2xl bg-[#1a3a1a] border border-yellow-400/20 shadow-2xl"
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#2a5a2a] to-[#1a3a1a] flex items-center justify-center">
              <span className="text-yellow-400/30 text-6xl font-black">A</span>
            </div>
          </motion.div>

          {/* Card 2 (mid) */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -6, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-16 right-12 w-64 h-80 rounded-2xl bg-[#8B0000] border border-yellow-400/30 shadow-2xl"
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#A50000] to-[#6B0000] flex items-center justify-center">
              <span className="text-yellow-400/30 text-6xl font-black">G</span>
            </div>
          </motion.div>

          {/* Card 1 (front) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ y: -8, rotate: 1 }}
            className="absolute top-24 right-6 w-64 h-80 rounded-2xl bg-yellow-400 shadow-2xl shadow-yellow-400/30 overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex flex-col items-center justify-center gap-3 p-6">
              <div className="w-16 h-16 rounded-full bg-[#6B0000] flex items-center justify-center">
                <span className="text-yellow-400 text-2xl font-black">Q</span>
              </div>
              <span className="text-[#6B0000] font-black text-lg text-center">
                QorDesign Studio
              </span>
              <span className="text-[#6B0000]/70 text-xs text-center">
                Illustration · Design · Animation
              </span>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4, type: "spring" }}
            animate-loop={{ y: [-4, 4, -4] }}
            className="absolute bottom-8 left-4 bg-[#1a3a1a] border border-yellow-400/40 rounded-xl px-4 py-2.5 shadow-xl"
          >
            <div className="text-yellow-400 font-bold text-sm">✦ New Drop</div>
            <div className="text-white/60 text-xs">Character Design Pack</div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-yellow-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
