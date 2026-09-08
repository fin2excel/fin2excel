import { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/ui/JsonLd"

export const metadata: Metadata = {
  title: "NRI Property Management Services in Delhi NCR | Fin2Excel",
  description: "Premier on-ground property management for overseas NRI landlords. Tenant vetting, lease drafting, physical inspections & dispute mitigation in South Delhi & Gurgaon.",
  keywords: [
    "nri property management south delhi",
    "property management services gurgaon nri",
    "overseas landlord rental management delhi",
    "property inspection services for nris delhi ncr",
    "tenant background verification lawyer delhi",
    "vacant plot supervision greater kailash"
  ],
  alternates: {
    canonical: "https://www.fin2excel.com/services/nri-property-management-delhi",
  },
  openGraph: {
    title: "NRI Property Management Services in Delhi NCR | Fin2Excel",
    description: "Turnkey property management, tenant lifecycle oversight, and asset preservation for overseas Indian property owners.",
    url: "https://www.fin2excel.com/services/nri-property-management-delhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Property Management Services in Delhi NCR | Fin2Excel",
    description: "Turnkey property management, tenant lifecycle oversight, and asset preservation for overseas Indian property owners.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Fin2Excel protect NRI landlords from illegal tenant encroachments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fin2Excel drafts airtight, lawyer-vetted 11-month Registered Lease and Leave & License Agreements under the Transfer of Property Act with strict default and eviction clauses. We conduct mandatory police verification, KYC background audits, and periodic on-ground property inspections to ensure complete legal control of the asset."
      }
    },
    {
      "@type": "Question",
      "name": "What areas in Delhi NCR does Fin2Excel cover for property management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our primary physical footprint covers South Delhi prime micro-markets (Greater Kailash I & II, Vasant Vihar, Defence Colony, Anand Niketan, Panchsheel Park, Gulmohar Park), Central Delhi (Chanakyapuri, Golf Links), and key luxury sectors in Gurugram (Golf Course Road, DLF Phases 1-5, Golf Course Extension)."
      }
    },
    {
      "@type": "Question",
      "name": "How is rent collected and remitted to an NRI landlord?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rent is collected directly into your designated NRO bank account with zero third-party commingling. We track monthly TDS compliance (Form 16C filed by the tenant under Section 194-IB if applicable), reconcile utility payments, and handle municipal property tax filings annually."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a property needs maintenance or emergency repairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our concierge team conducts on-site photographic audits, drafts standardized repair estimates from verified contractors, obtains your digital approval, and supervises the execution directly. You receive before-and-after high-resolution photographic and video documentation."
      }
    }
  ]
}

export default function PropertyManagementPage() {
  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen selection:bg-swiss-blue selection:text-white pt-36 pb-24">
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-swiss-blue animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-swiss-blue">
              South Delhi & Gurgaon • Private Landlord Stewardship
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.88] mb-8">
            NRI Property <br />
            <span className="text-swiss-blue">Management Desk</span>
          </h1>

          <p className="text-lg md:text-2xl text-swiss-dark-gray font-medium leading-relaxed mb-10 max-w-2xl">
            Surgical on-ground oversight for your residential and commercial assets in Delhi NCR. We act as your eyes, ears, and legal guardians on the ground while you reside abroad.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20am%20an%20NRI%20looking%20for%20property%20management%20services%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-swiss-blue text-white rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black transition-colors duration-300 flex items-center gap-3 shadow-lg"
            >
              <span>Connect with Property Desk on WhatsApp</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-swiss-black rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black hover:text-white transition-colors duration-300"
            >
              Enroll Property Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Service Scope Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Tenant Due Diligence",
              desc: "Deep background checks, corporate references, CIBIL credit screening, police verification, and lawyer-drafted lease agreements."
            },
            {
              title: "Periodic On-Site Audits",
              desc: "Quarterly physical inspections with high-resolution photo and video logs shared via your private client portal."
            },
            {
              title: "Municipal & Tax Compliance",
              desc: "Filing South Delhi Municipal Corporation (MCD) property taxes, electricity meter transfers, and water board dues."
            },
            {
              title: "Builder & Dispute Mitigation",
              desc: "Supervising builder collaboration agreements in South Delhi colonies and managing legal boundary protections for vacant estates."
            }
          ].map((item, idx) => (
            <div key={item.title} className="p-8 bg-white border border-swiss-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-swiss-blue block mb-4">Pillar 0{idx+1}</span>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-sm text-swiss-dark-gray leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Micro Markets */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="p-10 md:p-16 bg-swiss-black text-white rounded-sm">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-4">
            Prime Micro-Market Coverage
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8">
            Deep Roots in South Delhi & Gurugram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs tracking-widest uppercase font-bold border-t border-white/10 pt-8">
            <span className="p-4 bg-white/5 border border-white/10 text-center">Greater Kailash I & II</span>
            <span className="p-4 bg-white/5 border border-white/10 text-center">Vasant Vihar</span>
            <span className="p-4 bg-white/5 border border-white/10 text-center">Defence Colony</span>
            <span className="p-4 bg-white/5 border border-white/10 text-center">Anand Niketan</span>
            <span className="p-4 bg-white/5 border border-white/10 text-center">Golf Links</span>
            <span className="p-4 bg-white/5 border border-white/10 text-center">Golf Course Road</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="border-b border-swiss-black/10 pb-8 mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-2">
            Property Concierge FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Protecting Your Real Estate
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl">
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="p-8 bg-white border border-swiss-black/5">
              <h4 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight mb-3">
                {faq.name}
              </h4>
              <p className="text-sm md:text-base text-swiss-dark-gray leading-relaxed">
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <div className="py-20 border-y border-swiss-black/10">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
            Own Vacant or Rented Property in Delhi NCR?
          </h2>
          <p className="text-lg text-swiss-dark-gray max-w-xl mx-auto mb-10">
            Let our experienced legal and property team take complete charge of tenant management and physical inspections.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20would%20like%20to%20discuss%20property%20management%20for%20my%20home%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-swiss-blue text-white rounded-sm text-xs font-bold tracking-[0.3em] uppercase hover:bg-swiss-black transition-colors"
            >
              Consult On-Ground Manager
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
