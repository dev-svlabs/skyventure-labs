import Image from "next/image"

const changes = [
  {
    title: "Faster Fundraising Timelines",
    description: "30-45% faster fundraising timelines through structured preparation.",
    image: "/images/fundraising/changes-card-1.png",
  },
  {
    title: "Investor Conversion",
    description: "2-3x improvement in investor conversion rates.",
    image: "/images/fundraising/changes-card-2.png",
  },
  {
    title: "Aligned Cap Tables",
    description: "Higher-quality cap tables with aligned long-term holders.",
    image: "/images/fundraising/changes-card-3.png",
  },
  {
    title: "Reduced Dilution",
    description: "Reduced dilution and governance risk across rounds.",
    image: "/images/fundraising/changes-card-4.png",
  },
  {
    title: "Execution Readiness",
    description: "Stronger post-raise execution readiness and reporting.",
    image: "/images/fundraising/changes-card-5.png",
  },
  {
    title: "Capital Efficiency",
    description: "Better capital allocation with clear milestones and KPIs.",
    image: "/images/fundraising/changes-card-6.png",
  },
]

export function IncubationChangesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top divider */}
        <div className="flex items-center gap-8 mb-12">
          <div className="h-px flex-1 bg-foreground/20" />
          <div className="h-px flex-1 bg-foreground/20" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase mb-16">
          What Changes
          <br />
          After Readiness Work
        </h2>

        {/* 3x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {changes.map((item, i) => (
            <div key={i} className="flex flex-col">
              {/* Top divider */}
              <div className="h-px w-full bg-foreground/20 mb-6" />

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground font-sans mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/50 font-sans mb-5 leading-relaxed">
                {item.description}
              </p>

              {/* Card Image */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#111]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom divider */}
              <div className="h-px w-full bg-foreground/20 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
