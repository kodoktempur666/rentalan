"use client"

import { motion } from "framer-motion"

export function TrailerSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Pernah DP, Untuk Booking Rental Mobil, <h2 className="text-4xl font-bold text-primary">tapi Saat Hari Sewa , Mobil Tidak Datang?</h2></h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Rental Mobil Hagia Transport Siap melayani Kebutuhan Perjalanan Mu.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/MisKi-WLJkw"
                                title="Corporate Car Rental Services"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >

                </motion.div>
            </div>
        </section>
    )
}
