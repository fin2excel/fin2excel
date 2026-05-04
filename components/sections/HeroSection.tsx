"use client"

import { motion, MotionValue, useTransform } from "motion/react"
import Image from "next/image"
import { EchoText } from "@/components/echo-text"
import { Globe } from "@/components/cobe-globe"
import React, { useEffect, useState } from "react"

interface HeroSectionProps {
  globeOpacity: MotionValue<number>
  globeScale: MotionValue<number>
  globeY: MotionValue<number>
  textY: MotionValue<number>
}

export function HeroSection({ globeOpacity, globeScale, globeY, textY }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const rightCardY = useTransform(globeY, [0, 100], [0, -200])
  const rightCardRotate = useTransform(globeY, [0, 100], [3, -5])
  const leftCardY = useTransform(globeY, [0, 100], [0, 100])
  const leftCardRotate = useTransform(globeY, [0, 100], [-6, 2])

  return (
    <section className={`relative min-h-screen flex flex-col items-center justify-center pt-40 pb-0 px-6 overflow-hidden transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating Image Card */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ delay: 1.2, duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        style={{ 
          y: rightCardY,
          rotate: rightCardRotate,
          willChange: 'transform'
        }}
        // Pushed further right and slightly scaled down for small laptop clearance
        className="absolute -right-4 md:-right-10 lg:-right-16 xl:right-[-2rem] 2xl:right-[-4rem] top-[5%] md:top-[8%] z-10 hidden lg:block w-44 md:w-56"
      >
        <div className="bg-white p-4 shadow-2xl rounded-sm border border-swiss-black/5 hover:scale-105 transition-all duration-700">
          <div className="relative aspect-[3/4] overflow-hidden transition-all duration-700">
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Legacy Wealth" 
              fill 
              sizes="(max-width: 768px) 100vw, 256px"
              priority
              className="object-cover"
            />
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">Featured Service</p>
            <p className="text-sm font-display font-bold uppercase tracking-tight">Legacy Wealth Advisory</p>
          </div>
        </div>
      </motion.div>
 
      {/* Another Small Image Card Left */}
      <motion.div 
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        style={{ 
          y: leftCardY,
          rotate: leftCardRotate,
          willChange: 'transform'
        }}
        // Pushed further left and slightly scaled down
        className="absolute -left-4 md:-left-10 lg:-left-16 xl:left-[2%] 2xl:left-[4%] bottom-[5%] md:bottom-[10%] z-10 hidden lg:block w-36 md:w-48"
      >
        <div className="bg-white p-3 shadow-xl rounded-sm border border-swiss-black/5 hover:scale-105 transition-all duration-700">
          <div className="relative aspect-square overflow-hidden transition-all duration-700">
            <Image 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop" 
              alt="Property" 
              fill 
              sizes="(max-width: 768px) 100vw, 192px"
              className="object-cover"
            />
          </div>
          <div className="mt-3">
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase opacity-60">Indian Assets Management</p>
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-20 text-center flex flex-col items-center">
        <EchoText 
          text="FIN2EXCEL" 
          className="text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-display font-bold leading-[0.8]"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold text-swiss-black"
        >
          HNI & NRI Lifecycle Management
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-[11px] md:text-sm max-w-md mx-auto uppercase tracking-widest leading-relaxed mb-10"
        >
          We handle everything. From Indian assets to global family sanctuaries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <a 
            href="/contact"
            className="group relative px-12 py-5 bg-swiss-black text-swiss-bg rounded-sm text-[10px] font-bold tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-swiss-blue/20 inline-block w-fit"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              Initiate Journey
            </span>
            <div className="absolute inset-0 bg-swiss-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
