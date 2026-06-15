'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    k: 'We only do B2B launches',
    v: 'No consumer side hustle, no “full-service” sprawl. Every workshop, hire and habit at Keys & Kites is tuned to one thing: getting a new B2B idea into market and making it land.',
  },
  {
    k: 'Strategy and execution never get handed off',
    v: 'The team that finds the positioning is the team that ships the campaign. Nothing gets lost in translation between the deck and the work, because it is the same people the whole way through.',
  },
  {
    k: 'We have done it with the hard ones',
    v: 'GE, Siemens, Chevron, Abbott, Cox Automotive, Rockwell Automation, Zekelman. Regulated, technical, committee-driven categories where “make it simple” is the hardest brief there is.',
  },
  {
    k: 'Rich simplicity is a craft, not a slogan',
    v: 'We are unusually good at taking something genuinely complicated and making a buyer get it in one read. That is the whole job, and it is the thing clients come back for.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-28 lg:py-36 bg-kk-sand-deep">
      <div className="container-kk">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-5"
            >
              <span className="w-8 h-px bg-kk-clay" />
              Why Keys &amp; Kites
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-[clamp(2.2rem,4.5vw,4rem)] font-semibold mb-6 lg:sticky lg:top-28"
            >
              Why teams pick<br />us for the<br /><span className="italic text-kk-clay">hard launches</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {reasons.map((r, i) => (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-[auto_1fr] gap-5 lg:gap-8 py-8 border-b border-kk-line first:pt-0"
              >
                <span className="font-display text-kk-clay/50 text-xl font-semibold tabular-nums pt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-kk-ink text-xl lg:text-2xl font-semibold mb-3 leading-snug">
                    {r.k}
                  </h3>
                  <p className="text-kk-graphite text-sm lg:text-base leading-relaxed max-w-xl">{r.v}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
