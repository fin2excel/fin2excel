"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { useIsClient } from "@/hooks/use-is-client"

interface StatItem {
  label: string
  value: number
  prefix?: string
  unit?: string
  hasPlus?: boolean
}

const stats: StatItem[] = [
  { label: "Assets Managed", value: 450, prefix: "₹", unit: "CR", hasPlus: true },
  { label: "Global Families", value: 120, hasPlus: true },
  { label: "Cities in India", value: 18 },
  { label: "Expert Advisors", value: 25, hasPlus: true },
]

function AnimatedCounter({ 
  value, 
  prefix = "", 
  unit = "", 
  hasPlus = false, 
  inView 
}: { 
  value: number
  prefix?: string
  unit?: string
  hasPlus?: boolean
  inView: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const startTime = Date.now()

    const step = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic for satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * value)
      setCount(start)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span className="whitespace-nowrap inline-flex items-baseline justify-center">
      {prefix && <span className="mr-1.5 text-[0.85em] font-medium opacity-90">{prefix}</span>}
      <span>{count}</span>
      {unit && <span className="ml-1.5 text-[0.75em] font-semibold tracking-normal">{unit}</span>}
      {hasPlus && (
        <span className="ml-1 text-[0.55em] font-bold text-swiss-blue relative -top-[0.25em]">
          +
        </span>
      )}
    </span>
  )
}

export function StatsSection() {
  const isClient = useIsClient()

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="py-16 md:py-24 border-b border-swiss-black/5 bg-transparent">
      <dl className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-4 sm:gap-x-6 lg:gap-x-6 xl:gap-x-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center space-y-4 group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <dt className="text-[10px] tracking-[0.4em] uppercase text-swiss-dark-gray font-medium group-hover:text-swiss-blue transition-colors duration-500">
              {stat.label}
            </dt>
            <dd className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-semibold tracking-tight text-swiss-black whitespace-nowrap">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                unit={stat.unit}
                hasPlus={stat.hasPlus}
                inView={inView}
              />
            </dd>
            <div className="w-8 h-[1.5px] bg-swiss-blue/30 group-hover:w-16 group-hover:bg-swiss-blue transition-all duration-700 ease-out" />
          </motion.div>
        ))}
      </dl>
    </div>
  )
}
