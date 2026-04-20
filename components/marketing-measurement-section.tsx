import Image from "next/image"

export function MarketingMeasurementSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-10">
          {/* Left column */}
          <div>
            {/* Top divider */}
            <div className="h-px bg-foreground/20 mb-8" />

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans mb-16 lg:mb-24">
              Measurement
              <br />
              You Can Run A
              <br />
              Business On
            </h2>

            <div className="border-t border-foreground/20 pt-6">
              <p className="text-sm font-bold text-foreground font-sans mb-5">
                Typical Outcomes We Target
              </p>
              <ul className="space-y-3">
                {[
                  "CAC / LTV / ROAS guardrails",
                  "Conversion and funnel velocity",
                  "Retention cohorts and lifecycle metrics",
                  "Partner performance tracking",
                  "Event ROI tracking (leads, deals, pipeline, partnerships)",
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

          {/* Right column - illustration */}
          <div className="relative rounded-lg overflow-hidden border border-foreground/10 min-h-[450px] lg:min-h-[600px]">
            <Image
              src="/images/marketing/measurement.png"
              alt="Measurement illustration with rocket, growth arrow, and analytics icons in concentric circles"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
