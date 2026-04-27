'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { services } from '@/lib/services'
import { products } from '@/lib/products'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-b border-amber-600/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-home.jpg"
              alt="IT Security Solutions"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight tracking-tight">
                Secure Your Business with Precision
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Premium IT and security solutions for discerning businesses. CCTV systems, biometric access control, IP telephone systems, and enterprise infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-10 py-6 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                    Get Your Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="px-10 py-6 text-lg font-light tracking-wider border-2 border-sky-600/30 text-slate-900 hover:bg-sky-50 hover:border-sky-600/50">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-white border-b border-amber-600/10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-slate-900 tracking-tight">
              Why Choose frenaphok LLP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'End-to-end solutions from supply to installation',
                'Professional installation and configuration',
                'Continuous support and maintenance',
                'Industry-leading technology partners',
                'Experienced technical team',
                'Competitive pricing and flexible payment',
              ].map((item) => (
                <div key={item} className="flex gap-4 group">
                  <div className="p-1.5 bg-sky-600 rounded-full flex-shrink-0 group-hover:bg-sky-700 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto font-light text-lg">
              Premium IT and security solutions tailored to your business needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <Card key={service.id} className="p-8 border border-sky-600/10 bg-white hover:shadow-xl hover:border-sky-600/20 transition-all duration-300 flex flex-col h-full group">
                    <div className="relative w-full h-32 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-sky-600/10 rounded-lg group-hover:bg-sky-600/15 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-sky-600" />
                      </div>
                      <h3 className="text-xl font-light text-slate-900">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-8 flex-grow font-light leading-relaxed">{service.description}</p>
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="outline" className="w-full border-sky-600/20 text-slate-900 font-light hover:bg-sky-50 hover:border-sky-600/40 transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-16">
              <Link href="/services">
                <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-8 py-3 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Products & Services Section */}
        <section className="py-24 px-4 bg-white border-b border-amber-600/10">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-slate-900 tracking-tight">
              Request a Price Quote
            </h2>
            <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto font-light text-lg">
              Choose from our comprehensive range of premium IT and security products and services
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {products.map((product) => {
                const IconComponent = product.icon
                return (
                  <Card key={product.id} className="p-8 border border-sky-600/10 bg-gradient-to-br from-white to-slate-50 hover:shadow-xl hover:border-sky-600/20 transition-all duration-300 flex flex-col group">
                    <div className="relative w-full h-32 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-sky-600/10 rounded-lg group-hover:bg-sky-600/15 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-sky-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-light text-slate-900 text-center mb-3">{product.title}</h3>
                    <p className="text-slate-600 text-sm font-light text-center mb-6 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    <div className="text-center pt-4 border-t border-amber-600/10">
                      <p className="text-sky-600 font-light text-sm">{product.price}</p>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => {
                  const message = encodeURIComponent(
                    '*AUTOMATIC QUOTE REQUEST*\n\nHello Frenaphok,\n\nI am interested in receiving a detailed quote for your IT and security solutions.\n\n*Services of Interest:*\n✓ CCTV Camera Systems\n✓ Biometric Access Control\n✓ IP Telephone Systems\n✓ Office IT Equipment\n✓ Structured Network Installation\n\n*Please provide:*\n• Detailed pricing for each service\n• Package options and bundles\n• Installation and setup timeline\n• Service level agreements\n• Maintenance and support plans\n• Technical specifications\n\nI look forward to your comprehensive quote.\n\nThank you!'
                  )
                  window.open(`https://wa.me/254715273453?text=${message}`, '_blank', 'noopener,noreferrer')
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.915 1.227l-.353-.177-3.658-.343.349 3.807a9.87 9.87 0 00-1.564 5.034C2.5 19.52 7.56 24 13.5 24c2.928 0 5.674-.996 7.872-2.888l.321.179 3.588.662-.647-3.72a9.87 9.87 0 001.588-5.108c0-5.466-4.424-9.909-9.88-9.909z"></path>
                </svg>
                Get Quote on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Custom Quote Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white border-b border-amber-600/10">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
                  Need a Custom Solution?
                </h2>
                <p className="text-lg text-slate-700 mb-8 font-light leading-relaxed">
                  Our solutions are tailored to your specific business requirements. Whether you need a combination of services or have unique specifications, our expert team will design a custom package that perfectly fits your needs.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-light">Comprehensive needs assessment</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-light">Customized solution design</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-light">Flexible pricing options</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-light">Dedicated project management</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-10 py-4 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                    Request Custom Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex-1">
                <Card className="p-10 border border-sky-600/10 bg-gradient-to-br from-sky-50 to-slate-50">
                  <h3 className="text-2xl font-light text-slate-900 mb-6">Why Choose Custom Solutions?</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-light text-slate-900 mb-2">Exact Fit</h4>
                      <p className="text-slate-700 font-light">Get exactly what you need, nothing more, nothing less.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-slate-900 mb-2">Cost Efficient</h4>
                      <p className="text-slate-700 font-light">Pay only for what you use, optimized for your budget.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-slate-900 mb-2">Future Proof</h4>
                      <p className="text-slate-700 font-light">Scalable solutions that grow with your business.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-slate-900 mb-2">Expert Support</h4>
                      <p className="text-slate-700 font-light">Dedicated team for installation and maintenance.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-24 px-4 bg-white border-b border-amber-600/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Location Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8 text-slate-900 tracking-tight">
                  Visit Our Office
                </h2>
                <div className="space-y-8">
                  <div className="p-8 bg-gradient-to-br from-sky-600/10 to-sky-500/5 border border-sky-600/20 rounded-lg">
                    <h3 className="text-2xl font-light text-slate-900 mb-4">frenaphok LLP Solutions</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                        </svg>
                        <div>
                          <p className="text-sm text-sky-600/70 font-light uppercase tracking-wider mb-1">Address</p>
                          <p className="text-lg text-slate-900 font-light">CityView Building, 1st Floor</p>
                          <p className="text-lg text-slate-900 font-light">Ngara, Nairobi</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        <div>
                          <p className="text-sm text-sky-600/70 font-light uppercase tracking-wider mb-1">Phone</p>
                          <a href="tel:+254715273453" className="text-lg text-sky-600 hover:text-sky-700 font-light transition-colors">
                            +254 715 273 453
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <svg className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <div>
                          <p className="text-sm text-sky-600/70 font-light uppercase tracking-wider mb-1">Email</p>
                          <a href="mailto:info@frenaphok.co.ke" className="text-lg text-sky-600 hover:text-sky-700 font-light transition-colors">
                            info@frenaphok.co.ke
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-sky-50 border border-sky-200 rounded-lg">
                    <p className="text-sm text-sky-900 font-light">
                      <span className="font-semibold">Business Hours:</span><br/>
                      Monday - Friday: 8:00 AM - 6:00 PM<br/>
                      Saturday: 10:00 AM - 3:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-xl border border-sky-600/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7479876543!2d36.84159!3d-1.28784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4f7c7c7c7%3A0x1234567890abcdef!2sCityView%20Building%2C%20Ngara%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890123"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 md:h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-amber-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
              Get a free quote for your IT and security needs. Our team will contact you within 24 hours.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-10 py-4 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
