'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cases } from '@/lib/cases'

export default function WorkGrid() {
  return (
    <section className="py-16 lg:py-24 bg-kk-bg">
      <div className="container-kk">
        <div className="flex flex-col gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${c.slug}`}
                className="group block rounded-2xl overflow-hidden border border-kk-line hover:border-kk-clay/40 transition-all duration-400 bg-kk-paper shadow-sm hover:shadow-md"
              >
                {/* Colour bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${c.bgClass}`} />

                <div className="p-8 lg:p-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-display text-kk-faint text-3xl font-bold tabular-nums">0{i + 1}</span>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="font-display text-kk-ink text-2xl lg:text-3xl font-semibold mb-2 leading-tight">
                      {c.client}
                    </p>
                    <p className="text-kk-muted text-xs tracking-widest uppercase mb-4">{c.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.services.map((s) => (
                        <span key={s} className="text-[11px] text-kk-graphite border border-kk-line px-2.5 py-0.5 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <h2 className="font-display text-kk-ink text-xl lg:text-2xl font-semibold mb-4 leading-snug group-hover:text-kk-clay transition-colors duration-300">
                      {c.headline}
                    </h2>
                    <p className="text-kk-graphite text-sm leading-relaxed mb-6 line-clamp-3">
                      {c.challenge}
                    </p>
                    <span className="inline-flex items-center gap-2 text-kk-clay text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      Read the full story
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Clients sidebar note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-kk-line"
        >
          <p className="eyebrow mb-4">
            <span className="w-6 h-px bg-kk-clay" />
            Also worked with
          </p>
          <p className="text-kk-graphite text-base lg:text-lg max-w-3xl leading-relaxed">
            GE, Siemens, Chevron, Abbott, Optum (formerly Catamaran), Rockwell Automation,
            Zekelman Industries and other leading B2B brands across industrial, healthcare, energy and
            enterprise software sectors.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
