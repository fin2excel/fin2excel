import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fin2excel.onrender.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // Optional: Disable HMR if requested via environment variable.
    // This can prevent unwanted reloads during rapid automated edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
  async redirects() {
    return [
      // Fix mangled Strapi slugs with 'nr-is' / 'hn-is' artifacts → correct canonical URLs
      {
        source: '/blog/beyond-boundaries-professional-property-management-for-global-nr-is-and-hn-is',
        destination: '/blog/the-nri-wealth-playbook-2026-global-assets-and-indian-growth',
        permanent: true,
      },
      {
        source: '/blog/strategic-property-management-why-nr-is-and-hn-is-need-professional-counsel-in-2026',
        destination: '/blog/the-nri-wealth-playbook-2026-global-assets-and-indian-growth',
        permanent: true,
      },
      {
        source: '/blog/new-income-tax-act-guide-for-nr-is-tax-services-fin2-excel',
        destination: '/blog/nri-property-sale-lower-tds-form-13-guide',
        permanent: true,
      },
      {
        source: '/blog/navigating-economic-complexity-insights-from-the-think-change-forum-seminar',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/navigating-the-shift-key-developments-in-corporate-tax-compliance',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/emerging-regulatory-challenges-in-corporate-legal-advisory',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/holding-the-hands-that-held-ours-the-art-of-compassionate-elder-care',
        destination: '/blog/the-surrogate-child-model-redefining-elder-care-in-india-for-2026',
        permanent: true,
      },
      {
        source: '/blog/what-if-a-simple-home-loan-balance-transfer-could-significantly-reduce-your-long-term-financial-burden',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/unlock-instant-liquidity-the-power-of-loan-against-securities-las',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/the-silent-leak-how-tax-inefficiencies-and-unmanaged-properties-drain-your-wealth',
        destination: '/blog/the-nri-wealth-playbook-2026-global-assets-and-indian-growth',
        permanent: true,
      },
      {
        source: '/blog/the-biggest-mistake-self-managed-family-offices-make-in-their-first-year',
        destination: '/blog/silent-migration-global-indian-wealth',
        permanent: true,
      },
      {
        source: '/blog/the-ultimate-nri-guide-to-securing-premium-indian-real-estate-avoid-these-3-costly-mistakes',
        destination: '/blog/nri-property-sale-lower-tds-form-13-guide',
        permanent: true,
      },
      {
        source: '/blog/the-2026-tax-landscape-how-the-new-income-tax-act-impacts-your-wealth-portfolio',
        destination: '/blog/repatriate-nro-funds-15ca-15cb-guide',
        permanent: true,
      },
      {
        source: '/blog/the-greatest-mother-s-day-gift-unburdening-her-future-with-professional-care',
        destination: '/blog/the-surrogate-child-model-redefining-elder-care-in-india-for-2026',
        permanent: true,
      },
      {
        source: '/blog/smart-capital-navigating-the-2026-loan-market-for-business-and-personal-growth',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/nation-first-building-a-resilient-financial-future-in-2026',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/fueling-ambition-strategic-business-loans-for-the-2026-economy',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/financing-your-dream-home-fin2-excel-partners-with-state-bank-of-india-sbi',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/why-professional-property-management-in-india-is-a-strategic-choice-in-2026',
        destination: '/blog/the-nri-wealth-playbook-2026-global-assets-and-indian-growth',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
