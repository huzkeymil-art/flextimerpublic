import type { Metadata } from 'next'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Start a B2B launch with Keys & Kites. Tell us what you're bringing to market — we'll tell you honestly whether we're the right team to get it there.",
}

export default function ContactPage() {
  return (
    <main className="bg-kk-bg pt-20">
      <CTA />
    </main>
  )
}
