"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef, useCallback } from "react"

interface TestimonialsSectionProps {
  limit?: number
}

export function TestimonialsSection({ limit }: TestimonialsSectionProps) {
  const testimonials = [
    {
      quote: "Yo compre sus productos y me resulto 100% estoy muy conforme. Muchas veces la gente no cree pero en mi casa no quedó ni una cucaracha. El producto vale la pena y la gente que tiene ese problema lo tiene que conocer.",
      author: "Sergio Vera",
      role: "Comerciante",
      ubicacion: "Catamarca",
      initials: "SV",
    },
    {
      quote: "Buen dia! Nosotras habíamos probado todos los venenos que existen para las cucarachas, estabamos llenas de esas que son chiquitas, eran un montón, desde que nos llevo este veneno, no quedo NINGUNA! La verdad es muy bueno y los felicito por vender algo asi de eficiente! ",
      author: "Camila",
      role: "Hogar",
      ubicacion: "Termas de Rio Hondo",
      initials: "CA",
    },
    {
      quote: "Funciona 100% probe de todo, hasta hice fumigar con profesionales... cuando me trajeron estas bolsitas no les tenia fe jaja pero como ya la teniamos, la probamos y NO ME QUEDO NI UNA!! Si son de Tucuman les recontra recomiendo.",
      author: "Erika Navarro",
      role: "Hogar",
      ubicacion: "Tucuman",
      initials: "EN",
    },
    {
      quote: "De a poco se van muriendo. La verdad que es muy efectivo el veneno 💪💪 Hoy se limpio en todos los lugares y sacamos bastantes",
      author: "Carlos Alvarado",
      role: "Comerciante",
      ubicacion: "Tucuman",
      initials: "CA",
    },
    {
      quote: "Muertas, muertas y mas muertas 👏👏👏💃 por fin estoy ganándoles la guerra jaja. Todavia me quedan bolsitas pero en unos dias seguro te voy a estar escribiendo asi tenga para poner cuando ya no haya más",
      author: "Jeremias Ponce",
      role: "Hogar",
      ubicacion: "Salta",
      initials: "JP",
    },
    {
      quote: "Increíble la verdad... estaba cansada de gastar plata en aerosoles que las dejaban medio tontas nomás. Puse el producto a la noche y a la mañana siguiente era un cementerio la cocina 😂. ¡Recomendadísimo!",
      author: "Laura Gimenez",
      role: "Hogar",
      ubicacion: "Santiago del Estero",
      initials: "LG",
    },
    {
      quote: "Tengo un local de comidas y renegaba un montón con este tema, era un dolor de cabeza. Desde que probé sus cebos, un espectáculo, me olvidé del problema. Excelente atención encima, me explicaron todo.",
      author: "Mario Rossi",
      role: "Gastronomía",
      ubicacion: "Córdoba",
      initials: "MR",
    },
    {
      quote: "Che, la verdad me sorprendió. Compré para probar porque ya no sabía que más hacer, y en menos de una semana no vi ni una más dando vueltas por los muebles. Vale cada peso, mil gracias!! 🙌",
      author: "Sofia",
      role: "Hogar",
      ubicacion: "Salta",
      initials: "SO",
    },
    {
      quote: "Estaba dudando si comprar o no, pero leí los comentarios y me mandé. NO ME ARREPIENTO PARA NADA. Es el único producto que realmente exterminó a las chiquititas que se meten en los electrodomésticos. ¡Una maravilla!",
      author: "Facundo Fernandez",
      role: "Hogar",
      ubicacion: "Jujuy",
      initials: "FF",
    },
  ]

  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials

  // — Mobile carousel state —
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = useCallback((index: number, dir?: number) => {
    setDirection(dir ?? (index > currentIndex ? 1 : -1))
    setCurrentIndex(index)
  }, [currentIndex])

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % displayTestimonials.length
    goTo(next, 1)
  }, [currentIndex, displayTestimonials.length, goTo])

  const goPrev = useCallback(() => {
    const prev = (currentIndex - 1 + displayTestimonials.length) % displayTestimonials.length
    goTo(prev, -1)
  }, [currentIndex, displayTestimonials.length, goTo])

  // Auto-advance every 5 seconds on mobile
  useEffect(() => {
    autoPlayRef.current = setInterval(goNext, 5000)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [goNext])

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(goNext, 5000)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (touchDeltaX.current > 50) {
      goPrev()
      resetAutoPlay()
    } else if (touchDeltaX.current < -50) {
      goNext()
      resetAutoPlay()
    }
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  const currentTestimonial = displayTestimonials[currentIndex]

  return (
    <section id="testimonios" className="py-24 px-4 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Casos de Éxito
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-foreground tracking-tight"
          >
            Historias que avalan nuestro compromiso
          </motion.h2>
        </div>

        {/* ===== MOBILE CAROUSEL (visible < md) ===== */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden rounded-2xl min-h-[320px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card className="h-full bg-card border-border shadow-md">
                  <CardContent className="p-6 flex flex-col relative">
                    <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6 rotate-180" />
                    
                    <p className="text-muted-foreground text-base leading-relaxed mb-6 relative z-10 pt-2">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 mt-auto pt-5 border-t border-border/50">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm shrink-0">
                        {currentTestimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground text-sm">{currentTestimonial.author}</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                          {currentTestimonial.role} • {currentTestimonial.ubicacion}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows + dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => { goPrev(); resetAutoPlay(); }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors active:scale-90"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {displayTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i); resetAutoPlay(); }}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { goNext(); resetAutoPlay(); }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors active:scale-90"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Counter */}
          <p className="text-center text-xs text-muted-foreground mt-3 font-medium tabular-nums">
            {currentIndex + 1} / {displayTestimonials.length}
          </p>
        </div>

        {/* ===== DESKTOP GRID (visible >= md) ===== */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-md transition-shadow duration-300 border-border">
                <CardContent className="p-8 flex flex-col h-full relative">
                  <Quote className="w-8 h-8 text-primary/10 absolute top-8 right-8 rotate-180" />
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow relative z-10 pt-2">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground">{testimonial.author}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                        {testimonial.role} • {testimonial.ubicacion}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {limit && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/casos-de-exito">
              <Button variant="outline" className="px-8 py-6 rounded-lg font-semibold group">
                Ver más testimonios
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
