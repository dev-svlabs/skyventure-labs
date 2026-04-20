import Image from "next/image"

const builds = [
  {
    name: "FinCore Platform",
    category: "Fintech",
    logo: "/images/dev-studios/logo-fincore.png",
    scope: "Transaction and ledger platform",
    outcomes: [
      { text: "Millions of transactions/month", bold: "", after: "" },
      { text: "Multi-region deployment", bold: "", after: "" },
      { text: "", bold: "99.99%", after: " transaction accuracy" },
    ],
  },
  {
    name: "NovaChain",
    category: "Infrastructure Network",
    logo: "/images/dev-studios/logo-novachain.png",
    scope: "Incubation + grants strategy",
    outcomes: [
      { text: "", bold: "$2.6M", after: " non-dilutive grants secured" },
      { text: "Funding from ", bold: "2 L1 ecosystems", after: "" },
      { text: "Ecosystem launch accelerated ", bold: "by 6 months", after: "" },
    ],
  },
  {
    name: "AtlasCRM",
    category: "Enterprise Platform",
    logo: "/images/dev-studios/logo-atlascrm.png",
    scope: "Legacy system replacement",
    outcomes: [
      { text: "Operational overhead reduced ", bold: "35%", after: "" },
      { text: "Adoption across ", bold: "3 regions", after: "" },
    ],
  },
]

export function DevStudiosBuildsSectionComponent() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="h-px bg-foreground/20 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
          {/* Left heading */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans">
              Selected<br />Builds
            </h2>
          </div>

          {/* Right case studies */}
          <div className="flex flex-col">
            {builds.map((build, index) => (
              <div key={build.name}>
                {index > 0 && <div className="h-px bg-foreground/10 my-12" />}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
                  {/* Build content */}
                  <div>
                    {/* Logo + name */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={build.logo}
                          alt={build.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground font-sans">{build.name}</p>
                        <p className="text-xs text-foreground/40 font-sans">{build.category}</p>
                      </div>
                    </div>

                    {/* Scope */}
                    <p className="text-sm text-foreground/50 font-sans mb-4">
                      <span className="font-semibold text-foreground">Scope:</span>{" "}
                      {build.scope}
                    </p>

                    {/* Outcome */}
                    <p className="text-sm font-semibold text-foreground font-sans mb-3">Outcome:</p>
                    <ul className="space-y-2">
                      {build.outcomes.map((outcome, i) => (
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

                  {/* Build image */}
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/advisory/case-card.png"
                      alt={`${build.name} illustration`}
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
