'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cases } from '@/lib/cases'

export default function WorkPreview() {
  return (
    <section id="work" className="py-28 lg:py-36 bg-kk-bg">
      <div className="container-kk">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-5"
            >
              <span className="w-8 h-px bg-kk-clay" />
              Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-[clamp(2.4rem,5vw,4.6rem)] font-semibold"
            >
              How we&apos;ve <span className="italic text-kk-clay">helped</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/work" className="btn-outline text-sm">
              All case studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${c.slug}`}
                className="group grid lg:grid-cols-12 gap-5 lg:gap-10 items-center rounded-2xl border border-kk-line bg-kk-sand px-7 py-7 lg:px-10 lg:py-8 hover:border-kk-clay/40 hover:bg-kk-sand-deep transition-all duration-300 block"
              >
                <div className="lg:col-span-1">
                  <span className="font-display text-kk-faint text-2xl font-semibold tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-display text-kk-ink text-xl lg:text-2xl font-semibold">{c.client}</p>
                  <p className="text-kk-muted text-xs tracking-wider uppercase mt-1">{c.industry}</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-kk-ink text-base lg:text-lg font-medium leading-snug mb-2">{c.headline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {c.services.slice(0, 3).map((s) => (
                      <span key={s} className="text-[11px] text-kk-graphite bg-kk-paper border border-kk-line px-2.5 py-0.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-kk-clay text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Read the story
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
