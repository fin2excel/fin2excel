import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fetchAPI, getStrapiMedia } from '@/lib/strapi'
import { JsonLd } from '@/components/ui/JsonLd'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Helper to detect if content string contains HTML tags
function isHtml(content: string): boolean {
  return /<\/?(?:p|h[1-6]|div|span|blockquote|ul|ol|li|strong|em|table|tr|td|th|section|article|a|img|br|hr)\b/i.test(content);
}

// Fallback data
const fallbackPosts: Record<string, any> = {
  "silent-migration-global-indian-wealth": {
    title: "The Silent Migration: Why Global Indian Wealth is Shifting to Private Family Offices",
    subtitle: "Why traditional banking is failing the modern Indian diaspora and the rise of the concierge model.",
    description: "Why modern Indian diaspora families are shifting from priority banking to private family offices for FEMA compliance, cross-border tax, and asset stewardship.",
    author: {
      name: "Adv. Jag Mohan Kapoor",
      role: "Founder & Managing Director",
      avatar: "/assets/logo.png"
    },
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Wealth Strategy",
    image: "/assets/hero-office.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        The landscape of wealth management for Non-Resident Indians (NRIs) has undergone a tectonic shift over the last decade. As the Indian economy integrates more deeply with global markets, the needs of the diaspora have evolved from simple remittance management to complex, multi-jurisdictional estate planning and asset stewardship.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Failure of Traditional Banking</h2>
      <p class="mb-6">
        For years, traditional "Priority Banking" for NRIs was limited to high-interest NRE accounts and basic mutual fund distribution. However, these models often suffered from high turnover in relationship managers and a "product-first" rather than "client-first" approach. 
      </p>
      <p class="mb-10">
        Modern HNIs require more than just an account manager; they require a fiduciary who understands the intersection of FEMA regulations, UK/US taxation, and the emotional complexities of managing family assets in India.
      </p>

      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "True wealth management isn't about the rate of return; it's about the depth of the relationship and the certainty of the outcome."
      </blockquote>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Concierge Advantage</h2>
      <p class="mb-6">
        This is where the concierge model steps in. By acting as a single point of contact for everything—from legal compliance to property maintenance and elder care—we remove the friction of distance. 
      </p>
      <ul class="list-disc pl-6 mb-10 space-y-4">
        <li><strong>Unified Reporting:</strong> A single dashboard for all Indian assets, across banks and asset classes.</li>
        <li><strong>Proactive Compliance:</strong> Managing tax filings and legal documentation before they become emergencies.</li>
        <li><strong>On-Ground Execution:</strong> Physical presence in India to manage properties and family needs.</li>
      </ul>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Looking Ahead</h2>
      <p class="mb-6">
        As we move towards 2027, the focus will increasingly shift towards "Legacy Engineering"—ensuring that wealth isn't just preserved, but successfully transitioned to the next generation with minimal legal friction and maximum impact.
      </p>
    `
  },
  "luxury-real-estate-outlook": {
    title: "The 2026 Luxury Real Estate Outlook: Tier-1 Cities vs. Heritage Retreats",
    subtitle: "Where the elite are placing their bets in the Indian property market this year.",
    description: "Explore prime luxury property trends in India for 2026: Tier-1 metros vs heritage retreats, capital appreciation dynamics, and turnkey NRI asset management.",
    author: {
      name: "Sarah D'Souza",
      role: "Senior Real Estate Analyst",
      avatar: "/assets/logo.png"
    },
    date: "May 10, 2026",
    readTime: "5 min read",
    category: "Property",
    image: "/assets/global-network.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        India's luxury residential market is experiencing unprecedented demand, driven by capital inflows from global Indian families seeking ultra-prime assets in key metro hubs and private heritage sanctuaries.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Flight to Prime Metro Real Estate</h2>
      <p class="mb-6">
        Micro-markets like South Delhi, Golf Course Road in Gurugram, and South Mumbai continue to command premium valuations. The demand is heavily skewed towards gated, fully-managed boutique developments that offer international-standard amenities and concierge asset management.
      </p>

      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "Global Indians are no longer looking for speculative land; they demand institutional-grade asset preservation with turnkey management."
      </blockquote>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Heritage and Wellness Second-Home Boom</h2>
      <p class="mb-6">
        Beyond the metro centres, luxury estates in Goa, Alibaug, Kasauli, and the foothills of the Himalayas have matured into prime lifestyle assets, providing both strong rental yields and private personal retreats for globetrotting families.
      </p>
    `
  },
  "fema-amendments-nris": {
    title: "Navigating the New FEMA Amendments: What NRIs Need to Know",
    subtitle: "Simplifying the latest regulatory changes to ensure your cross-border investments remain seamless.",
    description: "Understand the latest RBI FEMA amendments: repatriation limits, Form 15CA/15CB audit compliance, inheritance structuring, and cross-border capital transfers.",
    author: {
      name: "Adv. Rajesh Kumar",
      role: "Head of Legal & FEMA Compliance",
      avatar: "/assets/logo.png"
    },
    date: "May 05, 2026",
    readTime: "12 min read",
    category: "Regulation",
    image: "/assets/hero-office.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        With the recent regulatory updates from the Reserve Bank of India, cross-border remittances, inheritance transfers, and NRI property liquidations require stricter compliance scrutiny than ever before.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Repatriation and 15CA/CB Filing Clarity</h2>
      <p class="mb-6">
        Repatriating sale proceeds from ancestral property or financial assets under the 1 Million USD remittance scheme now demands airtight documentary evidence, clear tax clearance certificates, and coordinated filings with authorized dealer banks.
      </p>

      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "Proactive FEMA compliance turns complex regulatory hurdles into structured, predictable wealth transfers."
      </blockquote>
    `
  },
  "art-financial-concierge": {
    title: "The Art of the Financial Concierge: Why Time is the Ultimate Asset",
    subtitle: "How delegating complex logistical and financial management creates a higher quality of life.",
    description: "Discover how a private financial concierge eliminates cross-border friction, managing Indian tax, real estate, and family logistics with complete peace of mind.",
    author: {
      name: "Aditi Rao",
      role: "Private Client Relationship Lead",
      avatar: "/assets/logo.png"
    },
    date: "April 28, 2026",
    readTime: "6 min read",
    category: "Lifestyle",
    image: "/assets/global-network.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        For Ultra-High-Net-Worth individuals, the scarcest currency is uninterrupted time. Managing multi-jurisdictional assets, elder care logistics, and localized property maintenance across time zones creates compounding friction.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Single-Point Execution</h2>
      <p class="mb-6">
        A private financial concierge serves as the unified operational bridge—coordinating tax attorneys, chartered accountants, municipal authorities, and caretakers on the ground without placing the logistical burden on the family.
      </p>
    `
  },
  "sustainable-philanthropy": {
    title: "Sustainable Philanthropy: Building a Legacy Beyond Returns",
    subtitle: "Strategic giving frameworks for Indian HNI families looking to create measurable social impact.",
    description: "A strategic guide for global Indian families on establishing tax-exempt trusts (12A/80G) and FCRA-compliant cross-border charitable foundations in India.",
    author: {
      name: "Adv. Jag Mohan Kapoor",
      role: "Founder & Managing Director",
      avatar: "/assets/logo.png"
    },
    date: "April 20, 2026",
    readTime: "10 min read",
    category: "Wealth Strategy",
    image: "/assets/hero-office.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        Modern philanthropy is evolving from ad-hoc charitable donations into structured, impact-driven family foundations with institutional governance and generational longevity.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Structuring Philanthropic Trusts in India</h2>
      <p class="mb-6">
        Establishing tax-exempt trusts (12A/80G) and FCRA-compliant cross-border giving vehicles enables families to channel global capital into education, healthcare, and cultural preservation in India with complete transparency and compliance.
      </p>
    `
  },
  "nri-property-sale-lower-tds-form-13-guide": {
    title: "How NRIs Can Avoid 20% TDS on Property Sale in India: The Complete Form 13 Guide (2026)",
    subtitle: "A step-by-step legal walkthrough on obtaining a Nil or Lower TDS Certificate under Section 195 to protect your liquidity.",
    description: "Avoid 20%+ TDS withholding on Indian real estate sales. Complete legal walkthrough on securing a Lower TDS Certificate (Form 13) under Section 195 on TRACES.",
    author: {
      name: "Adv. Jag Mohan Kapoor",
      role: "Founder & Managing Director",
      avatar: "/assets/logo.png"
    },
    date: "September 06, 2026",
    readTime: "11 min read",
    category: "Taxation & Legal",
    image: "/assets/service-wealth.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        Selling real estate in India as a Non-Resident Indian (NRI) or Person of Indian Origin (PIO) comes with a severe liquidity risk: <strong>Section 195 of the Income Tax Act</strong> mandates that the buyer must deduct Tax Deducted at Source (TDS) at a flat rate of <strong>20% plus applicable surcharge and cess (reaching up to 23.92%) on the total gross sale consideration</strong>.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Trap of Gross vs. Net Deduction</h2>
      <p class="mb-6">
        Unlike resident Indians who pay 1% TDS under Section 194-IA, NRI sellers are subjected to Section 195. If an NRI sells an apartment in South Delhi or Gurugram for ₹5 Crore that was purchased 10 years ago for ₹3 Crore, the actual capital gain is only ₹2 Crore (or less after cost indexation).
      </p>
      <p class="mb-8">
        However, by default, the buyer is required to withhold over ₹1.1 Crore from the gross consideration. This locks up a massive portion of the seller's rightful capital for 12 to 18 months until an Income Tax Return (ITR) is processed and a refund issued.
      </p>

      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "Do not allow 20% of your gross property proceeds to sit idle with the tax department. Form 13 is your legal entitlement to align tax deduction with actual tax liability."
      </blockquote>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Solution: Form 13 on TRACES</h2>
      <p class="mb-6">
        Under Section 197 of the Income Tax Act, an NRI seller can file an online application in <strong>Form 13</strong> on the government TRACES portal to request a Lower or Nil Withholding Tax Certificate.
      </p>
      <ul class="list-disc pl-6 mb-10 space-y-4">
        <li><strong>Indexed Acquisition Valuation:</strong> Recalculating the cost of purchase using the Cost Inflation Index (CII), drastically lowering taxable long-term capital gains (LTCG).</li>
        <li><strong>Capital Gains Reinvestment (Section 54 / 54EC):</strong> Factoring in planned investments into Capital Gains Bonds (REC/NHAI) or another residential house in India to bring the effective tax liability to zero.</li>
        <li><strong>Direct Certificate Issuance:</strong> The Assessing Officer (AO) issues a certificate authorizing the buyer's TAN to deduct only 0% to 5% at registry.</li>
      </ul>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Document Checklist for Form 13</h2>
      <ol class="list-decimal pl-6 mb-10 space-y-4">
        <li>PAN card of both NRI Seller and Buyer.</li>
        <li>Executed Agreement to Sell (ATS) clearly stating agreed sale consideration and payment schedule.</li>
        <li>Original Registered Title Deed of the property.</li>
        <li>Approved valuation report as of April 1, 2001 (if property acquired before 2001).</li>
        <li>Bank statements evidencing acquisition payments and improvement expenses.</li>
        <li>Past 3 assessment years' Indian ITR filings (if income was accrued in India).</li>
      </ol>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Statutory Timeline & Best Practices</h2>
      <p class="mb-6">
        Processing typically takes <strong>3 to 5 weeks</strong>. The application should be submitted immediately upon execution of the Agreement to Sell, ensuring the certificate is received well before the final sale deed registration. Fin2Excel manages the entire process end-to-end, including direct representation before the International Taxation Ward.
      </p>
    `
  },
  "repatriate-nro-funds-15ca-15cb-guide": {
    title: "Step-by-Step Repatriation of Indian Property & Inheritance Proceeds: Form 15CA & 15CB Manual",
    subtitle: "How Non-Resident Indians can remit up to $1 Million USD annually from NRO to foreign bank accounts without regulatory friction.",
    description: "Step-by-step manual for Non-Resident Indians to remit up to $1 Million USD annually from NRO accounts abroad using Form 15CA and Form 15CB CA certification.",
    author: {
      name: "Adv. Rajesh Kumar",
      role: "Head of Legal & FEMA Compliance",
      avatar: "/assets/logo.png"
    },
    date: "September 07, 2026",
    readTime: "9 min read",
    category: "FEMA & Banking",
    image: "/assets/service-legal.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        Once an Indian asset is liquidated—whether real estate, family inheritance, mutual funds, or business equity—the proceeds are credited to an <strong>NRO (Non-Resident Ordinary) account</strong>. Moving these funds to an overseas bank account (or transferring to an NRE account) requires strict compliance with <strong>RBI's 1 Million USD Remittance Facility</strong> and FEMA guidelines.
      </p>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The Legal Architecture: Form 15CA & Form 15CB</h2>
      <p class="mb-6">
        To prevent unauthorized flight of capital and tax evasion, the Reserve Bank of India and Central Board of Direct Taxes (CBDT) mandate a two-tier verification mechanism:
      </p>
      <ul class="list-disc pl-6 mb-10 space-y-4">
        <li><strong>Form 15CB (Chartered Accountant Certificate):</strong> An independent CA audits the financial source of funds, verifies that applicable Indian taxes have been paid or exempted under DTAA, and certifies the exact remittance amount.</li>
        <li><strong>Form 15CA (Remitter Declaration):</strong> An online declaration filed by the remitter on the income tax portal, referencing the 15CB acknowledgement number.</li>
      </ul>

      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "The key to smooth fund repatriation is documentary traceability. If your purchase deed, sale deed, and bank trail reconcile perfectly, the wire transfer executes in 72 hours."
      </blockquote>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">The 5-Step Repatriation Blueprint</h2>
      <ol class="list-decimal pl-6 mb-10 space-y-4">
        <li><strong>Reconciliation of Funds:</strong> Reconcile the sale consideration against bank credits and Form 26AS/TDS certificates.</li>
        <li><strong>CA Audit & 15CB Issuance:</strong> Your Chartered Accountant issues Form 15CB with digital signature on the IT portal.</li>
        <li><strong>Online 15CA Part C Filing:</strong> Generate and submit Form 15CA using the 15CB verification code.</li>
        <li><strong>Bank A2 Application:</strong> Submit Form A2 (FEMA outward remittance application) along with 15CA/15CB to your Authorized Dealer bank.</li>
        <li><strong>SWIFT Transfer:</strong> The bank executes the international wire to your overseas account (in USD, GBP, EUR, AED, or CAD).</li>
      </ol>

      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Inheritance Special Considerations</h2>
      <p class="mb-6">
        If the funds originate from an inheritance rather than a personal property sale, the bank will require the registered Will, Succession Certificate, or Family Settlement Agreement alongside death certificates of the deceased property owners. Fin2Excel specializes in structuring inheritance remittances with complete legal verification.
      </p>
    `
  },
  "the-nri-wealth-playbook-2026-global-assets-and-indian-growth": {
    title: "The NRI Wealth Playbook 2026: Global Assets & Indian Growth",
    subtitle: "Balancing international capital allocation with high-growth Indian real estate and financial markets.",
    description: "Master NRI wealth management in 2026: balance high-yield Indian assets, manage currency exposure, navigate FEMA compliance, and build generational prosperity.",
    author: {
      name: "Adv. Jag Mohan Kapoor",
      role: "Founder & Managing Director",
      avatar: "/assets/logo.png"
    },
    date: "September 08, 2026",
    readTime: "9 min read",
    category: "Wealth Strategy",
    image: "/assets/hero-office.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        As macroeconomic conditions shift across North America, Europe, and the Middle East, High-Net-Worth Non-Resident Indians are rebalancing their portfolios towards high-yield Indian growth corridors while maintaining strict cross-border asset protection.
      </p>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Multi-Jurisdiction Capital Stewardship</h2>
      <p class="mb-6">
        Successfully managing assets spread across Dubai, Singapore, London, and New Delhi requires integrated tax synchronization. Double Taxation Avoidance Agreements (DTAA) and foreign asset disclosure mandates mean uncoordinated advice creates significant regulatory exposure.
      </p>
      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "Global wealth preservation is built on jurisdictional agility and absolute regulatory compliance."
      </blockquote>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Strategic Real Estate and Portfolio Reinvestment</h2>
      <p class="mb-6">
        Liquidating non-core assets to fund institutional-grade commercial real estate, REITs, or structured debt funds in India offers consistent yields while maintaining repatriation flexibility through RBI-compliant NRO channels.
      </p>
    `
  },
  "fueling-ambition-strategic-business-loans-for-the-2026-economy": {
    title: "Fueling Ambition: Strategic Business Loans & Corporate Financing for 2026",
    subtitle: "Tailored structured debt, working capital, and collateralized loan strategies for growing enterprises.",
    description: "Scale your business with Fin2Excel's structured loan advisory. Tailored working capital, collateralized loans, and MSME funding solutions across Delhi NCR.",
    author: {
      name: "Fin2Excel Advisory Team",
      role: "Corporate Finance Practice",
      avatar: "/assets/logo.png"
    },
    date: "September 08, 2026",
    readTime: "7 min read",
    category: "Finance & Loans",
    image: "/assets/global-network.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        Accessing institutional capital at competitive borrowing costs remains the single greatest accelerator for expanding mid-market companies, family enterprises, and MSMEs across Delhi NCR.
      </p>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Navigating Structured Debt Options</h2>
      <p class="mb-6">
        From Loan Against Property (LAP) to unsecured working capital facilities and syndicated corporate credit lines, matching capital requirements to appropriate financial instruments prevents cash flow strain and ensures sustainable operational scaling.
      </p>
      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "Smart leverage is not about borrowing more; it is about structuring debt that respects your operating margins."
      </blockquote>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Fin2Excel's Fiduciary Advantage</h2>
      <p class="mb-6">
        Unlike traditional loan agents who push quota-driven retail products, Fin2Excel negotiates directly with top-tier private banks and NBFC credit committees to secure favorable covenants, reduced processing charges, and optimized repayment schedules.
      </p>
    `
  },
  "the-surrogate-child-model-redefining-elder-care-in-india-for-2026": {
    title: "The Surrogate Child Model: Redefining Elder Care in India for Global Families",
    subtitle: "How dedicated fiduciary concierges in Delhi NCR act as trusted local proxies for NRI children abroad.",
    description: "Fin2Excel's surrogate child model provides dedicated elder care in Delhi NCR. Fiduciary healthcare oversight, emergency response, and daily companionship.",
    author: {
      name: "Aditi Rao",
      role: "Private Client Relationship Lead",
      avatar: "/assets/logo.png"
    },
    date: "September 08, 2026",
    readTime: "8 min read",
    category: "Elder Care",
    image: "/assets/hero-office.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        For millions of Non-Resident Indians living in the US, UK, Canada, and UAE, the greatest emotional anxiety is the day-to-day well-being, medical care, and legal security of their aging parents back home in Delhi NCR.
      </p>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Beyond Commercial Nursing: Fiduciary Concierge</h2>
      <p class="mb-6">
        Traditional elder care agencies offer hourly attendants or clinical home visits, but lack the holistic oversight required to handle medical emergencies at Max Healthcare or Fortis, manage residential property maintenance, and protect elderly parents from financial vulnerability.
      </p>
      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "We do not merely provide care; we stand in as the family's trusted local surrogate child with professional accountability."
      </blockquote>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Comprehensive Protocol</h2>
      <p class="mb-6">
        From 24/7 on-call emergency hospitalization coordination and doctor accompaniment to home safety audits and legal documentation, Fin2Excel delivers complete peace of mind to diaspora families worldwide.
      </p>
    `
  },
  "dubai-2027-the-rise-of-a-mature-global-real-estate-powerhouse": {
    title: "Dubai 2027: The Rise of a Mature Global Real Estate Powerhouse",
    subtitle: "Strategic analysis of the 2040 Urban Master Plan, tax-free yields, and capital allocation for NRI investors.",
    description: "Strategic guide for NRI investors navigating Dubai's 2027 property market: 2040 Master Plan, Golden Visa avenues, capital growth corridors, and tax efficiency.",
    author: {
      name: "Sarah D'Souza",
      role: "Senior Real Estate Analyst",
      avatar: "/assets/logo.png"
    },
    date: "September 08, 2026",
    readTime: "10 min read",
    category: "Real Estate",
    image: "/assets/global-network.png",
    content: `
      <p class="text-xl leading-relaxed mb-8">
        Dubai has definitively transitioned from a speculative real estate trading hub into a deeply mature, institutional-grade global sanctuary for international capital, High-Net-Worth families, and corporate headquarters.
      </p>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">Drivers of Sustained 2026–2027 Expansion</h2>
      <p class="mb-6">
        Driven by progressive visa regulations (10-Year Golden Visa), zero personal income tax, and transparent DLD escrow regulations, demand across prime districts like Palm Jumeirah, Downtown, and Dubai Hills Estate remains structurally resilient.
      </p>
      <blockquote class="border-l-4 border-swiss-blue pl-8 py-4 my-12 italic text-2xl font-serif text-swiss-black/80">
        "Dubai offers the rare convergence of world-class infrastructure, dollar-pegged stability, and tax-exempt capital appreciation."
      </blockquote>
      <h2 class="text-3xl font-display font-bold mt-16 mb-6 uppercase tracking-tight">NRI Cross-Border Synergy</h2>
      <p class="mb-6">
        Indian HNIs increasingly utilize Dubai as their cross-border gateway—liquidating ancestral real estate in Delhi NCR under FEMA regulations and redeploying into high-yield Dubai commercial and residential assets.
      </p>
    `
  }
};

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const fallbackList = Object.keys(fallbackPosts).map((slug) => ({ slug }))

  try {
    const res = await fetchAPI({
      endpoint: 'articles',
      query: { fields: ['slug'] },
      options: { timeout: 3000 }
    })

    if (res?.data && Array.isArray(res.data) && res.data.length > 0) {
      const strapiList = res.data.map((article: any) => ({
        slug: article.slug || article.documentId
      }))
      const uniqueSlugs = Array.from(
        new Set([...fallbackList.map((item: { slug: string }) => item.slug), ...strapiList.map((item: any) => item.slug)])
      )
      return uniqueSlugs.map(slug => ({ slug }))
    }
  } catch (e) {}

  return fallbackList
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const fallback = fallbackPosts[resolvedParams.slug] || fallbackPosts["silent-migration-global-indian-wealth"];
  let post = { ...fallback };

  try {
    const res = await fetchAPI({ 
      endpoint: 'articles', 
      query: { 
        'filters[slug][$eq]': resolvedParams.slug,
        'populate': '*'
      },
      options: { timeout: 3000 } // Max 3s block for metadata to keep streaming fast
    });
    
    if (res?.data?.length > 0) {
      const article = res.data[0];
      const seo = article.seo;
      
      const rawDesc = (seo?.metaDescription || article.excerpt || '').trim();
      const finalDesc = (rawDesc.length >= 150 && rawDesc.length <= 160) ? rawDesc : (fallback?.description || rawDesc || fallback?.subtitle);
      
      post = {
        title: seo?.metaTitle || article.title,
        description: finalDesc,
        keywords: seo?.keywords || fallback?.keywords,
        image: getStrapiMedia(article.seo?.metaImage?.url) || getStrapiMedia(article.cover?.url) || fallback?.image || '/assets/hero-office.png',
        author: { name: article.author?.name || fallback?.author?.name || 'Fin2Excel Team' },
        robots: seo?.metaRobots || 'index, follow',
        canonical: (seo?.canonicalURL ? seo.canonicalURL.replace('https://fin2excel.com', 'https://www.fin2excel.com') : `https://www.fin2excel.com/blog/${resolvedParams.slug}`)
      };
    }
  } catch (e) {}

  const rawPostTitle = post.title || 'Private Wealth & NRI Advisory Insights';
  const cleanTitle = rawPostTitle.replace(/\s*\|\s*Fin2Excel(\s*Insights)?/gi, '').trim();
  const finalTitle = `${cleanTitle} | Fin2Excel Insights`;
  const postDescription = post.description || post.subtitle || `${cleanTitle} - In-depth legal, taxation, and asset stewardship advisory for global NRI families by Fin2Excel.`;
  const canonicalUrl = post.canonical || `https://www.fin2excel.com/blog/${resolvedParams.slug}`;

  return {
    title: {
      absolute: finalTitle,
    },
    description: postDescription,
    keywords: post.keywords,
    alternates: { canonical: canonicalUrl },
    robots: post.robots || { index: true, follow: true },
    openGraph: {
      title: finalTitle,
      description: postDescription,
      url: canonicalUrl,
      type: 'article',
      authors: [post.author?.name || 'Fin2Excel Private Advisory'],
      images: [{ url: post.image || '/assets/hero-office.png', width: 1200, height: 630, alt: cleanTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: postDescription,
      images: [post.image || '/assets/hero-office.png'],
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  let post = fallbackPosts[resolvedParams.slug] || fallbackPosts["silent-migration-global-indian-wealth"];

  try {
    const res = await fetchAPI({ 
      endpoint: 'articles', 
      query: { 
        'filters[slug][$eq]': resolvedParams.slug,
        'populate': '*'
      },
      options: { timeout: 25000 } // Higher timeout to allow Render container startup
    });
    
    if (res?.data?.length > 0) {
      const article = res.data[0];
      post = {
        title: article.title,
        subtitle: article.excerpt,
        content: article.content,
        category: article.category?.name || "Wealth Strategy",
        date: new Date(article.publishedAt || article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: `${article.readTime || 8} min read`,
        image: getStrapiMedia(article.cover?.url) || '/assets/hero-office.png',
        author: {
          name: article.author?.name || "Fin2Excel Team",
          role: article.author?.role || "Contributor",
          avatar: getStrapiMedia(article.author?.avatar?.url) || '/assets/logo.png'
        }
      };
    }
  } catch (e) {}

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.subtitle,
    "image": post.image.startsWith('http') ? post.image : `https://fin2excel.com${post.image}`,
    "author": { "@type": "Person", "name": post.author.name },
    "publisher": { "@type": "Organization", "name": "Fin2Excel", "logo": { "@type": "ImageObject", "url": "https://fin2excel.com/assets/logo.png" } },
    "datePublished": post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-20 selection:bg-swiss-blue selection:text-white">
      <JsonLd data={jsonLd} />
      <article className="max-w-[800px] mx-auto px-6">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-swiss-blue/10 text-swiss-blue text-[10px] font-bold uppercase tracking-widest rounded-full">
              {post.category}
            </span>
            <span className="text-swiss-dark-gray text-xs font-medium">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-6 text-swiss-black uppercase">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-swiss-dark-gray leading-snug font-sans mb-10">
            {post.subtitle}
          </p>

          <div className="flex items-center justify-between py-8 border-y border-swiss-black/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-swiss-blue/10 flex items-center justify-center">
                <Image src={post.author.avatar} alt={post.author.name} width={32} height={32} className="object-contain" />
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-tight">{post.author.name}</div>
                <div className="text-xs text-swiss-dark-gray uppercase tracking-widest">{post.author.role}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-swiss-dark-gray uppercase tracking-widest">{post.date}</div>
            </div>
          </div>
        </header>

        <div className="aspect-video w-full mb-16 overflow-hidden rounded-sm relative">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill
            className="object-cover" 
            sizes="(max-width: 800px) 100vw, 800px"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none font-serif text-swiss-black/90 leading-[1.8] space-y-6 blog-content">
          {Array.isArray(post.content) ? (
            <BlocksRenderer content={post.content} />
          ) : typeof post.content === 'string' && isHtml(post.content) ? (
            <div className="space-y-6 blog-html-body" dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : typeof post.content === 'string' ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          ) : null}
        </div>

        <footer className="mt-24 pt-12 border-t border-swiss-black/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-swiss-dark-gray hover:text-swiss-blue transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest">Applaud</span>
              </button>
              <button className="flex items-center gap-2 text-swiss-dark-gray hover:text-swiss-blue transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100 2.684m0-2.684l6.632-3.316m0 0a3 3 0 101.342-2.684 3 3 0 00-1.342 2.684zm0 9.316a3 3 0 101.342 2.684 3 3 0 00-1.342-2.684z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest">Share</span>
              </button>
            </div>
            <Link href="/blog" className="text-xs font-bold uppercase tracking-[0.3em] text-swiss-blue hover:text-swiss-black transition-colors">
              Back to Journal
            </Link>
          </div>

          <div className="mt-20 p-10 bg-swiss-bg border border-swiss-black/5 rounded-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-swiss-blue/10 flex items-center justify-center shrink-0">
              <Image src={post.author.avatar} alt={post.author.name} width={64} height={64} className="object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-display font-bold uppercase mb-2">Written by {post.author.name}</h4>
              <p className="text-swiss-dark-gray mb-6 max-w-lg">
                Managing Partner at Fin2Excel, overseeing the private wealth strategy for NRI families across 12 countries.
              </p>
              <button className="px-6 py-2 border border-swiss-black text-[10px] font-bold uppercase tracking-widest hover:bg-swiss-black hover:text-white transition-all">
                Follow Journal
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  )
}
