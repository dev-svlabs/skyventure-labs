import Image from "next/image"

const topRowServices = [
  {
    title: "Strategic Positioning & Narrative",
    description:
      "Category definition, differentiation, and investor-repeatable narratives tested across 100+ investor conversations.",
  },
  {
    title: "Business Model & Pricing Design",
    description:
      "Revenue architecture, pricing strategy, and monetization models built for sustainable growth and market fit.",
  },
  {
    title: "Governance & Operational Risk",
    description:
      "Decision rights, execution accountability, and risk surfaces that emerge at scale - practical, not theoretical.",
  },
]

const bottomRowServices = [
  {
    title: "Go-to-Market & Launch Sequencing",
    description:
      "Timing coordination across product readiness, market entry, and distribution partner activation.",
  },
  {
    title: "Roadmap & Execution Planning",
    description:
      "Translating vision into structured, measurable execution plans with clear milestones and accountability.",
  },
  {
    title: "Digital & AI Transformation",
    description:
      "Integrating AI capabilities into business operations with measurable impact and clear governance frameworks.",
  },
]

export function AdvisoryEndToEndSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              END-TO-END
              <br />
              ADVISORY
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Service cards with illustration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topRowServices.map((service) => (
            <div key={service.title} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-5" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-foreground/50 font-sans leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bottomRowServices.map((service) => (
            <div key={service.title} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-5" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-foreground/50 font-sans leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Illustration image */}
        <div className="relative w-full">
          <Image
            src="/images/advisory/end-to-end-cards.png"
            alt="End to end advisory service illustrations"
            width={1320}
            height={700}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
