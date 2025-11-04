import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Palette, Rocket } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Developer', color: 'from-cyan-400 to-blue-400' },
  { icon: PenTool, label: 'Designer', color: 'from-fuchsia-400 to-pink-400' },
  { icon: Palette, label: 'Visuals', color: 'from-violet-400 to-indigo-400' },
  { icon: Rocket, label: 'Ideas', color: 'from-emerald-400 to-teal-400' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 max-w-3xl text-zinc-300"
        >
          I’m Riteesh — I design systems, build web things, and experiment with playful interfaces. I believe in
          thoughtful details: tiny micro-interactions, smooth motion, and clear typography. The goal is simple:
          ship delightful work that feels a little bit like magic.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {skills.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: 0.2 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-black shadow-[0_0_30px_rgba(124,58,237,0.25)]`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-medium">{label}</div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
