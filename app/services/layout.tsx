import type { Metadata } from 'next';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata: Metadata = {
  title: 'NRI Advisory & Concierge Services',
  description: 'Comprehensive NRI services in India: Lower TDS certificates (Form 13), 15CA/15CB repatriation, Delhi NCR property management, and fiduciary elder care for global Indian families.',
  keywords: [
    'NRI advisory services',
    'Lower TDS certificate Form 13',
    'Section 195 NRI property sale',
    '15CA 15CB fund repatriation',
    'NRI property management Delhi NCR',
    'elder care concierge India',
    'private wealth advisory'
  ],
  alternates: {
    canonical: 'https://www.fin2excel.com/services',
  },
  openGraph: {
    title: 'NRI Advisory & Concierge Services | Fin2Excel',
    description: 'Comprehensive NRI services in India: Lower TDS certificates (Form 13), 15CA/15CB repatriation, Delhi NCR property management, and fiduciary elder care.',
    url: 'https://www.fin2excel.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Advisory & Concierge Services | Fin2Excel',
    description: 'Comprehensive NRI services in India: Lower TDS certificates (Form 13), 15CA/15CB repatriation, Delhi NCR property management, and fiduciary elder care.',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can an NRI reduce the 20% TDS on property sales in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. NRIs can apply for a Lower or Nil TDS Certificate under Section 195 (Form 13) with the Income Tax Department. This allows the TDS rate to be reduced from the standard 20%–23% to the actual capital gains tax liability (often 3%–5% or zero), preventing substantial funds from being locked up."
      }
    },
    {
      "@type": "Question",
      "name": "What is the procedure for repatriating property sale proceeds abroad (15CA & 15CB)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the RBI 1 Million USD Scheme, sale proceeds deposited into an NRO account require Form 15CB (Chartered Accountant certification) and Form 15CA (online tax declaration). Once verified, authorized dealer banks wire the funds directly to the overseas bank account."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to obtain a Lower TDS Certificate (Form 13)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The statutory processing time typically ranges between 3 to 6 weeks from the date of online submission on the TRACES portal. Applying early before finalizing the sale deed ensures seamless registration without excess deduction."
      }
    },
    {
      "@type": "Question",
      "name": "What property management services does Fin2Excel provide for NRI landlords?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fin2Excel provides comprehensive on-ground property management across Delhi NCR, including tenant background verification, digital lease drafting, periodic physical inspections with photographic reports, rent collection, municipal tax compliance, and renovation oversight."
      }
    },
    {
      "@type": "Question",
      "name": "What elder care concierge support is available for NRI families with parents in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide dignified, single-point logistical and healthcare concierge services in South Delhi and Gurgaon, including routine medical checkup accompaniment, emergency hospitalization coordination, prescription management, and home utility assistance."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Fin2Excel NRI Advisory & Concierge Services",
  "url": "https://www.fin2excel.com/services",
  "description": "Turnkey legal, tax, property management, and elder care concierge tailored for High-Net-Worth Individuals and Non-Resident Indian families.",
  "telephone": "+91-95607-59494",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "E-578, Greater Kailash II",
    "addressLocality": "New Delhi",
    "postalCode": "110070",
    "addressCountry": "India"
  },
  "areaServed": ["India", "United States", "United Kingdom", "Canada", "United Arab Emirates", "Singapore"]
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
