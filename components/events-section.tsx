import Image from "next/image"

const events = [
  {
    title: "Asia Tech Week",
    description:
      "Strategic advisory, go-to-market strategy, and market entry support for technology companies expanding into Asia.",
    image: "/images/token2049.png",
  },
  {
    title: "Investor Summits",
    description:
      "End-to-end fundraising readiness support, investor introductions, and grant applications for growth-stage startups.",
    image: "/images/binance-blockchain-week.png",
  },
  {
    title: "Digital Transformation Conferences",
    description:
      "Full-stack development and platform delivery with a 1,000+ developer and designer network across web, mobile, and cloud.",
    image: "/images/web3-festival-asia.png",
  },
  {
    title: "Regional Business Summits",
    description:
      "Community building, KOL partnerships, and growth marketing for B2B and enterprise product launches.",
    image: "/images/regional-investor-summit.png",
  },
]

const leveragePoints = [
  "Accelerate fundraising momentum",
  "Reinforce market presence and distribution",
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
                href="/contact"
                className="inline-block mt-6 px-5 py-2.5 border border-foreground/30 rounded-full text-foreground text-xs font-mono tracking-wider hover:bg-foreground/5 transition-colors"
              >
                {"Book an Events Consultation"}
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
