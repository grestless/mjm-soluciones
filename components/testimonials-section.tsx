import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Desde que usamos la fórmula M.J.M, eliminamos las plagas sin afectar la producción. Los resultados son notables.",
      author: "Carlos Mendoza",
      role: "Productor Agrícola",
      sector: "Horticultura",
    },
    {
      quote: "La eficacia del producto es excepcional y nos da tranquilidad saber que es completamente biodegradable.",
      author: "Ana Rodríguez",
      role: "Gerente de Operaciones",
      sector: "Vivero Industrial",
    },
    {
      quote: "Probamos varios productos antes de M.J.M. La diferencia en efectividad y seguridad es incomparable.",
      author: "Roberto Silva",
      role: "Supervisor de Limpieza",
      sector: "Industria Alimentaria",
    },
  ]

  return (
    <section className="py-15 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Casos de éxito</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empresas y profesionales que confían en nuestra fórmula
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <Card className="p-8 relative h-full">
                <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-accent mt-1">{testimonial.sector}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
