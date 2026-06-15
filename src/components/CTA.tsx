'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-kk-surface relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,168,75,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kk-gold/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-kk-gold/30 to-transparent" />

      <div className="container-kk relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label justify-center mb-8"
        >
          <span className="w-8 h-px bg-kk-gold" />
          Ready to Soar?
          <span className="w-8 h-px bg-kk-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-[clamp(2.8rem,6vw,7rem)] leading-[0.92] tracking-[-0.025em] text-kk-ink mb-6 max-w-4xl mx-auto"
        >
          Let&apos;s build something{' '}
          <span className="italic text-kk-gold">extraordinary</span>
          {' '}together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-kk-muted text-sm lg:text-base mb-12 max-w-sm mx-auto leading-relaxed"
        >
          We take on a select number of projects each quarter. Book a discovery call to see if we&apos;re the right fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="mailto:hello@keysandkites.com" className="btn-gold text-base px-8 py-4">
            Book a Discovery Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="mailto:hello@keysandkites.com" className="btn-ghost text-base px-8 py-4">
            hello@keysandkites.com
          </a>
        </motion.div>

        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-16"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-kk-gold/30"
              style={{
                width: i === 2 ? 6 : i === 1 || i === 3 ? 4 : 3,
                height: i === 2 ? 6 : i === 1 || i === 3 ? 4 : 3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
