import Image from "next/image"

const topRowCards = [
  {
    title: "Capital Structure Design",
    description:
      "Equity, token, or hybrid structures aligned with stage, governance, and future listings.",
    image: "/images/incubation/capital-structure.png",
  },
  {
    title: "Narrative & Positioning Architecture",
    description:
      "Investor-repeatable stories tested against real diligence questions.",
    image: "/images/incubation/narrative-positioning.png",
  },
  {
    title: "Execution Readiness Alignment",
    description:
      "Product, technology, and operations aligned before capital exposure.",
    image: "/images/incubation/execution-readiness.png",
  },
]

const bottomRowCards = [
  {
    title: "Investor Targeting & Routing",
    description:
      "Warm introductions, prioritization, and sequencing across 100+ routes.",
    image: "/images/incubation/investor-targeting.png",
  },
  {
    title: "Data Room & Diligence Preparation",
    description:
      "Documentation frameworks, risk gap analysis, and readiness checks.",
    image: "/images/incubation/data-room.png",
  },
  {
    title: "L1/L2 Grants & Non-Dilutive Capital",
    description:
      "Grant program mapping, application packaging, and milestone alignment.",
    image: "/images/incubation/grants-capital.png",
  },
]

export function IncubationCapabilitiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Core Incubation &<br />Fundraising Capabilities
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Top row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topRowCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-foreground/40 font-sans leading-relaxed mb-4">
                {card.description}
              </p>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0A0A0F]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomRowCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-foreground/40 font-sans leading-relaxed mb-4">
                {card.description}
              </p>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0A0A0F]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom dividers */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="h-px bg-foreground/20" />
          <div className="h-px bg-foreground/20" />
          <div className="h-px bg-foreground/20" />
        </div>
      </div>
    </section>
  )
}
