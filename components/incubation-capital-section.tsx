export function IncubationCapitalSection() {
  const topRow = [
    { label: "Ventures incubated and funded", value: "40+" },
    { label: "Total capital facilitated", value: "$50M+" },
    { label: "Investor, fund, and launchpad routes", value: "100+" },
    { label: "L1 / L2 grant programs accessed", value: "20+" },
  ]

  const bottomRow = [
    { label: "Active markets", value: "12+" },
    { label: "Shorter fundraising cycles", value: "30-45%" },
    { label: "Higher investor conversion vs cold outreach", value: "2x" },
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Incubation & Capital<br />At Scale
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
              <div className="h-px bg-foreground/20 mb-3" />
              <p className="text-xs text-foreground/50 font-sans mb-3">{stat.label}</p>
              <div className="bg-[#0D0D14] rounded-lg flex items-center justify-center py-16">
                <span className="text-4xl lg:text-5xl font-mono text-foreground/90 tracking-tight">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/20 my-12" />

        {/* Bottom row - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {bottomRow.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="text-xs text-foreground/50 font-sans mb-3">{stat.label}</p>
              <div className="bg-[#0D0D14] rounded-lg flex items-center justify-center py-16">
                <span className="text-4xl lg:text-5xl font-mono text-foreground/90 tracking-tight">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
