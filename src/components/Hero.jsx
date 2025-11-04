import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  // Precompute subtle floating particle positions
  const particles = useMemo(() => {
    return Array.from({ length: 36 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 6,
      duration: Math.random() * 12 + 10,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Particles - subtle, floating and twinkling */}
      <div className="pointer-events-none absolute inset-0">
        <style>{`
          @keyframes floatY { from { transform: translateY(20px); } to { transform: translateY(-20px); } }
          @keyframes twinkle { 0%,100% { opacity: var(--o); } 50% { opacity: calc(var(--o) * 0.4); } }
        `}</style>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              background: 'radial-gradient(circle, rgba(168,85,247,0.9), rgba(59,130,246,0.0))',
              filter: 'blur(0.3px)',
              opacity: p.opacity,
              animation: `floatY ${p.duration}s ease-in-out ${p.delay}s infinite alternate, twinkle 5s ease-in-out ${p.delay}s infinite`,
              '--o': p.opacity,
            }}
          />
        ))}
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 sm:px-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-6xl sm:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              i do stuff.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
            className="mt-6 text-lg text-zinc-300"
          >
            Riteesh — developer, designer, and creative tinkerer crafting futuristic, playful experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.22 }}
            className="mt-10 flex gap-4"
          >
            <a href="#projects" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-fuchsia-400/30 bg-gradient-to-r from-fuchsia-600/60 to-cyan-500/60 px-6 py-3 font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-transform duration-300 hover:scale-[1.03]">
              <span className="relative z-10">Explore work</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70 transition-transform duration-700 group-hover:translate-x-[120%]" />
            </a>
            <a href="#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-700/80 bg-black/30 px-6 py-3 font-medium text-zinc-200 backdrop-blur-sm transition duration-300 hover:border-zinc-500 hover:text-white">
              <span className="relative z-10">Contact</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
