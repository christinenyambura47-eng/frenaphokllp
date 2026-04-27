import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Terms of Service - Frenaphok',
  description: 'Terms of Service for Frenaphok IT and Security Solutions',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b border-amber-600/20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-contact.jpg"
              alt="Terms of Service"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">Terms of Service</h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Please read these terms carefully
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-10 border border-amber-600/10 bg-slate-50">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">1. Acceptance of Terms</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    By accessing and using the Frenaphok website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">2. Use License</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) on Frenaphok's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-slate-700 font-light">• Modify or copy the materials</li>
                    <li className="text-slate-700 font-light">• Use the materials for any commercial purpose or for any public display</li>
                    <li className="text-slate-700 font-light">• Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li className="text-slate-700 font-light">• Remove any copyright or other proprietary notations from the materials</li>
                    <li className="text-slate-700 font-light">• Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">3. Disclaimer</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    The materials on Frenaphok's website are provided "as is". Frenaphok makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">4. Limitations</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    In no event shall Frenaphok or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Frenaphok's website, even if Frenaphok or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">5. Accuracy of Materials</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    The materials appearing on Frenaphok's website could include technical, typographical, or photographic errors. Frenaphok does not warrant that any of the materials on the website are accurate, complete, or current. Frenaphok may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">6. Links</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    Frenaphok has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Frenaphok of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">7. Modifications</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    Frenaphok may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">8. Governing Law</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">9. Services and Products</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    When using Frenaphok services:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-slate-700 font-light">• You agree to provide accurate information in all quote requests and forms</li>
                    <li className="text-slate-700 font-light">• You agree to pay for services rendered according to agreed-upon terms</li>
                    <li className="text-slate-700 font-light">• You agree to comply with all applicable laws and regulations</li>
                    <li className="text-slate-700 font-light">• You understand that quotes are subject to site survey and actual requirements assessment</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">10. Limitation of Liability</h2>
                  <p className="text-slate-700 font-light leading-relaxed">
                    In no case shall Frenaphok, its managers, members, employees, or agents be liable to you or any third party for any direct, indirect, incidental, special, punitive, or consequential damages resulting from any materials, products, or services offered on this website, regardless of whether Frenaphok has been advised of the possibility of such damages.
                  </p>
                </div>

                <div className="border-t border-amber-600/10 pt-8">
                  <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">11. Contact Information</h2>
                  <p className="text-slate-700 font-light leading-relaxed mb-4">
                    For questions about these Terms of Service, please contact us at:
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
