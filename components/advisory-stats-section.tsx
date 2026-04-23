export function AdvisoryStatsSection() {
  const topRow = [
    {
      label: "Companies advised across Fintech, SaaS & Enterprise Infrastructure",
      value: "500+",
    },
    {
      label: "Founders supported on GTM and fundraising readiness",
      value: "40+",
    },
    {
      label: "Years of execution leadership across the team",
      value: "15+",
    },
    {
      label: "Active markets across Asia, Europe, and North America",
      value: "12+",
    },
  ]

  const bottomRow = [
    {
      label: "Companies supported globally",
      value: "500+",
    },
    {
      label: "Advisory engagements completed on time",
      value: "95%+",
    },
    {
      label: "Typical engagement sprint duration",
      value: "4-8",
      sub: "weeks",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              ADVISORY AT
              <br />
              SCALE
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Top row - 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {topRow.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <p className="text-xs text-foreground/60 font-sans leading-relaxed mb-4 min-h-[36px]">
                {stat.label}
              </p>
              <div className="bg-[#111118] rounded-lg aspect-[4/3] flex items-center justify-center">
                <span className="text-4xl lg:text-6xl font-mono font-bold text-foreground tracking-tight">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/20 my-10" />

        {/* Bottom row - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {bottomRow.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="text-xs text-foreground/60 font-sans leading-relaxed mb-4">
                {stat.label}
              </p>
              <div className="bg-[#111118] rounded-lg aspect-[4/3] flex flex-col items-center justify-center">
                <span className="text-4xl lg:text-7xl font-mono font-bold text-foreground tracking-tight">
                  {stat.value}
                </span>
                {stat.sub && (
                  <span className="text-lg lg:text-xl font-mono text-foreground/80 mt-1">
                    {stat.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
