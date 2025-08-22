"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = {
    services: ["Executive Sedans", "Group Transportation", "Airport Transfers", "Long-term Rentals", "Corporate Plans"],
    company: ["About Us", "Our Fleet", "Careers", "News & Updates", "Contact"],
    support: ["Help Center", "Booking Guide", "Terms of Service", "Privacy Policy", "Insurance Info"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Hagia<span className="text-secondary">Trans</span>
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Rental Mobil Hagia Transport Siap melayani Kebutuhan Perjalanan Mu
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary" />
                <span>+62 878-4650-7506</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary" />
                <span>info@hagiatransport.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-secondary" />
                <span>Jl. Cokrobaskoro V, Tipes, Kec. Serengan, Kota Surakarta, Jawa Tengah 57154</span>
              </div>
            </div>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-secondary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="bg-background/10 hover:bg-secondary p-2 rounded-full transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-background/60 text-sm">© 2025 Hagia Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
