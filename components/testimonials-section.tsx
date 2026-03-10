"use client"

import { Card } from "@/components/ui/card"
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"

interface TestimonialsSectionProps {
  limit?: number
}

export function TestimonialsSection({ limit }: TestimonialsSectionProps) {
  const testimonials = [
    {
      quote:
        "Yo compre sus productos y me resulto 100% estoy muy conforme. Muchas veces la gente no cree pero en mi casa no quedó ni una cucaracha. El producto vale la pena y la gente que tiene ese problema lo tiene que conocer.",
      author: "Sergio Vera",
      role: "Comerciante",
      ubicacion: "Catamarca",
      initials: "SV",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      quote: "Buen dia! Nosotras habíamos probado todos los venenos que existen para las cucarachas, estabamos llenas de esas que son chiquitas, eran un montón, desde que nos llevo este veneno, no quedo NINGUNA! La verdad es muy bueno y los felicito por vender algo asi de eficiente! ",
      author: "Camila",
      role: "Hogar",
      ubicacion: "Termas de Rio Hondo",
      initials: "CA",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      quote: "Funciona 100% probe de todo, hasta hice fumigar con profesionales... cuando me trajeron estas bolsitas no les tenia fe jaja pero como ya la teniamos, la probamos y NO ME QUEDO NI UNA!! Si son de Tucuman les recontra recomiendo. La verdad me sorprendi, hay que hacer el tratamiento al pie de a letra tal cual te lo explican y funciona",
      author: "Erika Navarro",
      role: "Hogar",
      ubicacion: "Tucuman",
      initials: "EN",
      gradient: "from-orange-400 to-red-600"
    },
    {
      quote: "De a poco se van muriendo. La verdad que es muy efectivo el veneno 💪💪 Hoy se limpio en todos los lugares y sacamos bastantes",
      author: "Carlos Alvarado",
      role: "Comerciante",
      ubicacion: "Tucuman",
      initials: "CA",
      gradient: "from-primary to-primary/60"
    },
    {
      quote: "Muertas, muertas y mas muertas 👏👏👏💃 por fin estoy ganándoles la guerra jaja. Todavia me quedan bolsitas pero en unos dias seguro te voy a estar escribiendo asi tenga para poner cuando ya no haya más",
      author: "Jeremias Ponce",
      role: "Hogar",
      ubicacion: "Salta",
      initials: "JP",
      gradient: "from-green-800 to-green-400"
    },
    {
      quote: "Buenas noches chicos, anoche pusimos varias tapitas de gaseosas y hoy cuando nos levantamos encontramos las tapitas vacias, y hoy vimos que dejaron de andar las cucarachas, eficas el veneno",
      author: "Julian Villalba",
      role: "Comerciante",
      ubicacion: "Santiago del Estero",
      initials: "SV",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      quote: "Excelente chicos! Muy recomendable. Ni una cucaracha, desaparecieron todas! Tanto me costo y compre de todo. Gracias por su eficacia! Bendiciones.",
      author: "Isabel",
      role: "Hogar",
      ubicacion: "Catamarca",
      initials: "I",
      gradient: "from-blue-800 to-blue-400"
    },
    {
      quote: "Chicos, una belleza el veneno para garrapatas. Mi perrita estaba minada de esos bichos y por suerte se le cayeron todos.",
      author: "Romina",
      role: "Dueña de perro",
      ubicacion: "Tucuman",
      initials: "R",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      quote: "Buen dia! Anoche puse por primera vez y este es el resultado estamos muy sorprendidos 👏👏",
      author: "Bianca",
      role: "Hogar",
      ubicacion: "Chilecito",
      initials: "B",
      gradient: "from-orange-400 to-red-600"
    },
    {
      quote: "Muy bueno y eficaz el veneno 💪 si pueden hagan uno para los mosquitos 😂 Saludos y bendiciones.",
      author: "Leandro",
      role: "Hogar",
      ubicacion: "Santiago del Estero",
      initials: "L",
      gradient: "from-green-800 to-green-400"
    },
  ]

  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials

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
      setCanScrollRight(scrollLeft < maxScroll - 5) // -5px buffer for rounding errors
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
      const scrollAmount = window.innerWidth < 768 ? container.clientWidth : 450 + 32 // card width + gap

      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 px-0 md:px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

      <ScrollReveal direction="up" className="max-w-7xl mx-auto relative px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-clip-text text-accent bg-gradient-to-r from-primary to-primary/60">
            Voces de Confianza
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Testimonios de clientes satisfechos con nuestros productos.
          </p>
        </div>

        {/* Navigation Controls positioned absolutely on larger screens */}
        <div className="hidden md:flex absolute top-[55%] -translate-y-1/2 left-[-1.5rem] right-[-1.5rem] justify-between items-center z-20 pointer-events-none px-0">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="pointer-events-auto rounded-full w-12 h-12 bg-background border-primary/20 hover:border-primary shadow-md transition-all disabled:opacity-30 disabled:hover:border-primary/20"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="pointer-events-auto rounded-full w-12 h-12 bg-background border-primary/20 hover:border-primary shadow-md transition-all disabled:opacity-30 disabled:hover:border-primary/20"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 pt-4 hide-scrollbar px-4 lg:px-0"
        >
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="snap-start shrink-0 w-[85vw] md:w-[400px] lg:w-[420px] h-auto py-2 flex">
              <div className="group relative h-full w-full flex pt-6 flex-1">
                <Card className="relative w-full px-8 pb-8 pt-10 bg-transparent shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col rounded-[2rem] z-10">
                  {/* Background container with overflow-hidden to prevent bleeding, keeping the outer Card unclipped */}
                  <div className="absolute inset-0 bg-card rounded-[2rem] overflow-hidden -z-10">
                    {/* Inner hover glow scoped to the background shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  <div className="absolute -top-6 left-8 z-20">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300 ring-4 ring-background`}>
                      {testimonial.initials}
                    </div>
                  </div>

                  <Quote className="w-10 h-10 text-primary/10 absolute top-8 right-8 rotate-180" />

                  <div className="mt-2 flex-grow">
                    <p className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed font-medium italic relative z-10 transition-colors duration-300 group-hover:text-foreground">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="border-t border-primary/10 pt-6 mt-auto relative z-10 shrink-0">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-lg text-foreground tracking-tight">{testimonial.author}</span>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground font-medium">{testimonial.role}</span>
                        <span className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full shrink-0 ml-2">
                          {testimonial.ubicacion}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="max-w-md mx-auto mt-4 mb-8 px-8">
          <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.max(5, scrollProgress)}%` }}
            />
          </div>
        </div>

        {limit && (
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/casos-de-exito">
                Ver más casos de éxito
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </ScrollReveal>
    </section>
  )
}
