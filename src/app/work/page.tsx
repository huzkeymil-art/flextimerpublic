import type { Metadata } from 'next'
import Link from 'next/link'
import { cases } from '@/lib/cases'
import PageHero from '@/components/PageHero'
import WorkGrid from '@/components/WorkGrid'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies from Keys & Kites — how we have helped B2B brands launch and grow. Real campaigns for GE, Siemens, Cox Automotive, Saba, LoJack and more.',
}

export default function WorkPage() {
  return (
    <main className="bg-kk-bg">
      <PageHero
        eyebrow="Our Work"
        title="How we've helped"
        titleAccent="B2B brands launch"
        body="Three industries. Different briefs. One constant: turning a complicated B2B truth into something the market could not miss."
      />
      <WorkGrid />
    </main>
  )
}
