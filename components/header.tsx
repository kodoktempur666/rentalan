"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, PhoneCall } from "lucide-react"
import Image from "next/image"




interface HeaderProps {
  openWhatsApp: () => void
}

export function Header({ openWhatsApp }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Kendaraan", href: "#cars" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Contact", href: "#cta" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 ">
              <Phone className="h-4 w-4" />
              <span>+62 21 1234 5678</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>24/7 Customer Support Available</span>
          </div>
        </div>
      </div>

      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className=""/>
            <h1 className={`text-2xl font-bold ${isScrolled ? "text-foreground" : "text-primary"}`}>
              Hagia<span className={`transition-colors duration-200 ${isScrolled ? "text-primary" : "text-white"}`}>Transport</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-green-600"
              onClick={() => openWhatsApp()}
            >
              <PhoneCall className="mr-2 h-4 w-4" /> Whatsapp
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 animate-fade-in-up  ${isScrolled ? "py-2 px-2" : "backdrop-blur-md bg-secondary/70 rounded-sm py-2 px-2"}`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200  font-medium ${isScrolled ? "text-foreground hover:text-primary px-4 py-2 bg-blur" : "text-primary hover:text-primary rounded-md px-4 py-2 bg-secondary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4">
                <Button className="w-full bg-green-600" onClick={() => openWhatsApp()}><PhoneCall className="mr-2 h-4 w-4" />Whatsapp</Button>
              </div>
            </div>
          </div>
        )}

      </nav>
    </header>
  )
}
