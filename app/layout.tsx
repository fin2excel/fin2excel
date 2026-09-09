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
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fin2excel.com'),
  title: {
    default: 'Fin2Excel | Private Financial Concierge & NRI Advisory',
    template: '%s | Fin2Excel',
  },
  description: "India's premier private financial concierge for global families: NRI property sales, Lower TDS Form 13, fund repatriation, and elder care across Delhi NCR.",
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
    title: 'Fin2Excel | Private Financial Concierge & NRI Advisory',
    description: "India's premier private financial concierge for global families: NRI property sales, Lower TDS Form 13, fund repatriation, and elder care across Delhi NCR.",
    url: 'https://www.fin2excel.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Fin2Excel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fin2Excel | Private Financial Concierge & NRI Advisory',
    description: "India's premier private financial concierge for global families: NRI property sales, Lower TDS Form 13, fund repatriation, and elder care across Delhi NCR.",
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
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-W5CD2FZG');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google global site tag (gtag.js) for AW-11248127603 & GA4 G-VJT4GY7KRF */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VJT4GY7KRF"
          strategy="lazyOnload"
        />
        <Script
          id="google-gtag-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'AW-11248127603');\ngtag('config', 'G-VJT4GY7KRF');`,
          }}
        />
        {/* End Google global site tag */}

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
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
          "@type": ["FinancialService", "LegalService", "LocalBusiness"],
          "name": "Fin2Excel",
          "alternateName": "Fin2Excel Private Advisory",
          "url": "https://www.fin2excel.com",
          "logo": "https://www.fin2excel.com/assets/logo.png",
          "image": "https://www.fin2excel.com/assets/hero-office.png",
          "description": "India's premier private financial concierge for high-net-worth and NRI families. Specialized in NRI property sale, Lower TDS Form 13, fund repatriation 15CA/15CB, and elder care in Delhi NCR.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "E-578, Greater Kailash II",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110048",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5355,
            "longitude": 77.2410
          },
          "telephone": "+91-95607-59494",
          "email": "advisory@fin2excel.com",
          "priceRange": "$$$$",
          "currenciesAccepted": "INR, USD, GBP, AED, EUR, CAD, SGD",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-95607-59494",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"],
            "areaServed": ["IN", "US", "GB", "AE", "CA", "SG"]
          },
          "knowsAbout": [
            "Section 195 of Income Tax Act 1961",
            "Lower TDS Certificate Form 13",
            "Form 15CA and Form 15CB Certification",
            "RBI Liberalised Remittance Scheme (LRS)",
            "NRO to Overseas Bank Account Repatriation",
            "Capital Gains Tax Exemption Section 54 and Section 54EC",
            "NRI Real Estate Management and Asset Stewardship in Delhi NCR",
            "Elder Care Medical Concierge in Delhi NCR",
            "Greater Kailash II, South Delhi",
            "Double Taxation Avoidance Agreement (DTAA)",
            "Foreign Exchange Management Act (FEMA)"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Private NRI Advisory & Concierge Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Lower TDS Certificate (Form 13) for NRI Property Sale",
                  "url": "https://www.fin2excel.com/services/lower-tds-certificate-form-13",
                  "description": "Filing of Form 13 under Section 195/197 to reduce withholding tax on NRI real estate transactions in India from 20%+ to actual net liability."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "NRI Fund Repatriation (Form 15CA & 15CB)",
                  "url": "https://www.fin2excel.com/services/nri-fund-repatriation-15ca-15cb",
                  "description": "CA 15CB certification and online 15CA Part C filing under RBI 1 Million USD remittance scheme for overseas fund transfer."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "NRI Property Concierge & Asset Stewardship (Delhi NCR)",
                  "url": "https://www.fin2excel.com/services/nri-property-management-delhi",
                  "description": "End-to-end management of Indian real estate assets across South Delhi and Gurgaon, including tenant KYC, physical inspections, and municipal tax clearance."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Elder Care Concierge & Medical Accompaniment (Delhi NCR)",
                  "url": "https://www.fin2excel.com/services/elder-care-concierge-delhi-ncr",
                  "description": "Dedicated single-point logistical and clinical accompaniment for elderly parents in Delhi NCR with Max, Medanta, and Fortis hospitals."
                }
              }
            ]
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:30",
              "closes": "18:30"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/in/jag-kapoor-jrf",
            "https://www.facebook.com/jmkapoor",
            "https://www.instagram.com/fin2excel/",
            "https://www.youtube.com/@Fin2Excel",
            "https://x.com/fin2excel"
          ],
          "areaServed": [
            { "@type": "City", "name": "New Delhi" },
            { "@type": "City", "name": "South Delhi" },
            { "@type": "City", "name": "Gurgaon" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Singapore" }
          ]
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
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
