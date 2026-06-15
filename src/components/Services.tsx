'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Brand Strategy',
    short: 'Position your brand for dominance.',
    desc: 'We build the strategic foundation beneath every great brand—defining positioning, voice, archetypes, and the story that makes audiences choose you without hesitation.',
    tags: ['Positioning', 'Narrative', 'Competitive Analysis', 'Brand Architecture'],
  },
  {
    num: '02',
    title: 'Creative Direction',
    short: 'Visuals that command attention.',
    desc: "From art direction to full campaign concepting, we shape the visual and conceptual language of your brand. Every asset is crafted to be unmistakably, undeniably yours.",
    tags: ['Art Direction', 'Concepts', 'Visual Identity', 'Photography'],
  },
  {
    num: '03',
    title: 'Digital Experience',
    short: 'Interfaces that convert and captivate.',
    desc: 'Premium websites and digital products that combine cinematic aesthetics with conversion science. We design and build experiences that close the gap between inspiration and action.',
    tags: ['Web Design', 'Development', 'UX Strategy', 'Motion Design'],
  },
  {
    num: '04',
    title: 'Market Growth',
    short: 'Expand your reach, amplify results.',
    desc: 'Data-driven growth strategy married to creative execution. We identify high-leverage channels, build audiences that compound, and turn brand momentum into measurable revenue.',
    tags: ['Growth Strategy', 'Paid Media', 'Analytics', 'Content Systems'],
  },
]

export default function Services() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="services" className="py-32 lg:py-40 bg-kk-surface">
      <div className="container-kk">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label mb-5"
            >
              <span className="w-8 h-px bg-kk-gold" />
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-[clamp(2.5rem,5vw,5rem)]"
            >
              Four ways we<br />
              <span className="italic text-kk-gold">unlock growth</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-kk-muted text-sm lg:text-base max-w-xs leading-relaxed font-light"
          >
            Each engagement is a bespoke collaboration — built around your specific market, audience, and ambition.
          </motion.p>
        </div>

        {/* Service list */}
        <div className="divide-y divide-white/[0.06]">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <button
                className="w-full text-left py-8 group"
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex items-center gap-6 lg:gap-10">
                  <span className="font-display text-kk-dim text-sm font-bold tabular-nums w-8 shrink-0">
                    {svc.num}
                  </span>

                  <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
                    <h3 className="font-display text-kk-ink text-2xl lg:text-3xl font-bold group-hover:text-kk-gold transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-kk-dim text-sm lg:text-base hidden lg:block">{svc.short}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full border border-white/15 group-hover:border-kk-gold/50 flex items-center justify-center transition-colors duration-300 shrink-0"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 pl-14 lg:pl-[4.5rem]">
                        <p className="text-kk-muted text-sm lg:text-base leading-relaxed max-w-2xl mb-5">
                          {svc.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {svc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-kk-gold border border-kk-gold/25 px-3 py-1 rounded-full tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
