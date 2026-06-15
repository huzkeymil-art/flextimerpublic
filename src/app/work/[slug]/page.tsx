import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cases, getCaseBySlug } from '@/lib/cases'
import CaseStudyBody from '@/components/CaseStudyBody'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCaseBySlug(params.slug)
  if (!c) return {}
  return {
    title: `${c.client} — ${c.category}`,
    description: c.subhead,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const c = getCaseBySlug(params.slug)
  if (!c) notFound()

  return (
    <main className="bg-kk-bg">
      <CaseStudyBody caseStudy={c} />
    </main>
  )
}
