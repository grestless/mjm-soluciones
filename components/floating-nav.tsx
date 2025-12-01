"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

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

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto relative">
          {/* Logo - Left */}
          <div className="absolute left-0 top-0">
            <div className="backdrop-blur-md bg-accent/90 border border-accent/30 rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-lg h-[44px] md:h-[52px] flex items-center">
              <Link href="/">
                <h1 className="font-logo text-sm md:text-lg font-extrabold tracking-[0.15em] leading-none cursor-pointer hover:opacity-80 transition-opacity">
                  <span className="text-primary">MJM</span>{" "}
                  <span className="text-primary/80 text-[10px] md:text-sm tracking-[0.1em]">SOLUCIONES</span>
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="absolute left-1/2 -translate-x-1/2 top-0 w-auto max-w-[calc(100%-200px)] md:max-w-2xl">
            <div className="backdrop-blur-md border rounded-2xl shadow-lg h-[44px] md:h-[52px] items-center w-auto px-2 hidden md:flex bg-transparent border-accent">
              <div className="flex items-center justify-center gap-0.5 w-full">
                <div className="flex items-center gap-0.5">
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("inicio")}
                  >
                    Inicio
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("beneficios")}
                  >
                    Beneficios
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("productos")}
                  >
                    Productos
                  </Button>
                  <Link href="/quienes-somos">
                    <Button
                      variant="ghost"
                      className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium whitespace-nowrap"
                    >
                      Quiénes Somos
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("casos")}
                  >
                    Casos
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("equipo")}
                  >
                    Únete
                  </Button>
                  <Button
                    variant="ghost"
                    className="rounded-full h-9 px-3 text-foreground hover:bg-primary/10 hover:text-primary transition-all text-xs font-medium whitespace-nowrap"
                    onClick={() => scrollToSection("contacto")}
                  >
                    Contacto
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Right buttons */}
          <div className="absolute right-0 top-0 flex items-center gap-2">
            {/* Theme Toggle - Solo desktop */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-[44px] w-[44px] text-primary hover:bg-accent/90 rounded-2xl backdrop-blur-md bg-accent/90 border border-accent/30 shadow-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Solicitar información - Solo desktop */}
            <Button
              onClick={() => scrollToSection("contacto")}
              className="hidden md:block backdrop-blur-md bg-accent hover:bg-accent/90 text-accent-foreground border border-accent/30 rounded-2xl px-4 shadow-lg font-semibold h-[52px] transition-all hover:scale-105 hover:shadow-xl text-primary uppercase text-xs whitespace-nowrap"
            >
              Solicitar información
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed left-4 right-4 top-[60px] z-50 backdrop-blur-md bg-accent/95 border border-accent/30 rounded-2xl p-3 shadow-2xl max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            <Button
              variant="ghost"
              className="w-full justify-start rounded-full text-primary hover:bg-primary/10 hover:text-primary h-10 text-sm"
              onClick={() => scrollToSection("inicio")}
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-full text-primary hover:bg-primary/10 hover:text-primary h-10 text-sm"
              onClick={() => scrollToSection("beneficios")}
            >
              Beneficios
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-full text-primary hover:bg-primary/10 hover:text-primary h-10 text-sm"
              onClick={() => scrollToSection("productos")}
            >
              Productos
            </Button>
            <Link href="/quienes-somos" className="w-full">
              <Button
                variant="ghost"
                className="w-full justify-start rounded-full text-primary hover:bg-primary/10 hover:text-primary h-10 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-full text-primary hover:bg-primary/10 hover:text-primary h-10 text-sm"
              onClick={() => scrollToSection("casos")}
            >
              Casos
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-full text-primary hover:bg-primary/10 hover:text-primary h-10 text-sm"
              onClick={() => scrollToSection("equipo")}
            >
              Únete
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-full text-primary hover:bg-primary/10 hover:text-primary h-10 text-sm"
              onClick={() => scrollToSection("contacto")}
            >
              Contacto
            </Button>

            <div className="h-px bg-primary/20 my-1" />

            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-primary font-medium">Tema</span>
              <ThemeToggle />
            </div>

            <div className="h-px bg-primary/20 my-1" />

            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full rounded-full bg-primary text-white hover:bg-primary/90 mt-1 font-semibold h-10 text-sm"
            >
              Solicitar información
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
