import Image from "next/image"
import Link from "next/link"

export function MarketingEventsLeverageSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-10">
          {/* Left column */}
          <div>
            {/* Top divider */}
            <div className="flex gap-6 items-start mb-2">
              <div className="flex-1 border-t border-foreground/20" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans mb-2">
              Events Are Not
              <br />
              Branding.
            </h2>
            <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-mono mb-8">
              {"They\u2019re Leverage."}
            </h2>

            <div className="border-t border-foreground/20 pt-6 mb-8">
              <p className="text-sm text-foreground/60 leading-relaxed font-sans">
                Events are where capital, enterprise buyers, partners, and media converge.
              </p>
            </div>

            <div className="border-t border-foreground/20 pt-6 mb-8">
              <p className="text-sm font-bold text-foreground font-sans mb-4">
                We use events to:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Accelerate partnerships and enterprise deals",
                  "Open enterprise conversations and strategic partnerships",
                  "Establish market authority",
                  "Convert visibility into long-term relationships",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-sm bg-foreground/40 mt-1.5 shrink-0" />
                    <span className="text-sm text-foreground/60 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-foreground/20 pt-6 mb-10">
              <p className="text-sm font-bold text-foreground font-sans mb-4">
                Event formats we run:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Conference presence & speaking strategy",
                  "Curated side events & private dinners",
                  "Demo days & partner showcases",
                  "Community meetups & regional roadshows",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-sm bg-foreground/40 mt-1.5 shrink-0" />
                    <span className="text-sm text-foreground/60 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-sm font-mono border border-foreground/20 rounded-full text-foreground hover:bg-foreground/5 transition-colors"
            >
              Get a Growth Plan
            </Link>
          </div>

          {/* Right column - illustration */}
          <div className="relative rounded-lg overflow-hidden border border-foreground/10 min-h-[500px] lg:min-h-[600px]">
            <Image
              src="/images/marketing/events-leverage.png"
              alt="Events leverage illustration with Sky Venture Labs logo surrounded by globe, gear, building, and chart icons"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
