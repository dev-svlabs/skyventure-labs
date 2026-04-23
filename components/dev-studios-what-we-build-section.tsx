import Image from "next/image"

const topRowCards = [
  {
    title: "Product & Platform Development",
    description:
      "SaaS platforms, internal systems, dashboards, and operational tools.",
    image: "/images/dev-studios/product-platform.png",
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Customer-facing apps, secure authentication, payments, and performance optimization.",
    image: "/images/dev-studios/web-mobile.png",
  },
  {
    title: "AI & Automation Systems",
    description:
      "AI-powered workflows, process automation, intelligent reporting, and LLM integrations.",
    image: "/images/dev-studios/blockchain-web3.png",
  },
]

const bottomRowCards = [
  {
    title: "Fintech & Transaction Platforms",
    description:
      "Ledgers, wallets, payment pipelines, reconciliation and reporting systems.",
    image: "/images/dev-studios/fintech.png",
  },
  {
    title: "Enterprise Technology & Integrations",
    description:
      "Legacy system replacement, ERP/CRM integration, workflow automation.",
    image: "/images/dev-studios/enterprise.png",
  },
]

export function DevStudiosWhatWeBuildSection() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-background">
      {/* Header */}
      <div className="flex items-start justify-between gap-12 mb-16">
        <div className="flex-1">
          <div className="w-full h-px bg-foreground/20 mb-8" />
          <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
            What We Build
          </h2>
          <div className="w-full h-px bg-foreground/20 mt-8" />
        </div>
        <div className="hidden lg:block flex-shrink-0 pt-2">
          <div className="w-64 h-px bg-foreground/20 mb-6" />
          <p className="text-sm text-foreground/50 font-mono text-right">
            Core Technology Capabilities
          </p>
        </div>
      </div>

      {/* Top Row - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {topRowCards.map((card) => (
          <div key={card.title}>
            <div className="h-px w-full bg-foreground/20 mb-5" />
            <h3 className="text-sm font-bold text-foreground font-sans mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed font-sans mb-5 min-h-[40px]">
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

      {/* Bottom Row - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[66%]">
        {bottomRowCards.map((card) => (
          <div key={card.title}>
            <h3 className="text-sm font-bold text-foreground font-sans mb-2">
              {card.title}
            </h3>
            <p className="text-sm text-foreground/50 leading-relaxed font-sans mb-5 min-h-[40px]">
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
            <div className="h-px w-full bg-foreground/20 mt-6" />
          </div>
        ))}
      </div>
    </section>
  )
}
