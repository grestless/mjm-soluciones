import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MasonryGallery } from "@/components/masonry-gallery"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function SuccessStoriesPage() {
    return (
        <main className="min-h-screen bg-background">
            <FloatingNav />

            <div className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <ScrollReveal direction="up">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                            Historias de <span className="text-accent">Éxito</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Descubre cómo hemos ayudado a nuestros clientes a recuperar la tranquilidad y seguridad en sus espacios.
                        </p>
                    </ScrollReveal>
                </div>


                <ScrollReveal direction="up" delay={200}>
                    <MasonryGallery />
                </ScrollReveal>

                <ScrollReveal direction="up" delay={100}>
                    <TestimonialsSection />
                </ScrollReveal>
            </div>

            <Footer />
        </main>
    )
}
