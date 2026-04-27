import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { services } from '@/lib/services'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.title} - Frenaphok`,
    description: service.details,
    openGraph: {
      title: service.title,
      description: service.details,
    },
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="px-4 py-4 bg-card border-b border-border">
          <div className="container mx-auto max-w-4xl flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-primary-foreground/10 rounded-lg">
                <IconComponent className="w-12 h-12" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-lg opacity-90">{service.description}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.details}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Key Features</h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary">
                          ✓
                        </div>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/10 text-accent">
                          ✓
                        </div>
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <Card className="p-8 bg-primary text-primary-foreground mb-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Let our experts assess your needs and provide you with a customized solution and quote.
              </p>
              <Link href="/contact">
                <Button className="bg-background hover:bg-background/90 text-foreground flex items-center gap-2">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedServices.map((relatedService) => {
                    const RelatedIcon = relatedService.icon
                    return (
                      <Card key={relatedService.id} className="p-6 border border-border hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <RelatedIcon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-bold text-foreground">{relatedService.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{relatedService.description}</p>
                        <Link href={`/services/${relatedService.slug}`}>
                          <Button variant="outline" className="w-full text-sm">
                            Learn More
                          </Button>
                        </Link>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 px-4 bg-card border-t border-border">
          <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/services">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Your Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
