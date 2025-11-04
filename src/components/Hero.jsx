import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <div className="relative h-[92vh] w-full overflow-hidden">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* gradient overlays must not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(99,102,241,0.35),transparent),radial-gradient(900px_500px_at_90%_110%,rgba(34,197,94,0.25),transparent)]" />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
        >
          <span className="block text-white">riteesh makes</span>
          <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">dark, fast, cinematic web</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 max-w-xl text-white/70"
        >
          minimal first-landing version. simple hero, smooth scroll, clean ctas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#work" className="relative overflow-hidden rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15">
            <span className="relative z-10">see work</span>
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 hover:translate-x-[120%]" />
          </a>
          <a href="#contact" className="relative overflow-hidden rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm text-emerald-200 backdrop-blur-md transition hover:scale-[1.02] hover:bg-emerald-400/15">
            <span className="relative z-10">say hi</span>
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent transition-transform duration-700 hover:translate-x-[120%]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
