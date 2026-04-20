import Image from "next/image"

const topRowDomains = [
  {
    title: "Strategic Positioning & Narrative",
    description:
      "Category definition, differentiation, and investor-repeatable narratives tested across ",
    boldText: "100+ investor conversations.",
    image: "/images/advisory/strategic-positioning.png",
  },
  {
    title: "Tokenomics & Incentive Systems",
    description:
      "Supply, emissions, vesting, and utility models informed by 50+ live listings and post-launch performance data",
    boldText: null,
    image: "/images/advisory/tokenomics.png",
  },
  {
    title: "Governance & Operational Risk (Non-Legal)",
    description:
      "Decision rights, execution accountability, and risk surfaces that emerge at scale.",
    boldText: null,
    image: "/images/advisory/go-to-market.png",
  },
]

const bottomRowDomains = [
  {
    title: "Go-to-Market & Launch Sequencing",
    description:
      "Timing coordination across fundraising, product readiness, and exchange exposure.",
    image: "/images/advisory/investor-readiness.png",
  },
  {
    title: "Investor & Exchange Readiness",
    description:
      "Materials, diligence preparation, listing pathways, and liquidity considerations.",
    image: "/images/advisory/governance.png",
  },
]

export function AdvisoryDomainsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              CORE ADVISORY
              <br />
              DOMAINS
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Top row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topRowDomains.map((domain) => (
            <div key={domain.title} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-5" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {domain.title}
              </h3>
              <p className="text-xs text-foreground/50 font-sans leading-relaxed mb-4">
                {domain.boldText ? (
                  <>
                    {domain.description}
                    <span className="font-bold text-foreground">
                      {domain.boldText}
                    </span>
                  </>
                ) : (
                  domain.description
                )}
              </p>
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {bottomRowDomains.map((domain) => (
            <div key={domain.title} className="flex flex-col">
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {domain.title}
              </h3>
              <p className="text-xs text-foreground/50 font-sans leading-relaxed mb-4">
                {domain.description}
              </p>
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src={domain.image}
                  alt={domain.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-foreground/20" />
      </div>
    </section>
  )
}
