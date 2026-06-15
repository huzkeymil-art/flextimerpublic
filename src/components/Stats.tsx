'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

type Stat =
  | { kind: 'number'; value: number; suffix?: string; label: string }
  | { kind: 'text'; value: string; label: string }

const stats: Stat[] = [
  {
    kind: 'number',
    value: 8,
    suffix: '+',
    label: 'Fortune-class B2B brands launched',
  },
  {
    kind: 'number',
    value: 1,
    label: 'Singular focus: B2B launches',
  },
  {
    kind: 'number',
    value: 3,
    label: 'Disciplines under one roof — Strategy, Creative & Execution',
  },
  {
    kind: 'text',
    value: 'Printer’s Row',
    label: 'Built in downtown Chicago',
  },
]

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let current = 0
    const duration = 1600
    const step = 16
    const increment = to / (duration / step)
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-kk-bg border-y border-kk-line py-20 lg:py-28">
      <div className="container-kk">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="flex flex-col gap-3"
            >
              <div className="font-display font-semibold text-kk-clay leading-none tracking-[-0.02em] text-[clamp(2.75rem,5vw,4.25rem)]">
                {stat.kind === 'number' ? (
                  <CountUp to={stat.value} suffix={stat.suffix} />
                ) : (
                  <span className="text-[clamp(1.75rem,3.2vw,2.75rem)]">{stat.value}</span>
                )}
              </div>
              <p className="text-kk-graphite text-sm leading-snug max-w-[16rem]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
