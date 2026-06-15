'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Our Thinking', href: '/thinking' },
]

const EASE = [0.22, 1, 0.36, 1] as const

function KiteMark({ className = '' }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className} aria-hidden="true">
      <path d="M11 1.5 19 8 11 20.5 3 8 11 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 1.5V20.5M3 8h16" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" opacity="0.55" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-kk-bg/90 backdrop-blur-xl border-b border-kk-line shadow-sm' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-kk flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Keys & Kites home">
            <span className="text-kk-clay transition-transform duration-300 group-hover:-translate-y-0.5">
              <KiteMark />
            </span>
            <span className="font-display text-kk-ink text-lg sm:text-xl font-semibold tracking-[-0.01em]">
              Keys <span className="text-kk-clay">&amp;</span> Kites
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-kk-graphite hover:text-kk-ink text-sm font-medium tracking-[0.01em] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-kk-clay transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact" className="btn-clay text-sm px-6 py-3">
              Start a launch
              <ArrowRight />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col items-center justify-center gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} transition={{ duration: 0.3, ease: EASE }} className="block h-px w-6 bg-kk-ink" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.2 }} className="block h-px w-6 bg-kk-ink" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} transition={{ duration: 0.3, ease: EASE }} className="block h-px w-6 bg-kk-ink" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 bg-kk-bg md:hidden flex flex-col"
          >
            <div className="flex flex-1 flex-col items-start justify-center gap-6 px-8 pt-[72px]">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: EASE }}>
                  <Link href={link.href} className="font-display text-4xl sm:text-5xl text-kk-ink hover:text-kk-clay transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + navLinks.length * 0.07, duration: 0.5, ease: EASE }}>
                <Link href="/contact" className="btn-clay mt-6">
                  Start a launch
                  <ArrowRight />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
