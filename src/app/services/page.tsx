import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Services from '@/components/Services'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Keys & Kites offers B2B messaging & positioning, website design and build, digital marketing, and full launch strategy. Strategy, creative and execution under one roof.',
}

export default function ServicesPage() {
  return (
    <main className="bg-kk-bg">
      <PageHero
        eyebrow="What We Do"
        title="Built for the"
        titleAccent="whole launch"
        body="Most agencies hand you off between strategy and execution. We don't. One team carries the idea from whiteboard to market — so nothing gets lost in the gap."
      />
      <Services />
      <CTA />
    </main>
  )
}
