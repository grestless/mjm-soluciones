import { FloatingNav } from "@/components/floating-nav"
import { HeroSection } from "@/components/ui/glassmorphism-trust-hero"
import { BenefitsSection } from "@/components/benefits-section"
import { ProductsGallery } from "@/components/products-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { RotatingTextSeparator } from "@/components/rotating-text-separator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <HeroSection />
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <div id="productos">
        <ProductsGallery />
      </div>
      <RotatingTextSeparator />
      <div id="casos">
        <TestimonialsSection limit={3} />
      </div>
      <div id="equipo">
        <TeamSection />
      </div>
      <div id="contacto">
        <ContactSection />
      </div>
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
