"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Spray Anti Pulgas y Garrapatas",
    image: "/images/design-mode/producto1.png",
    category: "Hogar",
  },
  {
    id: 2,
    name: "Veneno para Cucarachas y Ratas",
    image: "/images/design-mode/producto2.png",
    category: "Profesional",
  },
  {
    id: 3,
    name: "Insecticida Multiuso",
    image: "/images/design-mode/producto3.png",
    category: "Comercial",
  },
  {
    id: 4,
    name: "Veneno para Cucarachas",
    image: "/images/design-mode/producto4.png",
    category: "Hogar",
  },
  {
    id: 5,
    name: "Kit Anti Plagas Completo",
    image: "/images/design-mode/producto5.png",
    category: "Kit",
  },
  {
    id: 6,
    name: "Matayuyos Concentrado",
    image: "/images/design-mode/producto6.png",
    category: "Jardín",
  },
]

export function ProductsGallery() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="productos" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Catálogo Destacado
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-foreground tracking-tight mb-6"
          >
            Fórmulas certificadas de alta eficiencia
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Nuestros productos cuentan con <span className="font-bold text-foreground">Certificación SENASA 847</span>. Fabricados con tecnología de punta en Tucumán, Argentina, garantizando eficacia y seguridad en su aplicación.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="group overflow-hidden bg-card border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 !py-0 !gap-0">
                <CardContent className="p-0 relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/95 shadow-sm border border-border text-foreground text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {product.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors line-clamp-2 drop-shadow-lg">
                      {product.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
