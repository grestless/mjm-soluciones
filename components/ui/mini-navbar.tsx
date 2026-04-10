"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { useLenis } from 'lenis/react';

const AnimatedNavLink = ({ action, children }: { action: () => void; children: React.ReactNode }) => {
  const defaultTextColor = 'text-foreground/70';
  const hoverTextColor = 'text-primary';
  const textSizeClass = 'text-sm font-bold font-heading';

  return (
    <button onClick={action} className={`group relative overflow-hidden flex flex-col ${textSizeClass}`}>
      <span className={`block transition-transform duration-300 ease-out group-hover:-translate-y-[100%] ${defaultTextColor}`}>
        {children}
      </span>
      <span className={`absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-[100%] ${hoverTextColor}`}>
        {children}
      </span>
    </button>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lenis = useLenis();

  const router = useRouter();
  const pathname = usePathname();

  // Handle hash scrolling after navigation (e.g. from /quienes-somos to /#beneficios)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && pathname === '/') {
      // Wait for page to render and Lenis to initialize
      const timeout = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          // Clean up the hash from URL
          window.history.replaceState(null, '', '/');
        }
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [pathname, lenis]);

  const scrollToSection = useCallback((sectionId: string) => {
    // Close menu first — this also restarts Lenis via the isOpen effect
    setIsOpen(false);

    if (pathname === "/") {
      // Delay scroll so menu close animation + Lenis restart can complete
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 350);
    } else {
      router.push(`/#${sectionId}`);
    }
  }, [pathname, lenis, router]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-3xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const logoElement = (
    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center justify-start group cursor-pointer w-[140px]">
      <h1 className="font-heading text-base md:text-xl font-black leading-none flex items-baseline gap-1.5">
        <span className="text-primary tracking-tighter transition-colors group-hover:text-accent">MJM</span>
        <span className="text-foreground/60 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase hidden sm:inline-block">Soluciones</span>
      </h1>
    </Link>
  );

  const navLinksData = [
    { label: 'Inicio', action: () => scrollToSection("inicio") },
    { label: 'Beneficios', action: () => scrollToSection("beneficios") },
    { label: 'Productos', action: () => scrollToSection("productos") },
    { label: 'Nosotros', action: () => { router.push("/quienes-somos"); setIsOpen(false); } },
    { label: 'Casos', action: () => { router.push("/casos-de-exito"); setIsOpen(false); } },
    { label: 'Únete', action: () => scrollToSection("equipo") },
  ];

  const contactButtonElement = (
    <div className="relative group w-[140px] flex justify-end">
      <div className="absolute inset-0 -m-1 rounded-full
                     hidden lg:block
                     bg-primary/20
                     opacity-40 filter blur-lg pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-60 group-hover:blur-xl group-hover:-m-2"></div>
      <Button
        onClick={() => scrollToSection("contacto")}
        className="relative z-10 clay-button rounded-full px-4 h-9 font-heading font-black uppercase text-xs tracking-wider transition-all hover:scale-105 active:scale-95 w-full"
      >
        Contacto
      </Button>
    </div>
  );

  return (
    <header className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50
                       flex flex-col items-center
                       px-4 md:px-6 py-2 backdrop-blur-xl
                       ${headerShapeClass}
                       border border-border/40 bg-background/60 shadow-lg
                       w-[calc(100%-2rem)] lg:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}>

      <div className="flex items-center justify-between w-full lg:w-auto lg:gap-8 xl:gap-10">
        
        {/* Logo Element (Fixed Width) */}
        <div className="flex items-center justify-start flex-none">
          {logoElement}
        </div>

        {/* Desktop View: Perfectly Centered Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-6 text-sm flex-none">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.label} action={link.action}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        {/* Desktop View: Action Button (Fixed Width) */}
        <div className="hidden lg:flex items-center justify-end flex-none">
          {contactButtonElement}
        </div>

        {/* Mobile View: Hamburger Menu */}
        <div className="flex lg:hidden items-center justify-end flex-none">
          <button className="flex items-center justify-center w-10 h-10 text-foreground focus:outline-none clay-card rounded-full" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
            {isOpen ? (
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

      </div>

      <div className={`lg:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-6 pb-4' : 'max-h-0 opacity-0 pt-0 pb-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-6 text-base w-full mb-6">
          {navLinksData.map((link) => (
            <button key={link.label} onClick={link.action} className="text-foreground/80 hover:text-primary transition-colors w-full text-center font-heading font-bold text-lg">
              {link.label}
            </button>
          ))}
        </nav>
        <div className="flex flex-col items-center w-full">
          {contactButtonElement}
        </div>
      </div>
    </header>
  );
}
