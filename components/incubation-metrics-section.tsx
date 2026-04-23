export function IncubationMetricsSection() {
  const topRow = [
    { label: "technologists", value: "1000+" },
    { label: "companies supported", value: "500+" },
    { label: "users on live systems", value: "4M+" },
  ]

  const bottomRow = [
    { label: "countries", value: "12+" },
    { label: "uptime SLA", value: "99.9%" },
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-16">
          <div className="lg:col-span-2">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              HERO METRICS
              <br />
              STRIP
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Top row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-2">
          {topRow.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-3" />
              <span className="text-xs text-foreground/50 font-sans mb-2">
                {stat.label}
              </span>
              <div className="bg-[#111118] rounded-lg flex items-center justify-center h-52">
                <span className="text-5xl lg:text-6xl font-mono text-foreground tracking-tight">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-12">
          {bottomRow.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-3" />
              <span className="text-xs text-foreground/50 font-sans mb-2">
                {stat.label}
              </span>
              <div className="bg-[#111118] rounded-lg flex items-center justify-center h-52">
                <span className="text-5xl lg:text-6xl font-mono text-foreground tracking-tight">
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
