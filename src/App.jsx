import { useEffect, useMemo, useRef, useState } from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

// custom cursor + ai babbler
function useInteractiveCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let raf;
    const target = { x: 0, y: 0 };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const loop = () => {
      setPos((p) => ({ x: p.x + (target.x - p.x) * 0.18, y: p.y + (target.y - p.y) * 0.18 }));
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  useEffect(() => {
    const selector = 'a, button, input, textarea, [role="button"], .interactive';
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    const nodes = Array.from(document.querySelectorAll(selector));
    nodes.forEach((n) => {
      n.addEventListener('pointerenter', enter);
      n.addEventListener('pointerleave', leave);
    });
    return () => {
      nodes.forEach((n) => {
        n.removeEventListener('pointerenter', enter);
        n.removeEventListener('pointerleave', leave);
      });
    };
  }, []);

  useEffect(() => {
    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${pos.x - 100}px, ${pos.y - 100}px, 0)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0)`;
      ringRef.current.style.scale = hovering ? '1.3' : '1';
      ringRef.current.style.borderColor = hovering ? 'rgb(34 197 94)' : 'rgb(99 102 241)';
      ringRef.current.style.boxShadow = hovering
        ? '0 0 24px rgba(34,197,94,0.55), inset 0 0 12px rgba(34,197,94,0.35)'
        : '0 0 24px rgba(99,102,241,0.55), inset 0 0 12px rgba(99,102,241,0.35)';
    }
  }, [pos, hovering]);

  return { glowRef, ringRef };
}

function AIBabble() {
  const quips = useMemo(
    () => [
      'huh. that actually compiled.',
      'this card slaps. respectfully.',
      'zero bugs. probably.',
      'ship it? ship it.',
      'note to self: drink water.',
      '✨ dramatic zoom noise ✨',
      'i like your cursor. very glowy.',
    ],
    []
  );
  const [open, setOpen] = useState(true);
  const [msg, setMsg] = useState(quips[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setMsg(quips[Math.floor(Math.random() * quips.length)]);
      setOpen(Math.random() > 0.2); // sometimes hides
    }, 4000);
    return () => clearInterval(id);
  }, [quips]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-500 animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.35)]" />
        <div className="max-w-xs rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-3 text-sm text-white/90 shadow-lg">
          {msg}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const { glowRef, ringRef } = useInteractiveCursor();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // fun: pixel buddy on key "b"
  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() !== 'b') return;
      const dot = document.createElement('div');
      dot.style.position = 'fixed';
      dot.style.width = '8px';
      dot.style.height = '8px';
      dot.style.borderRadius = '2px';
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.background = 'radial-gradient(circle at 30% 30%, #34d399, #06b6d4)';
      dot.style.boxShadow = '0 0 16px rgba(52,211,153,0.8)';
      dot.style.zIndex = '60';
      document.body.appendChild(dot);
      const follow = (ev) => {
        dot.style.left = ev.clientX + 'px';
        dot.style.top = ev.clientY + 'px';
      };
      window.addEventListener('pointermove', follow);
      setTimeout(() => {
        window.removeEventListener('pointermove', follow);
        dot.remove();
      }, 1200);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-fuchsia-500/40 selection:text-white">
      {/* header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white/90 hover:text-white transition-colors">
            riteesh.dev
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#projects" className="hover:text-white transition-colors">projects</a>
            <a href="#about" className="hover:text-white transition-colors">about</a>
            <a href="#contact" className="hover:text-white transition-colors">contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              aria-label="theme"
              className="interactive inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs hover:bg-white/10 transition"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              <span>{theme === 'dark' ? 'sun pls' : 'dark pls'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* cursor elements */}
      <div ref={glowRef} className="pointer-events-none fixed z-50 size-[200px] rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.35), rgba(34,197,94,0.15))' }} />
      <div ref={ringRef} className="pointer-events-none fixed z-50 size-6 rounded-full border border-indigo-400/80 bg-white/5 backdrop-blur-sm" />

      {/* sections */}
      <main className="relative">
        <section id="home" className="pt-20"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* ai bubble */}
      <AIBabble />

      {/* footer */}
      <footer className="py-10 text-center text-sm text-white/60">
        built this while procrastinating.
        <div className="mt-3 inline-flex items-center gap-2 text-white/40">
          <Sparkles size={14} /> a chill dude who builds dope things — but the details go crazy if you look close.
        </div>
      </footer>
    </div>
  );
}
