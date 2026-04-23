import Image from "next/image"

export function MarketingBuiltForTeamsSection() {
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

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans mb-20 lg:mb-32">
              Built For Teams
              <br />
              Scaling Into
              <br />
              Real Markets
            </h2>

            <div className="border-t border-foreground/20 pt-6">
              <p className="text-sm font-bold text-foreground font-sans mb-5">
                We work best with:
              </p>
              <ul className="space-y-3">
                {[
                  "Growth-stage tech companies expanding across regions",
                  "Enterprise-facing products that need credibility + distribution",
                  "Brands launching new products or new markets",
                  "Institutions building ecosystems and programs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-sm bg-foreground/40 mt-1.5 shrink-0" />
                    <span className="text-sm text-foreground/60 font-sans leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - team photo */}
          <div className="relative rounded-lg overflow-hidden min-h-[450px] lg:min-h-[600px]">
            <Image
              src="/images/marketing/team-scaling.png"
              alt="Team of professionals working together at a table with laptops"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
