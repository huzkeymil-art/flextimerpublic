'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function CTA() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 lg:py-40 bg-kk-bg relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(194,97,58,0.07) 0%, transparent 65%)' }}
      />
      <div className="container-kk relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: pitch */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-7"
            >
              <span className="w-8 h-px bg-kk-clay" />
              Start a Launch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-[clamp(2.4rem,5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-kk-ink mb-6"
            >
              Got an idea worth<br /><span className="italic text-kk-clay">launching?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-kk-graphite text-base leading-relaxed max-w-md mb-8"
            >
              Tell us what you&apos;re bringing to market. We&apos;ll tell you, honestly, whether we&apos;re the
              right team to get it there — and how we&apos;d start.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col gap-2 text-sm"
            >
              <a href="mailto:hello@keysandkites.com" className="text-kk-ink font-medium hover:text-kk-clay transition-colors">
                hello@keysandkites.com
              </a>
              <span className="text-kk-muted">727 S Dearborn St, Suite 211 · Chicago, IL 60605</span>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-kk-paper border border-kk-line rounded-2xl p-7 lg:p-9 shadow-[0_30px_70px_-40px_rgba(28,23,20,0.35)]"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Name" name="name" value={form.name} onChange={update('name')} required />
              <Field label="Work email" name="email" type="email" value={form.email} onChange={update('email')} required />
            </div>
            <div className="mb-4">
              <Field label="Company" name="company" value={form.company} onChange={update('company')} />
            </div>
            <label className="block mb-6">
              <span className="text-kk-graphite text-xs font-medium tracking-wide">What are you launching?</span>
              <textarea
                name="message"
                value={form.message}
                onChange={update('message')}
                rows={4}
                required
                className="mt-2 w-full bg-kk-bg border border-kk-line rounded-xl px-4 py-3 text-sm text-kk-ink placeholder:text-kk-faint focus:outline-none focus:border-kk-clay transition-colors resize-none"
                placeholder="A new product, a rebrand, a category play…"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="btn-clay w-full justify-center disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? "Thanks — we'll be in touch" : 'Send it over'}
              {status === 'idle' && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            {status === 'sent' && (
              <p className="text-kk-clay-deep text-xs mt-3 text-center">
                Message received. A partner will reply within two business days.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-700 text-xs mt-3 text-center">
                Something went wrong. Email us directly at hello@keysandkites.com.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="text-kk-graphite text-xs font-medium tracking-wide">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full bg-kk-bg border border-kk-line rounded-xl px-4 py-3 text-sm text-kk-ink placeholder:text-kk-faint focus:outline-none focus:border-kk-clay transition-colors"
      />
    </label>
  )
}
