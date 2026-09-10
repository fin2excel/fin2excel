import { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/ui/JsonLd"
import { CrossServiceBanner } from "@/components/sections/CrossServiceBanner"

export const metadata: Metadata = {
  title: "NRI Fund Repatriation | Form 15CA & 15CB Compliance | Fin2Excel",
  description: "End-to-end repatriation of property sale proceeds and inheritance from India to foreign accounts. CA certified Form 15CB & 15CA filing under RBI guidelines.",
  keywords: [
    "nri fund repatriation 15ca 15cb",
    "repatriation of property sale proceeds india",
    "form 15cb chartered accountant certification delhi",
    "rbi 1 million dollar remittance scheme nri",
    "nro to nre account transfer rules",
    "transfer inheritance funds from india to usa"
  ],
  alternates: {
    canonical: "https://www.fin2excel.com/services/nri-fund-repatriation-15ca-15cb",
  },
  openGraph: {
    title: "NRI Fund Repatriation | Form 15CA & 15CB Compliance | Fin2Excel",
    description: "Move property sale proceeds and ancestral inheritance from Indian NRO accounts to your overseas bank with zero regulatory friction.",
    url: "https://www.fin2excel.com/services/nri-fund-repatriation-15ca-15cb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Fund Repatriation | Form 15CA & 15CB Compliance | Fin2Excel",
    description: "Move property sale proceeds and ancestral inheritance from Indian NRO accounts to your overseas bank with zero regulatory friction.",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between Form 15CA and Form 15CB?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Form 15CB is a statutory certification issued by an independent Chartered Accountant verifying that taxes have been paid or deducted on the remittance funds in accordance with the Indian Income Tax Act and applicable DTAA. Form 15CA is an online declaration filed by the remitter on the income tax e-filing portal based on the 15CB certificate."
      }
    },
    {
      "@type": "Question",
      "name": "How much money can an NRI repatriate out of India per financial year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Reserve Bank of India (RBI) Liberalised Remittance Scheme and FEMA regulations, Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs) are permitted to repatriate up to USD 1,000,000 (1 Million USD) per financial year (April 1 to March 31) from balances held in their NRO accounts, including proceeds from sale of real estate, inheritance, or family settlements."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the entire 15CA/15CB repatriation process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once all source-of-funds documents, sale deeds, and tax payment receipts are reviewed, Fin2Excel prepares and signs Form 15CB within 48 to 72 hours. Authorized Dealer (AD) banks typically execute the international SWIFT wire transfer within 3 to 5 business days thereafter."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required by banks to repatriate property sale proceeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Banks require: Registered Sale Deed, original purchase deed (to prove holding period and funds source), TDS payment challan (Form 26QB or Lower TDS Certificate), Form 15CB certificate signed by a CA, Form 15CA acknowledgment, bank statement of NRO account showing credited proceeds, and FEMA declaration form A2."
      }
    }
  ]
}

export default function RepatriationPage() {
  return (
    <div className="bg-swiss-bg text-swiss-black font-sans min-h-screen selection:bg-swiss-blue selection:text-white pt-36 pb-24">
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-swiss-blue animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-swiss-blue">
              FEMA • RBI 1 Million USD Remittance Facility
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.88] mb-8">
            NRI Fund <br />
            <span className="text-swiss-blue">Repatriation (15CA/CB)</span>
          </h1>

          <p className="text-lg md:text-2xl text-swiss-dark-gray font-medium leading-relaxed mb-10 max-w-2xl">
            Seamlessly transfer your property sale proceeds, inheritance, and capital gains from Indian NRO bank accounts to your overseas bank in compliance with RBI and FEMA guidelines.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20need%20assistance%20with%20Form%2015CA%20and%2015CB%20repatriation%20of%20funds%20to%20my%20overseas%20account."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-swiss-blue text-white rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black transition-colors duration-300 flex items-center gap-3 shadow-lg"
            >
              <span>Consult a FEMA Specialist on WhatsApp</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-swiss-black rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-swiss-black hover:text-white transition-colors duration-300"
            >
              Request Compliance Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white border border-swiss-black/5 shadow-sm">
            <span className="text-3xl font-display font-bold text-swiss-blue block mb-4">01</span>
            <h3 className="text-2xl font-display font-bold uppercase mb-4">Chartered Accountant 15CB</h3>
            <p className="text-sm text-swiss-dark-gray leading-relaxed">
              We audit your tax deductions, verify capital gains computations, confirm DTAA applicability, and issue the digitally signed Form 15CB certificate required by Authorized Dealer banks.
            </p>
          </div>

          <div className="p-10 bg-white border border-swiss-black/5 shadow-sm">
            <span className="text-3xl font-display font-bold text-swiss-blue block mb-4">02</span>
            <h3 className="text-2xl font-display font-bold uppercase mb-4">Online Form 15CA Filing</h3>
            <p className="text-sm text-swiss-dark-gray leading-relaxed">
              We execute Part C online filing on the Income Tax Department portal, ensuring zero discrepancy between remitter details, beneficiary SWIFT codes, and tax assessment records.
            </p>
          </div>

          <div className="p-10 bg-white border border-swiss-black/5 shadow-sm">
            <span className="text-3xl font-display font-bold text-swiss-blue block mb-4">03</span>
            <h3 className="text-2xl font-display font-bold uppercase mb-4">Bank Nodal Clearance</h3>
            <p className="text-sm text-swiss-dark-gray leading-relaxed">
              We interface directly with your bank&apos;s Forex / Remittance branch, submit the A2 declaration, and resolve compliance queries until funds hit your overseas account.
            </p>
          </div>
        </div>
      </section>

      {/* Repatriation Sources Covered */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="border-b border-swiss-black/10 pb-8 mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-2">
            Eligible Capital Classes
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
            What You Can Repatriate
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Real Estate Liquidation",
              desc: "Proceeds from residential, commercial, or ancestral land transactions across India."
            },
            {
              title: "Ancestral Inheritance",
              desc: "Funds inherited through legal wills, probate certificates, or family succession settlements."
            },
            {
              title: "Financial Portfolio",
              desc: "Capital gains and dividends from Indian mutual funds, shares, fixed deposits, and PF balances."
            },
            {
              title: "Rental & Royalty Income",
              desc: "Accumulated commercial and residential rent streams held in Indian domestic/NRO accounts."
            }
          ].map((item) => (
            <div key={item.title} className="p-8 bg-white border border-swiss-black/5">
              <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-3 text-swiss-black">{item.title}</h4>
              <p className="text-xs text-swiss-dark-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 mb-28">
        <div className="border-b border-swiss-black/10 pb-8 mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-swiss-blue block mb-2">
            FEMA Compliance FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Answers on Remittance
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl">
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="p-8 bg-white border border-swiss-black/5">
              <h3 className="text-lg md:text-xl font-display font-semibold uppercase tracking-tight mb-3">
                {faq.name}
              </h3>
              <p className="text-sm md:text-base text-swiss-dark-gray leading-relaxed">
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 text-center mb-24">
        <div className="py-20 border-y border-swiss-black/10">
          <h2 className="text-4xl md:text-6xl font-display font-semibold uppercase tracking-tight mb-6">
            Ready to Move Funds to Your Home Country?
          </h2>
          <p className="text-lg text-swiss-dark-gray max-w-xl mx-auto mb-10">
            Ensure 100% airtight tax certification and avoid bank rejections with Fin2Excel’s FEMA compliance desk.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/919560759494?text=Hi%20Fin2Excel%2C%20I%20need%20help%20filing%20Form%2015CA%20and%2015CB%20for%20repatriation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-swiss-blue text-white rounded-sm text-xs font-semibold tracking-[0.3em] uppercase hover:bg-swiss-black transition-colors shadow-lg"
            >
              Start 15CA/15CB Filing
            </a>
          </div>
        </div>
      </section>

      {/* Cross-Service Fiduciary Ecosystem */}
      <CrossServiceBanner currentServiceId="repatriation" />
    </div>
  )
}
