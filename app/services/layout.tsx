import type { Metadata } from 'next';

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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
