import { motion, useScroll, useTransform } from 'motion/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export function FAQ(){
  const sectionRef = (typeof document !== 'undefined') ? document.createElement('div') : null
  const { scrollYProgress } = useScroll({ target: sectionRef as any, offset: ["start end","end start"] })
  const titleY = useTransform(scrollYProgress, [0,1],[0,20])
  const subtitleY = useTransform(scrollYProgress, [0,1],[0,14])
  return (
    <section id="faqs" className="py-32 px-6 bg-dark-surface relative overflow-hidden">
      <div ref={sectionRef as any} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:"-100px" }}
          transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          className="text-center mb-12"
        >
          <motion.h2 style={{ y: titleY }} className="mb-6">FAQ</motion.h2>
          <motion.p style={{ y: subtitleY }} className="text-text-secondary">Perguntas frequentes sobre a Pump</motion.p>
        </motion.div>

        <Accordion type="single" collapsible className="glass-tech rounded-2xl p-2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Quanto tempo leva para criar um site?</AccordionTrigger>
            <AccordionContent>
              Depende da complexidade, mas a maioria dos projetos é entregue entre 10 e 30 dias.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Vocês criam o design do zero?</AccordionTrigger>
            <AccordionContent>
              Sim. Nada é template. Tudo é 100% original.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Vocês oferecem suporte contínuo?</AccordionTrigger>
            <AccordionContent>
              Sim, mantemos tudo atualizado, seguro e rápido.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>O site é otimizado para performance?</AccordionTrigger>
            <AccordionContent>
              Sempre. Performance e SEO são pilares da Pump.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}