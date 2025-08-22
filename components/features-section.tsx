"use client"

import { Shield, Clock, Award, Headphones, CreditCard, MapPin } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Jaminan Aman",
      description: "Semua mobil kami dipastikan aman dan terawat dengan baik.",
    },
    {
      icon: Clock,
      title: "Ketersediaan 24/7",
      description: "Tersedia untuk sewa selama 24 jam, mulai dari pagi hingga malam.",
    },
    {
      icon: Award,
      title: "Pengemudi Profesional",
      description: "Berpengalaman dan terlatih dalam menjalankan perjalanan Anda.",
    },
    {
      icon: Headphones,
      title: "Admin Personal",
      description: "Dipandu oleh admin personal yang siap membantu Anda dengan segala pertanyaan.",
    },
    {
      icon: CreditCard,
      title: "Tagihan Fleksibel",
      description: "Tagihan yang fleksibel dan mudah dibayar, sesuai dengan kebutuhan Anda.",
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Dapatkan informasi lokasi Anda secara real-time melalui GPS tracking.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mengapa Memilih <span className="text-primary">Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan mobil dengan kualitas terbaik untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-lg hover:bg-card/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
