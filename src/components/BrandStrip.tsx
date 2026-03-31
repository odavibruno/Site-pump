import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

type Logo = { src: string; alt: string };

export function BrandStrip({ logos = [] }: { logos?: Logo[] }){
  if (!logos.length) return null;
  return (
    <div className="marquee">
      <div className="marquee-track gap-16 items-center">
        {[...logos, ...logos].map((logo, i)=> {
          const isWide = /virtua|vita/i.test(logo.alt);
          const style: React.CSSProperties = {
            height: isWide ? '56px' : '48px',
            width: 'auto',
            maxWidth: isWide ? '180px' : '160px',
          };
          return (
            <motion.div key={`${logo.alt}-${i}`} className="px-4 flex items-center justify-center">
              <ImageWithFallback
                src={logo.src}
                alt={logo.alt}
                className="block object-contain"
                style={style}
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}