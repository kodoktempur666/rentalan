"use client"

import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export function TrailerSection() {
  const [loadVideo, setLoadVideo] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  // Intersection Observer untuk lazy load iframe
  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadVideo(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Pernah DP, Untuk Booking Rental Mobil, <br />
            <span className="text-primary">tapi Saat Hari Sewa, Mobil Tidak Datang?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Rental Mobil Hagia Transport siap melayani kebutuhan perjalananmu.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video"
        >
          {loadVideo ? (
            <iframe
              src="https://www.youtube.com/embed/_ffDLHM4Mik?autoplay=0"
              title="Corporate Car Rental Services"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            // Placeholder sebelum video di-load
            <div className="w-full h-full flex items-center justify-center bg-black/30 text-white">
              Loading Video...
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
