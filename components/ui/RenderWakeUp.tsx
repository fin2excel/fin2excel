'use client'

import { useEffect } from 'react'

/**
 * Silent client-side background ping component to wake up the Render Strapi container
 * as soon as any visitor lands on the site.
 */
export function RenderWakeUp() {
  useEffect(() => {
    let triggered = false

    const wakeUp = () => {
      if (triggered) return
      triggered = true

      window.removeEventListener('scroll', wakeUp)
      window.removeEventListener('mousemove', wakeUp)
      window.removeEventListener('touchstart', wakeUp)

      const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://fin2excel.onrender.com'
      const cleanUrl = `${strapiUrl.replace(/\/+$/, '')}/api/articles?pagination[limit]=1`

      // 2.5s timeout: Render proxy registers the hit immediately and initiates container boot,
      // while preventing hanging sockets from blocking browser network idle.
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 2500)

      fetch(cleanUrl, { mode: 'no-cors', signal: controller.signal })
        .then(() => {
          clearTimeout(timeoutId)
          console.log('[Render Wakeup] Silent wake-up ping dispatched.')
        })
        .catch((err) => {
          clearTimeout(timeoutId)
          if (err.name !== 'AbortError') {
            console.warn('[Render Wakeup] Wake-up notice:', err.message)
          }
        })
    }

    // Trigger on first human interaction
    window.addEventListener('scroll', wakeUp, { passive: true, once: true })
    window.addEventListener('mousemove', wakeUp, { passive: true, once: true })
    window.addEventListener('touchstart', wakeUp, { passive: true, once: true })

    // Fallback: ping after 6s idle
    const timer = setTimeout(wakeUp, 6000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', wakeUp)
      window.removeEventListener('mousemove', wakeUp)
      window.removeEventListener('touchstart', wakeUp)
    }
  }, [])

  return null
}
export default RenderWakeUp
