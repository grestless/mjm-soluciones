"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Sparkles } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Spray Anti Pulgas y Garrapatas",
    image: "/images/design-mode/producto1.png",
  },
  {
    id: 2,
    name: "Veneno para Cucarachas y Ratas",
    image: "/images/design-mode/producto2.png",
  },
  {
    id: 3,
    name: "Insecticida Multiuso",
    image: "/images/design-mode/producto3.png",
  },
  {
    id: 4,
    name: "Veneno para Cucarachas", // Updated nombre del producto 4 para reflejar la nueva imagen
    image: "/images/design-mode/producto4.png",
  },
  {
    id: 5,
    name: "Kit Anti Plagas Completo",
    image: "/images/design-mode/producto5.png",
  },
  {
    id: 6,
    name: "Matayuyos Concentrado",
    image: "/images/design-mode/producto6.png",
  },
]

export function ProductsGallery() {
  return (
    <section id="productos" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Nuestros Productos</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
              Algunos de nuestros productos destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Todos nuestros productos cuentan con
              certificación SENASA y están fabricados en San Miguel de Tucumán, Argentina.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} direction="up" delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer bg-white dark:bg-card aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm md:text-base text-balance leading-tight">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={600}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Todos los productos M.J.M están certificados por SENASA (CERT. 847) y cumplen con las normativas
              ambientales vigentes.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
