import { motion } from 'framer-motion';
import { Github, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'neon noodles',
    stack: ['react', 'three.js', 'framer-motion'],
    desc: 'a tasty mess of shaders and noodles that wiggle on scroll.',
    demo: '#',
    code: '#',
    color: 'from-fuchsia-500/25 to-indigo-500/25',
  },
  {
    title: 'vibe machine',
    stack: ['fastapi', 'mongo', 'vite'],
    desc: 'site that judges your playlist and tries not to be rude.',
    demo: '#',
    code: '#',
    color: 'from-emerald-500/25 to-teal-500/25',
  },
  {
    title: 'buttonverse',
    stack: ['tailwind', 'radix', 'micro-interactions'],
    desc: '100 buttons. 101 hover states. chaos wins.',
    demo: '#',
    code: '#',
    color: 'from-amber-500/25 to-rose-500/25',
  },
];

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          projects (they work. mostly.)
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <FlipCard key={i} {...p} i={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ title, stack, desc, demo, code, color, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="[perspective:1200px]"
    >
      <div className="group relative h-64 w-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]">
        {/* front */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-lg overflow-hidden [backface-visibility:hidden]">
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color}`} />
          <div className="relative z-10 h-full flex flex-col">
            <div className="text-sm text-white/60">{stack.join(' • ')}</div>
            <div className="mt-1 text-xl font-semibold">{title}</div>
            <div className="mt-auto w-full h-24 rounded-xl overflow-hidden">
              <HoverPreview color={color} />
            </div>
          </div>
        </div>
        {/* back */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl shadow-xl rotate-y-180 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full flex flex-col">
            <div className="text-sm text-white/60">{title}</div>
            <p className="mt-2 text-white/80 text-sm">{desc}</p>
            <div className="mt-auto flex items-center gap-2">
              <a href={demo} className="interactive inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs hover:bg-white/15 transition">
                <Rocket size={14} /> demo
              </a>
              <a href={code} className="interactive inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs hover:bg-white/15 transition">
                <Github size={14} /> code
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HoverPreview({ color }) {
  // a tiny animated preview using gradients + parallax wiggle
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
      <motion.div
        className="absolute inset-4 rounded-lg bg-black/40 border border-white/10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        <div className="absolute -right-6 -top-6 size-20 rounded-full bg-white/10 blur-xl" />
        <motion.div
          className="absolute left-4 top-4 size-6 rounded-full bg-white/70"
          animate={{ x: [0, 30, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-6 bottom-6 h-2/3 w-1/3 rounded-lg bg-white/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
