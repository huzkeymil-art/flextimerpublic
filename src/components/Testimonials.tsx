'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote:
      "Keys & Kites didn't just rebrand us—they fundamentally changed how the market sees us. Within six months of launch we were being quoted in Vogue Business, fielding acquisition offers, and our conversion rate had tripled.",
    name: 'Céline Marais',
    role: 'CEO & Founder',
    company: 'Aurum Collective',
    initial: 'C',
  },
  {
    quote:
      "Working with K&K is like having the sharpest creative minds in the room—constantly. They pushed us past every safe choice. The result was a campaign that made our competitors nervous and our investors ecstatic.",
    name: 'James Thornton',
    role: 'Chief Marketing Officer',
    company: 'Vela Ventures',
    initial: 'J',
  },
  {
    quote:
      "Our website used to be a brochure. Now it's our best salesperson. Keys & Kites built something that genuinely feels like luxury—and delivers like a machine.",
    name: 'Sofia Andrade',
    role: 'Director of Brand',
    company: 'Maison Soleil',
    initial: 'S',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-32 lg:py-44 bg-kk-bg">
      <div className="container-kk">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label mb-5"
            >
              <span className="w-8 h-px bg-kk-gold" />
              Client Stories
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-[clamp(2.5rem,5vw,5rem)]"
            >
              What our<br />
              <span className="italic text-kk-gold">clients say</span>
            </motion.h2>
          </div>

          {/* Selector dots */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active ? 'w-8 h-2 bg-kk-gold' : 'w-2 h-2 bg-kk-dim hover:bg-kk-muted'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial display */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-kk-card border border-white/[0.06] rounded-2xl p-10 lg:p-14"
            >
              {/* Quote mark */}
              <div
                className="font-display text-[5rem] leading-none text-kk-gold/25 mb-6 font-bold select-none"
                aria-hidden
              >
                "
              </div>

              <blockquote className="font-display text-kk-ink text-xl lg:text-2xl xl:text-3xl font-medium leading-[1.4] tracking-[-0.01em] mb-10 max-w-4xl">
                {testimonials[active].quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-kk-gold/20 border border-kk-gold/30 flex items-center justify-center">
                  <span className="font-display font-bold text-kk-gold text-sm">
                    {testimonials[active].initial}
                  </span>
                </div>
                <div>
                  <p className="text-kk-ink font-semibold text-sm">{testimonials[active].name}</p>
                  <p className="text-kk-muted text-xs mt-0.5">
                    {testimonials[active].role} · {testimonials[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="w-10 h-10 rounded-full border border-white/15 hover:border-kk-gold/50 flex items-center justify-center transition-colors duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:text-kk-gold transition-colors">
              <path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="w-10 h-10 rounded-full border border-white/15 hover:border-kk-gold/50 flex items-center justify-center transition-colors duration-300 group"
            aria-label="Next testimonial"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:text-kk-gold transition-colors">
              <path d="M5.5 2.5L10 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
