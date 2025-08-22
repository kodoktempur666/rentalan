"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Fuel } from "lucide-react"
import Image from "next/image"




interface CarProps {
  openWhatsApp: (carName: string) => void
}


export function CarsSection({openWhatsApp}: CarProps) {
  const cars = [
    {
      name: "ALPHARD",
      image: "/alphard.avif",
      price: "Rp 1.200.000",
      features: ["5 Penumpang", "Elegance Mode"],
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

  return (
    <section id="cars" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kendaraan <span className="text-primary">Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pilihan armada terbaik kami untuk kebutuhan perjalanan Anda, dengan kenyamanan dan harga terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card
              key={car.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-0 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {car.name}
                </CardTitle>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" /> {car.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel className="h-4 w-4 text-primary" /> {car.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary">{car.price} / hari</span>
                </div>
                <Button className="w-full group-hover:scale-105 transition-transform duration-200" onClick={() => openWhatsApp(car.name)}>
                  Sewa Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
