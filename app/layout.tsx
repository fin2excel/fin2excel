import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css'; 
import { Navigation } from "@/components/sections/Navigation"
import { Footer } from "@/components/sections/Footer"
import SmoothScroll from "@/components/ui/smooth-scroll"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { FloatingContact } from "@/components/ui/FloatingContact"
import { JsonLd } from "@/components/ui/JsonLd"
import { RenderWakeUp } from "@/components/ui/RenderWakeUp"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fin2excel.com'),
  title: {
    default: 'Fin2Excel | Private Financial Concierge & NRI Advisory',
    template: '%s | Fin2Excel',
  },
  description: 'India\'s premier private financial concierge for global families. Specialized in NRI property sale, Lower TDS (Form 13), repatriation & elder care in Delhi NCR.',
  keywords: [
    'financial concierge',
    'HNI',
    'NRI',
    'wealth management',
    'property management',
    'elder care',
    'India',
    'private advisory',
    'Lower TDS certificate',
    'Form 13',
    'Section 195 TDS',
    '15CA 15CB repatriation',
  ],
  authors: [{ name: 'Fin2Excel Private Advisory' }],
  alternates: {
    canonical: 'https://www.fin2excel.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
  openGraph: {
    title: 'Fin2Excel | Private Financial Concierge',
    description: 'India\'s premier private financial concierge for global families. Defining legacy through precision and absolute trust.',
    url: 'https://www.fin2excel.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Fin2Excel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fin2Excel | Private Financial Concierge',
    description: 'India\'s premier private financial concierge for global families.',
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-W5CD2FZG');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google global site tag (gtag.js) for AW-11248127603 & GA4 G-VJT4GY7KRF */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VJT4GY7KRF"
          strategy="afterInteractive"
        />
        <Script
          id="google-gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'AW-11248127603');\ngtag('config', 'G-VJT4GY7KRF');`,
          }}
        />
        {/* End Google global site tag */}

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ydfv46b1r4");`,
          }}
        />
        {/* End Microsoft Clarity */}
      </head>
      <body className="antialiased bg-swiss-bg text-swiss-black noise-bg font-sans" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W5CD2FZG"
          height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Fin2Excel",
          "url": "https://fin2excel.com",
          "logo": "https://fin2excel.com/assets/logo.png",
          "description": "India's premier private financial concierge for high-net-worth and NRI families.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "E-578, Greater Kailash II",
            "addressLocality": "New Delhi",
            "postalCode": "110070",
            "addressCountry": "India"
          },
          "telephone": "+91-95607-59494"
        }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:px-4 focus:py-2 focus:bg-swiss-black focus:text-swiss-bg focus:roun[...]">
          Skip to content
        </a>
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <FloatingContact />
          <RenderWakeUp />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
