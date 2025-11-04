import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-6xl sm:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              i do stuff.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="mt-6 text-lg text-zinc-300"
          >
            Riteesh — developer, designer, and creative tinkerer crafting futuristic, playful experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
            className="mt-10 flex gap-4"
          >
            <a href="#projects" className="rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition hover:brightness-110">
              Explore work
            </a>
            <a href="#contact" className="rounded-full border border-zinc-700/80 px-6 py-3 font-medium text-zinc-200 backdrop-blur-sm transition hover:border-zinc-500 hover:text-white">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
