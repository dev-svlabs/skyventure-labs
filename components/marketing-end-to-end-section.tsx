import {
  Megaphone,
  TrendingUp,
  Handshake,
  Users,
  Newspaper,
  CalendarCheck,
} from "lucide-react"

const services = [
  {
    title: "Positioning & Narrative",
    description:
      "Category definition, messaging, trust-building content architecture.",
    Icon: Megaphone,
  },
  {
    title: "Performance Growth",
    description:
      "Paid acquisition, funnel optimization, conversion and retention systems.",
    Icon: TrendingUp,
  },
  {
    title: "Partnerships & Distribution",
    description:
      "Channel partners, communities, affiliates, ecosystem relationships.",
    Icon: Handshake,
  },
  {
    title: "Community Systems",
    description:
      "Lifecycle engagement, ambassador programs, retention loops.",
    Icon: Users,
  },
  {
    title: "PR & Communication",
    description:
      "Media strategy, press releases, thought leadership, launch comms.",
    Icon: Newspaper,
  },
  {
    title: "Events Strategy & Execution",
    description:
      "Conference presence, private sessions, curated introductions, side events.",
    Icon: CalendarCheck,
  },
]

export function MarketingEndToEndSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex gap-6 items-start mb-16">
          <div className="flex-1">
            <div className="w-full h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              End-to-End Growth
              <br />
              {'& Market Expansion'}
            </h2>
          </div>
          <div className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="w-full h-px bg-foreground/20" />
          </div>
        </div>

        <div className="h-px w-full bg-foreground/10 mb-2" />

        {/* Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {services.map(({ title, description, Icon }) => (
            <div key={title}>
              <div className="h-px w-full bg-foreground/20 mb-5" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {title}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed font-sans mb-5 min-h-[40px]">
                {description}
              </p>
              {/* Card illustration */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0a0a0f]">
                {/* Vertical stripes */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent, transparent 8px, currentColor 8px, currentColor 9px)",
                  }}
                />
                {/* Centered icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    className="w-16 h-16 text-foreground/20"
                    strokeWidth={1}
                  />
                </div>
              </div>
              <div className="h-px w-full bg-foreground/20 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
