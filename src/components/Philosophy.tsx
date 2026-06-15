'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const words = [
  { t: 'We', a: false },
  { t: 'turn', a: false },
  { t: 'complexity', a: true },
  { t: 'into', a: false },
  { t: 'clarity', a: true },
  { t: '—', a: false },
  { t: 'without', a: false },
  { t: 'losing', a: false },
  { t: 'what', a: false },
  { t: 'made', a: false },
  { t: 'it', a: false },
  { t: 'matter.', a: false },
]

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="about" ref={ref} className="py-32 lg:py-44 bg-kk-bg relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(194,97,58,0.07) 0%, transparent 70%)' }}
      />

      <div className="container-kk relative z-10">
        <motion.div style={{ y }}>
          <div className="eyebrow mb-10">
            <span className="w-8 h-px bg-kk-clay" />
            Our Philosophy — Rich Simplicity
          </div>

          <p className="font-display font-semibold text-[clamp(2.3rem,5.5vw,5.6rem)] leading-[1.02] tracking-[-0.02em] mb-16 max-w-5xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.12 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`inline-block mr-[0.22em] ${w.a ? 'italic text-kk-clay' : 'text-kk-ink'}`}
              >
                {w.t}
              </motion.span>
            ))}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-12 border-t border-kk-line"
          >
            <p className="text-kk-graphite text-sm lg:text-base leading-relaxed col-span-2 max-w-2xl">
              B2B is hard because the truth is complicated — technical buyers, long committees, real
              stakes. Most marketing answers that with more: more features, more jargon, more noise. We
              do the opposite. We call it <span className="text-kk-ink font-medium">rich simplicity</span> —
              the discipline of saying the complicated thing simply, so the right people notice it,
              understand it, and choose it.
            </p>
            <div className="flex flex-col gap-5 lg:items-end lg:text-right">
              <div>
                <p className="text-kk-clay font-display font-semibold text-lg">Tim Cook &amp; Tom Barg</p>
                <p className="text-kk-muted text-xs mt-1">Founding partners</p>
              </div>
              <div>
                <p className="text-kk-clay font-display font-semibold text-lg">Printer&apos;s Row, Chicago</p>
                <p className="text-kk-muted text-xs mt-1">Where the work gets made</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
