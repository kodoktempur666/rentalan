"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Car } from "lucide-react"

interface HeroProps {
  openWhatsApp: () => void
}

export function HeroSection({ openWhatsApp }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden overflow-x-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.avif')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 text-center text-white">
        <div className=" mt-30 sm:mt-14 ">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight break-words">
              HAGIA
              <br />
              <span className="text-secondary">Transport</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Bosan ditipu rental mobil palsu? HAGIA TRANSPORT hadir sebagai solusi terpercaya untuk semua kebutuhan sewa
              mobil di Solo. 100% Amanah
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animate-delay-200 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-secondary hover:text-white text-lg px-8 py-4 hover:scale-105 transition-all duration-200"
                onClick={openWhatsApp}
              >
                Booking Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-200 bg-transparent"
                onClick={() => {
                  document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Lihat Kendaraan
              </Button>
            </div>
          </div>
        </div>


        {/* Key Features */}
        <div className="animate-fade-in-up animate-delay-400 mb-25">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center animate-scale-in animate-delay-200 px-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Jaminan 100% Uang Kembali</h3>
              <p className="text-sm opacity-90">Jika tidak sesuai janji, uang 100% dikembalikan</p>
            </div>
            <div className="flex flex-col items-center text-center animate-scale-in animate-delay-400 px-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Tepat Waktu</h3>
              <p className="text-sm opacity-90">Driver datang 15 menit sebelum jadwal. Profesional dan attitude bagus!</p>
            </div>
            <div className="flex flex-col items-center text-center animate-scale-in animate-delay-600 px-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Tanpa Dp</h3>
              <p className="text-sm opacity-90">Untuk transaksi di bawah 1 juta rupiah. Bayar cash saat armada tiba!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
