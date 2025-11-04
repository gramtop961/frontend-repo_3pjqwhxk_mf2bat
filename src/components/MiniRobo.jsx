import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// mini robo: follows cursor with slight offset, eyes track, shows pressed key
export default function MiniRobo() {
  const ref = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const timeoutRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [typing, setTyping] = useState(false);
  const [bubble, setBubble] = useState('');

  useEffect(() => {
    let raf;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: target.x, y: target.y };

    const setFromEvent = (x, y) => {
      target.x = x + 24; // slight lead so it doesn't sit directly under the cursor
      target.y = y + 24;
      setVisible(true);
    };

    const onPointerMove = (e) => setFromEvent(e.clientX, e.clientY);
    const onMouseMove = (e) => setFromEvent(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      setFromEvent(t.clientX, t.clientY);
    };
    const onLeave = () => setVisible(false);

    const loop = () => {
      // smooth follow
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      // eyes track toward target
      const dx = target.x - pos.x;
      const dy = target.y - pos.y;
      const angle = Math.atan2(dy, dx);
      const r = 4; // pupil radius travel
      const ox = Math.cos(angle) * r;
      const oy = Math.sin(angle) * r;
      if (leftEyeRef.current) leftEyeRef.current.style.transform = `translate(${ox}px, ${oy}px)`;
      if (rightEyeRef.current) rightEyeRef.current.style.transform = `translate(${ox}px, ${oy}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key : e.key.toLowerCase();
      setBubble(key);
      setTyping(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setTyping(false), 180);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-40"
      style={{ transform: 'translate3d(-9999px,-9999px,0)' }}
      ref={ref}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="relative"
          >
            {/* key bubble */}
            <AnimatePresence>
              {bubble && (
                <motion.div
                  key={bubble + String(typing)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-black/70 px-2 py-0.5 text-[10px] leading-4 text-white/90 backdrop-blur"
                >
                  {bubble}
                </motion.div>
              )}
            </AnimatePresence>

            {/* body */}
            <div className="grid place-items-center">
              <div className="w-[86px] rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                {/* head */}
                <div className="mx-auto h-8 w-12 rounded-xl border border-white/10 bg-gradient-to-b from-white/20 to-white/5 relative">
                  <div className="absolute left-1/2 top-1/2 grid w-10 -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-2">
                    <div className="relative h-3 w-3 rounded-full bg-white/20">
                      <div
                        ref={leftEyeRef}
                        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                      />
                    </div>
                    <div className="relative h-3 w-3 rounded-full bg-white/20">
                      <div
                        ref={rightEyeRef}
                        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                      />
                    </div>
                  </div>
                </div>

                {/* arms typing indicator */}
                <div className="mt-1 flex items-center justify-center gap-3">
                  <motion.div animate={{ y: typing ? [0, 1.5, 0] : 0 }} transition={{ duration: 0.18 }} className="h-1 w-6 rounded bg-white/20" />
                  <motion.div animate={{ y: typing ? [0, 1.5, 0] : 0 }} transition={{ duration: 0.18 }} className="h-1 w-6 rounded bg-white/20" />
                </div>

                {/* keyboard */}
                <div className="mt-2 rounded-lg border border-white/10 bg-black/40 p-1">
                  <div className="grid grid-cols-6 gap-0.5">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: typing ? [0.4, 1, 0.4] : 0.4 }}
                        transition={{ duration: 0.18, delay: (i % 6) * 0.01 }}
                        className="h-2 w-3 rounded-sm bg-white/30"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
