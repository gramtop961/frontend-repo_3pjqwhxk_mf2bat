import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-fuchsia-500/40 selection:text-white">
      <Header />
      <main className="relative">
        <section id="home" className="pt-16"><Hero /></section>
        <section id="work"><Features /></section>
      </main>
      <Footer />
    </div>
  );
}
