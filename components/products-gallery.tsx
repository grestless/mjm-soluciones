"use client"

import { Sparkles } from "lucide-react"
import { motion, Variants } from "framer-motion"

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
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="productos" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent/10 border border-accent/20 mb-6 shadow-inner"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-heading font-black uppercase tracking-widest text-accent-foreground leading-none">Catálogo Destacado</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black text-foreground mb-8 leading-[0.9] tracking-tighter"
          >
            Fórmulas <span className="text-primary italic">certificadas</span> de alta eficiencia.
          </motion.h2>
          <p className="text-xl md:text-2xl font-sans font-medium text-muted-foreground text-pretty">
            Productos con certificación SENASA fabricados con tecnología de punta en Tucumán, Argentina.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <div className="clay-card rounded-[3rem] p-6 group cursor-pointer transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white shadow-inner mb-6">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary/90 text-primary-foreground text-[10px] font-heading font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    {product.category}
                  </div>
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl md:text-2xl font-heading font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">CERT. SENASA 847</span>
                    <button className="w-10 h-10 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all">
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center p-8 rounded-[2rem] bg-primary/5 border border-primary/5"
        >
          <p className="text-sm font-sans font-bold text-muted-foreground uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Todos los productos M.J.M cumplen con las normativas ambientales vigentes y están diseñados para una aplicación segura.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
