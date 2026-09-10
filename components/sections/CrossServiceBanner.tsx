import Link from "next/link"

interface CrossServiceBannerProps {
  currentServiceId: "lower-tds" | "repatriation" | "property" | "elder-care"
}

const ALL_SERVICES = [
  {
    id: "lower-tds",
    tag: "Tax & Wealth",
    title: "Lower TDS Certificate (Form 13)",
    description: "Avoid 20% to 23.92% flat tax lockup on Indian real estate sales. Official Section 195 withholding exemption before registry.",
    href: "/services/lower-tds-certificate-form-13",
  },
  {
    id: "repatriation",
    tag: "FEMA & Banking",
    title: "NRI Fund Repatriation (15CA/CB)",
    description: "CA-certified statutory clearance under RBI's $1M USD facility to transfer sale proceeds & inheritance to foreign accounts.",
    href: "/services/nri-fund-repatriation-15ca-15cb",
  },
  {
    id: "property",
    tag: "Asset Stewardship",
    title: "NRI Property Management Desk",
    description: "Surgical on-ground oversight for luxury residential & commercial assets across South Delhi and Gurugram.",
    href: "/services/nri-property-management-delhi",
  },
  {
    id: "elder-care",
    tag: "Family Fiduciary",
    title: "Elder Care Concierge Desk",
    description: "Dignified hospital accompaniment, emergency response bridge, and daily domestic logistics for parents in Delhi NCR.",
    href: "/services/elder-care-concierge-delhi-ncr",
  },
]

export function CrossServiceBanner({ currentServiceId }: CrossServiceBannerProps) {
  const otherServices = ALL_SERVICES.filter((s) => s.id !== currentServiceId)

  return (
    <section className="border-t border-swiss-black/10 py-20 bg-swiss-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase text-swiss-blue block mb-3">
              The Complete Fiduciary Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold uppercase tracking-tight text-swiss-black">
              Integrated Private Services
            </h2>
          </div>
          <p className="text-sm text-swiss-black/70 max-w-md">
            Fin2Excel acts as a single operational bridge across your family&apos;s legal, taxation, property, and elder care affairs in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group p-8 bg-white border border-swiss-black/5 hover:border-swiss-blue/30 rounded-sm transition-all duration-500 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-swiss-blue-dark block mb-4">
                  {service.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-semibold uppercase tracking-tight text-swiss-black group-hover:text-swiss-blue transition-colors duration-300 mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-swiss-black/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-swiss-black/5 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-swiss-black group-hover:text-swiss-blue transition-colors">
                  Explore Service
                </span>
                <span className="text-sm transform group-hover:translate-x-1.5 transition-transform duration-300 text-swiss-blue">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
