import Image from "next/image"
import { Clock } from "lucide-react"

const phases = [
  {
    phase: "Phase 1 - Position",
    description: "Messaging, offer clarity, audience mapping, channel selection.",
    duration: "1\u20132 weeks",
  },
  {
    phase: "Phase 2 - System Build",
    description:
      "Funnel architecture, tracking, creative direction, partner roster.",
    duration: "2\u20133 weeks",
  },
  {
    phase: "Phase 3 - Activation",
    description: "Paid + content + partners + events, executed in waves.",
    duration: "4\u20138 weeks",
  },
  {
    phase: "Phase 4 - Optimization",
    description: "Weekly review cadence, CAC/ROAS guardrails, iteration.",
    duration: "Ongoing",
  },
]

export function MarketingDeliveryProcessSection() {
  return (
    <section className="px-6 lg:px-10 py-24 max-w-[1400px] mx-auto">
      {/* Header with split divider */}
      <div className="flex items-start gap-8 mb-16">
        <div className="flex-1">
          <div className="h-px bg-foreground/20 mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-tight">
            DELIVERY PROCESS
          </h2>
        </div>
        <div className="hidden md:block w-1/3">
          <div className="h-px bg-foreground/20 mb-8" />
          <p className="text-base text-foreground/50 font-sans text-right">
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
      <div className="relative w-full aspect-[1400/500] rounded-lg overflow-hidden border border-foreground/10">
        <Image
          src="/images/marketing/delivery-process.png"
          alt="Delivery process phases: Position, System Build, Activation, Optimization with icons"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
