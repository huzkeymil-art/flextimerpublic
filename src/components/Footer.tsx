'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  Work: ['Case Studies', 'Industries', 'Process', 'Results'],
  Agency: ['About', 'Team', 'Careers', 'Journal'],
  Services: ['Brand Strategy', 'Creative Direction', 'Digital Experience', 'Market Growth'],
  Contact: ['hello@keysandkites.com', 'New York · London', 'Instagram', 'LinkedIn'],
}

export default function Footer() {
  return (
    <footer className="bg-kk-bg border-t border-white/[0.06]">
      <div className="container-kk pt-20 pb-10">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16 mb-20">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full border border-kk-gold/60" />
                <span className="absolute inset-0 flex items-center justify-center text-kk-gold font-display font-bold">K</span>
              </div>
              <span className="font-display font-semibold text-kk-ink text-base tracking-[0.06em] uppercase">
                Keys <span className="text-kk-gold">&</span> Kites
              </span>
            </a>
            <p className="text-kk-dim text-sm leading-relaxed mb-6">
              Premium creative agency for visionary brands. We craft the stories that move culture.
            </p>
            <div className="flex items-center gap-4">
              {['IG', 'LI', 'TW', 'BE'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-kk-dim text-[10px] font-semibold hover:border-kk-gold/50 hover:text-kk-gold transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="text-kk-ink text-xs font-semibold tracking-[0.15em] uppercase mb-4">{group}</p>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-kk-dim text-sm hover:text-kk-muted transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-kk-dim text-xs tracking-wide">
            © {new Date().getFullYear()} Keys & Kites. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-kk-dim text-xs hover:text-kk-muted transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
