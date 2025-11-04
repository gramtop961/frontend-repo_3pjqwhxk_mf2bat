import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  // Simple custom cursor glow following the mouse
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const move = (e) => {
      if (!glow) return;
      const x = e.clientX;
      const y = e.clientY;
      glow.style.setProperty('--x', x + 'px');
      glow.style.setProperty('--y', y + 'px');
      glow.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cursor glow */}
      <div
        id="cursor-glow"
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 h-[300px] w-[300px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(200px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.45), rgba(34,211,238,0.35), transparent 60%)',
          transform: 'translate3d(-9999px, -9999px, 0)',
        }}
      />

      {/* Top navigation */}
      <header className="sticky top-0 z-20 w-full border-b border-zinc-900/80 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="font-semibold tracking-tight">
            Riteesh
          </a>
          <nav className="flex items-center gap-3 text-sm text-zinc-300">
            <a className="rounded-full px-3 py-1 hover:text-white" href="#about">About</a>
            <a className="rounded-full px-3 py-1 hover:text-white" href="#projects">Projects</a>
            <a className="rounded-full px-3 py-1 hover:text-white" href="#contact">Contact</a>
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
