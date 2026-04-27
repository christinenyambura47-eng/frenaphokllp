import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-24 border-t border-amber-600/20">
      <div className="container mx-auto px-4 py-16">
        {/* Premium Logo Section */}
        <div className="mb-16 pb-12 border-b border-amber-600/20">
          <Link href="/" className="flex items-center gap-4 group w-fit">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg opacity-25 group-hover:opacity-40 blur transition duration-300"></div>
              <Image
                src="/logo.jpg"
                alt="Frenaphok LLP Logo"
                width={64}
                height={64}
                className="relative rounded-lg shadow-xl border-2 border-amber-600/40 group-hover:border-amber-600/70 group-hover:shadow-2xl transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-light text-xl tracking-wider text-white leading-tight">
                frenaphok
              </span>
              <span className="text-sm text-amber-400 font-semibold tracking-widest uppercase">
                LLP Solutions
              </span>
              <p className="text-xs text-white/60 font-light mt-1">Premium IT & Security Solutions</p>
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-light text-xl mb-4 text-amber-400 tracking-wide">frenaphok LLP</h3>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              Premium IT and security solutions provider in Kenya. Delivering excellence since day one.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-light text-lg mb-5 text-amber-400 tracking-wide">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/cctv" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  CCTV Systems
                </Link>
              </li>
              <li>
                <Link href="/services/biometrics" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  Biometric Access
                </Link>
              </li>
              <li>
                <Link href="/services/ip-phones" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  IP Telephone Systems
                </Link>
              </li>
              <li>
                <Link href="/services/it-equipment" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  IT Equipment
                </Link>
              </li>
              <li>
                <Link href="/services/networks" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  Network Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-light text-lg mb-5 text-amber-400 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-amber-400 transition-colors duration-300 font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Premium */}
          <div>
            <h3 className="font-light text-lg mb-6 text-amber-400 tracking-widest">CONTACT US</h3>
            <div className="space-y-6">
              {/* Call Us Section */}
              <div className="p-4 bg-gradient-to-br from-amber-600/10 to-amber-500/5 border border-amber-600/20 rounded-lg hover:border-amber-600/40 hover:bg-amber-600/15 transition-all duration-300 group">
                <p className="text-xs text-amber-400/80 font-light tracking-wider uppercase mb-2">Call Us</p>
                <a 
                  href="tel:+254715273453" 
                  className="text-white font-light text-lg group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  +254 715 273 453
                </a>
                <p className="text-white/50 text-xs font-light mt-1">Mon-Fri: 8:00 AM - 6:00 PM</p>
              </div>

              {/* Email Section */}
              <div className="p-4 bg-gradient-to-br from-amber-600/10 to-amber-500/5 border border-amber-600/20 rounded-lg hover:border-amber-600/40 hover:bg-amber-600/15 transition-all duration-300 group">
                <p className="text-xs text-amber-400/80 font-light tracking-wider uppercase mb-2">Email</p>
                <a 
                  href="mailto:info@frenaphok.co.ke" 
                  className="text-white font-light text-lg group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>info@frenaphok.co.ke</span>
                </a>
                <p className="text-white/50 text-xs font-light mt-1">Response within 24 hours</p>
              </div>

              {/* Location */}
              <div className="p-4 bg-gradient-to-br from-amber-600/10 to-amber-500/5 border border-amber-600/20 rounded-lg">
                <p className="text-xs text-amber-400/80 font-light tracking-wider uppercase mb-2">Location</p>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-white font-light text-sm">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60 font-light mb-8">
            <p>&copy; 2024 frenaphok LLP Solutions. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-white/60 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Premium Developer Credit */}
          <div className="border-t border-amber-600/20 pt-8">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs text-amber-400/60 font-light tracking-widest uppercase">Crafted with Excellence</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-600/40"></div>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-amber-400 transition-colors duration-300 font-light text-sm tracking-wide"
                >
                  Developed by Arthur Mwakima
                </a>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-600/40"></div>
              </div>
              <p className="text-xs text-white/40 font-light mt-1">Premium IT Solutions & Design</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
