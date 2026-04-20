import Image from "next/image"

const events = [
  {
    title: "TOKEN2049",
    description:
      "Strategic advisory, tokenomics design, exchange listings, and go-to-market strategy for blockchain projects.",
    image: "/images/token2049.png",
  },
  {
    title: "Binance Blockchain Week",
    description:
      "End-to-end fundraising support, investor introductions, and L1/L2 grant applications for Web3 startups.",
    image: "/images/binance-blockchain-week.png",
  },
  {
    title: "Web3 Festival Asia",
    description:
      "Full-stack development for Web3, DeFi, NFT, and blockchain applications with 1,000+ developer network.",
    image: "/images/web3-festival-asia.png",
  },
  {
    title: "Regional Investor Summits",
    description:
      "Community building, KOL partnerships, and growth marketing for Web3 projects and token launches.",
    image: "/images/regional-investor-summit.png",
  },
]

const leveragePoints = [
  "Accelerate fundraising momentum",
  "Reinforce exchange listings",
  "Unlock partnerships",
  "Convert visibility into durable relationships",
]

export function EventsSection() {
  return (
    <section className="bg-background pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        {/* Top divider lines */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6">
          <div className="h-px bg-foreground/20" />
          <div className="h-px bg-foreground/20 hidden lg:block" />
          <div className="h-px bg-foreground/20 hidden lg:block" />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 mt-10">
          {/* Left text block */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-foreground font-sans text-base leading-relaxed">
                {"For high-growth ventures, events are not branding exercises. They are market infrastructure."}
              </p>
              <a
                href="#"
                className="inline-block mt-6 px-5 py-2.5 border border-foreground/30 rounded-full text-foreground text-xs font-mono tracking-wider hover:bg-foreground/5 transition-colors"
              >
                {"Launch your Web3 Project"}
              </a>
            </div>
          </div>

          {/* Event card 1 */}
          <EventCard event={events[0]} />

          {/* Event card 2 */}
          <EventCard event={events[1]} />
        </div>

        {/* Divider between rows */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 mt-10">
          <div className="h-px bg-foreground/20" />
          <div className="h-px bg-foreground/20 hidden lg:block" />
          <div className="h-px bg-foreground/20 hidden lg:block" />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 mt-10">
          {/* Left text block - leverage points */}
          <div>
            <p className="text-foreground font-sans text-base font-medium mb-4">
              {"We leverage events to:"}
            </p>
            <ul className="space-y-2">
              {leveragePoints.map((point) => (
                <li
                  key={point}
                  className="text-foreground/60 font-sans text-sm flex items-start gap-2"
                >
                  <span className="text-foreground/40 mt-1.5 text-[6px]">{"\u2022"}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Event card 3 */}
          <EventCard event={events[2]} />

          {/* Event card 4 */}
          <EventCard event={events[3]} />
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <div>
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card mb-4">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-foreground font-sans text-base font-semibold mb-2">
        {event.title}
      </h3>
      <p className="text-foreground/50 font-sans text-sm leading-relaxed">
        {event.description}
      </p>
    </div>
  )
}
