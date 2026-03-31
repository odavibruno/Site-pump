import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Testimonial(){
  return (
    <section id="testimonials" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:"-100px" }}
          transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
          className="text-center mb-12"
        >
          <h2 className="mb-6">Depoimento Pump</h2>
          <p className="max-w-3xl mx-auto text-text-secondary">
            “A Pump elevou nossa presença digital a outro nível. O site ficou extremamente moderno,
            rápido e visualmente impecável — sem precisar contratar equipe interna.”
          </p>
          <p className="mt-4 text-text-dim">— Nome do cliente</p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, scale:0.95 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true, margin:"-100px" }}
          transition={{ duration:0.8, delay:0.2, ease:[0.22,1,0.36,1] }}
          className="glass-tech rounded-3xl overflow-hidden max-w-4xl mx-auto"
        >
          <div className="relative w-full h-64">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1517519014922-8fc37b8c5d7f?q=80&w=1600&auto=format&fit=crop"
              alt="Cliente satisfeito"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}