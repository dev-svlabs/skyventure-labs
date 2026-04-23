import Image from "next/image"

const cases = [
  {
    name: "AstraNet Protocol",
    category: "DeFi Infrastructure",
    scope: "Tokenomics, positioning, exchange readiness",
    outcomes: [
      { text: "Tier-1 listings \u00b7 ", bold: "$180M+ FDV", after: " stabilized" },
      { text: "Post-listing valuation stabilized above ", bold: "$180M FDV", after: "" },
      { text: "Volatility reduced ", bold: "40% vs peers", after: "" },
    ],
  },
  {
    name: "NovaPlay Network",
    category: "GameFi Platform",
    scope: "Governance, GTM sequencing, capital alignment",
    outcomes: [
      { text: "", bold: "$6.5M", after: " private round raised" },
      { text: "Listed on ", bold: "2 Tier-2 exchanges", after: "" },
      { text: "", bold: "1.2M users", after: " onboarded in 90 days" },
    ],
  },
  {
    name: "HelixChain",
    category: "Layer-1 Network",
    scope: "Capital structure, ecosystem strategy, listing roadmap",
    outcomes: [
      { text: "", bold: "$12M+ ecosystem funding", after: " (equity + grants)" },
      { text: "Strategic partnerships across ", bold: "3 regions", after: "" },
      { text: "Mainnet launch executed on schedule", bold: "", after: "" },
    ],
  },
]

export function AdvisoryCasesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
          {/* Left heading */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Selected<br />Advisory<br />Cases
            </h2>
          </div>

          {/* Right case studies */}
          <div className="flex flex-col">
            {cases.map((caseItem, index) => (
              <div key={caseItem.name}>
                {index > 0 && <div className="h-px bg-foreground/10 my-12" />}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
                  {/* Case content */}
                  <div>
                    {/* Icon + name */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/advisory/case-icon.png"
                          alt=""
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground font-sans">{caseItem.name}</p>
                        <p className="text-xs text-foreground/40 font-sans">{caseItem.category}</p>
                      </div>
                    </div>

                    {/* Scope */}
                    <p className="text-sm text-foreground/50 font-sans mb-4">
                      <span className="font-semibold text-foreground">Scope:</span>{" "}
                      {caseItem.scope}
                    </p>

                    {/* Outcome */}
                    <p className="text-sm font-semibold text-foreground font-sans mb-3">Outcome:</p>
                    <ul className="space-y-2">
                      {caseItem.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/50 font-sans">
                          <span className="text-foreground/30 mt-1.5 text-[6px]">{"\u25A0"}</span>
                          <span>
                            {outcome.text}
                            {outcome.bold && <span className="font-semibold text-foreground">{outcome.bold}</span>}
                            {outcome.after}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case image */}
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/advisory/case-card.png"
                      alt={`${caseItem.name} illustration`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
