'use client'

import Link from 'next/link'
import { Mail, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white/90 py-4 border-b border-amber-600/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-light tracking-wide">
            <a
              href="tel:+254715273453"
              className="flex items-center gap-3 text-white/80 hover:text-amber-400 transition-colors duration-300 group"
            >
              <div className="p-2 bg-amber-600/10 group-hover:bg-amber-600/20 rounded-md transition-colors duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <span>+254 715 273 453</span>
            </a>
            <span className="hidden sm:block text-amber-600/40">|</span>
            <a
              href="mailto:info@frenaphok.co.ke"
              className="flex items-center gap-3 text-white/80 hover:text-amber-400 transition-colors duration-300 group"
            >
              <div className="p-2 bg-amber-600/10 group-hover:bg-amber-600/20 rounded-md transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <span>info@frenaphok.co.ke</span>
            </a>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-light hidden sm:block text-white/60 uppercase tracking-widest">Connect</span>
            <div className="flex gap-1">
              <a
                href="https://facebook.com/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/60 hover:text-amber-400 hover:bg-amber-600/15 rounded transition-all duration-300 border border-white/10 hover:border-amber-600/30"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com/company/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/60 hover:text-amber-400 hover:bg-amber-600/15 rounded transition-all duration-300 border border-white/10 hover:border-amber-600/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/60 hover:text-amber-400 hover:bg-amber-600/15 rounded transition-all duration-300 border border-white/10 hover:border-amber-600/30"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com/frenaphok"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-white/60 hover:text-amber-400 hover:bg-amber-600/15 rounded transition-all duration-300 border border-white/10 hover:border-amber-600/30"
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
