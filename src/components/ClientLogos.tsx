'use client'

import { motion } from 'framer-motion'

const clients = [
  'GE',
  'Siemens',
  'Chevron',
  'Abbott',
  'Cox Automotive',
  'Optum',
  'Rockwell Automation',
  'Zekelman Industries',
  'Saba',
  'Spireon',
]

// Duplicate so the -50% translate loops seamlessly.
const marquee = [...clients, ...clients]

const EASE = [0.22, 1, 0.36, 1] as const

export default function ClientLogos() {
  return (
    <section className="bg-kk-sand py-20 lg:py-24 overflow-hidden">
      <div className="container-kk">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center text-kk-muted text-[11px] font-semibold tracking-[0.22em] uppercase"
        >
          Partners to category-defining B2B brands
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative mt-12"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-kk-sand to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-kk-sand to-transparent" />

        <motion.div
          className="flex w-max items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {marquee.map((name, i) => (
            <div key={`${name}-${i}`} className="flex items-center flex-shrink-0">
              <span className="font-display text-xl md:text-2xl text-kk-graphite tracking-[-0.01em] px-8 md:px-10 whitespace-nowrap">
                {name}
              </span>
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-kk-clay/60"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
