'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'Aurum Collective',
    category: 'Brand Strategy · Visual Identity',
    year: '2024',
    desc: 'A complete brand overhaul for a luxury goods collective—elevating their presence from regional to global.',
    gradient: 'from-[#1a0f2e] via-[#2d1b69] to-[#0a0a14]',
    accent: '#7B5CF0',
    result: '+340% brand recognition',
  },
  {
    id: '02',
    title: 'Vela Ventures',
    category: 'Campaign Design · Digital',
    year: '2024',
    desc: 'A cinematic launch campaign for a VC firm that redefined how investors experience early-stage storytelling.',
    gradient: 'from-[#0a1f0f] via-[#1a3825] to-[#040d07]',
    accent: '#34D399',
    result: '$800M raised in Series A',
  },
  {
    id: '03',
    title: 'Maison Soleil',
    category: 'Creative Direction · Content',
    year: '2023',
    desc: 'A sensory-first hospitality brand built to command premium rates and cult-level loyalty.',
    gradient: 'from-[#1f0a0a] via-[#3d1515] to-[#0d0404]',
    accent: '#F59E0B',
    result: '4× revenue per room',
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: index === 0 ? '16/10' : '4/3' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />

      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${project.accent}20, transparent)`,
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-60"
        style={{ background: project.accent }}
      />

      {/* Content always visible */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="font-display text-white/20 text-5xl font-bold">{project.id}</span>
          <span className="text-kk-muted text-xs tracking-wider">{project.year}</span>
        </div>

        <div>
          <motion.div
            animate={{ y: hovered ? -4 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-kk-muted text-xs tracking-widest uppercase mb-2">{project.category}</p>
            <h3 className="font-display text-kk-ink text-2xl lg:text-3xl font-bold mb-3">{project.title}</h3>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <p className="text-kk-muted text-sm mb-3 leading-relaxed">{project.desc}</p>
              <span
                className="text-xs font-semibold tracking-wide"
                style={{ color: project.accent }}
              >
                {project.result}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${project.accent}40` }}
      />
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-32 lg:py-40 bg-kk-bg">
      <div className="container-kk">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label mb-5"
            >
              <span className="w-8 h-px bg-kk-gold" />
              Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-title text-[clamp(2.5rem,5vw,5rem)]"
            >
              Stories of<br />
              <span className="italic text-kk-gold">transformation</span>
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="btn-ghost self-start lg:self-auto text-sm"
          >
            View All Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:row-span-1">
            <ProjectCard project={projects[0]} index={0} />
          </div>
          <div className="flex flex-col gap-4">
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  )
}
