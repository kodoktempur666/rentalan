"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CarsSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { TrailerSection } from "@/components/trailer-section"

export default function HomePage() {

  const openWhatsApp = (carName?: string) => {
    const phoneNumber = "6281228797795"
    const message = carName
      ? `Halo, saya tertarik untuk menyewa ${carName}. Bisa berikan informasi lebih lanjut?`
      : "Halo, saya tertarik dengan layanan rental mobil Anda. Bisa berikan informasi lebih lanjut?"

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.location.href = whatsappUrl
  }

  return (
    <main className="min-h-screen">
      <Header openWhatsApp={openWhatsApp} />
      <HeroSection openWhatsApp={openWhatsApp}/>
      <TrailerSection />
      <CarsSection openWhatsApp={openWhatsApp}/>
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection openWhatsApp={openWhatsApp}/>
      <Footer />
    </main>
  )
}
