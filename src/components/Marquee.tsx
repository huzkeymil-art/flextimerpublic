'use client'

import { motion } from 'framer-motion'

const items = [
  'Brand Strategy',
  '★',
  'Creative Direction',
  '★',
  'Digital Experience',
  '★',
  'Market Positioning',
  '★',
  'Brand Identity',
  '★',
  'Campaign Design',
  '★',
  'Content Strategy',
  '★',
  'Visual Systems',
  '★',
]

const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="relative py-5 bg-kk-gold overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-kk-bg font-sans text-sm font-semibold tracking-[0.12em] uppercase flex-shrink-0 ${
              item === '★' ? 'text-kk-bg/40 text-xs' : ''
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
