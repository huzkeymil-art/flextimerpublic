'use client'

import { motion } from 'framer-motion'

type PageHeroProps = {
  eyebrow: string
  title: string
  titleAccent?: string
  body?: string
}

export default function PageHero({ eyebrow, title, titleAccent, body }: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-kk-bg relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(194,97,58,0.06) 0%, transparent 60%)' }}
      />
      <div className="container-kk relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-7"
        >
          <span className="w-8 h-px bg-kk-clay" />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-[clamp(2.8rem,6.5vw,7rem)] leading-[0.96] tracking-[-0.025em] text-kk-ink mb-6 max-w-4xl"
        >
          {title}
          {titleAccent && (
            <>
              {' '}
              <span className="italic text-kk-clay">{titleAccent}</span>
            </>
          )}
        </motion.h1>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-kk-graphite text-base lg:text-lg max-w-xl leading-relaxed"
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  )
}
