const topRowMetrics = [
  {
    label: "KOLs & influencers across global markets",
    value: "2,500+",
  },
  {
    label: "combined owned & partner reach",
    value: "4M+",
  },
  {
    label: "exchange listings supported with coordinated comms",
    value: "50+",
  },
  {
    label: "major conferences & global events supported",
    value: "30+",
  },
]

const bottomRowMetrics = [
  {
    label: "side events, private sessions, and meetups executed",
    value: "100+",
  },
  {
    label: "strategic introductions facilitated",
    value: "1,000+",
  },
  {
    label: "active markets",
    value: "12+",
  },
]

export function MarketingMetricsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex gap-8 mb-16">
          <div className="flex-1">
            <div className="w-full h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Dev Studios
              <br />
              Power Metrics
            </h2>
          </div>
          <div className="hidden lg:block w-[300px] flex-shrink-0">
            <div className="w-full h-px bg-foreground/20 mb-8" />
            <p className="text-sm text-foreground/50 font-sans">
              Technology Delivery at Scale
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-foreground/10 mb-2" />

        {/* Top row - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {topRowMetrics.map((metric, index) => (
            <div key={index}>
              <div className="w-full h-px bg-foreground/20 mb-4" />
              <p className="text-xs text-foreground/50 font-sans leading-relaxed mb-3 min-h-[36px]">
                {metric.label}
              </p>
              <div className="bg-foreground/[0.05] rounded-lg px-6 py-10 flex items-end">
                <span className="text-4xl lg:text-5xl font-mono text-foreground tracking-tight">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bottomRowMetrics.map((metric, index) => (
            <div key={index}>
              <div className="w-full h-px bg-foreground/20 mb-4" />
              <p className="text-xs text-foreground/50 font-sans leading-relaxed mb-3">
                {metric.label}
              </p>
              <div className="bg-foreground/[0.05] rounded-lg px-6 py-10 flex items-end">
                <span className="text-4xl lg:text-5xl font-mono text-foreground tracking-tight">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
