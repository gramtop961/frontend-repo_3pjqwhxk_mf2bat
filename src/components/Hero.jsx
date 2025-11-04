import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import MiniRobo from './MiniRobo.jsx';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);

  return (
    <div className="relative h-[92vh] w-full overflow-hidden">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(99,102,241,0.35),transparent),radial-gradient(900px_500px_at_90%_110%,rgba(34,197,94,0.25),transparent)]" />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight"
        >
          <span className="block text-white">i do stuff.</span>
          <span className="mt-2 block text-white/70 text-2xl sm:text-3xl">sometimes that stuff actually works.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-xl text-white/70"
        >
          i make websites, break deadlines, and occasionally sleep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#projects" className="interactive relative overflow-hidden rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15">
            <span className="relative z-10">see the chaos</span>
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 hover:translate-x-[120%]" />
          </a>
          <a href="#contact" className="interactive relative overflow-hidden rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm text-emerald-200 backdrop-blur-md transition hover:scale-[1.02] hover:bg-emerald-400/15">
            <span className="relative z-10">say hi</span>
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent transition-transform duration-700 hover:translate-x-[120%]" />
          </a>
        </motion.div>
      </div>

      {/* mini robo follower */}
      <MiniRobo />

      {/* particles */}
      <ParticleField />

      <style>{`
        @keyframes floaty { 0% { transform: translateY(0)} 50% { transform: translateY(-6px)} 100%{ transform: translateY(0)} }
      `}</style>
    </div>
  );
}

function ParticleField() {
  const dots = Array.from({ length: 60 });
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {dots.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 4;
        const op = Math.random() * 0.6 + 0.2;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity: op,
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.35))',
              animation: `floaty ${3 + Math.random() * 3}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
