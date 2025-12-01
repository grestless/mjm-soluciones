import { FloatingNav } from "@/components/floating-nav"
import { HeroBento } from "@/components/hero-bento"
import { BenefitsSection } from "@/components/benefits-section"
import { ProductsGallery } from "@/components/products-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <div id="inicio">
        <HeroBento />
      </div>
      <ScrollReveal direction="up">
        <div id="beneficios">
          <BenefitsSection />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <div id="productos">
          <ProductsGallery />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <div id="casos">
          <TestimonialsSection />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <div id="equipo">
          <TeamSection />
        </div>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100}>
        <div id="contacto">
          <ContactSection />
        </div>
      </ScrollReveal>
      <Footer />
    </main>
  )
}
