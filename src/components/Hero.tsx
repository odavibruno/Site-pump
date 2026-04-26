import { motion } from 'motion/react';
import { BrandStrip } from './BrandStrip';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-24 md:mt-28 text-white">
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-accent-yellow/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-accent-yellow/10"
          style={{ borderRadius: '30%' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center" style={{ paddingTop: 150 }}>
        

        

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-5xl mx-auto text-center font-heading font-weight-400 text-white"
        >
          Tecnologia, estética e evolução digital.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-12 text-xl text-center font-montserrat text-white"
        >
          Criamos aplicações modernas e inteligentes que unem tecnologia, fluidez e estética.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center"
          style={{ marginBottom: 150 }}
        >
          <motion.a href="#contact" aria-label="Iniciar projeto" className="group relative px-10 py-5 bg-accent-yellow text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow-bright to-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              Iniciar projeto
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-36 md:mt-44 opacity-90 pt-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 glass-tech rounded-full mb-10">
            <img src="/icons/leaf.svg" className="h-4 w-auto flex-shrink-0" alt="" />
              <span className="text-sm text-white whitespace-nowrap">Marcas que confiam</span>
          </div>
          <div style={{ paddingBottom: 150 }}>
            <BrandStrip logos={[
              { src: '/logos/pleno.png', alt: 'Pleno' },
              { src: '/logos/virtua.png', alt: 'Virtua' },
              { src: '/logos/vita.png', alt: 'Vita' },
              { src: '/logos/ypet%20l.png', alt: 'Ypet' },
            ]} />
          </div>
          <div className="mt-0">
            <div className="font-heading font-weight-400 text-center leading-110">
              <span className="block text-46 text-white">Sabemos como o digital funciona.</span>
              <span className="block text-46 text-white">Seu negócio precisa de presença,</span>
              <span className="block text-46 text-white">velocidade e experiência — e criar isso</span>
              <span className="block text-46 text-white">internamente pode ser caro, demorado</span>
              <span className="block text-46 text-white">e improdutivo.</span>
              <span className="block text-46 text-white">É aqui que a Pump entra em cena.</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="glass-tech p-6 rounded-2xl">
            <h3 className="text-white mb-2">200k+</h3>
            <p className="text-sm text-white">Usuários diários</p>
          </div>
          <div className="glass-tech p-6 rounded-2xl">
            <h3 className="text-white mb-2">100+</h3>
            <p className="text-sm text-white">Projetos</p>
          </div>
          <div className="glass-tech p-6 rounded-2xl">
            <h3 className="text-white mb-2">99.9%</h3>
            <p className="text-sm text-white">Uptime</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
