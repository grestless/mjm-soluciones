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
                <div className="max-w-7xl mx-auto text-left md:text-center mb-20 md:mb-32">
                    <ScrollReveal direction="up">
                        <span className="text-primary font-heading font-black uppercase tracking-[0.3em] text-sm mb-4 block">
                            Experiencias
                        </span>
                        <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-balance leading-[1.1] tracking-tighter">
                            Historias de <span className="text-primary underline decoration-accent/30 underline-offset-8">Éxito</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-sans font-medium text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
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
