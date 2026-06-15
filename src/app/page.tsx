import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import HowWeHelped from '@/components/HowWeHelped'
import Services from '@/components/Services'
import Philosophy from '@/components/Philosophy'
import WhyUs from '@/components/WhyUs'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-kk-bg">
        <Hero />
        <ClientLogos />
        <HowWeHelped />
        <Services />
        <Philosophy />
        <WhyUs />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
