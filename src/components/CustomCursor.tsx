"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const moveDot = (e: MouseEvent) => {
      setDot({ x: e.clientX, y: e.clientY });
    };

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", moveDot);

    const interactives = document.querySelectorAll(
      "a, button, [role='button']",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", moveDot);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-yellow-400"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: isHovering ? 1.6 : 1,
          opacity: 0.8,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
        style={{ width: 40, height: 40 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-yellow-400"
        animate={{ x: dot.x - 4, y: dot.y - 4 }}
        transition={{ type: "spring", stiffness: 800, damping: 30 }}
        style={{ width: 8, height: 8 }}
      />
    </>
  );
}
