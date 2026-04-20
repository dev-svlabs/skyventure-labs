import Image from "next/image"

const topCards = [
  {
    title: "Blockchain & Web3 Systems",
    description:
      "50+ protocols supported \u00B7 audited smart contracts \u00B7 live mainnet deployments.",
    image: "/images/dev-studios/coe-blockchain.png",
  },
  {
    title: "Fintech & Payment Platforms",
    description:
      "Millions of transactions/month \u00B7 compliance-aware system design.",
    image: "/images/dev-studios/coe-fintech.png",
  },
  {
    title: "SaaS & Platform Systems",
    description:
      "Multi-tenant platforms \u00B7 products serving 100K+ MAU.",
    image: "/images/dev-studios/coe-saas.png",
  },
]

const bottomCards = [
  {
    title: "AI, Data & Automation",
    description:
      "Analytics pipelines \u00B7 optimization engines \u00B7 internal automation.",
    image: "/images/dev-studios/coe-ai.png",
  },
  {
    title: "Enterprise Platforms & Integrations",
    description:
      "Legacy modernization \u00B7 operational cost reduction 30-40%.",
    image: "/images/dev-studios/coe-enterprise.png",
  },
]

export function DevStudiosCoeSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      {/* Header */}
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <div className="w-full h-px bg-foreground/20 mb-6" />
          <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans">
            Technology Centers<br />of Excellence
          </h2>
        </div>
        <div className="hidden lg:block flex-1">
          <div className="w-full h-px bg-foreground/20 mb-6" />
          <p className="text-sm text-foreground/50 font-sans text-right">
            Specialized Delivery Teams by Domain
          </p>
        </div>
      </div>

      {/* Top row dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {topCards.map((card) => (
          <div key={card.title}>
            <div className="w-full h-px bg-foreground/20 mb-6" />
            <h3 className="text-sm font-bold text-foreground font-sans mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-foreground/50 font-sans mb-6 min-h-[40px]">
              {card.description}
            </p>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-foreground/5">
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

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {bottomCards.map((card) => (
          <div key={card.title}>
            <div className="w-full h-px bg-foreground/20 mb-6" />
            <h3 className="text-sm font-bold text-foreground font-sans mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-foreground/50 font-sans mb-6 min-h-[40px]">
              {card.description}
            </p>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-foreground/5">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-px bg-foreground/20 mt-6" />
          </div>
        ))}
        {/* Empty third column for layout alignment */}
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
