import { MetadataRoute } from 'next'
import { fetchAPI } from '@/lib/strapi'

const fallbackPosts = [
  { slug: 'nri-property-sale-lower-tds-form-13-guide', updatedAt: '2026-09-06' },
  { slug: 'repatriate-nro-funds-15ca-15cb-guide', updatedAt: '2026-09-07' },
  { slug: 'silent-migration-global-indian-wealth', updatedAt: '2026-05-12' },
  { slug: 'luxury-real-estate-outlook', updatedAt: '2026-05-10' },
  { slug: 'fema-amendments-nris', updatedAt: '2026-05-05' },
  { slug: 'art-financial-concierge', updatedAt: '2026-04-28' },
  { slug: 'sustainable-philanthropy', updatedAt: '2026-04-20' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://www.fin2excel.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.fin2excel.com/llms.txt',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.fin2excel.com/llms-full.txt',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.fin2excel.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.fin2excel.com/services/lower-tds-certificate-form-13',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://www.fin2excel.com/services/nri-fund-repatriation-15ca-15cb',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://www.fin2excel.com/services/nri-property-management-delhi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://www.fin2excel.com/services/elder-care-concierge-delhi-ncr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://www.fin2excel.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.fin2excel.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.fin2excel.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  let blogUrls: MetadataRoute.Sitemap = []

  try {
    const res = await fetchAPI({
      endpoint: 'articles',
      query: { fields: ['slug', 'updatedAt'] },
      options: { timeout: 3000 }
    })

    if (res?.data && Array.isArray(res.data) && res.data.length > 0) {
      blogUrls = res.data.map((post: any) => ({
        url: `https://www.fin2excel.com/blog/${post.slug || post.documentId}`,
        lastModified: new Date(post.updatedAt || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.85,
      }))
    }
  } catch (e) {
    // Strapi unreachable or timed out
  }

  // If Strapi is cold or has no articles, use the fallback blog articles so they are indexed
  if (blogUrls.length === 0) {
    blogUrls = fallbackPosts.map((post) => ({
      url: `https://www.fin2excel.com/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    }))
  }

  return [...staticRoutes, ...blogUrls]
}
