"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <motion.div
  initial={{
  opacity: 0,
  y: 4,
  scale: 0.997,
}}

animate={{
  opacity: 1,
  y: 0,
  scale: 1,
}}

transition={{
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
}}
  className="
        relative
        w-full
        max-w-[640px]
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200/70
        bg-white/85
        px-8
        py-7
        shadow-[0_20px_70px_rgba(15,23,42,0.10)]
        backdrop-blur-2xl
        transition-all
        duration-300
        sm:px-10
        sm:py-8
        lg:px-12
        lg:py-9
      "
    >
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500" />

      {/* Top Glow */}
      <div className="absolute -top-28 -right-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Bottom Glow */}
      <div className="absolute -bottom-28 -left-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Glass Effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}