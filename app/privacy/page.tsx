import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Privacy Policy - Frenaphok',
  description: 'Privacy Policy for Frenaphok IT and Security Solutions',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-amber-600/20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-contact.jpg"
              alt="Privacy Policy"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Your privacy is important to us
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-10 border border-amber-600/10 bg-slate-50">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">1. Introduction</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    Frenaphok ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us, or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">2. Information We Collect</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may collect on the site includes:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-slate-700 font-light">
                      <strong>Personal Data:</strong> Name, email address, phone number, company name, and other details you provide through forms or inquiries
                    </li>
                    <li className="text-slate-700 font-light">
                      <strong>Technical Data:</strong> IP address, browser type, operating system, and pages visited
                    </li>
                    <li className="text-slate-700 font-light">
                      <strong>Communication Data:</strong> Records of communications between you and Frenaphok
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">3. How We Use Your Information</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    We use the information we collect in the following ways:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-slate-700 font-light">• To provide, maintain, and improve our services</li>
                    <li className="text-slate-700 font-light">• To respond to your inquiries and customer support requests</li>
                    <li className="text-slate-700 font-light">• To send periodic emails regarding quotes, updates, or other service-related information</li>
                    <li className="text-slate-700 font-light">• To monitor and analyze usage and trends for website improvement</li>
                    <li className="text-slate-700 font-light">• To comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">4. Data Security</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">5. Third-Party Services</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    We may share your information with third-party service providers who assist us in operating our website and conducting our business, such as email service providers and analytics platforms. These providers are contractually obligated to use your information only as necessary to provide services to us.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">6. WhatsApp and Communication Platforms</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    When you contact us via WhatsApp or other communication platforms, your messages and any information provided will be processed according to this Privacy Policy and the respective platform's privacy terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">7. Your Rights</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal data, including:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-slate-700 font-light">• Right to access your personal data</li>
                    <li className="text-slate-700 font-light">• Right to correct inaccurate information</li>
                    <li className="text-slate-700 font-light">• Right to request deletion of your data</li>
                    <li className="text-slate-700 font-light">• Right to opt-out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">8. Changes to This Policy</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the "last updated" date.
                  </p>
                </div>

                <div className="border-t border-amber-600/10 pt-8">
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">9. Contact Us</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="text-slate-700 font-light">
                    <p>Email: <a href="mailto:info@frenaphok.com" className="text-amber-600 hover:text-amber-700">info@frenaphok.com</a></p>
                    <p>Phone: <a href="tel:+254" className="text-amber-600 hover:text-amber-700">+254 (Contact)</a></p>
                    <p>Location: Nairobi, Kenya</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 font-light">Last updated: {new Date().getFullYear()}</p>
              </div>
            </Card>

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
