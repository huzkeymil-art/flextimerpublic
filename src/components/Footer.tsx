'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

type FooterLink = { label: string; href: string; external?: boolean }

const linkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Messaging & Positioning', href: '/services' },
      { label: 'Websites', href: '/services' },
      { label: 'Digital Marketing', href: '/services' },
      { label: 'Launch Strategy', href: '/services' },
    ],
  },
  {
    title: 'Agency',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Thinking', href: '/thinking' },
      { label: 'Work', href: '/work' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'hello@keysandkites.com', href: 'mailto:hello@keysandkites.com', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/keyskitesagency', external: true },
      { label: 'Chicago · Printer’s Row', href: '/about' },
    ],
  },
]

function KiteMark({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 22 22" fill="none" className={className} aria-hidden="true">
      <path d="M11 1.5 19 8 11 20.5 3 8 11 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 1.5V20.5M3 8h16" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" opacity="0.55" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-kk-ink text-kk-bg">
      <div className="container-kk pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-14 lg:gap-10 mb-16"
        >
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Keys & Kites home">
              <span className="text-kk-clay"><KiteMark /></span>
              <span className="font-display text-xl font-semibold tracking-[-0.01em]">
                Keys <span className="text-kk-clay">&amp;</span> Kites
              </span>
            </Link>
            <p className="text-kk-bg/65 text-sm leading-relaxed mb-6">
              The breakthrough B2B agency &mdash; taking new ideas off the page, into the market, and on
              to success.
            </p>
            <address className="not-italic text-kk-bg/55 text-sm leading-relaxed">
              727 S Dearborn St, Suite 211<br />
              Chicago, IL 60605
            </address>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-kk-bg text-xs font-semibold tracking-[0.16em] uppercase mb-4">{group.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a href={link.href} className="text-kk-bg/60 text-sm hover:text-kk-ochre transition-colors duration-200">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-kk-bg/60 text-sm hover:text-kk-ochre transition-colors duration-200">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-kk-bg/50 text-xs tracking-wide text-center sm:text-left">
            &copy; {year} Keys &amp; Kites. The Breakthrough B2B Agency.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms'].map((item) => (
              <Link key={item} href="#" className="text-kk-bg/50 text-xs hover:text-kk-clay transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
