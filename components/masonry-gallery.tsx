"use client"

import { SensitiveContentWrapper } from "@/components/sensitive-content-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

// Mock data for the gallery - using placeholders or existing images if available
// Since I don't have specific insect images, I'll use placeholders for now
const galleryImages = [
    {
        src: "/images/bichos/horizontalCuc.jpg",
        alt: "Control de plagas efectivo",

    },
    {
        src: "/images/bichos/verticalMuchas.jpg",
        alt: "Resultado en cultivo",

    },
    {
        src: "/images/bichos/normalHogar.jpg",
        alt: "Inspección detallada",

    },
    {
        src: "/images/bichos/horizontalMuchas.jpg",
        alt: "Prevención de insectos",

    },
    {
        src: "/images/bichos/horizontalPocas.jpg",
        alt: "Tratamiento natural",

    },


]

export function MasonryGallery() {
    const getBentoClass = (index: number) => {
        switch (index) {
            case 1: // verticalMuchas - Left Vertical
                return "md:col-span-1 md:row-span-2 md:order-1"
            case 0: // horizontalCuc - Top Right Wide
                return "md:col-span-2 md:row-span-1 md:order-2"
            case 2: // normalHogar - Middle Right 1
                return "md:col-span-1 md:row-span-1 md:order-3"
            case 3: // horizontalMuchas - Middle Right 2
                return "md:col-span-1 md:row-span-1 md:order-4"
            case 4: // horizontalPocas - Bottom Full
                return "md:col-span-3 md:row-span-1 md:order-5"
            default:
                return "md:col-span-1 md:order-6"
        }
    }

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Evidencia Visual</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Resultados reales de nuestros tratamientos.
                        <span className="block text-sm mt-2 text-accent font-medium">
                            * Algunas imágenes pueden ser impresionantes para personas sensibles.
                        </span>
                    </p>
                </div>

                <SensitiveContentWrapper className="rounded-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/20">
                        {galleryImages.map((image, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 50} className={getBentoClass(index)}>
                                <div className="h-full w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </SensitiveContentWrapper>
            </div>
        </section>
    )
}
