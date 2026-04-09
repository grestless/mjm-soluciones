"use client"

import { Card } from "@/components/ui/card"
import { Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"

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
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
      setScrollProgress(progress)
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < maxScroll - 5)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = window.innerWidth < 768 ? container.clientWidth : 450 + 32
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="testimonios" className="py-32 px-0 md:px-4 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-heading font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Casos de Éxito
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-heading font-black text-balance leading-none tracking-tighter"
            >
              Historias que <span className="text-primary italic">avalan</span> nuestro compromiso.
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="rounded-2xl w-14 h-14 bg-background border-2 border-primary/10 hover:border-primary hover:bg-primary/5 transition-all disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="rounded-2xl w-14 h-14 bg-background border-2 border-primary/10 hover:border-primary hover:bg-primary/5 transition-all disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </Button>
          </div>
        </div>

        <motion.div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 pt-4 hide-scrollbar px-4 lg:px-0"
        >
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="snap-start shrink-0 w-[85vw] md:w-[450px] h-full flex pt-8">
              <div className="clay-card rounded-[2.5rem] p-10 flex flex-col justify-between w-full group relative">
                <Quote className="w-16 h-16 text-primary/5 absolute top-8 right-8 rotate-180" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white font-heading font-black text-2xl shadow-xl -mt-16 mb-8 group-hover:scale-105 transition-transform duration-500 border-4 border-background">
                    {testimonial.initials}
                  </div>
                  <p className="text-lg md:text-xl text-foreground font-sans font-medium leading-relaxed italic mb-8">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-primary/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-black text-xl text-primary tracking-tight">{testimonial.author}</h4>
                    <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                  <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] bg-accent/20 text-accent-foreground px-4 py-2 rounded-xl">
                    {testimonial.ubicacion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Custom Progress Bar */}
        <div className="max-w-2xl mx-auto mt-8 flex flex-col items-center gap-6">
          <div className="h-2 w-full bg-primary/5 rounded-full overflow-hidden clay-shadow-inner text-transparent">
            .
            <motion.div
              className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(23,65,68,0.3)] absolute top-0 left-0"
              animate={{ width: `${Math.max(10, scrollProgress)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
          
          {limit && (
            <Link href="/casos-de-exito">
              <Button className="clay-button px-10 py-7 group">
                Ver todos los testimonios
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
