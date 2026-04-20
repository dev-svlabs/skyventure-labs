import Image from "next/image"

const phases = [
  {
    title: "Diagnose",
    description:
      "Identify constraints, market signal gaps, and execution leaks.",
    timeline: "1-2 weeks",
  },
  {
    title: "Structure",
    description:
      "Lock priorities, owners, cadence, KPIs, and decision rights.",
    timeline: "1-2 weeks",
  },
  {
    title: "GTM Readiness",
    description:
      "Positioning, packaging, funnel routing, and conversion blockers.",
    timeline: "1-2 weeks",
  },
  {
    title: "Weekly Operator Reviews",
    description:
      "Iterate fast, track movement, and keep execution aligned.",
    timeline: "1-2 weeks",
  },
]

export function AdvisorySprintSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-20">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              4-8 WEEK
              <br />
              ADVISORY SPRINT
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <p className="text-sm text-foreground/50 font-sans">
              From Direction to Execution
            </p>
          </div>
        </div>

        {/* Phase descriptions - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {phases.map((phase) => (
            <div key={phase.title}>
              <div className="h-px bg-foreground/20 mb-6" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-3">
                {phase.title}
              </h3>
              <p className="text-xs text-foreground/50 font-sans leading-relaxed mb-4">
                {phase.description}
              </p>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="white" strokeOpacity="0.4" strokeWidth="1" />
                  <path d="M7 4V7.5L9.5 9" stroke="white" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="text-xs font-mono text-foreground/60">{phase.timeline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline illustration image */}
        <div className="relative w-full">
          <Image
            src="/images/advisory/sprint-timeline.png"
            alt="Advisory sprint timeline - Diagnose, Structure, Listing Readiness, Routing"
            width={1320}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
