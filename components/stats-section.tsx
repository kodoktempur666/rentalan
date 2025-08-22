"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: 500, suffix: "+", label: "Pelanggan", duration: 2000 },
    { number: 20, suffix: "+", label: "Kendaraan Tersedia", duration: 2500 },
    { number: 99, suffix: "%", label: "Kepuasan Pelanggan", duration: 2000 },
    { number: 24, suffix: "/7", label: "Admin ", duration: 1500 },
  ]

  function AnimatedNumber({ target, suffix, duration }: { target: number; suffix: string; duration: number }) {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        setCurrent((prev) => {
          const next = prev + increment
          if (next >= target) {
            clearInterval(timer)
            return target
          }
          return next
        })
      }, 16)

      return () => clearInterval(timer)
    }, [isVisible, target, duration])

    return (
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {Math.floor(current)}
        {suffix}
      </span>
    )
  }

  return (
    <section id="stats-section" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dipercaya oleh <span className="text-primary">1000+ Pelanggan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Angka statistik kami menggambarkan kepuasan pelanggan kami dan kepercayaan mereka terhadap layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} duration={stat.duration} />
              </div>
              <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
