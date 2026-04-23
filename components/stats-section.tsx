export function StatsSection() {
  const rows = [
    [
      { label: "Companies advised and supported globally", value: "500+" },
      { label: "Founders coached through fundraising readiness", value: "50+" },
      { label: "Grant applications supported", value: "20+" },
    ],
    [
      { label: "Users on systems we've built and maintain", value: "4M+" },
      { label: "Developers and designers in our network", value: "1,000+" },
      { label: "Active global markets", value: "12+" },
    ],
    [
      { label: "Ecosystem institutions & partners", value: "2,000+" },
      { label: "Major events supported globally", value: "30+" },
      { label: "Years of execution leadership across the team", value: "15+" },
    ],
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="relative z-10 px-6 lg:px-10">
        {/* Heading with top line */}
        <div className="flex items-start gap-8 mb-16">
          <div className="flex-1">
            <div className="border-t border-foreground/20 pt-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground font-sans">
                Scale you can measure
              </h2>
            </div>
          </div>
          <div className="hidden lg:block w-1/3">
            <div className="border-t border-foreground/20" />
          </div>
        </div>

        {/* Stats Grid - 3 rows of 3 */}
        <div className="flex flex-col gap-10">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {/* Row grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {row.map((stat) => (
                  <div key={stat.label}>
                    {/* Divider line + label */}
                    <div className="border-t border-foreground/20 pt-4 mb-3">
                      <p className="text-sm text-foreground/70 font-sans">
                        {stat.label}
                      </p>
                    </div>
                    {/* Value card */}
                    <div className="bg-[#0C0C14] rounded-lg border border-foreground/[0.06] px-6 py-10 flex items-center">
                      <span className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-mono tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
