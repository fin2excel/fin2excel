import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Fin2Excel Private Advisory & Concierge',
  description: "Connect with Fin2Excel advisors in Greater Kailash II, South Delhi. Schedule a private consultation for NRI property tax, fund repatriation, and elder care.",
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
    title: 'Contact Us | Fin2Excel Private Advisory & Concierge',
    description: "Connect with Fin2Excel advisors in Greater Kailash II, South Delhi. Schedule a private consultation for NRI property tax, fund repatriation, and elder care.",
    url: 'https://www.fin2excel.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Fin2Excel Private Advisory & Concierge',
    description: "Connect with Fin2Excel advisors in Greater Kailash II, South Delhi. Schedule a private consultation for NRI property tax, fund repatriation, and elder care.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
