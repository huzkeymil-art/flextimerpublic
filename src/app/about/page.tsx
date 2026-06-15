import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import AboutBody from '@/components/AboutBody'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About',
  description: "Keys & Kites is a breakthrough B2B launch agency in Chicago's Printer's Row, founded by partners Tim Cook and Tom Barg. We believe in rich simplicity — turning complexity into clarity.",
}

export default function AboutPage() {
  return (
    <main className="bg-kk-bg">
      <PageHero
        eyebrow="About the Agency"
        title="The breakthrough"
        titleAccent="B2B agency"
        body="Founded in Chicago's Printer's Row by partners Tim Cook and Tom Barg. We built this agency around a single, unfashionable conviction: the best B2B work is simple."
      />
      <AboutBody />
      <CTA />
    </main>
  )
}
