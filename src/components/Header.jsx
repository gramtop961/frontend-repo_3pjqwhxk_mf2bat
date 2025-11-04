import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Rocket size={18} className="text-emerald-400" />
          <span className="font-semibold tracking-tight">riteesh.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#home" className="hover:text-white transition-colors">home</a>
          <a href="#work" className="hover:text-white transition-colors">work</a>
          <a href="#contact" className="hover:text-white transition-colors">contact</a>
        </nav>
        <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10 transition">let's talk</a>
      </div>
    </header>
  );
}
