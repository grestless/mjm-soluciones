import { Card } from "@/components/ui/card"
import { Beaker, Shield, TrendingUp, Leaf } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Beaker,
      title: "Polvo inteligente para Roedores",
      description: "A diferencia de los venenos comunes que matan al instante alertando a la manada, nuestro producto engaña a la plaga. Actúa a los 3 o 4 días, permitiendo que tanto las crías como las adultas consuman el cebo, logrando la erradicación total.",
    },
    {
      icon: TrendingUp,
      title: "Eficacia comprobada en campo",
      description: "Resultados medibles y consistentes en diferentes tipos de comercios, cultivos, ambientes y hogares. Más de 9.000 clientes avalan nuestros resultados.",
    },
    {
      icon: Leaf,
      title: "Pasta ecologica para Cucarachas",
      description: "Un tratamiento nocturno diseñado para obligarlas a salir del nido. Les fascina el sabor, lo comen y mueren entre 5 y 8 días después, eliminando el problema de raíz.",
    },
    {
      icon: Shield,
      title: "Biodegradable, seguro y no tóxico",
      description: "Sin impacto ambiental negativo, seguro para personas, animales y el ecosistema. Sin olor, sin tóxicos y sin riesgos.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">¿Por qué nos eligen?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todos nuestros envases incluyen un código QR escaneable con el modo de uso paso a paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="p-6 hover:shadow-lg transition-all h-full shadow-inner backdrop-blur-sm backdrop-saturate-150 bg-card/50 border-primary/10 hover:border-primary/30">
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
