import Image from "next/image"

export function MarketingWhySVLSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-10">
          {/* Left column */}
          <div>
            {/* Top divider */}
            <div className="h-px bg-foreground/20 mb-8" />

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans mb-16 lg:mb-24">
              Why Sky
              <br />
              Venture
              <br />
              Labs?
            </h2>

            <div className="border-t border-foreground/20 pt-6">
              <ul className="space-y-3">
                {[
                  "Systems-first growth, not random tactics",
                  "Distribution networks that can be activated quickly",
                  "Events treated as market infrastructure",
                  "Measurement discipline (weekly operating cadence)",
                  "Integrated with build and advisory",
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

          {/* Right column - office photo */}
          <div className="relative rounded-lg overflow-hidden min-h-[450px] lg:min-h-[600px]">
            <Image
              src="/images/marketing/why-sky-venture.png"
              alt="Team of professionals collaborating in a modern office workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
