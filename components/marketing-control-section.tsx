import Image from "next/image"

const topRowCards = [
  {
    title: "Narrative & Positioning Systems",
    description:
      "Messaging architecture aligned with advisory, fundraising, and product maturity.",
    image: "/images/marketing/card-narrative.png",
  },
  {
    title: "KOL & Influencer Systems",
    description:
      "Performance-tracked partnerships across 2,500+ creators, not one-off promotions.",
    image: "/images/marketing/card-kol.png",
  },
  {
    title: "Community Architecture",
    description:
      "Telegram, Discord, ambassador programs, and retention loops built for longevity.",
    image: "/images/marketing/card-community.png",
  },
]

const bottomRowCards = [
  {
    title: "Performance & Paid Distribution",
    description:
      "Funnel design, CAC discipline, ROAS optimization, and lifecycle tracking.",
    image: "/images/marketing/card-performance.png",
  },
  {
    title: "Listings & PR Communications",
    description:
      "Exchange announcements, media coordination, and post-listing narrative control.",
    image: "/images/marketing/card-listings.png",
  },
  {
    title: "Events Strategy & Execution",
    description:
      "Conference presence, private investor sessions, side events, demo days, and curated introductions.",
    image: "/images/marketing/card-events.png",
  },
]

export function MarketingControlSection() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-background">
      {/* Header */}
      <div className="flex items-start justify-between gap-12 mb-16">
        <div className="flex-1">
          <div className="w-full h-px bg-foreground/20 mb-8" />
          <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
            What We Control
          </h2>
          <div className="w-full h-px bg-foreground/20 mt-8" />
        </div>
        <div className="hidden lg:block flex-shrink-0 pt-2">
          <div className="w-64 h-px bg-foreground/20 mb-6" />
          <p className="text-sm text-foreground/50 font-mono text-right">
            Core Marketing & Events Capabilities
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

      {/* Bottom Row - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
