"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface SensitiveContentWrapperProps {
    children: React.ReactNode
    className?: string
}

export function SensitiveContentWrapper({ children, className }: SensitiveContentWrapperProps) {
    const [isRevealed, setIsRevealed] = useState(false)

    return (
        <div
            className={cn("relative overflow-hidden group cursor-pointer", className)}
            onClick={() => setIsRevealed(true)}
        >
            <div className={cn(
                "transition-all duration-500 ease-in-out",
                !isRevealed ? "blur-xl scale-105" : "blur-0 scale-100"
            )}>
                {children}
            </div>

            {!isRevealed && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4 text-center transition-opacity duration-300 hover:bg-black/50">
                    <EyeOff className="w-8 h-8 mb-2" />
                    <p className="font-bold text-sm uppercase tracking-wider mb-1">Contenido Sensible</p>
                    <p className="text-xs text-white/80">Haz clic para ver</p>
                </div>
            )}

            {isRevealed && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsRevealed(false)
                        }}
                        className="bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm"
                        title="Ocultar contenido"
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    )
}
