export function ImpactSection() {
  const stats = [
    { label: "Faster fundraising cycles", value: "30\u201345%" },
    { label: "Lower post-listing volatility", value: "40%" },
    { label: "Faster user adoption post-launch", value: "2\u20134\u00d7" },
  ]

  return (
    <section className="bg-background px-6 lg:px-16 py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 border-t border-foreground/20 pt-8" />
          <div className="border-t border-foreground/20 pt-8" />
        </div>

        <h2 className="text-5xl lg:text-7xl font-sans font-normal tracking-tight text-foreground uppercase leading-[1.1] mb-4">
          What Changes<br />
          After We{"\u2019"}re Involved
        </h2>
        <p className="text-sm text-foreground/50 font-sans mb-20">
          Across our portfolio and incubation engagements:
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="border-t border-foreground/20 pt-4 mb-3">
                <p className="text-sm text-foreground/80 font-sans">{stat.label}</p>
              </div>
              <div className="bg-[#111118] rounded-lg aspect-[4/3] flex items-center justify-center">
                <span className="text-6xl lg:text-8xl font-mono font-normal text-foreground tracking-tight">
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
