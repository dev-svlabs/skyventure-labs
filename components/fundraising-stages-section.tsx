"use client"

const stages = [
  {
    number: "1",
    label: "Pre-seed/ Seed\nreadiness",
  },
  {
    number: "2",
    label: "Growth-stage raises",
  },
  {
    number: "3",
    label: "Strategic partnerships,\nenterprise routes",
  },
  {
    number: "4",
    label: "Institutional programs &\ngrants",
  },
]

export function FundraisingStagesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="border-t border-foreground/20 pt-8 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-sans text-foreground">
            STAGES WE SUPPORT
          </h2>
        </div>

        {/* Stage cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage) => (
            <div key={stage.number} className="flex flex-col">
              <div className="border-t border-foreground/20 mb-4" />
              <div className="bg-[#141418] rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
                <span className="text-5xl md:text-6xl font-light italic text-foreground/90 mb-6 font-serif">
                  {stage.number}
                </span>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                  {stage.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
