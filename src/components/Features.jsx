import { motion } from 'framer-motion';
import { Rocket, Star, User } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'fast & fluid',
    desc: 'buttery motion, tight layouts, zero jank.'
  },
  {
    icon: Star,
    title: 'cinematic vibes',
    desc: '3d hero, crisp gradients, subtle glow everywhere.'
  },
  {
    icon: User,
    title: 'human first',
    desc: 'reads nice, feels nice, ships fast.'
  }
];

export default function Features() {
  return (
    <section id="work" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_10%_10%,rgba(168,85,247,0.15),transparent),radial-gradient(600px_400px_at_90%_90%,rgba(34,197,94,0.12),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">clean builds. loud impact.</h2>
          <p className="mt-3 text-white/70 max-w-2xl">small touches, big feel. this is the first landing — simple, dark, and to the point.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm hover:bg-white/[0.06] transition"
            >
              <div className="flex items-start gap-3">
                <it.icon className="text-emerald-300" size={18} />
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
