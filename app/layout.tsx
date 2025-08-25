

import type React from "react"
import type { Metadata } from "next"
import {  Rubik } from "next/font/google" // pastikan penamaan kapital dan sesuai
import "./globals.css"


const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Sewa Mobil Solo - Hagia Transport",
  description:
    "Sewa mobil di Solo dengan harga terjangkau. Tersedia berbagai jenis mobil: Brio, Calya, Grand Avanza, New Avanza, Innova, Hiace, Pajero, Alphard. Pilih lepas kunci atau include driver & BBM.",
  keywords: [
    "sewa mobil solo",
    "rental mobil solo",
    "sewa mobil lepas kunci solo",
    "rental mobil dengan driver solo",
    "sewa mobil brio solo",
    "rental mobil brio solo",
    "rental brio solo",
    "sewa mobil calya solo",
    "rental calya solo",
    "sewa mobil avanza solo",
    "rental avanza solo",
    "sewa mobil innova solo",
    "rental innova solo",
    "sewa hiace solo",
    "rental hiace solo",
    "sewa pajero Solo",
    "rental pajero Solo",
    "sewa alphard Solo",
    "rental alphard Solo",
  ],
  authors: [{ name: "Hagia Transport" }],
  verification: {
    google: "-gP8s43jZ3uzvuSoi-IvIGu-v3DFWEy1zyuSYV4a2HQ",
  },
  openGraph: {
    title: "Sewa Mobil Solo - Hagia Transport",
    description:
      "Sewa mobil berkualitas di Solo, dari Brio, Calya, Avanza, Innova, Hiace, Pajero hingga Alphard. Pilih paket lepas kunci atau include driver & BBM.",
    url: "https://www.sewamobilsolo.com",
    siteName: "Hagia Transport",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sewa Mobil Solo - Hagia Transport",
    description:
      "Sewa mobil berkualitas di Solo, dari Brio, Calya, Avanza, Innova, Hiace, Pajero hingga Alphard. Pilih paket lepas kunci atau include driver & BBM.",
    creator: "@hagiatransport",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={rubik.className}>

        <main>{children}</main>

      </body>
    </html>
  )
}