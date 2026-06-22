import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    // Simple authentication check
    const expectedSecret = process.env.REVALIDATE_SECRET
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid revalidation secret' }, { status: 401 })
    }

    const body = await request.json().catch(() => ({}))
    console.log('[Webhook] Received Strapi webhook event:', body.event, 'for model:', body.model)

    // Identify slug from Strapi webhook body
    // Strapi payloads typically have the entry in body.entry or body.data
    const entry = body.entry || body.data || {}
    const slug = entry.slug

    // 1. Purge cache for the main blog list and the specific blog post
    revalidatePath('/blog')
    if (slug) {
      revalidatePath(`/blog/${slug}`)
      console.log(`[Webhook] Purged cache for: /blog/${slug}`)
    } else {
      revalidatePath('/blog/[slug]', 'layout')
      console.log('[Webhook] Purged layout cache for blog posts')
    }

    // 2. Trigger asynchronous background fetches to "warm up" the Next.js cache
    // We dynamically build the absolute URL using the request headers so this works in any environment (local/staging/prod)
    const host = request.headers.get('host') || 'fin2excel.com'
    const isLocal = host.includes('localhost') || host.includes('127.0.0.1')
    const protocol = isLocal ? 'http' : 'https'
    const baseUrl = `${protocol}://${host}`

    // Non-blocking fire-and-forget pings to warm up cache
    const urlsToWarm = [`${baseUrl}/blog`]
    if (slug) {
      urlsToWarm.push(`${baseUrl}/blog/${slug}`)
    }

    console.log('[Webhook] Warming up pages:', urlsToWarm)
    
    // We don't block the webhook response, we run the fetches asynchronously
    Promise.all(
      urlsToWarm.map((url) =>
        fetch(url, { headers: { 'User-Agent': 'NextJS-Revalidation-Warmup' } })
          .then((res) => console.log(`[Webhook] Warmed up: ${url} (Status: ${res.status})`))
          .catch((err) => console.error(`[Webhook] Failed to warm up: ${url}`, err.message))
      )
    )

    return NextResponse.json({
      revalidated: true,
      slug: slug || 'all',
      now: Date.now()
    })
  } catch (error: any) {
    console.error('[Webhook] Revalidation error:', error)
    return NextResponse.json({ message: error.message || 'Unknown error' }, { status: 500 })
  }
}
