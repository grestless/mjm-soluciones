"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Leaf, Beaker, TrendingUp, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion, useSpring, useTransform, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

function Counter({ value, suffix = "", duration = 7 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20px" })
  const motionValue = useSpring(0, { duration: duration * 1000, bounce: 0 })
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, value, motionValue])

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest + suffix
      }
    })
  }, [rounded, suffix])

  return <span ref={ref} />
}

export function HeroBento() {
  return (
    <section id="inicio" className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="molecules" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <motion.circle
                cx="20"
                cy="20"
                r="4"
                fill="currentColor"
                className="text-primary"
                animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.circle
                cx="60"
                cy="30"
                r="5"
                fill="currentColor"
                className="text-accent"
                animate={{ y: [0, 15, 0], x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.circle
                cx="100"
                cy="25"
                r="3"
                fill="currentColor"
                className="text-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              />
              <motion.line
                x1="20"
                y1="20"
                x2="60"
                y2="30"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/30"
                animate={{ opacity: [0.1, 0.6, 0.1], pathLength: [0.8, 1, 0.8] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.line
                x1="60"
                y1="30"
                x2="100"
                y2="25"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/30"
                animate={{ opacity: [0.1, 0.6, 0.1], pathLength: [0.8, 1, 0.8] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.path
                d="M40 70 Q40 60, 45 55 Q50 60, 50 70 Q50 80, 45 85 Q40 80, 40 70 Z"
                fill="currentColor"
                className="text-accent/40"
                animate={{ rotate: [0, 15, 0], scale: [0.9, 1.2, 0.9], y: [0, -5, 0] }}
                style={{ originX: "45px", originY: "70px" }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.path
                d="M80 90 Q80 82, 84 78 Q88 82, 88 90 Q88 98, 84 102 Q80 98, 80 90 Z"
                fill="currentColor"
                className="text-primary/40"
                animate={{ y: [0, -20, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                style={{ originX: "84px", originY: "90px" }}
                transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#molecules)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black mb-8 text-balance leading-[0.9] tracking-tighter">
              Control de <span className="text-primary">plagas</span> profesional con <span className="text-accent text-glow italic">impacto real.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans font-medium text-muted-foreground max-w-4xl text-pretty leading-snug mb-10">
              Tecnología de vanguardia y fórmulas exclusivas. Protegemos lo que más importa con seriedad y efectividad certificada.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10">
              <a
                href="https://wa.me/5493813321573"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="clay-button text-base md:text-xl px-10 py-8 w-full group"
                >
                  <span className="flex items-center gap-2">
                    Solicitar Presupuesto
                    <TrendingUp className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <Link href="/casos-de-exito" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-2 border-primary/20 text-primary hover:bg-primary/5 text-base md:text-xl px-10 py-8 bg-transparent w-full font-heading font-bold"
                >
                  Ver resultados
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Tarjeta 1: Fórmula exclusiva */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-12 lg:col-span-7"
          >
            <div className="clay-card rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center h-full group">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <Beaker className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-black mb-6 leading-tight">
                  Fórmula de <span className="text-primary underline decoration-accent/30 underline-offset-8">laboratorio</span> propia
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                  No somos solo aplicadores. Desarrollamos soluciones químicas de alta fidelidad que garantizan la eliminación total sin comprometer la salud de tu entorno.
                </p>
                <Link href="/#productos">
                  <Button variant="link" className="p-0 h-auto text-primary font-bold text-lg group/btn">
                    Explorar catálogo 
                    <CheckCircle2 className="ml-2 w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/3 aspect-square relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <img
                  src="/api/placeholder/400/400"
                  alt="Laboratory bottle"
                  className="relative z-10 w-full h-full object-contain mix-blend-multiply opacity-80"
                />
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 2: Métricas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 lg:col-span-5"
          >
            <div className="clay-card rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between h-full bg-primary text-primary-foreground overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full -mr-16 -mt-16" />
              <div>
                <h3 className="text-xl font-heading font-bold uppercase tracking-[0.2em] mb-8 opacity-70">Rendimiento</h3>
                <div className="grid gap-8">
                  <div>
                    <div className="text-6xl md:text-7xl font-heading font-black text-accent flex items-baseline gap-2">
                      <Counter value={99} suffix="%" />
                    </div>
                    <p className="text-lg font-bold opacity-80 uppercase tracking-widest mt-2">Efectividad</p>
                  </div>
                  <div className="h-px bg-white/10 w-full" />
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-4xl font-heading font-black text-white flex items-baseline gap-1">
                        <Counter value={100} suffix="%" />
                      </div>
                      <p className="text-sm opacity-60 uppercase font-bold mt-1">Sustentable</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-heading font-black text-white flex items-baseline gap-1">
                        <Counter value={24} suffix="h" />
                      </div>
                      <p className="text-sm opacity-60 uppercase font-bold mt-1">Acción</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta 3: Certificado Ecológico */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 lg:col-span-4"
          >
            <div className="clay-card rounded-[2.5rem] p-8 flex flex-col items-center text-center h-full group hover:bg-accent/5 transition-colors">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-black mb-4">Compromiso <br/>Ecológico</h3>
              <p className="text-muted-foreground text-lg leading-snug">
                Nuestros procesos respetan la biodiversidad. Controlamos plagas, no el ecosistema.
              </p>
            </div>
          </motion.div>

          {/* Tarjeta 4: Imagen Producto Principal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 lg:col-span-8"
          >
            <div className="clay-card rounded-[2.5rem] h-full min-h-[400px] overflow-hidden relative group">
              <img
                src="/images/design-mode/producto2.png"
                alt="Productos M.J.M"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/30" />
                  <span className="text-white font-heading font-black uppercase text-sm tracking-[0.3em]">Producto Certificado</span>
                  <div className="h-px flex-1 bg-white/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
