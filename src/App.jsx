import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const buddyRef = useRef(null);
  const buddyTimer = useRef(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const ring = ringRef.current;
    const glow = glowRef.current;
    const buddy = buddyRef.current;

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (ring) ring.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
      if (glow) {
        glow.style.setProperty('--x', x + 'px');
        glow.style.setProperty('--y', y + 'px');
        glow.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
      }
      if (buddy && buddy.dataset.active === '1') {
        buddy.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      }
    };

    const over = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select');
      setIsInteractive(Boolean(interactive));
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('mouseover', over);

    const triggerBuddy = (e) => {
      if (!buddy) return;
      // Hidden easter egg: press the "b" key to spawn a tiny glowing pixel buddy for a second
      if (e.key && e.key.toLowerCase() !== 'b') return;
      buddy.dataset.active = '1';
      buddy.style.opacity = '1';
      clearTimeout(buddyTimer.current || 0);
      buddyTimer.current = setTimeout(() => {
        buddy.dataset.active = '0';
        buddy.style.opacity = '0';
      }, 1200);
    };

    window.addEventListener('keydown', triggerBuddy);

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('keydown', triggerBuddy);
      clearTimeout(buddyTimer.current || 0);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cursor ring */}
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-40 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ${
          isInteractive ? 'border-cyan-300 scale-125' : 'border-fuchsia-300/80 scale-100'
        }`}
        style={{ boxShadow: isInteractive ? '0 0 30px rgba(34,211,238,0.35)' : '0 0 22px rgba(217,70,239,0.35)' }}
      />

      {/* Cursor glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 h-[300px] w-[300px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(200px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.45), rgba(34,211,238,0.35), transparent 60%)',
          transform: 'translate3d(-9999px, -9999px, 0)',
        }}
      />

      {/* Easter egg: pixel buddy (press "b") */}
      <div
        ref={buddyRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-[2px] opacity-0"
        style={{
          background:
            'radial-gradient(6px circle, rgba(34,211,238,0.9), rgba(168,85,247,0.9), transparent)',
          boxShadow: '0 0 16px rgba(34,211,238,0.6), 0 0 28px rgba(168,85,247,0.5)'
        }}
      />

      {/* Top navigation */}
      <header className="sticky top-0 z-20 w-full border-b border-zinc-900/80 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="group relative overflow-hidden rounded-md px-2 font-semibold tracking-tight">
            <span className="relative z-10">Riteesh</span>
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
          </a>
          <nav className="flex items-center gap-3 text-sm text-zinc-300">
            <a className="group relative overflow-hidden rounded-full px-3 py-1 hover:text-white" href="#about">
              <span className="relative z-10">About</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            </a>
            <a className="group relative overflow-hidden rounded-full px-3 py-1 hover:text-white" href="#projects">
              <span className="relative z-10">Projects</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            </a>
            <a className="group relative overflow-hidden rounded-full px-3 py-1 hover:text-white" href="#contact">
              <span className="relative z-10">Contact</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-zinc-900/80 bg-black/60 py-10 text-center text-zinc-400">
        <p>© {new Date().getFullYear()} Riteesh — Crafted with care.</p>
      </footer>
    </div>
  );
}
