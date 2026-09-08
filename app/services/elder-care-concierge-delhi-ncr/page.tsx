import { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/ui/JsonLd"

export const metadata: Metadata = {
  title: "Elder Care Concierge for NRI Parents in Delhi NCR | Fin2Excel",
  description: "Dignified, single-point logistical and healthcare support for elderly parents in Delhi NCR. Hospital accompaniment, emergency response & home assistance.",
  keywords: [
    "elder care services for nri parents delhi ncr",
    "senior citizen healthcare coordination south delhi",
    "emergency medical assistance for elderly gurgaon",
    "hospital accompaniment services max healthcare apollo",
    "nri parents caretaker concierge new delhi",
    "elderly companion and utility support greater kailash"
  ],
  alternates: {
    canonical: "https://www.fin2excel.com/services/elder-care-concierge-delhi-ncr",
  },
  openGraph: {
    title: "Elder Care Concierge for NRI Parents in Delhi NCR | Fin2Excel",
    description: "Bridging the distance between global NRI families and their aging parents in Delhi NCR with compassionate, dignified on-ground care.",
    url: "https://www.fin2excel.com/services/elder-care-concierge-delhi-ncr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elder Care Concierge for NRI Parents in Delhi NCR | Fin2Excel",
    description: "Bridging the distance between global NRI families and their aging parents in Delhi NCR with compassionate, dignified on-ground care.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Fin2Excel handle emergency medical situations for elderly parents in Delhi NCR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate an emergency response bridge. In any critical event, our assigned concierge immediately coordinates advanced cardiac life support ambulance dispatch, accompanies the parent to top tertiary care hospitals (such as Max Saket, Fortis Memorial, Medanta, or Apollo), coordinates hospital admission formalities, and maintains continuous real-time video/phone updates with family overseas."
      }
    },
    {
      "@type": "Question",
      "name": "What routine healthcare support is included in the elder care concierge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Routine services include personal vehicle and concierge accompaniment to outpatient doctor appointments, diagnostic sample collections at home, prescription medicine delivery, follow-up scheduling with trusted specialist physicians, and post-appointment digital summaries sent directly to children abroad."
      }
    },
    {
      "@type": "Question",
      "name": "What administrative and household logistics does the concierge cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manage utility bill payments, home maintenance oversight (plumbing, electrical, appliance servicing by vetted technicians), banking and pension certificate documentation, domestic staff vetting, and grocery or essentials replenishment."
      }
    },
    {
      "@type": "Question",
      "name": "Which geographical zones are covered by the elder care desk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our dedicated elder care managers operate throughout South Delhi (Greater Kailash, CR Park, Saket, Vasant Kunj, Hauz Khas), Central Delhi, Noida, and Gurugram (DLF, Sohna Road, Golf Course Road)."
      }
    }
  ]
}

export default function ElderCarePage() {
  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen selection:bg-swiss-blue selection:text-white pt-36 pb-24">
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-swiss-blue animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-swiss-blue">
              South Delhi & Gurgaon • Fiduciary Family Support
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.88] mb-8">
            Elder Care <br />
            <span className="text-swiss-blue">Concierge Desk</span>
          </h1>

          <p className="text-lg md:text-2xl text-swiss-dark-gray font-medium leading-relaxed mb-10 max-w-2xl">
            Absolute peace of mind for global Indian families. We provide dignified, dedicated healthcare coordination and logistical support for your aging parents in Delhi NCR.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20live%20abroad%20and%20would%20like%20to%20arrange%20elder%20care%20support%20for%20my%20parents%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-swiss-blue text-white rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black transition-colors duration-300 flex items-center gap-3 shadow-lg"
            >
              <span>Speak with Elder Care Manager on WhatsApp</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-swiss-black rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black hover:text-white transition-colors duration-300"
            >
              Request Family Care Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars of Care */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white border border-swiss-black/5 shadow-sm">
            <span className="text-3xl font-display font-bold text-swiss-blue block mb-4">01</span>
            <h3 className="text-2xl font-display font-bold uppercase mb-4">Medical & OPD Accompaniment</h3>
            <p className="text-sm text-swiss-dark-gray leading-relaxed">
              Never worry about your parents navigating crowded hospital lobbies alone. Our executive concierge accompanies them to every specialist consultation, assists with mobility, records doctor directives, and sends you complete digital summaries.
            </p>
          </div>

          <div className="p-10 bg-white border border-swiss-black/5 shadow-sm">
            <span className="text-3xl font-display font-bold text-swiss-blue block mb-4">02</span>
            <h3 className="text-2xl font-display font-bold uppercase mb-4">24/7 Emergency Response</h3>
            <p className="text-sm text-swiss-dark-gray leading-relaxed">
              When an urgent situation strikes, our team dispatches on-ground support within minutes, coordinates with top tertiary care centers (Max, Fortis, Medanta), manages admissions, and keeps you on direct video/voice communication.
            </p>
          </div>

          <div className="p-10 bg-white border border-swiss-black/5 shadow-sm">
            <span className="text-3xl font-display font-bold text-swiss-blue block mb-4">03</span>
            <h3 className="text-2xl font-display font-bold uppercase mb-4">Home Life & Logistics</h3>
            <p className="text-sm text-swiss-dark-gray leading-relaxed">
              From reliable medicine doorstep delivery to managing banking paperwork, utility repairs, and domestic staff supervision, we remove the daily friction so your parents live comfortably and independently.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital Network */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="p-10 md:p-16 bg-swiss-black text-white rounded-sm">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-4">
            Established Medical Relationships
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-8">
            Coordinated Care with Premier Delhi NCR Hospitals
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm tracking-widest uppercase font-bold border-t border-white/10 pt-8">
            <div className="p-6 bg-white/5 border border-white/10 text-center">Max Super Speciality (Saket)</div>
            <div className="p-6 bg-white/5 border border-white/10 text-center">Fortis Memorial (Gurgaon)</div>
            <div className="p-6 bg-white/5 border border-white/10 text-center">Medanta - The Medicity</div>
            <div className="p-6 bg-white/5 border border-white/10 text-center">Indraprastha Apollo</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="border-b border-swiss-black/10 pb-8 mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Caring for Your Family
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
            Ensure Your Parents Are in Safe, Trusted Hands
          </h2>
          <p className="text-lg text-swiss-dark-gray max-w-xl mx-auto mb-10">
            Schedule a private consultation to discuss personalized healthcare coordination and logistical support for your family.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20would%20like%20to%20set%20up%20elder%20care%20concierge%20support%20for%20my%20parents."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-swiss-blue text-white rounded-sm text-xs font-bold tracking-[0.3em] uppercase hover:bg-swiss-black transition-colors"
            >
              Enroll Your Family
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
