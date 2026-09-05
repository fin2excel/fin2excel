import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Schedule a Private Consultation',
  description: 'Book a private consultation with our principal advisors in Greater Kailash II, New Delhi. Rapid assistance for NRI property sales, tax compliance, and family concierge.',
  keywords: [
    'contact Fin2Excel',
    'NRI consultation Delhi',
    'Greater Kailash 2 financial concierge',
    'NRI tax advisor phone number',
    'schedule wealth advisory consultation'
  ],
  alternates: {
    canonical: 'https://www.fin2excel.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Schedule a Private Consultation | Fin2Excel',
    description: 'Book a private consultation with our principal advisors in Greater Kailash II, New Delhi. Rapid assistance for NRI property sales, tax compliance, and family concierge.',
    url: 'https://www.fin2excel.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Schedule a Private Consultation | Fin2Excel',
    description: 'Book a private consultation with our principal advisors in Greater Kailash II, New Delhi. Rapid assistance for NRI property sales, tax compliance, and family concierge.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
