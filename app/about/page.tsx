import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Award, Users, Target, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Frenaphok - IT & Security Solutions Company Kenya',
  description: 'Learn about Frenaphok, Kenya\'s leading IT and security solutions provider. Our mission, values, and commitment to excellence.',
  openGraph: {
    title: 'About Frenaphok',
    description: 'Learn about our company, mission, and what drives us to deliver exceptional IT and security solutions in Kenya.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-amber-600/20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-about.jpg"
              alt="About Frenaphok Team"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">About frenaphok LLP</h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Kenya&apos;s trusted partner for comprehensive CCTV solutions
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 px-4 bg-slate-50 border-b border-amber-600/10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-10 text-slate-900 tracking-tight">Who We Are</h2>
            <div className="bg-gradient-to-br from-amber-600/10 to-amber-500/5 border border-amber-600/20 rounded-lg p-10 mb-10">
              <p className="text-xl text-slate-900 mb-6 leading-relaxed font-light">
                <span className="text-amber-600 font-semibold">frenaphok LLP End Solutions</span> — We provide solutions where there seems to be none.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed font-light">
                Working towards the client vision, as a tech group we are best suited to be part of your present and future projects. We transform complex IT and security challenges into seamless, reliable solutions that drive your business forward.
              </p>
            </div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed font-light">
              Headquartered in Nairobi, Kenya, we specialize in CCTV camera systems, biometric access control, IP telephone systems, office IT equipment supply and support, and structured network installations. Our comprehensive approach ensures that every aspect of your IT and security infrastructure is properly planned, installed, configured, and maintained.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-light">
              Our experienced team is committed to delivering solutions that exceed expectations, providing you with peace of mind and operational excellence every step of the way.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 px-4 bg-white border-b border-amber-600/10">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-light mb-6 text-slate-900 flex items-center gap-3 tracking-tight">
                  <Target className="w-7 h-7 text-amber-600" />
                  Our Mission
                </h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  To provide comprehensive, reliable, and innovative IT and security solutions that enable businesses in Kenya to operate securely, efficiently, and with confidence. We aim to be the trusted partner for organizations seeking end-to-end security and IT infrastructure solutions.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-light mb-6 text-slate-900 flex items-center gap-3 tracking-tight">
                  <Zap className="w-7 h-7 text-amber-600" />
                  Our Values
                </h2>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-light text-xl">•</span>
                    <span className="font-light"><strong className="text-slate-900">Excellence:</strong> Quality in every solution we deliver</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-light text-xl">•</span>
                    <span className="font-light"><strong className="text-slate-900">Integrity:</strong> Honest and transparent dealings</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-light text-xl">•</span>
                    <span className="font-light"><strong className="text-slate-900">Innovation:</strong> Staying ahead with latest technology</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 font-light text-xl">•</span>
                    <span className="font-light"><strong className="text-slate-900">Reliability:</strong> Consistent and dependable service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-16 text-center text-slate-900 tracking-tight">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border border-amber-600/10 bg-white hover:shadow-lg hover:border-amber-600/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600/10 rounded-lg group-hover:bg-amber-600/15 transition-colors duration-300">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-3 text-slate-900">Industry Experience</h3>
                    <p className="text-slate-600 font-light">Years of proven expertise in IT and security solutions with satisfied clients across Kenya.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border border-amber-600/10 bg-white hover:shadow-lg hover:border-amber-600/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600/10 rounded-lg group-hover:bg-amber-600/15 transition-colors duration-300">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-3 text-slate-900">Expert Team</h3>
                    <p className="text-slate-600 font-light">Skilled professionals trained on latest technologies and best practices.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border border-amber-600/10 bg-white hover:shadow-lg hover:border-amber-600/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600/10 rounded-lg group-hover:bg-amber-600/15 transition-colors duration-300">
                    <Target className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-3 text-slate-900">Complete Solutions</h3>
                    <p className="text-slate-600 font-light">From consultation to installation, configuration, and ongoing support.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border border-amber-600/10 bg-white hover:shadow-lg hover:border-amber-600/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-600/10 rounded-lg group-hover:bg-amber-600/15 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light mb-3 text-slate-900">24/7 Support</h3>
                    <p className="text-slate-600 font-light">Continuous technical support and maintenance to keep your systems running smoothly.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-amber-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Let&apos;s Work Together</h2>
            <p className="text-lg mb-10 text-white/80 font-light leading-relaxed">
              Ready to secure your business with our comprehensive IT and security solutions?
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
