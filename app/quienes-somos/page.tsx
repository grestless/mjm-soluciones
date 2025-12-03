"use client"

import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Leaf, Lightbulb, Award, Users, TrendingUp, Globe } from "lucide-react"
import { useEffect } from "react"

export default function QuienesSomosPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const timelineEvents = [
    {
      year: "2025",
      title: "Red de Distribuidores",
      description:
        "M.J.M se consolida como líder en soluciones ecológicas con presencia en todo el país y más de 200 distribuidores activos.",
      icon: Users,
      color: "text-primary",
    },
    {
      year: "7 de Julio 2023",
      title: "Oficialmente SAS",
      description:
        "Nos constituimos legalmente como Sociedad. Hoy somos MJM Soluciones Ecológicas SAS, con más de 9.000 clientes satisfechos.",
      icon: Award,
      color: "text-accent",
    },
    {
      year: "2021",
      title: "El Crecimiento",
      description:
        "La confianza de nuestros clientes nos impulsó. Dejamos las bolsitas y pasamos a envases profesionales con tecnología QR y videos tutoriales.",
      icon: TrendingUp,
      color: "text-primary",
    },

    {
      year: "Septiembre 2020",
      title: "El Inicio",
      description:
        "Todo empezó con una idea y nuestro auto, vendiendo bolsitas de 50 gramos puerta a puerta y en grupos de Facebook en todo el Norte Argentino: Tucumán, Santiago, Termas, La Banda, Catamarca, La Rioja, Salta, Jujuy..",
      icon: Lightbulb,
      color: "text-accent",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />

      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-24">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 text-sm md:text-base px-4 py-1">
                Nuestra Historia
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">¿Quiénes Somos?</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                M.J.M Soluciones Ecológicas nació de una visión clara: crear productos que protejan sin dañar. Somos
                pioneros en el desarrollo de insecticidas biodegradables de alto rendimiento.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 md:mb-24">
            <ScrollReveal direction="left">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Nuestra Misión</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollar y comercializar soluciones ecológicas de control de plagas que sean efectivas, seguras y
                  sostenibles, contribuyendo a la salud pública y la preservación del medio ambiente.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-accent">Nuestra Visión</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la empresa líder en América Latina en soluciones ecológicas de control de plagas, reconocida por
                  nuestra innovación, calidad y compromiso con la sostenibilidad.
                </p>
              </Card>
            </ScrollReveal>
          </div>

          {/* Timeline Section */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestro Recorrido</h2>
              <p className="text-muted-foreground text-lg">
                Desde nuestros inicios hasta convertirnos en líderes del sector
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            <div className="space-y-12 md:space-y-16">
              {timelineEvents.map((event, index) => (
                <ScrollReveal key={event.year} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                  <div
                    className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Contenido */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <Card className="p-6 bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                        <div
                          className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                            } justify-start`}
                        >
                          <Badge className={`${event.color} bg-transparent border-current text-lg px-3 py-1`}>
                            {event.year}
                          </Badge>
                          <event.icon className={`h-5 w-5 ${event.color}`} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </Card>
                    </div>

                    {/* Punto central */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-primary shadow-lg z-10 flex-shrink-0">
                      <event.icon className={`h-7 w-7 ${event.color}`} />
                    </div>

                    {/* Espacio vacío para alternar */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <ScrollReveal>
            <div className="mt-24 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-12">Nuestros Valores</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:shadow-lg transition-all">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sostenibilidad</h3>
                  <p className="text-muted-foreground">
                    Comprometidos con el cuidado del medio ambiente en cada producto que desarrollamos.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20 hover:shadow-lg transition-all">
                  <div className="p-3 rounded-xl bg-accent/10 w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excelencia</h3>
                  <p className="text-muted-foreground">
                    Buscamos la máxima calidad y eficacia en cada fórmula que creamos.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:shadow-lg transition-all">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Comunidad</h3>
                  <p className="text-muted-foreground">
                    Creamos oportunidades de crecimiento para nuestros distribuidores y clientes.
                  </p>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  )
}
