import { motion } from 'framer-motion';
import pumpLogo from '@/assets/branca.png';

export function WaitingPage() {
  const startDate = new Date("2026-04-01T00:00:00").getTime();
  const targetDate = new Date("2026-04-27T00:00:00").getTime();
  const today = new Date();
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.max(1, Math.floor((targetDate - startDate) / msPerDay) + 1);
  const elapsedDays = now < startDate ? 0 : Math.min(totalDays, Math.floor((now - startDate) / msPerDay) + 1);
  const currentProgress = (elapsedDays / totalDays) * 100;

  return (
    <main
      className="relative z-10 flex flex-col items-center justify-center bg-transparent text-center px-6"
      style={{ minHeight: '100vh', width: '100vw' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center"
        style={{ gap: 'clamp(2rem, 4vw, 3rem)' }}
      >
        <img
          src={pumpLogo}
          alt="Pump"
          className="h-auto brightness-0 invert border-none outline-none"
          style={{ width: 'clamp(2.5rem, 4vw, 3.5rem)', border: 'none', outline: 'none' }}
          loading="eager"
        />
        <p
          className="font-heading uppercase"
          style={{
            fontFamily: "'Syne', sans-serif",
            letterSpacing: '0.4em',
            fontSize: '10px',
            color: 'rgb(255 255 255 / 0.7)',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          RESSIGNIFICAR, TRANSICIONAR E POTENCIALIZAR.
        </p>
        <p
          className="font-sans"
          style={{
            marginTop: '1rem',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgb(255 255 255 / 0.7)',
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          27/04
        </p>
        <div className="relative w-64 h-8 mt-12 bg-white/5 border border-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full overflow-hidden rounded-full shadow-[0_0_15px_rgba(168,40,194,0.6)] z-10"
            style={{ backgroundColor: '#FFFFFF' }}
            initial={{ width: "0%" }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#a828c2] to-transparent opacity-80 blur-sm"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
