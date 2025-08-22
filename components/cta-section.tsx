"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"


interface CTASectionProps {
  openWhatsApp: () => void
}


export function CTASection({openWhatsApp}: CTASectionProps) {
  return (
    <section id="cta" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bergabunglah dengan 500+
            <br />
            <span className="text-secondary">Pelanggan Puas Lainnya!</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Jangan biarkan pengalaman buruk terulang. Pilih yang TERPERCAYA!
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-secondary hover:text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-200"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-200 bg-transparent"
              onClick={openWhatsApp}
            >
              <Phone className="mr-2 h-5 w-5" />
              Pesan Sekarang
            </Button>
          </div>
          <p className="text-sm opacity-75">Tidak ada syarat • Gratis konsultasi • 24/7 support</p>
        </div>
      </div>
    </section>
  )
}
