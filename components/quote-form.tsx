'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    // Phone validation (basic)
    if (formData.phone.length < 10) {
      setError('Please enter a valid phone number')
      setLoading(false)
      return
    }

    try {
      // Submit to API
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit quote')
      }

      const data = await response.json()
      console.log('[v0] Quote submitted successfully:', data)

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('[v0] Quote submission error:', err)
      setError('Failed to submit quote request. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
        <div className="flex items-start gap-4">
          <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-light text-xl text-slate-900 mb-2">Quote Request Submitted!</h3>
            <p className="text-slate-700 font-light leading-relaxed">
              Thank you for your interest. Our team will review your request and contact you within 24 hours. Check your email and WhatsApp for the automatic quote confirmation.
            </p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-light text-slate-900 mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full bg-white border-amber-600/20 focus:border-amber-600 focus:ring-amber-600/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-light text-slate-900 mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full bg-white border-amber-600/20 focus:border-amber-600 focus:ring-amber-600/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-light text-slate-900 mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254 7XX XXX XXX"
            required
            className="w-full bg-white border-amber-600/20 focus:border-amber-600 focus:ring-amber-600/20"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-light text-slate-900 mb-2">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full bg-white border-amber-600/20 focus:border-amber-600 focus:ring-amber-600/20"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="service" className="block text-sm font-light text-slate-900 mb-2">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-amber-600/20 rounded-md bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 font-light"
          >
            <option value="">Select a service...</option>
            <option value="cctv">CCTV Camera Systems</option>
            <option value="biometrics">Biometric Access Control</option>
            <option value="ip-phones">IP Telephone Systems</option>
            <option value="it-equipment">Office IT Equipment</option>
            <option value="networks">Structured Network Installation</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-light text-slate-900 mb-2">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your specific needs..."
            rows={5}
            className="w-full px-3 py-2 border border-amber-600/20 rounded-md bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 font-light"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 text-lg font-light tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {loading ? 'Submitting...' : 'Get Your Quote'}
      </Button>

      <p className="text-sm text-slate-600 text-center font-light">
        We&apos;ll respond to your request within 24 hours. An automatic quote will be generated and sent to your email and WhatsApp.
      </p>
    </form>
  )
}
