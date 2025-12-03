"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, TrendingUp, Users, Zap } from "lucide-react"

export function TeamSection() {
  const plans = [
    {
      name: "Emprendedor Inicial",
      description: "Ideal para comenzar tu negocio de distribución",
      icon: Zap,
      features: [
        "Kit inicial de productos",
        "Capacitación básica online",
        "Material promocional digital",
        "Comisión del 15% por venta",
        "Soporte vía email",
        "Acceso a plataforma de pedidos",
      ],
      investment: "Inversión mínima",
      highlight: false,
    },
    {
      name: "Distribuidor Profesional",
      description: "Para quienes buscan un negocio establecido",
      icon: TrendingUp,
      features: [
        "Kit completo de productos premium",
        "Capacitación presencial intensiva",
        "Material promocional físico y digital",
        "Comisión del 20% por venta",
        "Soporte prioritario 24/7",
        "Territorio exclusivo asignado",
        "Bonos por cumplimiento de metas",
        "Acceso a eventos y conferencias",
      ],
      investment: "Inversión media",
      highlight: true,
    },
    {
      name: "Socio Estratégico",
      description: "Máximo nivel de colaboración empresarial",
      icon: Users,
      features: [
        "Stock completo personalizado",
        "Capacitación ejecutiva y técnica",
        "Branding co-creado",
        "Comisión del 25% + bonos",
        "Gerente de cuenta dedicado",
        "Múltiples territorios exclusivos",
        "Participación en desarrollo de productos",
        "Acceso a datos de mercado",
        "Inversión en marketing compartida",
      ],
      investment: "Inversión estratégica",
      highlight: false,
    },
  ]

  return (
    <section id="equipo" className="relative py-12 md:py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path
                d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43L25 0Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
              <circle cx="25" cy="28.87" r="3" fill="currentColor" className="text-accent" />
              <circle cx="50" cy="14.43" r="2" fill="currentColor" className="text-primary" />
              <circle cx="0" cy="14.43" r="2" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Users className="w-4 h-4" />
            <span className="text-xs md:text-sm font-medium">Únete al Equipo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
            Construye tu Negocio con M.J.M
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Forma parte de la revolución ecológica. Ofrecemos planes flexibles para emprendedores y profesionales que
            quieran distribuir nuestros productos innovadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card
                key={index}
                className={`p-5 md:p-6 relative overflow-hidden transition-all hover:shadow-xl flex flex-col ${plan.highlight ? "border-2 border-primary bg-primary/5 md:scale-105" : "border border-border"
                  }`}
              >
                {plan.highlight && (
                  <div className="self-end px-2 md:px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-2">
                    Más Popular
                  </div>
                )}

                <div className="mb-4 md:mb-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{plan.description}</p>
                  <div className="text-primary font-semibold text-sm md:text-base">{plan.investment}</div>
                </div>

                <ul className="space-y-2 mb-5 md:mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full h-10 md:h-11 text-sm md:text-base ${plan.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                  onClick={() => {
                    const element = document.getElementById("contacto")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Solicitar Información
                </Button>
              </Card>
            )
          })}
        </div>

        <div className="text-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-border/50 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 px-4">
            ¿Tienes un plan personalizado en mente?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-6 max-w-2xl mx-auto px-4">
            Cada negocio es único. Conversemos sobre cómo podemos crear un plan de distribución que se adapte
            perfectamente a tus objetivos y recursos.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 h-11 md:h-12 text-sm md:text-base w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Agendar Reunión
          </Button>
        </div>
      </div>
    </section>
  )
}
