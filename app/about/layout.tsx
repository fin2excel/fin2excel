import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Adv. Jag Mohan Kapoor & Private Advisory',
  description: 'Learn about Fin2Excel and founding visionary Adv. Jag Mohan Kapoor. Providing high-level legal, tax litigation, and asset stewardship for global Indian families.',
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
    title: 'About Us | Adv. Jag Mohan Kapoor & Private Advisory | Fin2Excel',
    description: 'Learn about Fin2Excel and founding visionary Adv. Jag Mohan Kapoor. Providing high-level legal, tax litigation, and asset stewardship for global Indian families.',
    url: 'https://www.fin2excel.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Adv. Jag Mohan Kapoor & Private Advisory | Fin2Excel',
    description: 'Learn about Fin2Excel and founding visionary Adv. Jag Mohan Kapoor. Providing high-level legal, tax litigation, and asset stewardship for global Indian families.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
