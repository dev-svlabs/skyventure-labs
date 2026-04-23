import Image from "next/image"

const topRowCards = [
  {
    title: "Fintech & Financial Services",
    image: "/images/dev-studios/ind-fintech.png",
  },
  {
    title: "Digital Infrastructure & Cloud",
    image: "/images/dev-studios/ind-blockchain.png",
  },
  {
    title: "SaaS & Enterprise Software",
    image: "/images/dev-studios/ind-saas.png",
  },
]

const bottomRowCards = [
  {
    title: "Marketplaces & Platforms",
    image: "/images/dev-studios/ind-marketplaces.png",
  },
  {
    title: "AI & Data Products",
    image: "/images/dev-studios/ind-ai.png",
  },
  {
    title: "Digital Infrastructure",
    image: "/images/dev-studios/ind-infrastructure.png",
  },
]

export function DevStudiosIndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Industries We<br />Support
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Top row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topRowCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-4">
                {card.title}
              </h3>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0A0A0F]">
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

        {/* Divider between rows */}
        <div className="h-px bg-foreground/10 my-8" />

        {/* Bottom row - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomRowCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <h3 className="text-sm font-bold text-foreground font-sans mb-4">
                {card.title}
              </h3>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0A0A0F]">
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

        {/* Bottom divider */}
        <div className="h-px bg-foreground/20 mt-8" />
      </div>
    </section>
  )
}
