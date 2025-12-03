"use client"

import React from 'react'
import { motion } from "motion/react"
import RotatingText from "@/components/RotatingText"

export function RotatingTextSeparator() {
    return (
        <div id="texto-rotativo" className="w-full py-12 sm:py-20 flex flex-col items-center justify-center overflow-hidden">
            <motion.div layout className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-black dark:text-white">
                <motion.p layout className="text-black dark:text-white">M.J.M Soluciones</motion.p>
                <RotatingText
                    texts={["ecológicas", "enserio", "de verdad!"]}
                    mainClassName="text-accent overflow-hidden py-0.5 sm:py-1 md:py-1 justify-start rounded-lg"
                    staggerFrom="first"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    rotationInterval={3000}
                />
            </motion.div>
        </div>
    )
}
