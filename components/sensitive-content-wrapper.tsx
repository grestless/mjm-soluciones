"use client"

import { useState, useRef } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface SensitiveContentWrapperProps {
    children: React.ReactNode
    className?: string
}

export function SensitiveContentWrapper({ children, className }: SensitiveContentWrapperProps) {
    const [isRevealed, setIsRevealed] = useState(false)
    const touchStartRef = useRef<{ x: number; y: number } | null>(null)

    // Track touch start to distinguish taps from swipes
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        }
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStartRef.current || isRevealed) return

        const dx = Math.abs(e.changedTouches[0].clientX - touchStartRef.current.x)
        const dy = Math.abs(e.changedTouches[0].clientY - touchStartRef.current.y)

        // Only reveal if it was a tap (minimal movement), not a swipe
        if (dx < 10 && dy < 10) {
            setIsRevealed(true)
        }
        touchStartRef.current = null
    }

    return (
        <div
            className={cn("relative group", isRevealed ? "" : "overflow-hidden", className)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={() => {
                // Desktop click - reveal immediately
                if (!isRevealed) setIsRevealed(true)
            }}
        >
            <div className={cn(
                "transition-all duration-500 ease-in-out",
                !isRevealed ? "blur-xl scale-105" : "blur-0 scale-100"
            )}>
                {children}
            </div>

            {!isRevealed && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4 text-center transition-opacity duration-300 hover:bg-black/50 pointer-events-none">
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
