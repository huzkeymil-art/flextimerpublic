import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import WorkPreview from '@/components/WorkPreview'
import Services from '@/components/Services'
import Philosophy from '@/components/Philosophy'
import WhyUs from '@/components/WhyUs'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="bg-kk-bg">
      <Hero />
      <ClientLogos />
      <WorkPreview />
      <Services />
      <Philosophy />
      <WhyUs />
      <Stats />
      <CTA />
    </main>
  )
}
