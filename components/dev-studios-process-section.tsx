import Image from "next/image"
import { Clock } from "lucide-react"

const phases = [
  {
    name: "Discover",
    description: "Product scope, system architecture, risks, and roadmap",
    duration: "1-2 weeks",
  },
  {
    name: "Plan",
    description: "Sprint planning, milestones, and delivery alignment.",
    duration: "1 week",
  },
  {
    name: "Build",
    description: "Feature development, code review, pair programming, and QA-in-stream across 2–8 week sprints.",
    duration: "2–8 weeks",
  },
  {
    name: "Launch",
    description: "Production deployment, monitoring, and handover.",
    duration: "1-2 weeks",
  },
  {
    name: "Operate",
    description: "Maintenance, optimization, scaling, and support.",
    duration: "Ongoing",
  },
]

export function DevStudiosProcessSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Top dividers */}
        <div className="flex gap-6 items-start mb-2">
          <div className="flex-1 border-t border-foreground/20" />
          <div className="w-1/3 border-t border-foreground/20" />
        </div>

        {/* Header row */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
            Delivery Process
          </h2>
          <p className="text-sm text-foreground/50 font-sans text-right hidden lg:block">
            From Concept to Production
          </p>
        </div>

        {/* Bottom divider after heading */}
        <div className="border-t border-foreground/20 mb-12" />

        {/* Phases row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {phases.map((phase, i) => (
            <div key={i}>
              <div className="border-t border-foreground/20 pt-4 mb-4" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {phase.name}
              </h3>
              <p className="text-xs text-foreground/50 font-sans mb-4 leading-relaxed">
                {phase.description}
              </p>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-foreground/50" />
                <span className="text-xs font-bold text-foreground font-sans">
                  {phase.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline illustration */}
        <div className="relative w-full rounded-lg overflow-hidden border border-foreground/10">
          <Image
            src="/images/dev-studios/delivery-pipeline.png"
            alt="Delivery process pipeline showing Discover, Plan, Build, Launch, and Operate phases"
            width={1400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
