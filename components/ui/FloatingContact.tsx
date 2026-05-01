"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

export function FloatingContact() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const whatsappNumber = "+919000000000" // Placeholder
  const phoneNumber = "+919000000000" // Placeholder

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: scrolled ? 1 : 0, 
        x: scrolled ? 0 : 20,
        pointerEvents: scrolled ? "auto" : "none"
      }}
      className="fixed bottom-8 right-6 md:right-10 z-[90] flex flex-col gap-4"
    >
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-swiss-black/5 rounded-full shadow-lg hover:bg-swiss-black transition-all duration-500"
        aria-label="Call Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-swiss-black group-hover:text-white transition-colors duration-500"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-swiss-black text-white text-[10px] font-bold tracking-widest uppercase rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Call Principal
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-swiss-black/5 rounded-full shadow-lg hover:bg-[#25D366] transition-all duration-500"
        aria-label="WhatsApp Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-swiss-black group-hover:text-white transition-colors duration-500"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-swiss-black text-white text-[10px] font-bold tracking-widest uppercase rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Advisory
        </span>
      </a>
    </motion.div>
  )
}
