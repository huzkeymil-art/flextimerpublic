'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: 150, suffix: '+', label: 'Brands Elevated', desc: 'From startups to Fortune 500' },
  { number: 8, suffix: ' Yrs', label: 'Years of Craft', desc: 'Founded in 2018' },
  { number: 2, suffix: 'B+', prefix: '$', label: 'Revenue Generated', desc: 'Across our client portfolio' },
  { number: 47, suffix: '+', label: 'Global Awards', desc: 'Cannes, D&AD, Webby, and more' },
]

function CountUp({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = to / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, to])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-kk-bg border-y border-white/[0.05]">
      <div className="container-kk">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-kk-gold leading-none tracking-tight">
                <CountUp to={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-kk-ink text-sm font-semibold tracking-wide">{stat.label}</p>
              <p className="text-kk-dim text-xs">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
