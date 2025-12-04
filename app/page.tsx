import { FloatingNav } from "@/components/floating-nav"
import { HeroBento } from "@/components/hero-bento"
import { BenefitsSection } from "@/components/benefits-section"
import { ProductsGallery } from "@/components/products-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { RotatingTextSeparator } from "@/components/rotating-text-separator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <HeroBento />
      <ScrollReveal direction="up" delay={200}>
        <div id="beneficios">
          <BenefitsSection />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200}>
        <div id="productos">
          <ProductsGallery />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200}>
        <RotatingTextSeparator />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200}>
        <div id="casos">
          <TestimonialsSection limit={3} />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200}>
        <div id="equipo">
          <TeamSection />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200}>
        <div id="contacto">
          <ContactSection />
        </div>
      </ScrollReveal>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "M.J.M Soluciones Ecológicas",
            image: "https://mjmsoluciones.com/placeholder-logo.png",
            "@id": "https://mjmsoluciones.com",
            url: "https://mjmsoluciones.com",
            telephone: "+5493813321573",
            email: "contacto@mjmsoluciones.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tucumán",
              addressRegion: "Tucumán",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -26.8083,
              longitude: -65.2176,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "21:00",
            },
            priceRange: "$$",
          }),
        }}
      />
    </main>
  )
}
