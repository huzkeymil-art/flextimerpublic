'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    id: '01',
    client: 'Saba',
    category: 'Brand Launch · Identity · Film',
    headline: 'A new visual identity for the future of work',
    body: 'We took Saba off the page with a launch film, fresh visual identity and the “work like you” platform — giving their point of view on the future of Workforce & Talent Management a voice the market could feel.',
    tag: 'Strategy → Execution',
    bg: 'bg-kk-sand-deep',
    bar: '#C2613A',
  },
  {
    id: '02',
    client: 'Cox Automotive',
    category: 'Campaign · Event · Activation',
    headline: '“Find It. Floor It. Ship It.” at NIADA 2025',
    body: 'A trade-show campaign built to pull dealers to the Cox Automotive booth — showing how their brands work together across inventory, financing and transportation, in language a busy dealer reads in three seconds.',
    tag: 'Creative + Activation',
    bg: 'bg-kk-sand',
    bar: '#C2924E',
  },
  {
    id: '03',
    client: 'Spireon / LoJack',
    category: 'Rebrand · Repositioning',
    headline: 'From theft deterrent to the connected car',
    body: 'When Spireon acquired LoJack, we rebuilt one of the most recognized names in automotive — a new identity system, ad campaign and point-of-purchase, repositioning LoJack from theft deterrent to a complete smart-car solution.',
    tag: 'Messaging & Positioning',
    bg: 'bg-kk-sand-deep',
    bar: '#A1492A',
  },
]

function CaseRow({ data, index }: { data: (typeof cases)[number]; index: number }) {
  const [hover, setHover] = useState(false)
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-2xl border border-kk-line ${data.bg} p-7 lg:p-10 overflow-hidden`}
    >
      <span
        className="absolute left-0 top-0 bottom-0 w-1 origin-top transition-transform duration-500"
        style={{ background: data.bar, transform: hover ? 'scaleY(1)' : 'scaleY(0.18)' }}
      />
      <div className="lg:col-span-1">
        <span className="font-display text-kk-faint text-2xl font-semibold tabular-nums">{data.id}</span>
      </div>
      <div className="lg:col-span-4">
        <p className="font-display text-kk-ink text-2xl lg:text-3xl font-semibold mb-1">{data.client}</p>
        <p className="text-kk-muted text-xs tracking-wider uppercase">{data.category}</p>
      </div>
      <div className="lg:col-span-6">
        <h3 className="text-kk-ink text-lg lg:text-xl font-medium mb-3 leading-snug">{data.headline}</h3>
        <p className="text-kk-graphite text-sm leading-relaxed mb-4">{data.body}</p>
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide"
          style={{ color: data.bar }}
        >
          <span className="w-4 h-px" style={{ background: data.bar }} />
          {data.tag}
        </span>
      </div>
      <div className="lg:col-span-1 flex lg:justify-end">
        <motion.div
          animate={{ x: hover ? 4 : 0, opacity: hover ? 1 : 0.4 }}
          className="w-10 h-10 rounded-full border border-kk-ink/20 flex items-center justify-center"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kk-ink" />
          </svg>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function HowWeHelped() {
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
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-kk-graphite text-sm lg:text-base max-w-sm leading-relaxed"
          >
            A few launches we&apos;re proud of — across industrial, automotive and enterprise software.
            Different markets, one job: make the new idea impossible to overlook.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {cases.map((c, i) => (
            <CaseRow key={c.id} data={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
