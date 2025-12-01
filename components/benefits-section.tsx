import { Card } from "@/components/ui/card"
import { Beaker, Shield, TrendingUp, Leaf } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Beaker,
      title: "Fórmula exclusiva y certificada",
      description: "Desarrollo científico propio con años de investigación y pruebas de campo.",
    },
    {
      icon: TrendingUp,
      title: "Eficacia comprobada en campo",
      description: "Resultados medibles y consistentes en diferentes tipos de cultivos y ambientes.",
    },
    {
      icon: Shield,
      title: "Desarrollo científico local",
      description: "Producción nacional con control de calidad en cada etapa del proceso.",
    },
    {
      icon: Leaf,
      title: "Biodegradable y respetuoso",
      description: "Sin impacto ambiental negativo, seguro para personas, animales y el ecosistema.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">¿Por qué elegirnos?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tecnología limpia aplicada al control de plagas con resultados profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
