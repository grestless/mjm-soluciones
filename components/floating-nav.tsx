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
            <div className="backdrop-blur-md backdrop-saturate-150 bg-accent/90 border border-accent/30 rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-lg shadow-inner h-[44px] md:h-[52px] flex items-center">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <h1 className="font-logo text-sm md:text-lg font-extrabold tracking-[0.15em] leading-none cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="text-primary">MJM</span>{" "}
                  <span className="text-primary/80 text-[10px] md:text-sm tracking-[0.1em]">SOLUCIONES</span>
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="absolute left-1/2 -translate-x-1/2 top-0 w-auto max-w-[calc(100%-200px)] lg:max-w-2xl z-50">
            <div className="backdrop-blur-md backdrop-saturate-150 border border-accent/30 rounded-2xl shadow-lg shadow-inner h-[44px] md:h-[52px] items-center w-auto px-2 hidden lg:flex bg-transparent">
              <div className="flex items-center justify-center gap-0.5 w-full">
                <div className="flex items-center gap-0.5">
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("inicio")}
                  >
                    Inicio
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("beneficios")}
                  >
                    Beneficios
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("productos")}
                  >
                    Productos
                  </Button>
                  <Link href="/quienes-somos">
                    <Button
                      variant="ghost"
                      className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap"
                    >
                      Quiénes Somos
                    </Button>
                  </Link>
                  <Link href="/casos-de-exito">
                    <Button
                      variant="ghost"
                      className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap"
                    >
                      Casos
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("equipo")}
                  >
                    Únete
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("contacto")}
                  >
                    Contacto
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Right buttons */}
          <div className="absolute right-0 top-0 flex items-center gap-2 z-50">
            {/* Theme Toggle - Solo desktop */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-[44px] w-[44px] text-primary hover:bg-accent/90 rounded-2xl backdrop-blur-md backdrop-saturate-150 bg-accent/90 border border-accent/30 shadow-lg shadow-inner relative z-50"
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
            <Button
              onClick={() => scrollToSection("contacto")}
              className="hidden md:block backdrop-blur-md backdrop-saturate-150 bg-accent hover:bg-accent/90 text-accent-foreground border border-accent/30 rounded-2xl px-4 shadow-lg shadow-inner font-semibold h-[52px] transition-all hover:scale-105 hover:shadow-xl text-primary uppercase text-xs whitespace-nowrap"
            >
              Solicitar información
            </Button>
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-[12px] backdrop-saturate-150 lg:hidden flex flex-col pt-[80px] px-6 pb-8"
          >
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col h-full"
            >
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto py-4">
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
                        <div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-accent/50 transition-colors border border-transparent hover:border-accent/30">
                          <span className="text-lg font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                            {item.label}
                          </span>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 group-hover:scale-110 duration-300" />
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="w-full text-left group flex items-center justify-between p-4 rounded-2xl hover:bg-accent/50 transition-colors border border-transparent hover:border-accent/30"
                      >
                        <span className="text-lg font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 group-hover:scale-110 duration-300" />
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
                className="mt-auto pt-6 border-t border-border/50 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-medium text-muted-foreground">Apariencia</span>
                  <ThemeToggle />
                </div>

                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold shadow-lg shadow-primary/20"
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
