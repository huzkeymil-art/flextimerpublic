'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Messaging & Positioning',
    short: 'Make the complex make sense.',
    desc: 'We find the one true thing your category has been missing and build the language around it — positioning, narrative and messaging architecture that turns complicated B2B offerings into something a buyer can repeat to their boss.',
    tags: ['Positioning', 'Narrative', 'Messaging Architecture', 'Value Props'],
  },
  {
    num: '02',
    title: 'Websites',
    short: 'The hardest-working asset you own.',
    desc: 'B2B sites designed and built to carry the launch — clear story, real content, and a CMS your team can actually run. Designed to be read by a distracted buyer and a procurement committee alike.',
    tags: ['Web Design', 'Content', 'CMS Build', 'UX'],
  },
  {
    num: '03',
    title: 'Digital Marketing',
    short: 'Reach the buyers who matter.',
    desc: 'Campaigns, content and tools that connect with buyers and arm sales teams — built to drive pipeline, not just impressions. Print, digital, video, web and social, working as one system.',
    tags: ['Demand', 'Campaigns', 'Content', 'Sales Enablement'],
  },
  {
    num: '04',
    title: 'Launch Strategy',
    short: 'Strategy, creative and execution, together.',
    desc: 'From early-stage workshops and market research through branding, launch planning and full creative execution — the entire launch cycle under one roof, so nothing gets lost between strategy and the work that ships.',
    tags: ['Workshops', 'Research', 'Branding', 'Launch Plans'],
  },
]

export default function Services() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section id="services" className="py-28 lg:py-36 bg-kk-sand">
      <div className="container-kk">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-14">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-5"
            >
              <span className="w-8 h-px bg-kk-clay" />
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-[clamp(2.4rem,5vw,4.6rem)] font-semibold"
            >
              Built for the<br />
              <span className="italic text-kk-clay">whole launch</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-kk-graphite text-sm lg:text-base max-w-xs leading-relaxed"
          >
            Most agencies hand you off between strategy and execution. We don&apos;t. One team carries the
            idea from whiteboard to market.
          </motion.p>
        </div>

        <div className="border-t border-kk-line">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-b border-kk-line"
            >
              <button
                className="w-full text-left py-7 lg:py-8 group"
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
              >
                <div className="flex items-center gap-5 lg:gap-10">
                  <span className="font-display text-kk-faint text-sm font-semibold tabular-nums w-7 shrink-0">
                    {svc.num}
                  </span>
                  <div className="flex-1 flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-8">
                    <h3 className="font-display text-kk-ink text-2xl lg:text-[2rem] font-semibold group-hover:text-kk-clay transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-kk-muted text-sm hidden lg:block">{svc.short}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-9 h-9 rounded-full border border-kk-ink/15 group-hover:border-kk-clay flex items-center justify-center shrink-0 text-kk-ink group-hover:text-kk-clay transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 pb-2 pl-12 lg:pl-[4.5rem] max-w-2xl">
                        <p className="text-kk-graphite text-sm lg:text-base leading-relaxed mb-5">{svc.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {svc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-kk-clay-deep border border-kk-clay/30 bg-kk-paper px-3 py-1 rounded-full tracking-wide"
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
