'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [loading, setLoading] = useState(false)

  const handleWhatsAppClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Generate comprehensive auto-quote message
      const autoQuoteMessage = encodeURIComponent(`*AUTOMATIC QUOTE REQUEST*

Hello Frenaphok,

I am interested in receiving a detailed quote for your IT and security solutions.

*Services of Interest:*
✓ CCTV Camera Systems
✓ Biometric Access Control
✓ IP Telephone Systems
✓ Office IT Equipment
✓ Structured Network Installation

*Please provide:*
• Detailed pricing for each service
• Package options and bundles
• Installation and setup timeline
• Service level agreements
• Maintenance and support plans
• Technical specifications

I look forward to your comprehensive quote.

Thank you!`)

      // Open WhatsApp with pre-filled auto-quote request
      window.open(
        `https://wa.me/254715273453?text=${autoQuoteMessage}`,
        '_blank',
        'noopener,noreferrer'
      )

      console.log('[v0] WhatsApp auto-quote request initiated')
    } catch (error) {
      console.error('[v0] WhatsApp error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      disabled={loading}
      className="fixed bottom-8 right-8 z-40 group cursor-pointer"
      aria-label="Get quote on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
      <div className="absolute bottom-16 right-0 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg font-light text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {loading ? 'Generating quote...' : 'Get quote on WhatsApp'}
      </div>
    </button>
  )
}
