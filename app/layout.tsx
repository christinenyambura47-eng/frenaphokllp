import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from '@/components/whatsapp-button'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Frenaphok - IT & Security Solutions in Kenya',
  description: 'Leading IT and security solutions company in Kenya. CCTV cameras, biometric access control, IP telephone systems, office IT equipment, and structured network installations.',
  keywords: 'CCTV cameras, biometric access control, IT solutions Kenya, IP telephone systems, network installation, security solutions',
  generator: 'v0.app',
  openGraph: {
    title: 'Frenaphok - IT & Security Solutions in Kenya',
    description: 'Leading IT and security solutions company in Kenya specializing in CCTV, biometrics, and network installations.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'Frenaphok',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frenaphok - IT & Security Solutions',
    description: 'End-to-end IT and security solutions for Kenya',
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
