import Image from "next/image"

const cards = [
  {
    title: "Design & Engineering",
    description:
      "Technology and product development for businesses, apps, platforms, SaaS, and digital infrastructure.",
    image: "/images/marketing/card-narrative.png",
  },
  {
    title: "Growth Systems",
    description:
      "Growth systems, brand positioning, distribution, and high-impact industry events.",
    image: "/images/marketing/card-kol.png",
  },
  {
    title: "Product & GTM Strategy",
    description:
      "Business strategy, operating models, market entry, governance, and scale readiness.",
    image: "/images/marketing/card-community.png",
  },
  {
    title: "Fundraising Readiness",
    description:
      "Pitch narrative, investor materials, financial model, and diligence prep for founders running their own raise.",
    image: "/images/marketing/card-performance.png",
  },
]

export function OperatingSystemSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-start gap-8 mb-16">
          <div className="flex-1">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase">
              Our Operating System
            </h2>
          </div>
          <div className="hidden lg:block w-[320px] pt-0">
            <div className="h-px bg-foreground/20" />
          </div>
        </div>

        {/* 4-column cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-6" />
              <h3 className="text-base font-bold text-foreground font-sans mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-foreground/50 font-sans leading-relaxed mb-6">
                {card.description}
              </p>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A14]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
