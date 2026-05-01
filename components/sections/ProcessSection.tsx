"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "A comprehensive audit of your Indian footprint and family requirements."
  },
  {
    number: "02",
    title: "Onboarding",
    description: "Setting up your dedicated concierge desk and legal framework."
  },
  {
    number: "03",
    title: "Execution",
    description: "Active management, reporting, and 24/7 logistical oversight."
  }
]

export function ProcessSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className={`py-24 px-6 relative bg-swiss-bg overflow-hidden transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-[10px] tracking-[0.6em] uppercase font-bold text-swiss-blue mb-4">The Lifecycle</p>
          <h2 className="text-5xl md:text-8xl uppercase leading-[0.85] tracking-tighter">
            How we <br /> handle it.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-swiss-black/10">
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-4 overflow-visible">
              <motion.line
                x1="8" y1="0" x2="8" y2="100%"
                stroke="var(--color-swiss-blue)"
                strokeWidth="2"
                style={{ pathLength }}
              />
              <motion.circle
                cx="8" cy="0"
                r="4"
                fill="var(--color-swiss-blue)"
                className="shadow-[0_0_15px_var(--color-swiss-blue)]"
                style={{ 
                  offsetPath: "path('M 8 0 L 8 5000')", // Dummy long path
                  offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"])
                }}
              />
            </svg>
          </div>

          <div className="space-y-48 relative">
            {steps.map((step, i) => (
              <StepItem key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepItem({ step, index }: { step: any, index: number }) {
  const ref = useRef(null)
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center relative z-10"
    >
      <div className="w-16 h-16 rounded-full bg-white border border-swiss-black/5 flex items-center justify-center mb-8 shadow-sm group hover:border-swiss-blue transition-colors duration-500">
        <span className="text-xl font-display font-bold text-swiss-blue">{step.number}</span>
      </div>
      
      <h3 className="text-4xl md:text-6xl uppercase font-bold tracking-tighter mb-4">
        {step.title}
      </h3>
      <p className="text-swiss-dark-gray text-lg md:text-xl max-w-md mx-auto leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  )
}


