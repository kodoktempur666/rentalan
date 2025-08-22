"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Pak Sutrisno",
      position: "Pegawai Kementerian",
      content:
        "Pelayanan protokol yang sangat memuaskan! Driver profesional, mobil mewah, dan tepat waktu. Tamu VIP kami sangat terkesan!",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Andi",
      position: "Mahasiswa UNS",
      content:
        "Tanpa DP dan harga mahasiswa banget! Prosesnya mudah, mobilnya bersih, perfect buat trip sama teman-teman!",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Bu Sari",
      position: "Wisatawan Jakarta",
      content:
        "Setelah pernah ditipu rental lain, akhirnya nemu yang amanah! Admin komunikatif, mobil datang tepat waktu. Recommended!",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Apa Kata <span className="text-primary">Pelanggan Kami?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lebih dari 500 pelanggan sudah merasakan pelayanan terbaik kami!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-0 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
