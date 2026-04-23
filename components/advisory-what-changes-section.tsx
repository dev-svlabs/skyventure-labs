const stats = [
  {
    label: "Faster decision cycles",
    value: "2x",
  },
  {
    label: "Less execution waste",
    value: "30-50%",
  },
  {
    label: "Stronger GTM signal",
    value: "GTM",
  },
]

export function AdvisoryWhatChangesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-20">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              {"WHAT CHANGES AFTER"}
              <br />
              {"WE\u2019RE INVOLVED"}
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="h-px bg-foreground/20 mb-6" />
              <p className="text-sm text-foreground/60 font-sans mb-4">{stat.label}</p>
              <div className="bg-[#161616] rounded-lg aspect-[4/3] flex items-center justify-center">
                <span className="text-5xl lg:text-7xl font-bold font-mono text-foreground tracking-tight">
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
