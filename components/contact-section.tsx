"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xkgpjlwr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Mesh Gradients Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-primary font-heading font-black uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            Hablemos de Soluciones
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black mb-8 leading-[0.9] tracking-tighter"
          >
            M.J.M es la <span className="text-primary italic">respuesta final</span> a tus problemas de plagas.
          </motion.h2>
          <p className="text-xl md:text-2xl font-sans font-medium text-muted-foreground text-pretty max-w-2xl mx-auto">
            Asesoramiento técnico especializado para hogares, comercios e industrias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="clay-card rounded-[2.5rem] p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-heading font-black uppercase tracking-widest text-primary/60 ml-2">Nombre completo</label>
                    <Input
                      name="nombre"
                      placeholder="Ej: Juan Pérez"
                      required
                      className="h-14 rounded-2xl border-primary/5 bg-background shadow-inner focus:ring-primary/20 focus:border-primary/30 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-heading font-black uppercase tracking-widest text-primary/60 ml-2">Empresa <span className="text-[10px] lowercase opacity-50">(Opcional)</span></label>
                    <Input
                      name="empresa"
                      placeholder="Tu negocio o industria"
                      className="h-14 rounded-2xl border-primary/5 bg-background shadow-inner focus:ring-primary/20 focus:border-primary/30 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-heading font-black uppercase tracking-widest text-primary/60 ml-2">Correo de contacto</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    required
                    className="h-14 rounded-2xl border-primary/5 bg-background shadow-inner focus:ring-primary/20 focus:border-primary/30 transition-all font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-heading font-black uppercase tracking-widest text-primary/60 ml-2">Mensaje o Consulta</label>
                  <Textarea
                    name="mensaje"
                    placeholder="¿En qué podemos ayudarte hoy?"
                    required
                    className="min-h-[160px] rounded-3xl border-primary/5 bg-background shadow-inner focus:ring-primary/20 focus:border-primary/30 transition-all font-medium resize-none p-6"
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-3 p-5 bg-green-500/10 border border-green-500/20 rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <p className="text-sm text-green-800 dark:text-green-300 font-bold">
                      ¡Recibido! Nos pondremos en contacto en breve.
                    </p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="clay-button w-full h-16 text-lg group"
                >
                  {isSubmitting ? "Procesando..." : (
                    <span className="flex items-center gap-3">
                      Enviar Solicitud
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="clay-card rounded-[2.5rem] p-8 flex items-start gap-6 group hover:bg-accent/5 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:rotate-6 transition-transform">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading font-black text-xl mb-2 text-primary">Canales Digitales</h3>
                <p className="text-muted-foreground font-medium break-words text-lg">contacto@mjmsoluciones.com</p>
                <p className="text-muted-foreground font-medium break-words text-lg">ventas@mjmsoluciones.com</p>
              </div>
            </div>

            <div className="clay-card rounded-[2.5rem] p-8 flex items-start gap-6 group hover:bg-accent/5 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:-rotate-6 transition-transform">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-black text-xl mb-2 text-accent-foreground">Atención Directa</h3>
                <p className="text-muted-foreground font-medium text-lg">+54 9 381 332-1573</p>
                <p className="text-muted-foreground font-medium text-lg">+54 9 381 600-0639</p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mt-3 opacity-60">Lunes a Viernes: 9:00 - 18:00 hs</p>
              </div>
            </div>

            <div className="clay-card rounded-[2.5rem] p-8 flex items-start gap-6 group hover:bg-accent/5 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-black text-xl mb-2 text-primary">Presencia Territorial</h3>
                <p className="text-muted-foreground font-medium text-lg">Tucumán, Argentina</p>
                <p className="text-sm font-bold opacity-60 uppercase tracking-widest mt-2">Logística nacional e internacional</p>
              </div>
            </div>

            <div className="clay-card rounded-[2.5rem] p-10 bg-primary text-primary-foreground relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16" />
              <h3 className="font-heading font-black text-2xl mb-4 relative z-10">M.J.M es Garantía</h3>
              <p className="font-sans font-medium text-primary-foreground/80 leading-relaxed text-lg relative z-10">
                Cada solución está respaldada por años de investigación y éxito en el campo. Tecnología limpia y resultados reales.
              </p>
              <div className="mt-6 flex items-center gap-2 opacity-50 font-heading font-black uppercase text-[10px] tracking-widest">
                <span>Hecho en Argentina</span>
                <div className="h-px flex-1 bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
