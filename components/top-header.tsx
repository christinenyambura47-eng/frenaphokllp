'use client'

import Link from 'next/link'
import { Mail, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-700 text-white/90 py-4 border-b border-sky-400/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-light tracking-wide">
            <a
              href="tel:+254715273453"
              className="flex items-center gap-3 text-white hover:text-sky-200 transition-colors duration-300 group"
            >
              <div className="p-2 bg-sky-500/20 group-hover:bg-sky-500/30 rounded-md transition-colors duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">+254 715 273 453</span>
            </a>
            <span className="hidden sm:block text-sky-300/50">|</span>
            <a
              href="mailto:info@frenaphok.co.ke"
              className="flex items-center gap-3 text-white hover:text-sky-200 transition-colors duration-300 group"
            >
              <div className="p-2 bg-sky-500/20 group-hover:bg-sky-500/30 rounded-md transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">info@frenaphok.co.ke</span>
            </a>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-light hidden sm:block text-white/80 uppercase tracking-widest">Connect</span>
            <div className="flex gap-1">
              <a
                href="https://facebook.com/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white hover:text-sky-200 hover:bg-sky-500/20 rounded transition-all duration-300 border border-white/20 hover:border-sky-400/50"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com/company/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white hover:text-sky-200 hover:bg-sky-500/20 rounded transition-all duration-300 border border-white/20 hover:border-sky-400/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white hover:text-sky-200 hover:bg-sky-500/20 rounded transition-all duration-300 border border-white/20 hover:border-sky-400/50"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white hover:text-sky-200 hover:bg-sky-500/20 rounded transition-all duration-300 border border-white/20 hover:border-sky-400/50"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
