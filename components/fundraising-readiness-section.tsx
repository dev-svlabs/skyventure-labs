import Image from "next/image"

const readinessCards = [
  {
    title: "Narrative & Positioning",
    description: "Your category, why now, why you - structured to survive diligence.",
    image: "/images/fundraising/changes-card-1.png",
  },
  {
    title: "Deck & Materials Refinement",
    description: "Pitch deck, one-pager, data room outline, executive summary.",
    image: "/images/fundraising/changes-card-2.png",
  },
  {
    title: "KPI Proof & Reporting",
    description: "North star + scoreboard, weekly cadence, clean definitions.",
    image: "/images/fundraising/changes-card-3.png",
  },
  {
    title: "Financial Model & Scenarios",
    description: "Driver-based model with realistic assumptions and growth levers.",
    image: "/images/fundraising/changes-card-4.png",
  },
  {
    title: "Diligence Package",
    description: "FAQ bank, risk map, operational readiness, documentation hygiene.",
    image: "/images/fundraising/changes-card-5.png",
  },
  {
    title: "Investor Targeting Support",
    description: "Target list, outreach sequencing, and investor matching based on your stage, sector, and raise structure.",
    image: "/images/fundraising/changes-card-6.png",
  },
]

export function FundraisingReadinessSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      {/* Section header */}
      <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-6 mb-16">
        <div>
          <div className="h-px bg-foreground/20 mb-6" />
          <h2 className="text-4xl lg:text-6xl font-bold font-sans tracking-tight text-foreground uppercase leading-tight">
            Fundraising Readiness:
            <br />
            End-to-End
          </h2>
        </div>
        <div>
          <div className="h-px bg-foreground/20 mb-6" />
        </div>
      </div>

      {/* 3x2 grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
        {readinessCards.map((card, index) => (
          <div key={index} className="flex flex-col">
            {/* Top divider */}
            <div className="h-px bg-foreground/15 mb-5" />

            {/* Title */}
            <h3 className="text-sm font-bold font-sans text-foreground mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-foreground/50 font-sans leading-relaxed mb-5">
              {card.description}
            </p>

            {/* Card illustration */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0d0d14]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom divider for bottom row */}
            {index >= 3 && <div className="h-px bg-foreground/15 mt-5" />}
          </div>
        ))}
      </div>
    </section>
  )
}
