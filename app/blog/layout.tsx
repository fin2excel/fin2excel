import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NRI Wealth, Tax & Property Journal',
  description: 'Expert insights on FEMA regulations, NRI property sales, Section 195 TDS reduction, repatriation, inheritance laws, and cross-border wealth in India.',
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
    title: 'NRI Wealth, Tax & Property Journal | Fin2Excel Insights',
    description: 'Expert insights on FEMA regulations, NRI property sales, Section 195 TDS reduction, repatriation, inheritance laws, and cross-border wealth in India.',
    url: 'https://www.fin2excel.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Wealth, Tax & Property Journal | Fin2Excel Insights',
    description: 'Expert insights on FEMA regulations, NRI property sales, Section 195 TDS reduction, repatriation, inheritance laws, and cross-border wealth in India.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
