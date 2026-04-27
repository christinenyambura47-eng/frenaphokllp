import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { services } from '@/lib/services'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services - Frenaphok IT & Security Solutions',
  description: 'Explore Frenaphok\'s comprehensive IT and security solutions: CCTV systems, biometric access control, IP phones, IT equipment, and network installation.',
  openGraph: {
    title: 'Our Services',
    description: 'Complete IT and security solutions including CCTV, biometrics, IP phones, IT equipment, and network installation.',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-amber-600/20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-services.jpg"
              alt="IT Security Services"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Our Services</h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Comprehensive IT and security solutions for your business
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Card key={service.id} className="p-10 border border-sky-600/10 bg-white hover:shadow-xl hover:border-sky-600/20 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row gap-10">
                      <div className="flex-shrink-0">
                        <div className="relative w-full md:w-80 h-48 mb-6 md:mb-0 rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-5 bg-sky-600/10 rounded-lg w-fit group-hover:bg-sky-600/15 transition-colors duration-300 mx-auto md:mx-0">
                          <IconComponent className="w-10 h-10 text-sky-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900 tracking-tight">
                          {service.title}
                        </h2>
                        <p className="text-slate-700 mb-8 text-lg leading-relaxed font-light">
                          {service.details}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                          <div>
                            <h3 className="font-light text-slate-900 mb-4">Key Features:</h3>
                            <ul className="space-y-3">
                              {service.features.map((feature) => (
                                <li key={feature} className="text-slate-600 flex gap-3 font-light">
                                  <span className="text-sky-600 font-bold">✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-light text-slate-900 mb-4">Benefits:</h3>
                            <ul className="space-y-3">
                              {service.benefits.map((benefit) => (
                                <li key={benefit} className="text-slate-600 flex gap-3 font-light">
                                  <span className="text-sky-600 font-bold">✓</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <Link href="/contact">
                          <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                            Request Quote <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-amber-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Need a Custom Solution?</h2>
            <p className="text-lg mb-10 text-white/80 font-light leading-relaxed">
              We can tailor our services to meet your specific business requirements.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-10 py-4 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
