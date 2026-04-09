"use client"

import { motion, Variants } from "framer-motion"
import { Beaker, Shield, TrendingUp, Leaf, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Beaker,
      title: "Polvo Inteligente",
      subtitle: "Para Roedores",
      description: "A diferencia de los venenos comunes que alertan a la manada, nuestro producto actúa a los 4 días. Permite que toda la colonia consuma el cebo, logrando la erradicación total por infiltración.",
      color: "bg-accent/20 text-accent",
    },
    {
      icon: TrendingUp,
      title: "Eficacia de Campo",
      subtitle: "9.000+ Clientes",
      description: "Resultados consistentes en comercios, industrias y hogares. Nuestra metodología ha sido validada por miles de familias y empresas en todo el país.",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: Leaf,
      title: "Pasta Ecológica",
      subtitle: "Para Cucarachas",
      description: "Diseñada para eliminar el problema de raíz. Atracción irresistible que obliga a salir del nido, erradicando ninfas y adultos de forma definitiva en menos de una semana.",
      color: "bg-secondary/20 text-secondary-foreground",
    },
    {
      icon: Shield,
      title: "Bio-Seguridad",
      subtitle: "100% No Tóxico",
      description: "Sin olor, sin tóxicos y sin riesgos para personas o mascotas. Controlamos plagas con total responsabilidad ambiental y seguridad certificada.",
      color: "bg-accent/20 text-accent",
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
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="beneficios" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Background decorative mesh gradient hint */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-20 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-heading font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Nuestra Diferencia
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black mb-8 text-balance leading-[1.1] tracking-tighter"
          >
            Ciencia aplicada al <br/><span className="text-primary underline decoration-accent/30 underline-offset-8">control total.</span>
          </motion.h2>
          <p className="text-xl md:text-2xl font-sans font-medium text-muted-foreground text-pretty leading-relaxed">
            Eliminamos la raíz del problema con tecnología inteligente y respeto absoluto por tu entorno.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="clay-card rounded-[2rem] p-8 h-full flex flex-col justify-between hover:scale-[1.03] transition-all hover:bg-accent/5 duration-500 cursor-default">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-8 shadow-inner group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="mb-6">
                      <p className="text-xs font-heading font-black uppercase tracking-widest text-primary/60 mb-1">{benefit.subtitle}</p>
                      <h3 className="text-2xl font-heading font-black leading-tight">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{benefit.description}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between group/more cursor-pointer">
                    <span className="text-xs font-heading font-black uppercase tracking-widest text-primary">Saber más</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover/more:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-8 clay-card rounded-3xl bg-primary text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="bg-accent p-4 rounded-2xl shadow-lg">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-2xl font-heading font-black">Escanea y Aprende</h4>
              <p className="text-primary-foreground/70 font-medium leading-tight">Cada envase incluye un código QR con el modo de uso paso a paso.</p>
            </div>
          </div>
          <Button className="whitespace-nowrap h-auto px-8 py-4 bg-white text-primary hover:bg-white/90 rounded-2xl font-heading font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl">
            Ver tutoriales
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
