'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'

const KiteScene = dynamic(() => import('@/components/three/KiteScene'), {
  ssr: false,
  loading: () => null,
})

const line1 = ['We', 'launch', 'B2B', 'ideas']
const line2 = ['the', 'market']
const line3 = ["can't", 'ignore.']

function Reveal({ words, delay = 0, accent = false }: { words: string[]; delay?: number; accent?: boolean }) {
  return (
    <span className="block overflow-hidden">
      <span className={`block ${accent ? 'italic text-kk-clay' : ''}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
  const y = useTransform(scrollYProgress, [0, 1], [0, -70])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Warm ambient wash */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 75% 35%, rgba(194,97,58,0.08) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(28,23,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(28,23,20,0.04) 1px, transparent 1px)',
            backgroundSize: '88px 88px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black, transparent 75%)',
          }}
        />
      </div>

      {/* 3D kite — right side, behind text on mobile */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none lg:pointer-events-auto">
        <KiteScene />
      </div>

      <div className="relative z-10 container-kk pt-32 pb-24 lg:pt-28">
        <motion.div style={{ y, opacity }} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow mb-9"
          >
            <span className="w-9 h-px bg-kk-clay" />
            The Breakthrough B2B Agency · Chicago
          </motion.div>

          <h1 className="font-display font-semibold text-[clamp(2.9rem,7vw,7.5rem)] leading-[0.94] tracking-[-0.025em] text-kk-ink mb-9">
            <Reveal words={line1} delay={0.15} />
            <Reveal words={line2} delay={0.3} />
            <Reveal words={line3} delay={0.42} accent />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12"
          >
            <p className="text-kk-graphite text-base lg:text-lg max-w-md leading-relaxed font-light">
              We help B2B marketers turn new ideas into business value — taking products, services and
              brands off the page, into the market, and on to success.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <a href="#work" className="btn-clay">
                See how we&apos;ve helped
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">Start a launch</a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-kk-faint text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.span
          className="w-px h-12 origin-top"
          style={{ background: 'linear-gradient(to bottom, #C2613A, transparent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
        />
      </motion.div>
    </section>
  )
}
