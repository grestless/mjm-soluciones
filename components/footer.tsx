import Link from "next/link"
import { Leaf, Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border">
      {/* Background Spatial Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -mb-32 -mr-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full -mb-20 -ml-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand & Description (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex w-fit">
              <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 group-hover:border-primary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Leaf className="w-7 h-7 text-accent drop-shadow-[0_0_8px_rgba(200,255,0,0.5)] transition-colors duration-300 group-hover:text-primary z-10" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter text-foreground group-hover:text-primary transition-colors">
                M.J.M <span className="text-accent italic font-black drop-shadow-[0_0_8px_rgba(200,255,0,0.2)]">SOLUCIONES</span>
              </span>
            </Link>
            <p className="text-foreground/70 leading-relaxed font-sans text-base max-w-sm mb-6">
              Líderes en tecnología ambiental aplicada al control de plagas. Elevando los estándares de seguridad y salud en todo el norte argentino.
            </p>
            <div className="mt-auto space-y-3">
              <a href="mailto:contacto@mjmsoluciones.com" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-sm group w-fit">
                <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contacto@mjmsoluciones.com</span>
              </a>
              <div className="flex items-center gap-3 text-foreground/70 text-sm group w-fit">
                <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Tucumán, Argentina.</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (Spans 2 columns) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-heading font-black text-lg mb-6 text-foreground">Navegación</h4>
            <ul className="space-y-4 text-base font-sans font-medium text-foreground/70">
              <li>
                <Link href="/" className="hover:text-primary transition-all flex items-center gap-2 group w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Inicio</span>
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-primary transition-all flex items-center gap-2 group w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Quienes Somos</span>
                </Link>
              </li>
              <li>
                <Link href="/casos-de-exito" className="hover:text-primary transition-all flex items-center gap-2 group w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Casos de Éxito</span>
                </Link>
              </li>
              <li>
                <Link href="/#productos" className="hover:text-primary transition-all flex items-center gap-2 group w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Productos</span>
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-primary transition-all flex items-center gap-2 group w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials (Spans 3 columns) */}
          <div className="lg:col-span-3 lg:col-start-9">
            <h4 className="font-heading font-black text-lg mb-4 text-foreground">Legal & SOP</h4>
            <ul className="space-y-3 text-sm font-sans font-medium text-foreground/60 flex flex-col">
              <li><Link href="#" className="hover:text-primary transition-colors w-fit">Auditoría Ambiental</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors w-fit">Política de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors w-fit">Términos de Servicio</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="pt-8 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/50 font-heading font-bold text-xs uppercase tracking-[0.1em]">
          <p>© {currentYear} M.J.M Soluciones Ecológicas. Todos los derechos reservados.</p>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Sistemas Operativos
            </span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-border"></span>
            <span className="hover:text-primary transition-colors cursor-default">
              SAS Registered
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
