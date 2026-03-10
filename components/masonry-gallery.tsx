"use client"

import { SensitiveContentWrapper } from "@/components/sensitive-content-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"

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
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            const maxScroll = scrollWidth - clientWidth

            // Update progress bar
            const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
            setScrollProgress(progress)

            // Update button states
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < maxScroll - 5)
        }
    }

    // Initial check on mount
    useEffect(() => {
        handleScroll()
        window.addEventListener('resize', handleScroll)
        return () => window.removeEventListener('resize', handleScroll)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollAmount = window.innerWidth < 768 ? container.clientWidth : 600 + 24 // card width + gap

            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-accent bg-gradient-to-r from-primary to-primary/60">
                        Evidencia Visual
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Resultados reales de nuestros tratamientos.
                        <span className="block text-sm mt-2 text-primary/80 font-medium">
                            * Algunas imágenes pueden ser impresionantes para personas sensibles.
                        </span>
                    </p>
                </div>

                <SensitiveContentWrapper className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-card/10">
                    <div className="relative">
                        {/* Navigation Controls positioned absolutely on larger screens */}
                        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 right-4 justify-between items-center z-20 pointer-events-none">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className="pointer-events-auto rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary shadow-lg transition-all disabled:opacity-30 disabled:hover:border-primary/20"
                            >
                                <ChevronLeft className="w-6 h-6 text-primary" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className="pointer-events-auto rounded-full w-12 h-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary shadow-lg transition-all disabled:opacity-30 disabled:hover:border-primary/20"
                            >
                                <ChevronRight className="w-6 h-6 text-primary" />
                            </Button>
                        </div>
                        {/* Horizontal scroll container with snap */}
                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 md:px-8 py-8 hide-scrollbar backdrop-blur-sm relative"
                        >
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] md:h-[500px]"
                                >
                                    <ScrollReveal direction="up" delay={index * 100} className="h-full w-full">
                                        <div className="h-full w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-primary/10 group relative">
                                            {/* Hover overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                loading="lazy"
                                            />
                                        </div>
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Progress Bar */}
                    <div className="max-w-md mx-auto mt-2 mb-6 px-8 relative z-20">
                        <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${Math.max(5, scrollProgress)}%` }}
                            />
                        </div>
                    </div>
                </SensitiveContentWrapper>
            </div>
        </section>
    )
}
