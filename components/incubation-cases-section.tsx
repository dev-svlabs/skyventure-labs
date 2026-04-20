import Image from "next/image"

const cases = [
  {
    name: "OrionStack",
    category: "SaaS Platform",
    scope: "Incubation + seed fundraising",
    outcomes: [
      { text: "", bold: "$4.2M", after: " seed round closed" },
      { text: "Lead investor secured within ", bold: "7 weeks", after: "" },
      { text: "Oversubscribed allocation by ", bold: "1.6x", after: "" },
    ],
  },
  {
    name: "NovaChain",
    category: "Infrastructure Network",
    scope: "Incubation + grants strategy",
    outcomes: [
      { text: "", bold: "$2.6M", after: " non-dilutive grants secured" },
      { text: "Funding from ", bold: "2 L1 ecosystems", after: "" },
      { text: "Ecosystem launch accelerated ", bold: "by 6 months", after: "" },
    ],
  },
  {
    name: "LumenPay",
    category: "Fintech",
    scope: "Incubation + capital structuring",
    outcomes: [
      { text: "", bold: "18", after: " targeted investor meetings" },
      { text: "Institutional lead secured", bold: "", after: "" },
      { text: "Strategic partnership included in round", bold: "", after: "" },
    ],
  },
]

export function IncubationCasesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
          {/* Left heading */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans">
              Selected<br />Outcomes
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
