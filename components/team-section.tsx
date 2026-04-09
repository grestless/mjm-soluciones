"use client"

import { Button } from "@/components/ui/button"
import { Check, TrendingUp, Users, Zap } from "lucide-react"
import { motion, Variants } from "framer-motion"

export function TeamSection() {
  const plans = [
    {
      name: "Emprendedor Inicial",
      description: "Ideal para comenzar tu negocio de distribución local",
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
      name: "Distribuidor Pro",
      description: "Para quienes buscan un negocio establecido y escalable",
      icon: TrendingUp,
      features: [
        "Kit completo de productos premium",
        "Capacitación presencial intensiva",
        "Material físico y digital",
        "Comisión del 20% por venta",
        "Soporte prioritario 24/7",
        "Territorio exclusivo asignado",
        "Bonos por cumplimiento",
        "Acceso a eventos",
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
        "Capacitación técnica avanzada",
        "Branding co-creado",
        "Comisión del 25% + bonos",
        "Gerente de cuenta dedicado",
        "Territorios exclusivos",
        "Participación en I+D",
        "Acceso a datos de mercado",
      ],
      investment: "Inversión estratégica",
      highlight: false,
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="equipo" className="relative py-32 px-4 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-accent/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 text-primary mb-6 shadow-inner"
          >
            <Users className="w-5 h-5" />
            <span className="text-sm font-heading font-black uppercase tracking-widest leading-none">Oportunidad de Negocio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black text-foreground mb-8 leading-[0.9] tracking-tighter"
          >
            Construye tu futuro con <span className="text-primary italic">M.J.M</span>
          </motion.h2>
          <p className="text-xl md:text-2xl font-sans font-medium text-muted-foreground max-w-3xl mx-auto text-pretty">
            Únete a la red líder en control ecológico. Ofrecemos modelos de negocio escalables para emprendedores que buscan resultados reales.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <div
                  className={`clay-card h-full p-10 flex flex-col relative group transition-all duration-500 rounded-[3rem] ${
                    plan.highlight ? "ring-4 ring-primary ring-offset-8 ring-offset-background" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-accent text-accent-foreground text-[10px] font-heading font-black uppercase tracking-widest shadow-lg">
                      Más Popular
                    </div>
                  )}

                  <div className="mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-3">{plan.name}</h3>
                    <p className="text-muted-foreground font-sans font-medium mb-4 leading-relaxed">{plan.description}</p>
                    <div className="text-primary font-heading font-black text-xl flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-accent" />
                       {plan.investment}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-sans font-medium text-foreground opacity-80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`clay-button w-full h-16 text-lg ${
                      !plan.highlight ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" : ""
                    }`}
                    onClick={() => {
                      const element = document.getElementById("contacto")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Solicitar Información
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="clay-card rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          <h3 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6 max-w-2xl mx-auto leading-none tracking-tighter">
            ¿Buscas un plan <span className="text-primary italic">personalizado</span>?
          </h3>
          <p className="text-lg md:text-xl font-sans font-medium text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada visión es distinta. Si tienes una propuesta de distribución a gran escala o necesidades especiales, hablemos directamente.
          </p>
          <Button
            size="lg"
            className="clay-button px-12 py-8 text-xl h-auto"
            onClick={() => {
              const element = document.getElementById("contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Agendar Reunión Técnica
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
