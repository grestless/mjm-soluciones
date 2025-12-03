"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"

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
        // Reset success message after 5 seconds
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
    <section id="contacto" className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D4D4D" />
              <stop offset="100%" stopColor="#6B9F3E" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8BC34A" />
              <stop offset="100%" stopColor="#4CAF50" />
            </linearGradient>
          </defs>

          {/* Onda superior */}
          <path
            d="M0,160 C320,100 420,200 720,180 C1020,160 1120,100 1440,140 L1440,0 L0,0 Z"
            fill="url(#wave-gradient-1)"
            opacity="0.4"
          />

          {/* Onda media */}
          <path
            d="M0,320 C360,280 480,360 840,340 C1200,320 1320,280 1440,300 L1440,0 L0,0 Z"
            fill="url(#wave-gradient-1)"
            opacity="0.3"
          />

          {/* Onda inferior */}
          <path
            d="M0,640 C320,700 520,600 840,620 C1160,640 1280,700 1440,660 L1440,800 L0,800 Z"
            fill="url(#wave-gradient-2)"
            opacity="0.35"
          />

          {/* Onda de fondo */}
          <path
            d="M0,480 C400,520 600,440 960,460 C1320,480 1400,540 1440,500 L1440,800 L0,800 Z"
            fill="url(#wave-gradient-2)"
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            M.J.M tiene la solución a tus problemas de plagas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nuestro equipo técnico te asesorará para encontrar la solución ideal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 border-primary/10 shadow-xl bg-card/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90">Nombre completo</label>
                  <Input
                    name="nombre"
                    placeholder="Juan Pérez"
                    required
                    className="h-12 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/90">Empresa</label>
                  <Input
                    name="empresa"
                    placeholder="Tu empresa"
                    className="h-12 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/90">Correo electrónico</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                  className="h-12 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/90">Teléfono</label>
                <Input
                  type="tel"
                  name="telefono"
                  placeholder="+54 9 11 1234-5678"
                  className="h-12 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground/90">Mensaje</label>
                <Textarea
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu necesidad o consulta..."
                  required
                  className="min-h-[140px] border-primary/20 focus:border-primary focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                    ¡Mensaje enviado con éxito! Te responderemos pronto.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-800 dark:text-red-300 font-medium">
                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar solicitud
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Responderemos tu consulta en menos de 24 horas hábiles
              </p>
            </form>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-6">
            <Card className="p-6 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground font-medium break-words text-sm md:text-base">
                    contacto@mjmsoluciones.com
                  </p>
                  <p className="text-muted-foreground font-medium break-words text-sm md:text-base">
                    ventas@mjmsoluciones.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-accent/10 hover:border-accent/30 transition-all hover:shadow-lg bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                  <p className="text-muted-foreground font-medium">+54 9 381 332-1573</p>
                  <p className="text-muted-foreground font-medium">+54 9 381 600-0639</p>
                  <p className="text-sm text-muted-foreground mt-1">Lun - Vie: 9:00 - 18:00 hs</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-secondary/10 hover:border-secondary/30 transition-all hover:shadow-lg bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                  <p className="text-muted-foreground font-medium">Tucumán, Argentina</p>
                  <p className="text-sm text-muted-foreground mt-1">Distribución nacional e internacional</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 border-primary/20 shadow-lg">
              <h3 className="font-bold text-lg mb-3 text-primary">Compromiso de calidad M.J.M</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Cada producto de M.J.M Soluciones Ecológicas está diseñado para cuidar lo que importa: la salud, el
                entorno y los resultados. Tecnología limpia respaldada por ciencia.
              </p>
              <p className="text-sm text-foreground/80 mt-2">Fabricado en Tucumán, Argentina.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
