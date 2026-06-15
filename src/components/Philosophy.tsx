'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const manifesto = [
  { text: 'Some agencies', italic: false },
  { text: 'make things', italic: false },
  { text: 'pretty.', italic: true },
  { text: 'We make', italic: false },
  { text: 'things', italic: false },
  { text: 'matter.', italic: true },
]

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={ref}
      className="py-36 lg:py-52 bg-kk-surface relative overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,168,75,0.04) 0%, transparent 70%)' }}
      />

      <div className="container-kk relative z-10">
        <motion.div style={{ y, opacity }}>
          {/* Section label */}
          <div className="section-label mb-12">
            <span className="w-8 h-px bg-kk-gold" />
            Our Philosophy
          </div>

          {/* Manifesto */}
          <div className="font-display font-bold text-[clamp(2.8rem,6vw,7rem)] leading-[0.92] tracking-[-0.02em] mb-16">
            {manifesto.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${item.italic ? 'italic text-kk-gold' : 'text-kk-ink'} ${
                  i < manifesto.length - 1 ? 'mr-[0.2em]' : ''
                }`}
              >
                {item.text}
              </motion.span>
            ))}
          </div>

          {/* Supporting content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12 border-t border-white/[0.06]"
          >
            <p className="text-kk-muted text-sm lg:text-base leading-relaxed col-span-2 max-w-xl">
              Keys & Kites was born from a conviction: the world doesn&apos;t need more advertising.
              It needs more truth. We exist to find the authentic core of a brand and make it
              undeniable—through strategy that holds, design that endures, and execution that moves.
            </p>

            <div className="flex flex-col gap-4 lg:items-end lg:text-right">
              <div>
                <p className="text-kk-gold font-display font-bold text-xl">New York · London</p>
                <p className="text-kk-dim text-xs mt-1">Global reach, personal attention</p>
              </div>
              <div>
                <p className="text-kk-gold font-display font-bold text-xl">Est. 2018</p>
                <p className="text-kk-dim text-xs mt-1">8 years of category-defining work</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
