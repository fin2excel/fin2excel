'use client'

import { useEffect } from 'react'

/**
 * Silent client-side background ping component to wake up the Render Strapi container
 * as soon as any visitor lands on the site.
 */
export function RenderWakeUp() {
  useEffect(() => {
    // Determine the Strapi URL from environment or default
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://fin2excel.onrender.com'
    const cleanUrl = `${strapiUrl.replace(/\/+$/, '')}/api/articles?pagination[limit]=1`

    console.log('[Render Wakeup] Waking up database in background:', cleanUrl)

    // Fire-and-forget fetch. Does not block rendering or user interaction.
    // 'no-cors' mode is used since we only want to trigger the request at Render's routing proxy.
    fetch(cleanUrl, { mode: 'no-cors' })
      .then(() => {
        console.log('[Render Wakeup] Silent wake-up request successfully dispatched.')
      })
      .catch((err) => {
        console.warn('[Render Wakeup] Failed to dispatch background wake-up:', err.message)
      })
  }, [])

  return null
}
export default RenderWakeUp
