const bulletPoints = [
  "100+ venture funds and family offices in our network",
  "20+ grant programs tracked and supported",
  "Active across Asia, Europe, and North America",
]

export function IncubationCapitalRoutesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mb-12">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Direct Routes to Capital &<br />
              Non-Dilutive Funding
            </h2>
          </div>
          <div className="lg:max-w-[300px]">
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Subtitle and bullet points */}
        <div className="mb-16">
          <p className="text-sm text-foreground/50 font-sans mb-4">We operate with:</p>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {bulletPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <span className="text-foreground/50 mt-1 text-xs">&#9632;</span>
                <span className="text-sm text-foreground/50 font-sans">{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
