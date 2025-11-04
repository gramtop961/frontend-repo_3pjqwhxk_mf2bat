import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">Want to collaborate or just say hi? Drop a message and I’ll get back.</p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get('name');
              const email = data.get('email');
              const message = data.get('message');
              console.log({ name, email, message });
              alert('Thanks! Your message has been noted.');
              e.currentTarget.reset();
            }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col">
                <span className="mb-2 text-sm text-zinc-400">Name</span>
                <input
                  name="name"
                  required
                  className="rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-white outline-none transition focus:border-fuchsia-400/70"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-2 text-sm text-zinc-400">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-white outline-none transition focus:border-cyan-400/70"
                  placeholder="you@domain.com"
                />
              </label>
            </div>
            <label className="mt-4 flex flex-col">
              <span className="mb-2 text-sm text-zinc-400">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-white outline-none transition focus:border-violet-400/70"
                placeholder="Tell me about your idea…"
              />
            </label>
            <div className="mt-6">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] transition hover:brightness-110"
              >
                <span className="relative z-10">Send message</span>
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              </button>
            </div>
          </form>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Elsewhere</h3>
            <p className="mt-2 text-zinc-400">Find me on the networks below:</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-white hover:text-white"
              >
                <span className="relative z-10 inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-white hover:text-white"
              >
                <span className="relative z-10 inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span>
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-white hover:text-white"
              >
                <span className="relative z-10 inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Email</span>
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              </a>
            </div>

            <div className="mt-10 rounded-xl border border-zinc-800 bg-black/50 p-5">
              <h4 className="font-medium">Currently</h4>
              <p className="mt-2 text-sm text-zinc-400">Exploring motion systems, shader-based ribbons, and playful web tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
