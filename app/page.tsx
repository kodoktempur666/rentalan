"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Car,
  Shield,
  MapPin,
  Phone,
  Star,
  Users,
  Menu,
  X,
  Zap,
  Cpu,
  BanknoteX,
  BanknoteArrowUp,
  Timer,
} from "lucide-react"
import Image from "next/image"

export default function CarRentalPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "fleet", "testimonial", "booking", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const openWhatsApp = (carName?: string) => {
    const phoneNumber = "6281228797795"
    const message = carName
      ? `Halo, saya tertarik untuk menyewa ${carName}. Bisa berikan informasi lebih lanjut?`
      : "Halo, saya tertarik dengan layanan rental mobil Anda. Bisa berikan informasi lebih lanjut?"

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.location.href = whatsappUrl
  }

  const cars = [
    {
      name: "ALPHARD",
      image: "/alphard.avif",
      price: "Rp 1.200.000",
      features: ["5 Penumpang"],
      rating: 4.9,
      type: "Gas",
    },
    {
      name: "FORTUNER",
      image: "/fortuner.avif",
      price: "Rp 700.000",
      features: ["5 Penumpang", "Sport Mode"],
      rating: 4.8,
      type: "Gas",
    },
    {
      name: "PAJERO",
      image: "/pajero.avif",
      price: "Rp 500.000",
      features: ["4 Penumpang", "Sport Mode"],
      rating: 4.9,
      type: "Gas",
    },
  ]

  const testimonials = [
    {
      name: "Pak Sutrisno",
      role: "Pegawai Kementerian",
      rating: 5,
      comment:
        "Pelayanan protokol yang sangat memuaskan! Driver profesional, mobil mewah, dan tepat waktu. Tamu VIP kami sangat terkesan!",
    },
    {
      name: "Andi",
      role: "Mahasiswa UNS",
      rating: 5,
      comment:
        "Tanpa DP dan harga mahasiswa banget! Prosesnya mudah, mobilnya bersih, perfect buat trip sama teman-teman!",
    },
    {
      name: "Bu Sari",
      role: "Wisatawan Jakarta",
      rating: 5,
      comment:
        "Setelah pernah ditipu rental lain, akhirnya nemu yang amanah! Admin komunikatif, mobil datang tepat waktu. Recommended!",
    },
  ]

  const navigationItems = [
    { id: "home", label: "Beranda" },
    { id: "fleet", label: "Armada" },
    { id: "testimonial", label: "Testimoni" },
    { id: "booking", label: "Cara Pesan" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-heading">
              Hagia Transport
            </span>
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 relative ${activeSection === item.id ? "text-cyan-400" : "text-slate-300"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-cyan-500/20">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-cyan-400"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main heading */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 font-heading leading-tight">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                HAGIA TRANSPORT
              </span>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">
                  PROMO TERBATAS! Khusus Mahasiswa Solo
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-6 max-w-3xl mx-auto mb-12">
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                Butuh mobil untuk <span className="text-cyan-400 font-semibold">kegiatan kampus, wisata, atau acara bersama teman? </span>
                 Hagia Transport hadir dengan syarat sewa yang <span className="text-cyan-400 font-semibold">mudah, harga kompetitif,</span> dan armada yang lengkap.
              </p>

              {/* 3 key points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3 bg-slate-800/40 border border-slate-700 rounded-lg px-4 py-3">
                  <Car className="h-5 w-5 text-cyan-400" />
                  <span className="text-slate-300 text-sm">Armada Lengkap</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/40 border border-slate-700 rounded-lg px-4 py-3">
                  <Shield className="h-5 w-5 text-purple-400" />
                  <span className="text-slate-300 text-sm">Syarat Mudah & Aman</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-800/40 border border-slate-700 rounded-lg px-4 py-3">
                  <BanknoteArrowUp className="h-5 w-5 text-cyan-400" />
                  <span className="text-slate-300 text-sm">Harga Terjangkau</span>
                </div>
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 shadow-lg shadow-cyan-500/25 text-lg px-8 py-4 h-auto"
              >
                <Phone className="h-5 w-5 mr-2" />
                Pesan Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("fleet")}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-lg px-8 py-4 h-auto"
              >
                Lihat Armada
              </Button>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative max-w-4xl mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl animate-pulse"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
                <Image
                  src="/hero.avif"
                  alt="Futuristic Electric Car"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Floating feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all duration-300">
                <BanknoteX className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">JAMINAN 100% UANG KEMBALI</h3>
                <p className="text-slate-400 text-sm">Neural network untuk pengalaman berkendara optimal</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300">
                <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">100% AMANAH</h3>
                <p className="text-slate-400 text-sm">
                  Admin tidak akan menghilang. Armada pasti datang sesuai janji. GARANSI!
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all duration-300">
                <BanknoteArrowUp className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">TANPA DP</h3>
                <p className="text-slate-400 text-sm">
                  Untuk transaksi di bawah 1 juta rupiah. Bayar cash saat armada tiba!
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-all duration-300">
                <Timer className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">TEPAT WAKTU</h3>
                <p className="text-slate-400 text-sm">
                  Driver datang 15 menit sebelum jadwal. Profesional dan attitude bagus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solusi Khusus Untuk Setiap Kebutuhan
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Kami memahami kebutuhan unik setiap pelanggan</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                    <MapPin className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">WISATAWAN</h3>
                  <p className="text-red-300 text-sm font-medium">Usia 21-50 tahun • Booking dari Bandara</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4 mb-6">
                  <h4 className="text-red-300 font-semibold mb-2">❌ PERNAH MENGALAMI INI?</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Sudah DP tapi mobil tidak datang</li>
                    <li>• Admin tiba-tiba menghilang</li>
                    <li>• Tertipu rental mobil palsu</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4 mb-6">
                  <h4 className="text-green-300 font-semibold mb-2">✅ HAGIA TRANSPORT SOLUSINYA!</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Tanpa DP untuk transaksi kurang dari 1 juta rupiah</li>
                    <li>• Admin komunikatif & profesional</li>
                    <li>• Armada datang tepat waktu</li>
                    <li>• 100% AMANAH & TERPERCAYA</li>
                  </ul>
                </div>

                <Button
                  onClick={() => openWhatsApp("untuk wisatawan")}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 text-white font-semibold"
                >
                  BOOKING AMAN SEKARANG!
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">MAHASISWA</h3>
                  <p className="text-blue-300 text-sm font-medium">Usia 19-23 tahun • Kegiatan Kampus & Wisata</p>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 mb-6">
                  <h4 className="text-blue-300 font-semibold mb-2">🎓 BUTUH MOBIL UNTUK:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Kegiatan kampus bersama</li>
                    <li>• Trip wisata dengan teman</li>
                    <li>• Acara organisasi mahasiswa</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4 mb-6">
                  <h4 className="text-green-300 font-semibold mb-2">💰 PAKET KHUSUS MAHASISWA:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Syarat mudah & fleksibel</li>
                    <li>• Harga kompetitif untuk mahasiswa</li>
                    <li>• Armada lengkap & terawat</li>
                    <li>• Proses cepat tanpa ribet</li>
                  </ul>
                </div>

                <Button
                  onClick={() => openWhatsApp("paket mahasiswa")}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 text-white font-semibold"
                >
                  TANYA HARGA MAHASISWA!
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                    <Shield className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">PEGAWAI KEMENTERIAN</h3>
                  <p className="text-purple-300 text-sm font-medium">Usia 50 tahun • Pelayanan Protokol VIP</p>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 mb-6">
                  <h4 className="text-purple-300 font-semibold mb-2">👑 ARMADA VIP TERSEDIA:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Alphard</li>
                    <li>• Fortuner</li>
                    <li>• Innova</li>
                    <li>• New Avanza</li>
                    <li>• Semua armada premium</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4 mb-6">
                  <h4 className="text-green-300 font-semibold mb-2">🏛️ LAYANAN PROTOKOL LENGKAP:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Penjemputan bandara</li>
                    <li>• Antar ke venue & hotel</li>
                    <li>• Driver muda, rapi & handal</li>
                    <li>• Pelayanan profesional</li>
                  </ul>
                </div>

                <Button
                  onClick={() => openWhatsApp("layanan protokol VIP")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 text-white font-semibold"
                >
                  KONSULTASI PROTOKOL VIP!
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  HAGIA TRANSPORT - SOLUSI UNTUK SEMUA!
                </span>
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                Apapun kebutuhan Anda, kami siap melayani dengan profesional dan amanah
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => openWhatsApp()}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 shadow-lg shadow-green-500/25 text-lg px-8 py-4"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  CHAT WHATSAPP SEKARANG
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("fleet")}
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 text-lg px-8 py-4"
                >
                  LIHAT SEMUA ARMADA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Fleet Section */}
      <section id="fleet" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Armada Premium Untuk Setiap Kebutuhan
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Dari VIP sampai ekonomis, semua tersedia dan terawat!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    width={800}
                    height={800}
                    alt={car.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/90 px-3 py-1 rounded-full flex items-center gap-1 border border-cyan-500/30">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">{car.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 font-heading">{car.name}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        {idx === 0 && <Users className="h-4 w-4" />}
                        {idx === 1 && <Zap className="h-4 w-4" />}
                        {idx === 2 && <Cpu className="h-4 w-4" />}
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {car.price}
                      </span>
                      <span className="text-sm text-slate-400">/hari</span>
                    </div>
                    <Button
                      onClick={() => openWhatsApp(car.name)}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0"
                    >
                      Pesan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Apa Kata Pelanggan Kami?
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Lebih dari 500 pelanggan sudah merasakan pelayanan terbaik kami!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">{testimonial.comment}</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Bergabunglah dengan 500+ Pelanggan Puas Lainnya!</h3>
            <p className="text-lg text-slate-300 mb-6">
              Jangan biarkan pengalaman buruk terulang. Pilih yang TERPERCAYA!
            </p>
            <Button
              size="lg"
              onClick={() => openWhatsApp()}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 shadow-lg shadow-cyan-500/25 text-lg px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              SAYA MAU BOOKING SEKARANG!
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section id="booking" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                3 CARA MUDAH BOOKING:
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                <Phone className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">WhatsApp</h3>
              <p className="text-slate-300 mb-4">Chat langsung dengan admin</p>
              <Button
                onClick={() => openWhatsApp()}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                CHAT SEKARANG
              </Button>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                <Phone className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">Telepon</h3>
              <p className="text-slate-300 mb-4">Hubungi langsung 24/7</p>
              <Button
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 bg-transparent"
              >
                TELEPON SEKARANG
              </Button>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <MapPin className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">Datang Langsung</h3>
              <p className="text-slate-300 mb-4">Kunjungi kantor kami</p>
              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 bg-transparent"
              >
                LIHAT ALAMAT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-purple-900 border-t border-cyan-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">

                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-heading">
                  Hagia Transport
                </span>
                <div className="relative">

                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Kami HAGIA TRANSPORT hadir sebagai solusi TERPERCAYA untuk semua masalah rental mobil di Solo.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-heading text-white">Jika Booking Sekarang</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Hemat 20% dari harga normal</li>
                <li>• Gratis driver profesional 24 jam</li>
                <li>• Pilihan armada premium terlengkap</li>
                <li>• Jaminan 100% uang kembali</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-heading text-white">Kontak</h4>
              <div className="space-y-2 text-slate-300">
                <p>WhatsApp : +62 812-3456-7890</p>
                <p>Email: info@example.com</p>
                <p>Alamat: Solo, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Hagia Transport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
