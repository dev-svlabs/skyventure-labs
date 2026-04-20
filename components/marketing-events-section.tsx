import Image from "next/image"

export function MarketingEventsSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Top divider */}
        <div className="flex gap-6 items-start mb-2">
          <div className="flex-1 border-t border-foreground/20" />
          <div className="w-1/3 border-t border-foreground/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-4">
              Events as Market<br />Infrastructure
            </h2>

            <div className="border-t border-foreground/20 pt-8 mb-10">
              <p className="text-sm font-bold text-foreground font-sans mb-3">
                Events Are Where Capital, Partners & Markets Converge
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed font-sans">
                For high-growth ventures, events are not branding exercises.
                They are <span className="font-bold text-foreground">capital, partnership, and distribution infrastructure.</span>
              </p>
            </div>

            <div className="border-t border-foreground/20 pt-8 mb-10">
              <p className="text-sm font-bold text-foreground font-sans mb-4">
                We design and execute event strategies that:
              </p>
              <ul className="space-y-2">
                {[
                  "support fundraising momentum",
                  "reinforce exchange listings",
                  "accelerate ecosystem partnerships",
                  "convert attention into long-term relationships",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                    <span className="text-sm text-foreground/60 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-foreground/20 pt-8">
              <p className="text-sm font-bold text-foreground font-sans mb-4">
                Event Formats We Operate
              </p>
              <ul className="space-y-2">
                {[
                  "Major global conferences",
                  "Curated side events & private dinners",
                  "Investor demo days & pitch rooms",
                  "Partner showcases & ecosystem summits",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                    <span className="text-sm text-foreground/60 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - illustration */}
          <div className="relative rounded-lg overflow-hidden border border-foreground/10 min-h-[500px]">
            <Image
              src="/images/marketing/events-infrastructure.png"
              alt="Events infrastructure illustration with Sky Venture logo surrounded by globe, calendar, key, and chart icons"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
