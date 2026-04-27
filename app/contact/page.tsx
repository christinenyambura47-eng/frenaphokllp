import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import QuoteForm from '@/components/quote-form'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us & Get Quote - Frenaphok',
  description: 'Get in touch with Frenaphok for IT and security solutions. Request a free quote for your business needs.',
  openGraph: {
    title: 'Contact Us - Frenaphok',
    description: 'Contact Frenaphok to discuss your IT and security needs or request a quote.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-amber-600/20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-contact.jpg"
              alt="Contact Frenaphok Support"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Contact Us</h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Get in touch with our team for a free consultation and quote
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="p-8 border border-sky-600/10 bg-slate-50 hover:shadow-lg hover:border-sky-600/20 transition-all duration-300 group">
                  <div className="flex gap-4">
                    <div className="p-4 bg-sky-600/10 rounded-lg h-fit group-hover:bg-sky-600/15 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-light text-lg text-slate-900 mb-2">Phone</h3>
                      <a href="tel:+254" className="text-slate-600 hover:text-amber-600 transition-colors font-light">
                        +254 (Phone)
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border border-sky-600/10 bg-slate-50 hover:shadow-lg hover:border-sky-600/20 transition-all duration-300 group">
                  <div className="flex gap-4">
                    <div className="p-4 bg-sky-600/10 rounded-lg h-fit group-hover:bg-sky-600/15 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-light text-lg text-slate-900 mb-2">Email</h3>
                      <a href="mailto:info@frenaphok.com" className="text-slate-600 hover:text-sky-600 transition-colors font-light">
                        info@frenaphok.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border border-sky-600/10 bg-slate-50 hover:shadow-lg hover:border-sky-600/20 transition-all duration-300 group">
                  <div className="flex gap-4">
                    <div className="p-4 bg-sky-600/10 rounded-lg h-fit group-hover:bg-sky-600/15 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-light text-lg text-slate-900 mb-2">Location</h3>
                      <p className="text-slate-600 font-light">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border border-sky-600/10 bg-slate-50 hover:shadow-lg hover:border-sky-600/20 transition-all duration-300 group">
                  <div className="flex gap-4">
                    <div className="p-4 bg-sky-600/10 rounded-lg h-fit group-hover:bg-sky-600/15 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-light text-lg text-slate-900 mb-2">Response Time</h3>
                      <p className="text-slate-600 font-light">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-2">
                <Card className="p-10 border border-amber-600/10 bg-slate-50">
                  <h2 className="text-3xl font-light text-slate-900 mb-8 tracking-tight">Get Your Free Quote</h2>
                  <QuoteForm />
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border border-amber-600/10 rounded-lg p-10 bg-white">
              <h2 className="text-3xl font-light text-slate-900 mb-10 tracking-tight">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-light text-slate-900 mb-3 text-lg">How long does installation take?</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Installation timelines vary depending on the scope and complexity of your project. We provide detailed timelines during the consultation phase.
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-slate-900 mb-3 text-lg">Do you offer installation support?</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Yes, we handle complete installation and configuration of all systems. Professional installation is included in our quotes.
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-slate-900 mb-3 text-lg">What maintenance services do you provide?</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    We provide continuous support and maintenance services to keep your systems running optimally. Maintenance plans can be customized to your needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-slate-900 mb-3 text-lg">Can you work with existing systems?</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Yes, we can integrate new solutions with your existing infrastructure. Our team assesses compatibility during consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
        </section>
      </main>

      <Footer />
    </div>
  )
}
