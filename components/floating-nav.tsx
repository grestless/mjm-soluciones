"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    } else {
      router.push(`/#${sectionId}`)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuVariants: Variants = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const itemVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, x: -20 },
  }

  const menuItems = [
    { label: "Inicio", action: () => scrollToSection("inicio") },
    { label: "Beneficios", action: () => scrollToSection("beneficios") },
    { label: "Productos", action: () => scrollToSection("productos") },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Casos de Éxito", href: "/casos-de-exito" },
    { label: "Únete al Equipo", action: () => scrollToSection("equipo") },
    { label: "Contacto", action: () => scrollToSection("contacto") },
  ]

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative">
          {/* Logo - Left */}
          <div className="absolute left-0 top-0 z-50">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="clay-card rounded-2xl px-4 py-2 md:px-5 md:py-3 h-[44px] md:h-[52px] flex items-center group cursor-pointer"
            >
              <Link href="/" onClick={() => setIsOpen(false)}>
                <h1 className="font-heading text-base md:text-xl font-black leading-none flex items-baseline gap-1.5">
                  <span className="text-primary tracking-tighter transition-colors group-hover:text-accent">MJM</span>
                  <span className="text-foreground/60 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase">Soluciones</span>
                </h1>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="absolute left-1/2 -translate-x-1/2 top-0 w-auto max-w-[calc(100%-200px)] lg:max-w-2xl z-50">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="clay-card rounded-2xl h-[44px] md:h-[52px] items-center w-auto px-2 hidden lg:flex bg-background/60 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center gap-1 w-full">
                {[
                  { id: "inicio", label: "Inicio" },
                  { id: "beneficios", label: "Beneficios" },
                  { id: "productos", label: "Productos" },
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="relative group rounded-full h-9 px-4 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold font-heading whitespace-nowrap"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Button>
                ))}

                <Link href="/quienes-somos">
                  <Button
                    variant="ghost"
                    className="relative group rounded-full h-9 px-4 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold font-heading whitespace-nowrap"
                  >
                    <span className="relative z-10">Quiénes Somos</span>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Button>
                </Link>
                
                <Link href="/casos-de-exito">
                  <Button
                    variant="ghost"
                    className="relative group rounded-full h-9 px-4 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold font-heading whitespace-nowrap"
                  >
                    <span className="relative z-10">Casos</span>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Button>
                </Link>

                {[
                  { id: "equipo", label: "Únete" },
                  { id: "contacto", label: "Contacto" },
                ].map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="relative group rounded-full h-9 px-4 text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all text-sm font-bold font-heading whitespace-nowrap"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Button>
                ))}
              </div>
            </motion.div>
          </nav>

          {/* Right buttons */}
          <div className="absolute right-0 top-0 flex items-center gap-2 z-50">
            {/* Theme Toggle - Solo desktop */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="hidden md:block"
            >
              <div className="clay-card p-1 rounded-2xl">
                <ThemeToggle />
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-[44px] w-[44px] text-primary hover:bg-accent/20 rounded-2xl clay-card relative z-50 transition-all active:scale-90"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            {/* Solicitar información - Solo desktop */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="hidden md:block"
            >
              <Button
                onClick={() => scrollToSection("contacto")}
                className="clay-button rounded-2xl px-6 h-[52px] font-heading font-black uppercase text-[10px] tracking-[0.15em] transition-all hover:scale-105 active:scale-95"
              >
                Solicitar información
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-2xl lg:hidden flex flex-col pt-[100px] px-6 pb-12"
          >
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col h-full gap-6"
            >
              <div className="flex-1 flex flex-col gap-3 overflow-y-auto py-4">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {item.href ? (
                      <Link href={item.href} onClick={() => setIsOpen(false)} className="block w-full">
                        <div className="group flex items-center justify-between p-5 rounded-3xl clay-card hover:bg-primary/5 transition-all">
                          <span className="text-xl font-heading font-extrabold text-foreground/90 group-hover:text-primary transition-colors">
                            {item.label}
                          </span>
                          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="w-full text-left group flex items-center justify-between p-5 rounded-3xl clay-card hover:bg-primary/5 transition-all"
                      >
                        <span className="text-xl font-heading font-extrabold text-foreground/90 group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                custom={menuItems.length}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-auto pt-8 border-t border-border/20 flex flex-col gap-6"
              >
                <div className="flex items-center justify-between px-4 py-3 clay-card rounded-2xl">
                  <span className="text-sm font-heading font-bold text-muted-foreground uppercase tracking-widest">Tema</span>
                  <ThemeToggle />
                </div>

                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full clay-button h-16 rounded-3xl text-sm font-heading font-black uppercase tracking-[0.2em]"
                >
                  Solicitar información
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
