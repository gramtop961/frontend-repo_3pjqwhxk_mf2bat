import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function Contact() {
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
          say hi.
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              alert('sent! (jk, but the vibes are immaculate)');
            }}
          >
            <label className="block text-sm text-white/70">your email</label>
            <input className="interactive mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500/50" type="email" required placeholder="name@internet.com" />

            <label className="mt-4 block text-sm text-white/70">message</label>
            <textarea className="interactive mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 h-32 outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="tell me things" />

            <button className="interactive mt-5 relative overflow-hidden rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15">
              <span className="relative z-10 inline-flex items-center gap-2"><Mail size={16} /> send vibes</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 hover:translate-x-[120%]" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg"
          >
            <div className="text-sm text-white/70">find me on the internet</div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <IconLink href="#" Icon={Github} label="github" />
              <IconLink href="#" Icon={Twitter} label="x" />
              <IconLink href="#" Icon={Linkedin} label="linkedin" />
              <IconLink href="#" Icon={Instagram} label="instagram" />
            </div>
            <p className="mt-6 text-white/60 text-sm">or email me: <span className="underline">hello@riteesh.dev</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IconLink({ href, Icon, label }) {
  return (
    <a
      href={href}
      className="interactive flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm hover:bg-black/50 transition"
    >
      <Icon size={16} /> {label}
    </a>
  );
}
