import { motion } from 'framer-motion';
import { Rocket, Code2, Palette } from 'lucide-react';

export default function About() {
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
          the lore
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          just a guy who loves pixels, coffee, and making browsers do parkour.
        </motion.p>

        {/* achievements row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { emoji: '⚡', text: 'shipped absurdly fast uis' },
            { emoji: '💻', text: 'wrote code that mostly behaved' },
            { emoji: '🏆', text: 'won a thing or two' },
            { emoji: '🧪', text: 'ran experiments for the plot' },
          ].map((a, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-lg">
              <div className="text-2xl">{a.emoji}</div>
              <div className="mt-1 text-sm text-white/80">{a.text}</div>
            </div>
          ))}
        </motion.div>

        {/* interactive resume timeline */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold"
          >
            resume, but make it fun
          </motion.h3>

          <div className="relative mt-8">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fuchsia-500/60 to-emerald-500/60" />
            <div className="space-y-8">
              {[
                {
                  title: 'frontend witchcraft',
                  place: 'freelance',
                  time: '2023 – now',
                  bullets: ['built shiny things', 'tamed css (mostly)', 'made perf graphs happy'],
                },
                {
                  title: 'full-stack goblin',
                  place: 'startup zone',
                  time: '2021 – 2023',
                  bullets: ['api wrangling', 'db spelunking', 'shipped features on caffeine'],
                },
                {
                  title: 'computer enjoyer',
                  place: 'somewhere with wifi',
                  time: 'forever',
                  bullets: ['learning nonstop', 'breaking, then fixing', 'repeat'],
                },
              ].map((item, i) => (
                <TimelineItem key={i} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* playground / stuff zone */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold"
          >
            playground / stuff zone
          </motion.h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'shader doodles', tag: 'webgl', color: 'from-fuchsia-500/30 to-indigo-500/30' },
              { title: 'weird physics', tag: 'springs', color: 'from-emerald-500/30 to-teal-500/30' },
              { title: 'button lab', tag: 'micro-ux', color: 'from-amber-500/30 to-rose-500/30' },
            ].map((p, i) => (
              <motion.a
                key={i}
                href="#projects"
                whileHover={{ y: -6, rotate: i % 2 ? -0.6 : 0.6 }}
                className={`interactive relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg`}
              >
                <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${p.color}`} />
                <div className="relative z-10">
                  <div className="text-sm text-white/60">{p.tag}</div>
                  <div className="mt-1 text-lg font-semibold">{p.title}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, place, time, bullets, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative ml-10 rounded-2xl border border-white/10 bg-white/5 p-4 pl-6 backdrop-blur-xl shadow-lg"
    >
      <div className="absolute left-[-26px] top-4 size-4 rounded-full bg-gradient-to-br from-fuchsia-400 to-emerald-400 shadow-[0_0_16px_rgba(168,85,247,0.6)]" />
      <div className="text-sm text-white/60">{time}</div>
      <div className="mt-0.5 text-lg font-semibold">{title}</div>
      <div className="text-sm text-white/70">{place}</div>
      <ul className="mt-2 list-disc pl-5 text-white/80 text-sm space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </motion.div>
  );
}
