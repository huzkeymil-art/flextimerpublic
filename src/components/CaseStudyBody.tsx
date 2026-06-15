'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/lib/cases'
import { cases } from '@/lib/cases'

export default function CaseStudyBody({ caseStudy: c }: { caseStudy: CaseStudy }) {
  const others = cases.filter((x) => x.slug !== c.slug).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${c.bgClass} opacity-[0.06]`} />
        <div className="container-kk relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-kk-muted text-sm hover:text-kk-ink transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11.5 7h-9M5 3.5 1.5 7 5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All work
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            <span className="w-8 h-px bg-kk-clay" />
            {c.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold text-[clamp(2.4rem,5.5vw,6rem)] leading-[0.96] tracking-[-0.025em] text-kk-ink mb-6 max-w-5xl"
          >
            {c.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-kk-graphite text-base lg:text-xl max-w-2xl leading-relaxed"
          >
            {c.subhead}
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-kk-line"
          >
            <div>
              <p className="text-kk-faint text-xs tracking-widest uppercase mb-1">Client</p>
              <p className="text-kk-ink font-semibold">{c.client}</p>
            </div>
            <div>
              <p className="text-kk-faint text-xs tracking-widest uppercase mb-1">Industry</p>
              <p className="text-kk-ink font-semibold">{c.industry}</p>
            </div>
            <div>
              <p className="text-kk-faint text-xs tracking-widest uppercase mb-1">Services</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {c.services.map((s) => (
                  <span key={s} className="text-[11px] text-kk-graphite border border-kk-line bg-kk-paper px-2.5 py-0.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 lg:py-28 bg-kk-sand">
        <div className="container-kk">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">
                <span className="w-6 h-px bg-kk-clay" />
                The Challenge
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-display text-kk-ink text-xl lg:text-2xl font-medium leading-[1.45] tracking-[-0.01em]">
                {c.challenge}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-28 bg-kk-bg">
        <div className="container-kk">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-16"
          >
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <p className="eyebrow mb-4">
                <span className="w-6 h-px bg-kk-clay" />
                What We Did
              </p>
              <p className="text-kk-muted text-sm leading-relaxed">
                Strategy through execution — no hand-off between the team that found the positioning
                and the team that shipped the work.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ol className="flex flex-col gap-0 divide-y divide-kk-line">
                {c.approach.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex gap-6 py-7"
                  >
                    <span className="font-display text-kk-clay/40 text-xl font-bold tabular-nums w-7 shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-kk-graphite text-base lg:text-lg leading-relaxed">{step}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 lg:py-28 bg-kk-sand-deep">
        <div className="container-kk">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow mb-8">
              <span className="w-6 h-px bg-kk-clay" />
              The Result
            </p>
            <p className="font-display text-kk-ink text-2xl lg:text-4xl font-semibold leading-[1.2] tracking-[-0.02em] max-w-4xl">
              {c.result}
            </p>
          </motion.div>
        </div>
      </section>

      {/* More work */}
      {others.length > 0 && (
        <section className="py-20 lg:py-28 bg-kk-bg border-t border-kk-line">
          <div className="container-kk">
            <p className="eyebrow mb-10">
              <span className="w-6 h-px bg-kk-clay" />
              More work
            </p>
            <div className="grid lg:grid-cols-2 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/work/${o.slug}`}
                  className="group block rounded-xl border border-kk-line bg-kk-paper p-8 hover:border-kk-clay/40 hover:shadow-sm transition-all duration-300"
                >
                  <p className="text-kk-muted text-xs tracking-widest uppercase mb-2">{o.category}</p>
                  <h3 className="font-display text-kk-ink text-xl font-semibold mb-3 group-hover:text-kk-clay transition-colors leading-snug">
                    {o.client}
                  </h3>
                  <p className="text-kk-graphite text-sm leading-relaxed line-clamp-2">{o.headline}</p>
                  <span className="inline-flex items-center gap-2 text-kk-clay text-sm font-medium mt-4 group-hover:gap-3 transition-all duration-300">
                    Read story
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
