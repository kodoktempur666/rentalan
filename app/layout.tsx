import type React from "react"
import type { Metadata } from "next"
import { Poppins, Noto_Sans, Rubik } from "next/font/google" // pastikan penamaan kapital dan sesuai
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Hagia Transport - Rental Mobil Solo",
  description:
    "Sewa mobil berkualitas di Solo untuk berbagai kebutuhan, mulai dari acara keluarga hingga perjalanan bisnis. Pilih dari berbagai jenis mobil dengan harga terjangkau dan layanan terbaik.",
  verification: {
    google: "ZOFcpp9EgmwMpHJUeBZMe7T9IA9CXTO0GY04h5fRKrw",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={rubik.className}>

        <main>{children}</main>

      </body>
    </html>
  )
}