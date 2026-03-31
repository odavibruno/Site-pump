import { motion } from 'motion/react';
import { Gauge, Palette, Rocket, Link2, Users, Shield } from 'lucide-react';
import { useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    icon: Gauge,
    title: 'Sites rápidos e modernos',
    description: 'Interfaces construídas com tecnologia atual, performance alta e arquitetura sólida.'
  },
  {
    icon: Palette,
    title: 'Design sob medida',
    description: 'Nada genérico. Cada site é criado com estética própria e alinhamento à identidade da marca.'
  },
  {
    icon: Rocket,
    title: 'Crescimento escalável',
    description: 'Sistemas, páginas e componentes que evoluem junto com o seu negócio.'
  },
  {
    icon: Link2,
    title: 'Integrações inteligentes',
    description: 'Seu site conectado às ferramentas que você já usa.'
  },
  {
    icon: Users,
    title: 'Colaboração em tempo real',
    description: 'Acompanhamento do projeto com feedback ágil e fluxo transparente.'
  },
  {
    icon: Shield,
    title: 'Suporte contínuo',
    description: 'A Pump acompanha e mantém o site sempre atualizado e performando bem.'
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-tech rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <span className="text-sm text-text-secondary">O que fazemos</span>
          </div>
          <motion.h2 style={{ y: titleY }} className="mb-6">
            Resolvemos os desafios do digital com{' '}
            <span className="text-accent-yellow">design inteligente</span>
          </motion.h2>
          <motion.p style={{ y: subtitleY }} className="max-w-4xl mx-auto text-text-secondary text-lg mb-10">
            Stack completa para criar, lançar e escalar produtos digitais que encantam e geram resultados.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative p-8 glass-tech rounded-3xl transition-all duration-500 hover:glass-tech-hover cursor-pointer overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-yellow to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-accent-yellow/10 rounded-2xl mb-6 group-hover:bg-accent-yellow/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent-yellow" />
                  </div>
                  <h3 className="mb-4 text-2xl">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-accent-yellow/30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
