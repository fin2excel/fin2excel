import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Journal | Private Wealth & NRI Legal Guides',
  description: 'Expert insights on Indian taxation, Section 195 Lower TDS Form 13, RBI 15CA/15CB repatriation, luxury real estate, and estate planning for global NRIs.',
  keywords: [
    'NRI tax blog',
    'FEMA updates 2026',
    'Section 195 property sale guide',
    '15CA 15CB procedure',
    'Indian real estate market outlook for NRIs',
    'cross-border wealth strategies'
  ],
  alternates: {
    canonical: 'https://www.fin2excel.com/blog',
  },
  openGraph: {
    title: 'Insights & Journal | Private Wealth & NRI Legal Guides',
    description: 'Expert insights on Indian taxation, Section 195 Lower TDS Form 13, RBI 15CA/15CB repatriation, luxury real estate, and estate planning for global NRIs.',
    url: 'https://www.fin2excel.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Journal | Private Wealth & NRI Legal Guides',
    description: 'Expert insights on Indian taxation, Section 195 Lower TDS Form 13, RBI 15CA/15CB repatriation, luxury real estate, and estate planning for global NRIs.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
