import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Work from '@/components/Work'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Philosophy from '@/components/Philosophy'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-kk-bg">
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Stats />
        <Philosophy />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
