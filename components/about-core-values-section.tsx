const values = [
  "Optimize Customer Outcomes",
  "Speed With Control",
  "Builder Mentality",
  "Clarity Over Noise",
  "Integrity & Confidentiality",
]

export function AboutCoreValuesSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-start gap-8 mb-16">
          <div className="flex-1">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase">
              Core Values
            </h2>
          </div>
          <div className="hidden lg:block w-[320px] pt-0">
            <div className="h-px bg-foreground/20" />
          </div>
        </div>

        {/* Value cards - 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {values.map((value, i) => (
            <div key={i} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <div className="bg-[#111118] rounded-lg p-6 flex items-center justify-center min-h-[200px]">
                <p className="text-base lg:text-lg font-mono text-foreground text-center leading-relaxed">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
