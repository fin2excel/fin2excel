import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Fin2Excel | Private Financial Concierge & NRI Advisory',
  description: "Discover Fin2Excel: South Delhi's premier advisory bridging cross-border tax, FEMA compliance, real estate stewardship, and wealth for global NRI families.",
  keywords: [
    'Adv. Jag Mohan Kapoor',
    'Fin2Excel founder',
    'NRI legal counsel Delhi',
    'tax litigation ITAT High Court',
    'South Delhi property counsel',
    'private wealth concierge'
  ],
  alternates: {
    canonical: 'https://www.fin2excel.com/about',
  },
  openGraph: {
    title: 'About Fin2Excel | Private Financial Concierge & NRI Advisory',
    description: "Discover Fin2Excel: South Delhi's premier advisory bridging cross-border tax, FEMA compliance, real estate stewardship, and wealth for global NRI families.",
    url: 'https://www.fin2excel.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Fin2Excel | Private Financial Concierge & NRI Advisory',
    description: "Discover Fin2Excel: South Delhi's premier advisory bridging cross-border tax, FEMA compliance, real estate stewardship, and wealth for global NRI families.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
