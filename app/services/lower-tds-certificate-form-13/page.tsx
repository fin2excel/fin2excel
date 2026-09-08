import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { JsonLd } from "@/components/ui/JsonLd"

export const metadata: Metadata = {
  title: "Lower TDS Certificate for NRI Property Sale | Form 13 & Section 195",
  description: "Secure a Nil or Lower TDS Certificate (Form 13) under Section 195 for NRI property sales in India. Reduce 20%+ TDS to actual capital gains. Fast-tracked advisory.",
  keywords: [
    "lower tds certificate nri property sale",
    "form 13 income tax act",
    "section 195 tds reduction india",
    "nri property sale tax exemption",
    "traces lower tds application",
    "capital gains tax on inherited property nri"
  ],
  alternates: {
    canonical: "https://www.fin2excel.com/services/lower-tds-certificate-form-13",
  },
  openGraph: {
    title: "Lower TDS Certificate for NRI Property Sale | Form 13 | Fin2Excel",
    description: "Avoid 20% to 23.92% flat tax withholding on Indian real estate sales. Obtain a Lower TDS Certificate (Form 13) under Section 195 with Fin2Excel.",
    url: "https://www.fin2excel.com/services/lower-tds-certificate-form-13",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lower TDS Certificate for NRI Property Sale | Form 13 | Fin2Excel",
    description: "Avoid 20% to 23.92% flat tax withholding on Indian real estate sales. Obtain a Lower TDS Certificate (Form 13) under Section 195 with Fin2Excel.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Lower TDS Certificate (Form 13) for NRIs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Section 195 of the Indian Income Tax Act, buyers are mandated to deduct 20% to 23.92% TDS on the total gross sale consideration when purchasing property from an NRI. A Form 13 application allows the NRI seller to receive an official Lower or Nil TDS Certificate from the Assessing Officer, reducing the deduction strictly to the actual net capital gains tax (often 0% to 5%)."
      }
    },
    {
      "@type": "Question",
      "name": "How much money can an NRI save by applying for Form 13?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On a property sold for ₹5 Crore, a standard 20% TDS plus surcharge can lock up over ₹1.1 Crore of the seller's proceeds for 12 to 18 months until an ITR refund is processed. With Form 13, the withholding tax is calculated on capital gains after indexation or Section 54/54EC exemptions, saving ₹80 Lakh to ₹1 Crore in upfront liquidity."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical processing timeline for Form 13?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The statutory turnaround time ranges between 3 to 6 weeks from online submission on the TRACES portal. Fin2Excel fast-tracks file preparation, coordinates directly with the jurisdictional Assessing Officer, and responds to tax clarifications promptly to ensure the certificate is issued prior to registry."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required to apply for Form 13?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key documents include: PAN of the NRI seller and buyer, Agreement to Sell, original purchase deed, computation of indexed cost of acquisition, bank account statements (NRE/NRO), past 3 years' Indian tax returns (if applicable), and proof of reinvestment for capital gains exemptions under Section 54 or 54EC."
      }
    }
  ]
}

export default function LowerTdsPage() {
  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen selection:bg-swiss-blue selection:text-white pt-36 pb-24">
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-swiss-blue animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-swiss-blue">
              Section 195 • Income Tax Act 1961
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.88] mb-8">
            Lower TDS <br />
            <span className="text-swiss-blue">Certificate (Form 13)</span>
          </h1>

          <p className="text-lg md:text-2xl text-swiss-dark-gray font-medium leading-relaxed mb-10 max-w-2xl">
            Do not let 20% to 23.92% of your gross property sale value get locked up with the tax department. Secure an official Lower or Nil Withholding Tax Certificate before you sign the sale deed.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20am%20an%20NRI%20selling%20property%20in%20India%20and%20need%20assistance%20with%20a%20Lower%20TDS%20Certificate%20(Form%2013)."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-swiss-blue text-white rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black transition-colors duration-300 flex items-center gap-3 shadow-lg"
            >
              <span>Consult an Advisor on WhatsApp</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-swiss-black rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black hover:text-white transition-colors duration-300"
            >
              Book Private Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 bg-white border border-red-200 shadow-sm rounded-sm">
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-red-600 block mb-4">
              Default Scenario • Without Form 13
            </span>
            <h3 className="text-3xl font-display font-bold uppercase mb-6">20% to 23.92% Flat Deduction</h3>
            <ul className="space-y-4 text-sm text-swiss-dark-gray">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <span>TDS is calculated on the <strong>total gross sale value</strong>, not on your net profit.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <span>Substantial liquidity is trapped with the government for 12 to 18 months until return filing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <span>Buyers and their CAs frequently demand maximum withholding to avoid legal liability.</span>
              </li>
            </ul>
          </div>

          <div className="p-10 md:p-14 bg-white border-2 border-swiss-blue shadow-xl rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-swiss-blue text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-1.5">
              Fin2Excel Protected
            </div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-swiss-blue block mb-4">
              Optimized Outcome • With Form 13 Certificate
            </span>
            <h3 className="text-3xl font-display font-bold uppercase mb-6">0% to 5% Actual Tax Rate</h3>
            <ul className="space-y-4 text-sm text-swiss-black">
              <li className="flex items-start gap-3">
                <span className="text-swiss-blue font-bold">✓</span>
                <span>Withholding tax is assessed solely on <strong>net capital gains</strong> after indexation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-swiss-blue font-bold">✓</span>
                <span>Exemptions under Section 54/54EC (capital gains bonds or reinvestment) are factored upfront.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-swiss-blue font-bold">✓</span>
                <span>Full sale proceeds are released into your NRO account at registry, ready for repatriation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Walkthrough */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="border-b border-swiss-black/10 pb-8 mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-2">
            Execution Roadmap
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
            How We Secure Your Certificate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Capital Gains Audit",
              desc: "We compute indexed acquisition cost, verify historical improvement receipts, and calculate net tax exposure under applicable DTAA provisions."
            },
            {
              step: "02",
              title: "Digital TRACES Filing",
              desc: "Form 13 is prepared with comprehensive legal annexures, draft sale agreement details, and buyer TAN verification on the TRACES portal."
            },
            {
              step: "03",
              title: "Officer Liaison",
              desc: "Our senior advocates and tax counsels directly interface with the jurisdictional International Taxation Ward to resolve queries and fast-track approval."
            },
            {
              step: "04",
              title: "Certificate Handover",
              desc: "The digitally signed Section 195 certificate is issued directly to the buyer's TAN, allowing seamless execution at the sub-registrar office."
            }
          ].map((item) => (
            <div key={item.step} className="p-8 bg-white border border-swiss-black/5 hover:border-swiss-blue/30 transition-colors">
              <span className="text-3xl font-display font-bold text-swiss-blue block mb-4">{item.step}</span>
              <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-3">{item.title}</h4>
              <p className="text-sm text-swiss-dark-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Case Study */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="p-10 md:p-16 bg-swiss-black text-white rounded-sm">
          <div className="max-w-3xl">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-4">
              Representative Case Outcome
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">
              ₹76 Lakhs Upfront Liquidity Preserved for Silicon Valley NRI
            </h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
              A tech executive in California was selling an ancestral apartment in South Delhi for ₹4.8 Crore. The buyer insisted on deducting 22.88% TDS (₹1.09 Crore). Fin2Excel filed Form 13 with indexed acquisition valuations dating back to 1985 and Section 54EC bond declarations. An official certificate was issued at a 6.8% effective rate, releasing ₹76 Lakhs in additional funds upfront on registry day.
            </p>
            <div className="flex flex-wrap gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Sale Value</p>
                <p className="text-2xl font-display font-bold text-white">₹4.80 Cr</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Default TDS</p>
                <p className="text-2xl font-display font-bold text-red-400">₹1.09 Cr (22.88%)</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Certificate Rate</p>
                <p className="text-2xl font-display font-bold text-swiss-blue">6.8%</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Liquidity Preserved</p>
                <p className="text-2xl font-display font-bold text-green-400">₹76.2 Lakhs</p>
              </div>
            </div>
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
            Form 13 & Property Sales
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
            Selling Property in India Soon?
          </h2>
          <p className="text-lg text-swiss-dark-gray max-w-xl mx-auto mb-10">
            Initiate your Form 13 application early to ensure the certificate is in hand before signing the final sale deed.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20would%20like%20to%20evaluate%20my%20Form%2013%20TDS%20reduction%20eligibility."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-swiss-blue text-white rounded-sm text-xs font-bold tracking-[0.3em] uppercase hover:bg-swiss-black transition-colors"
            >
              Get Free Case Evaluation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
