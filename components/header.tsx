'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TopHeader from './top-header'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopHeader />
      <div className="border-b border-amber-600/20">
        <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-5 px-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg opacity-25 group-hover:opacity-40 blur transition duration-300"></div>
              <Image
                src="/logo.jpg"
                alt="Frenaphok LLP Logo"
                width={56}
                height={56}
                className="relative rounded-lg shadow-xl border-2 border-amber-600/30 group-hover:border-amber-600/60 group-hover:shadow-2xl transition-all duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-light text-lg tracking-wider text-slate-900 leading-tight">
                frenaphok
              </span>
              <span className="text-xs text-amber-600 font-semibold tracking-widest uppercase">
                LLP Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="ghost" className="text-slate-700 font-light tracking-wide hover:text-amber-600 transition-colors duration-300 hover:bg-amber-50">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-amber-50 rounded transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 px-2 flex flex-col gap-3 border-t border-amber-600/10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-slate-700 font-light hover:text-amber-600 hover:bg-amber-50">
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-light tracking-wider rounded-sm">
                Get Quote
              </Button>
            </Link>
          </div>
        )}
        </div>
      </div>
    </header>
  )
}
