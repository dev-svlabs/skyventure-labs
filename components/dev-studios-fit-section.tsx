import Image from "next/image"

const cards = [
  {
    label: "technology decisions aligned with strategy",
    image: "/images/dev-studios/fit-strategy.png",
  },
  {
    label: "platforms prepared for fundraising and scale",
    image: "/images/dev-studios/fit-fundraising.png",
  },
  {
    label: "execution grounded in market reality",
    image: "/images/dev-studios/fit-market.png",
  },
]

export function DevStudiosFitSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mb-12">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              How Dev Studios Fit<br />Sky Venture Labs
            </h2>
          </div>
          <div className="flex items-start">
            <div>
              <div className="h-px bg-foreground/20 mb-8" />
              <p className="text-sm text-foreground/60 font-sans">
                Technology Execution Arm of the Venture Lab
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/60 font-sans mb-8 max-w-3xl leading-relaxed">
          {"Sky Venture Studios works closely with Sky Venture Labs\u2019 advisory and capital teams. This ensures:"}
        </p>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.label} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <p className="text-sm text-foreground/60 font-sans mb-4">
                {card.label}
              </p>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0A0A0F]">
                <Image
                  src={card.image}
                  alt={card.label}
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
