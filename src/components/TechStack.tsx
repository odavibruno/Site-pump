import { motion } from 'motion/react';
import { useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb, Sparkles, Rocket } from 'lucide-react';

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section className="py-32 px-6 bg-dark-surface relative overflow-hidden" id="how">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 style={{ y: titleY }} className="mb-6">Design de alto nível, entregues do jeito certo.</motion.h2>
          <motion.p style={{ y: subtitleY }} className="max-w-4xl mx-auto text-text-secondary text-lg mb-10">Como a Pump trabalha</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Lightbulb, title: 'Conte sua visão', desc: 'Entendemos sua marca, sua necessidade e sua identidade.' },
            { icon: Sparkles, title: 'Criamos o digital perfeito para você', desc: 'Layouts modernos, fluidos e tecnológicos, inspirados em inovação e movimento natural — simbolizado pela borboleta da Pump.' },
            { icon: Rocket, title: 'Entrega + suporte contínuo', desc: 'Lançamos rápido, acompanhamos de perto e ajudamos sua marca a evoluir.' },
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 glass-tech rounded-3xl transition-all duration-500 hover:glass-tech-hover"
              >
                <div className="inline-flex p-4 bg-accent-yellow/10 rounded-2xl mb-6 group-hover:bg-accent-yellow/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent-yellow" />
                </div>
                <h3 className="mb-3 text-2xl">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
