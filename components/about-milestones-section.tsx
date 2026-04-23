const milestones = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Sky Venture Labs launched to solve one problem: execution from zero to one.",
  },
  {
    year: "2022",
    title: "Global Footprint",
    description:
      "Expanded delivery capability across multiple markets, building a distributed team model.",
  },
  {
    year: "2023",
    title: "Systems + Scale",
    description:
      "Standardized our operating cadence: 4-8 week sprints, weekly reviews, and clear reporting\u2014built for speed without chaos.",
  },
  {
    year: "2024",
    title: "AI Transformation Focus",
    description:
      "Expanded AI adoption work into measurable business outcomes: productivity, automation, analytics, customer workflows.",
  },
  {
    year: "2026",
    title: "Malaysia Delivery Hub (Kuala Lumpur)",
    description:
      "Launched a Malaysia hub as a regional execution point to accelerate delivery across Asia while remaining global-first.",
  },
]

export function AboutMilestonesSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-start gap-8 mb-16">
          <div className="flex-1">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase">
              Milestones
            </h2>
          </div>
          <div className="hidden lg:block w-[320px] pt-0">
            <div className="h-px bg-foreground/20" />
          </div>
        </div>

        {/* Timeline rows */}
        <div className="flex flex-col">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row gap-4 lg:gap-0 py-10 border-t border-foreground/10"
            >
              {/* Left: year + title */}
              <div className="lg:w-[45%]">
                <p className="text-sm text-foreground/50 font-mono mb-1">{milestone.year}</p>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground font-sans">
                  {milestone.title}
                </h3>
              </div>
              {/* Right: description */}
              <div className="lg:w-[55%]">
                <p className="text-sm lg:text-base text-foreground/50 font-sans leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
