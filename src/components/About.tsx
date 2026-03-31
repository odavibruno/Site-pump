import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GlowOrb } from './GlowOrb';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Desenvolvimento ágil e iterativo',
  'Comunicação transparente e frequente',
  'Código documentado e escalável',
  'Suporte técnico contínuo'
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section id="about" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <GlowOrb 
        size={400} 
        color="#f4b41a" 
        opacity={0.05}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdGVjaCUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzYzNzg2Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology workspace"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -right-8 glass-tech p-8 rounded-2xl glow-yellow"
            >
              <h3 className="text-accent-yellow mb-2">5+ anos</h3>
              <p className="text-text-secondary">de experiência</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-tech rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
              <span className="text-sm text-text-secondary">Introduzindo a Pump</span>
            </div>

            <motion.h2 style={{ y: titleY }} className="mb-4">
              Sabemos como o digital funciona.
            </motion.h2>
            <p className="text-text-secondary text-lg mb-8">
              Seu negócio precisa de presença, velocidade e experiência — e criar isso internamente pode ser caro, demorado e improdutivo.
            </p>
            
            <div className="space-y-6 text-text-secondary text-lg mb-10">
              <p>
                É aqui que a Pump entra: design moderno, tecnologia precisa e interfaces fluídas, entregues de forma rápida e acessível.
              </p>
              <p>
                Utilizamos tecnologias modernas com foco em clean code, arquitetura escalável e experiência do usuário excepcional.
                Cada detalhe é pensado para performance, manutenibilidade e crescimento.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="flex items-center justify-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent-yellow flex-shrink-0" />
                  <span className="text-text-secondary">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
