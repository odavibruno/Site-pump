import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { GlowOrb } from './GlowOrb';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 bg-dark-surface relative overflow-hidden">
      <GlowOrb 
        size={500} 
        color="#f4b41a" 
        opacity={0.06}
        className="top-1/2 right-0 translate-x-1/2"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-tech rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-accent-yellow" />
            <span className="text-sm text-text-secondary">Vamos conversar</span>
          </div>
          
          <h2 className="mb-6">Eleve sua presença digital com a Pump.</h2>
          <p className="max-w-4xl mx-auto text-text-secondary text-lg mb-10">
            Estamos prontos para transformar a sua marca com tecnologia, design moderno e experiências fluídas.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#contact" className="px-8 py-4 bg-accent-yellow text-dark-bg rounded-xl hover:scale-105 transition">Fale com a Pump</a>
            <a href="#contact" className="px-8 py-4 glass-tech rounded-xl hover:glass-tech-hover transition">Começar agora</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-tech p-10 rounded-3xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-text-secondary">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow/50 transition-all text-text-primary placeholder:text-text-dim"
                  placeholder="João Silva"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-text-secondary">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow/50 transition-all text-text-primary placeholder:text-text-dim"
                  placeholder="joao@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm mb-2 text-text-secondary">
                Empresa (opcional)
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-5 py-4 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow/50 transition-all text-text-primary placeholder:text-text-dim"
                placeholder="Sua empresa"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-text-secondary">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-5 py-4 bg-dark-elevated border border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-accent-yellow/50 transition-all resize-none text-text-primary placeholder:text-text-dim"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>

            <button
              type="submit"
              className="group w-full px-8 py-5 bg-accent-yellow text-dark-bg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow-bright to-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enviar mensagem
                <Send className="w-5 h-5" />
              </span>
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-dark-border text-center">
            <p className="text-text-secondary mb-4">Ou envie um e-mail direto para:</p>
            <a 
              href="mailto:contato@pumpsites.com.br"
              className="inline-flex items-center gap-2 text-accent-yellow hover:text-accent-yellow-bright transition-colors text-lg"
            >
              <Mail className="w-5 h-5" />
              contato@pumpsites.com.br
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
