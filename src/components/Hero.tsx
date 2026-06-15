'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const headline1 = ['We', 'elevate']
const headline2 = ['brands', 'that']
const headline3 = ['move', 'the', 'world.']

const allWords = [...headline1, ...headline2, ...headline3]

function WordReveal({ words, delay = 0, italic = false }: { words: string[]; delay?: number; italic?: boolean }) {
  return (
    <span className="block overflow-hidden">
      <span className={`block ${italic ? 'italic text-kk-gold' : ''}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </span>
    </span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.65], [0, -80])
  const scale = useTransform(scrollYProgress, [0, 0.65], [1, 0.96])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient background layers */}
      <div className="absolute inset-0 bg-kk-bg">
        {/* Central warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 60% at 50% 40%, rgba(200,168,75,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Top left orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(200,168,75,0.08) 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
          }}
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Bottom right orb */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(100,60,180,0.05) 0%, transparent 70%)',
            bottom: '5%',
            right: '-5%',
          }}
          animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container-kk pt-32 pb-24"
        style={{ opacity, y, scale }}
      >
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-label mb-10"
        >
          <span className="w-10 h-px bg-kk-gold" />
          Premium Creative Agency · Est. 2018
        </motion.div>

        {/* Headline */}
        <div className="font-display font-bold text-[clamp(3.2rem,7.5vw,8.5rem)] leading-[0.9] tracking-[-0.025em] mb-10">
          <WordReveal words={headline1} delay={0.15} />
          <WordReveal words={headline2} delay={0.25} italic />
          <WordReveal words={headline3} delay={0.38} />
        </div>

        {/* Subtext + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 max-w-5xl"
        >
          <p className="text-kk-muted text-base lg:text-lg max-w-sm font-sans leading-relaxed font-light">
            From bold strategy to cinematic execution—we partner with visionary brands to create
            experiences that define categories.
          </p>

          <div className="flex items-center gap-4">
            <a href="#work" className="btn-gold">
              See Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Start a Project
            </a>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex items-center gap-10 mt-16 pt-8 border-t border-white/[0.06]"
        >
          {[
            { num: '150+', label: 'Brands Elevated' },
            { num: '8', label: 'Years of Craft' },
            { num: '$2B+', label: 'Revenue Generated' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-kk-gold">{stat.num}</span>
              <span className="text-kk-dim text-xs tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-kk-dim text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-14 origin-top"
          style={{ background: 'linear-gradient(to bottom, #C8A84B, transparent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
        />
      </motion.div>
    </section>
  )
}
