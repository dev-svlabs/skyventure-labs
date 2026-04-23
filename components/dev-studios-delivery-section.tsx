const topRowMetrics = [
  {
    label:
      "Technologists across web, mobile, backend, and cloud",
    value: "1,000+",
  },
  {
    label: "Companies supported globally",
    value: "500+",
  },
  {
    label: "Users on systems we've built and maintain",
    value: "4M+",
  },
  {
    label: "Production technologies in active use",
    value: "35+",
  },
]

const bottomRowMetrics = [
  {
    label: "Platforms and applications launched",
    value: "100+",
  },
  {
    label: "Uptime SLA on managed systems",
    value: "99.9%",
  },
  {
    label: "Monitoring & incident response",
    value: "24/7",
  },
]

export function DevStudiosDeliverySection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex gap-8 mb-16">
          <div className="flex-1">
            <div className="w-full h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Technology Delivery
              <br />
              at Scale
            </h2>
          </div>
          <div className="hidden lg:block w-[300px] flex-shrink-0">
            <div className="w-full h-px bg-foreground/20" />
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
