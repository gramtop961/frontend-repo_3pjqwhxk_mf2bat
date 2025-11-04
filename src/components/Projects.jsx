import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DATA = [
  {
    title: 'Neon UI Kit',
    category: 'design',
    description: 'A minimal, glowing component set for dashboards.',
  },
  {
    title: 'Parallax Playground',
    category: 'dev',
    description: 'Scroll-bound 3D parallax scenes with WebGL + React.',
  },
  {
    title: 'Idea Garden',
    category: 'ideas',
    description: 'A public wall for half-baked experiments and notes.',
  },
  {
    title: 'Futurist Portfolio',
    category: 'dev',
    description: 'Dark + neon personal site with micro-interactions.',
  },
  {
    title: 'Poster Lab',
    category: 'design',
    description: 'Generative poster explorations with gradients + grids.',
  },
  {
    title: 'Ribbon Physics',
    category: 'ideas',
    description: 'Interactive ribbon motion studies and shaders.',
  },
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'dev', label: 'Dev' },
  { key: 'design', label: 'Design' },
  { key: 'ideas', label: 'Ideas' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return DATA;
    return DATA.filter((d) => d.category === active);
  }, [active]);

  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  active === f.key
                    ? 'border-fuchsia-400/70 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {filtered.map((item, i) => (
              <motion.article
                key={item.title}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.98 }}
                variants={cardVariants}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <div
                  className="h-36 w-full rounded-lg bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20"
                />
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
                    {item.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(34,197,94,0.12), transparent 40%)' }} />

                <div className="absolute inset-0 translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <button className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-white/20">
                      Preview
                    </button>
                    <button className="rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-4 py-2 text-sm text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] transition hover:brightness-110">
                      Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
