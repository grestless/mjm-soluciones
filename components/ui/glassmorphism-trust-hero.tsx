"use client"


import {
  ArrowRight,
  MessageSquare,
  Target,
  Leaf,
  ShieldCheck,
  Building2,
  Home,
  Store,
  Factory,
  UtensilsCrossed,
  Hospital
} from "lucide-react";
import Link from "next/link";
import { useLenis } from 'lenis/react';

// --- MOCK BRANDS ADAPTED FOR MJM ---
const CLIENTS = [
  { name: "Consorcios", icon: Building2 },
  { name: "Hogares", icon: Home },
  { name: "Comercios", icon: Store },
  { name: "Industria", icon: Factory },
  { name: "Gastronomía", icon: UtensilsCrossed },
  { name: "Clínicas", icon: Hospital },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export function HeroSection() {
  const lenis = useLenis();

  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans min-h-screen flex flex-col justify-center">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Slower for readability */
          will-change: transform;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Video with Gradient Mask */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-20 pointer-events-none"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 10%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 10%, black 80%, transparent)",
        }}
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  Certificación SENASA Vigente
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-black tracking-tighter leading-[0.9]"
            >
              Control de <br />
              <span className="bg-gradient-to-br from-white via-white to-primary/80 bg-clip-text text-transparent italic pr-2">
                Plagas
              </span>{" "}
              <span className="bg-gradient-to-br from-white via-white to-primary/80 bg-clip-text text-transparent italic pr-2 lg:pr-4">
                Profesional
              </span><br />
              con Impacto Real
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed font-medium">
              Desarrollamos fórmulas de laboratorio y proveemos un servicio de desinfección integral. Protegemos comercios y hogares garantizando eliminación segura y resultados inmediatos.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5493813321573" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
                  Solicitar Presupuesto
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </a>

              <button 
                onClick={() => {
                  const element = document.getElementById("productos");
                  if (element) {
                    if (lenis) lenis.scrollTo(element);
                    else element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#productos";
                  }
                }}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <MessageSquare className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                Ver Productos M.J.M
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">

            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-sm shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/20 blur-xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">+1,000</div>
                    <div className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Intervenciones</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">Tasa de Efectividad</span>
                    <span className="text-white font-bold">99.9%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/80">
                    <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="5+" label="Años Exp" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="24/7" label="Soporte" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="100%" label="Calidad" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Guardia Activa
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
                    <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                    Fórmula Ecológica
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 py-8 backdrop-blur-sm">
              <h3 className="mb-6 px-8 text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">Cobertura Integral para:</h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {/* Triple list for seamless loop */}
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      {/* Brand Icon */}
                      <client.icon className="h-5 w-5 text-zinc-300 stroke-[1.5]" />
                      {/* Brand Name */}
                      <span className="text-base font-bold text-zinc-300 tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
