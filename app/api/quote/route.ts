import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate quote template
    const quoteTemplate = `
FRENAPHOK - IT & SECURITY SOLUTIONS
====================================
QUOTE REQUEST CONFIRMATION

Thank you for your interest in Frenaphok's premium IT and security solutions.

CUSTOMER DETAILS:
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'N/A'}

SERVICE REQUESTED:
${service}

ADDITIONAL REQUIREMENTS:
${message || 'None specified'}

====================================
NEXT STEPS:
1. Our team will review your request
2. A detailed quote will be prepared
3. You will be contacted within 24 hours

For urgent inquiries, please call us directly
or reach out on WhatsApp: https://wa.me/254715273453

Thank you for choosing Frenaphok!
====================================
    `

    // Log the quote (in production, send email here)
    console.log('[v0] Quote submitted:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // Prepare WhatsApp message with quote
    const whatsappMessage = encodeURIComponent(
      `Hello Frenaphok,\n\nI have submitted a quote request for ${service}.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nPlease send me a detailed quote.\n\nThank you!`
    )

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully',
        quote: quoteTemplate,
        whatsappLink: `https://wa.me/254715273453?text=${whatsappMessage}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Quote API error:', error)
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}
