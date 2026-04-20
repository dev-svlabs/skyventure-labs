export function MarketingWhatChangesSection() {
  const stats = [
    {
      value: "30\u201350%",
      title: "Lower CAC",
    },
    {
      value: "2\u20133x",
      title: "Faster adoption post-launch",
    },
    {
      value: "25\u201340%",
      title: "Higher conversion rate from events & partnerships",
    },
  ]

  return (
    <section className="bg-background px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mb-16">
          <div className="border-t border-foreground/20 pt-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight font-sans">
              WHAT CHANGES
              <br />
              {"AFTER WE\u2019RE INVOLVED"}
            </h2>
            <p className="text-base text-foreground/50 font-sans mt-6">
              Across our marketing, distribution, and event engagements.
            </p>
          </div>
          <div className="border-t border-foreground/20 pt-8 hidden lg:block" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i}>
              {/* Top rule */}
              <div className="border-t border-foreground/20 pt-4" />

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground font-sans mt-2 mb-4">
                {stat.title}
              </h3>

              {/* Stat card */}
              <div className="bg-[#111113] rounded-lg p-8 lg:p-10 min-h-[240px] flex items-center justify-center">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight font-mono">
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
