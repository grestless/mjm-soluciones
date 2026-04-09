import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -mb-32 -mr-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shadow-lg transform rotate-3">
                <Leaf className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter">M.J.M <span className="text-accent italic font-black">SOLUCIONES</span></span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed font-sans font-medium text-lg">
              Tecnología aplicada al control de plagas con conciencia ambiental. 
              Garantizando entornos seguros y saludables.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-heading font-black text-xl mb-6 text-accent">Navegación</h4>
            <ul className="space-y-3 text-lg font-sans font-medium text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" /> Inicio</a></li>
              <li><a href="#beneficios" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" /> Beneficios</a></li>
              <li><a href="#testimonios" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" /> Casos de Éxito</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" /> Contacto</a></li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-heading font-black text-xl mb-6 text-accent">Compromiso</h4>
            <ul className="space-y-3 text-lg font-sans font-medium text-primary-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">Certificaciones</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Fórmulas SAS</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-primary-foreground/40 font-heading font-black uppercase text-[10px] tracking-[0.2em]">
          <p>© 2025 M.J.M Soluciones Ecológicas. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <span className="text-white/20 hover:text-accent transition-colors cursor-default">Fabricado en Tucumán</span>
            <span className="text-white/20 hover:text-accent transition-colors cursor-default">SAS Registered</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
