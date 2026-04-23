export function IncubationCapitalSection() {
  const topRow = [
    { label: "Investor-ready teams prepared", value: "40+" },
    { label: "Founders coached through raises", value: "50+" },
    { label: "Investor and fund matching routes", value: "100+" },
    { label: "Grant applications supported", value: "20+" },
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
              Fundraising Readiness<br />At Scale
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
