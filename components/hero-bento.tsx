import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Leaf, Beaker, TrendingUp, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroBento() {
  return (
    <section id="inicio" className="relative min-h-screen pt-24 md:pt-32 pb-12 md:pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="molecules" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="4" fill="currentColor" className="text-primary" />
              <circle cx="60" cy="30" r="5" fill="currentColor" className="text-accent" />
              <circle cx="100" cy="25" r="3" fill="currentColor" className="text-primary" />
              <line x1="20" y1="20" x2="60" y2="30" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
              <line
                x1="60"
                y1="30"
                x2="100"
                y2="25"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/30"
              />
              <path
                d="M40 70 Q40 60, 45 55 Q50 60, 50 70 Q50 80, 45 85 Q40 80, 40 70 Z"
                fill="currentColor"
                className="text-accent/40"
              />
              <path
                d="M80 90 Q80 82, 84 78 Q88 82, 88 90 Q88 98, 84 102 Q80 98, 80 90 Z"
                fill="currentColor"
                className="text-primary/40"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#molecules)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-balance leading-tight">
              M.J.M: Soluciones ecológicas para el control eficiente de plagas
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl text-pretty leading-relaxed">
              Insecticidas desarrollados con fórmula propia, seguros, biodegradables y de alto rendimiento
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
              <Button
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
              >
                Conocer productos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-transparent w-full sm:w-auto"
              >
                Ver casos de éxito
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* PRIMERA FILA: 6 + 6 columnas */}

          {/* Tarjeta 1: Fórmula exclusiva - 6 columnas */}
          <div className="md:col-span-6">
            <ScrollReveal direction="left" delay={100}>
              <Card className="bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20 p-6 md:p-8 flex flex-col justify-between h-full min-h-[350px] md:min-h-[400px] hover:shadow-xl transition-shadow">
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-3 md:mb-4">
                    <Beaker className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h2 id="formula" className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-balance">
                    Fórmula exclusiva desarrollada en laboratorio
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Combinamos investigación química y responsabilidad ecológica para lograr un insecticida efectivo sin
                    impacto ambiental. Certificado y probado en campo.
                  </p>
                </div>
                <div className="mt-4 md:mt-6">
                  <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                    Conocer la fórmula
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Tarjeta 2: Imagen del producto - 6 columnas */}
          <div className="md:col-span-6">
            <ScrollReveal direction="right" delay={200}>
              <Card className="bg-primary/5 border-primary/20 overflow-hidden relative hover:shadow-xl transition-shadow h-full min-h-[350px] md:min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/design-mode/producto2.png"
                    alt="Productos M.J.M - Veneno para Cucarachas y Ratas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-primary/90 to-transparent">
                  <p className="text-primary-foreground font-semibold text-base md:text-lg">
                    Productos M.J.M - Venenos profesionales certificados
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* SEGUNDA FILA: 4 + 4 + 4 columnas */}

          {/* Tarjeta 3: Eficacia comprobada - 4 columnas */}
          <div className="md:col-span-4">
            <ScrollReveal direction="left" delay={100}>
              <Card className="bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20 p-4 md:p-5 flex flex-col justify-between h-[300px] md:h-[350px] hover:shadow-xl transition-shadow">
                <div>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-2 md:mb-3">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Eficacia comprobada</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
                      <p className="text-xs text-muted-foreground">Eliminación de plagas</p>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                      <p className="text-xs text-muted-foreground">Biodegradable</p>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-secondary">24h</div>
                      <p className="text-xs text-muted-foreground">Acción rápida</p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Tarjeta 4: Aplicaciones versátiles - 4 columnas */}
          <div className="md:col-span-4">
            <ScrollReveal direction="scale" delay={200}>
              <Card className="bg-primary/5 border-primary/20 p-5 md:p-6 hover:shadow-xl transition-shadow h-full h-[300px] md:h-[350px] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-3 md:mb-4">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Aplicaciones versátiles</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                      <span className="text-xs md:text-sm">Uso agrícola profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                      <span className="text-xs md:text-sm">Horticultura y viveros</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                      <span className="text-xs md:text-sm">Limpieza industrial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                      <span className="text-xs md:text-sm">Uso domiciliario seguro</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Tarjeta 5: Certificado ecológico - 4 columnas */}
          <div className="md:col-span-4">
            <ScrollReveal direction="right" delay={300}>
              <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border-primary/20 p-5 md:p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow h-full h-[300px] md:h-[350px]">
                <div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-3 md:mb-4 mx-auto">
                    <Leaf className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Certificado ecológico</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Cumple con todas las normativas ambientales y de seguridad. Trazabilidad completa del proceso.
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
