import { Card } from "@/components/ui/card"
import { Quote, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface TestimonialsSectionProps {
  limit?: number
}

export function TestimonialsSection({ limit }: TestimonialsSectionProps) {
  const testimonials = [
    {
      quote:
        "Yo compre sus productos y me resulto 100% estoy muy conforme. Muchas veces la gente no cree pero en mi casa no quedó ni una cucaracha. El producto vale la pena y la gente que tiene ese problema lo tiene que conocer.",
      author: "Sergio Vera",
      role: "Comerciante",
      ubicacion: "Catamarca",
      initials: "SV",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      quote: "Buen dia! Nosotras habíamos probado todos los venenos que existen para las cucarachas, estabamos llenas de esas que son chiquitas, eran un montón, desde que nos llevo este veneno, no quedo NINGUNA! La verdad es muy bueno y los felicito por vender algo asi de eficiente! ",
      author: "Camila",
      role: "Hogar",
      ubicacion: "Termas de Rio Hondo",
      initials: "CA",
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      quote: "Funciona 100% probe de todo, hasta hice fumigar con profesionales... cuando me trajeron estas bolsitas no les tenia fe jaja pero como ya la teniamos, la probamos y NO ME QUEDO NI UNA!! Si son de Tucuman les recontra recomiendo. La verdad me sorprendi, hay que hacer el tratamiento al pie de a letra tal cual te lo explican y funciona",
      author: "Erika Navarro",
      role: "Hogar",
      ubicacion: "Tucuman",
      initials: "EN",
      gradient: "from-orange-400 to-red-600"
    },
    {
      quote: "De a poco se van muriendo. La verdad que es muy efectivo el veneno 💪💪 Hoy se limpio en todos los lugares y sacamos bastantes",
      author: "Carlos Alvarado",
      role: "Comerciante",
      ubicacion: "Tucuman",
      initials: "CA",
      gradient: "from-primary to-primary/60"
    },
    {
      quote: "Muertas, muertas y mas muertas 👏👏👏💃 por fin estoy ganándoles la guerra jaja. Todavia me quedan bolsitas pero en unos dias seguro te voy a estar escribiendo asi tenga para poner cuando ya no haya más",
      author: "Jeremias Ponce",
      role: "Hogar",
      ubicacion: "Salta",
      initials: "JP",
      gradient: "from-green-800 to-green-400"
    },
    {
      quote: "Buenas noches chicos, anoche pusimos varias tapitas de gaseosas y hoy cuando nos levantamos encontramos las tapitas vacias, y hoy vimos que dejaron de andar las cucarachas, eficas el veneno",
      author: "Julian Villalba",
      role: "Comerciante",
      ubicacion: "Santiago del Estero",
      initials: "SV",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      quote: "Excelente chicos! Muy recomendable. Ni una cucaracha, desaparecieron todas! Tanto me costo y compre de todo. Gracias por su eficacia! Bendiciones.",
      author: "Isabel",
      role: "Hogar",
      ubicacion: "Catamarca",
      initials: "I",
      gradient: "from-blue-800 to-blue-400"
    },
    {
      quote: "Chicos, una belleza el veneno para garrapatas. Mi perrita estaba minada de esos bichos y por suerte se le cayeron todos.",
      author: "Romina",
      role: "Dueña de perro",
      ubicacion: "Tucuman",
      initials: "R",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      quote: "Buen dia! Anoche puse por primera vez y este es el resultado estamos muy sorprendidos 👏👏",
      author: "Bianca",
      role: "Hogar",
      ubicacion: "Chilecito",
      initials: "B",
      gradient: "from-orange-400 to-red-600"
    },
    {
      quote: "Muy bueno y eficaz el veneno 💪 si pueden hagan uno para los mosquitos 😂 Saludos y bendiciones.",
      author: "Leandro",
      role: "Hogar",
      ubicacion: "Santiago del Estero",
      initials: "L",
      gradient: "from-green-800 to-green-400"
    },
  ]

  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-clip-text text-accent bg-gradient-to-r from-primary to-primary/60">
            Voces de Confianza
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Testimonios de clientes satisfechos con nuestros productos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <div className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Card className="relative h-full p-8 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="absolute -top-6 left-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {testimonial.initials}
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-primary/20 absolute top-8 right-8" />

                  <div className="mt-8 flex-grow">
                    <p className="text-lg text-foreground/90 mb-6 leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="border-t border-primary/10 mt-auto">
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-foreground">{testimonial.author}</span>
                      <span className="text-sm text-muted-foreground font-medium">{testimonial.role}</span>
                      <span className="text-xs text-accent mt-2 uppercase tracking-wider font-semibold bg-primary/10 w-fit px-2 py-1 rounded-full">
                        {testimonial.ubicacion}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <ScrollReveal direction="up" delay={300}>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/casos-de-exito">
                  Ver más casos de éxito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  )
}
