"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Fuel } from "lucide-react"
import Image from "next/image"




interface CarProps {
  openWhatsApp: (carName: string) => void
}


export function CarsSection({ openWhatsApp }: CarProps) {
  const cars = [
    {
      name: "Brio",
      image: "/brio.png",
      price: "Rp 300.000",
      packages: "Rp. 550.000",
      features: ["5 Penumpang", "Elegance Mode"],
      rating: 4.9,
      type: "Gas",
    },
    {
      name: "Calya",
      image: "/calya.avif",
      price: "Rp 300.000",
      packages: "Rp. 550.000",
      features: ["5 Penumpang", "Sport Mode"],
      rating: 4.8,
      type: "Gas",
    },
    {
      name: "Grand avanza",
      image: "/grand avanza.png",
      price: "Rp 300.000",
      packages: "Rp. 650.000",
      features: ["4 Penumpang", "Sport Mode"],
      rating: 4.9,
      type: "Gas",
    },
    {
      name: "New Avanza ",
      image: "/new avanza.png",
      price: "Rp 350.000",
      packages: "Rp. 650.000",
      features: ["5 Penumpang", "Elegance Mode"],
      rating: 4.7,
      type: "Gas",
    },

  ]

  const packageCar = [
    {
      name: "Innova Rebond",
      image: "/innova reborn.webp",
      price: "",
      packages: "Rp. 800.000",
      features: ["5 Penumpang", "Elegance Mode"],
      rating: 4.8,
      type: "Gas",
    },
    {
      name: "Innova Zenix",
      image: "/innova zenix.webp",
      price: "",
      packages: "Rp. 1.000.000",
      features: ["5 Penumpang", "Elegance Mode"],
      rating: 4.9,
      type: "Gas",
    },
    {
      name: "Hiace Commuter 14 seat",
      image: "/hiace comm.png",
      price: "",
      packages: "Rp. 1.300.000",
      features: ["5 Penumpang", "Elegance Mode"],
      rating: 4.9,
      type: "Gas",
    },
    {
      name: "Hiace premio 14 seat",
      image: "/hiace premio.png",
      price: "",
      packages: "Rp. 1.500.000",
      features: ["5 Penumpang", "Elegance Mode"],
      rating: 4.7,
      type: "Gas",
    },
  ]

  const featuredCar = [
    {
      name: "Pajero sport",
      image: "/pajero.avif",
      rating: 4.9,
      type: "Gas",
    },
    {
      name: "Alphard",
      image: "/alphard.avif",
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

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 animate-fade-in-up text-center">Tipe Keluarga</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
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
                {/* <ul className="space-y-2 mb-6">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul> */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary">Lepas Kunci: {car.price}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary">Include (driver + bbm): {car.packages} </span>
                </div>
                <Button className="w-full group-hover:scale-105 transition-transform duration-200" onClick={() => openWhatsApp(car.name)}>
                  Sewa Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}

        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 animate-fade-in-up text-center">Tipe Bisnis</h3>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {packageCar.map((car, index) => (
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
                  height={900}
                  className="w-full h-52 object-fit group-hover:scale-110 transition-transform duration-300"
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
                {/* <ul className="space-y-2 mb-6">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul> */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary">Include (driver + bbm): {car.packages} </span>
                </div>
                <Button className="w-full group-hover:scale-105 transition-transform duration-200" onClick={() => openWhatsApp(car.name)}>
                  Sewa Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 animate-fade-in-up text-center">Tipe Eksekutif</h3>


        {/* featured car, same car */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCar.map((car, index) => (
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
                {/* <ul className="space-y-2 mb-6">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul> */}

                <Button className="w-full group-hover:scale-105 transition-transform duration-200" onClick={() => openWhatsApp(car.name)}>
                  Hubungi Admin
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
