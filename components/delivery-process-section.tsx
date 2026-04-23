import Image from "next/image"
import { Clock } from "lucide-react"

const phases = [
  {
    phase: "Phase 1 - Discover",
    description: "Product scope, system architecture, risks, and roadmap.",
    duration: "1 week",
  },
  {
    phase: "Phase 2 - Plan",
    description: "Sprint planning, milestones, and delivery alignment.",
    duration: "1 week",
  },
  {
    phase: "Phase 3 - Build & Launch",
    description:
      "Iterative development, production deployment, monitoring, and handover.",
    duration: "4–12 weeks",
  },
  {
    phase: "Phase 4 - Optimize",
    description: "Maintenance, optimization, scaling, and support.",
    duration: "Ongoing",
  },
]

export function DeliveryProcessSection() {
  return (
    <section className="px-6 lg:px-10 py-24 max-w-[1400px] mx-auto">
      {/* Header with split divider */}
      <div className="flex items-start gap-8 mb-16">
        <div className="flex-1">
          <div className="h-px bg-foreground/20 mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-tight">
            LIGHTNING-FAST
            <br />
            DELIVERY PROCESS
          </h2>
        </div>
        <div className="hidden md:block w-1/3">
          <div className="h-px bg-foreground/20 mb-8" />
          <p className="text-base text-foreground/50 font-mono text-right">
            From Concept to Production
          </p>
        </div>
      </div>

      {/* 4-column phases */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {phases.map((item) => (
          <div key={item.phase} className="flex flex-col">
            <div className="h-px bg-foreground/20 mb-6" />
            <h3 className="text-base font-semibold text-foreground font-sans mb-3">
              {item.phase}
            </h3>
            <p className="text-base text-foreground/50 font-sans leading-relaxed mb-4">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-foreground/60">
              <Clock className="w-4 h-4" />
              <span className="text-base font-sans font-medium">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Illustration */}
      <div className="relative w-full aspect-[1400/320] rounded-lg overflow-hidden border border-foreground/10">
        <Image
          src="/images/delivery-process.png"
          alt="Delivery process phases: Discover, Plan, Build & Launch, Optimize"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
