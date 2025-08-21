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
  title: "DEKOPIN Wilayah Jawa Tengah - Membangun Ekonomi Kerakyatan",
  description:
    "Dewan Koperasi Indonesia Wilayah Jawa Tengah berkomitmen memperkuat peran koperasi sebagai pilar ekonomi kerakyatan melalui pembinaan, pelatihan, dan pengembangan jejaring bisnis yang berkelanjutan.",
  verification: {
    google: "ZOFcpp9EgmwMpHJUeBZMe7T9IA9CXTO0GY04h5fRKrw",
  },
  icons: { icon: '/Logo-Koperasi.png' },
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