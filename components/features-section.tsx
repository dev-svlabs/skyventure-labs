import Image from "next/image"

function VerticalBars() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-[400px] overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-[61px]"
          style={{
            left: `${i * 53}px`,
            background:
              "linear-gradient(to left, rgba(255,255,255,0.038), transparent)",
            opacity: 0.1,
          }}
        />
      ))}
    </div>
  )
}

const cards = [
  {
    text: "strong ideas failing due to weak structure",
    image: "/images/card-structure.png",
  },
  {
    text: "capital deployed before ventures were ready",
    image: "/images/card-capital.png",
  },
  {
    text: "products launched without execution discipline",
    image: "/images/card-execution.png",
  },
  {
    text: "distribution scaling faster than governance",
    image: "/images/card-governance.png",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <VerticalBars />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto">
        {/* Top divider line */}
        <div className="w-full h-px bg-foreground/20 mb-10" />

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-foreground leading-[1.05] font-sans uppercase mb-6">
          Built for High-Consequence
          <br />
          Environments
        </h2>

        {/* Description */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm lg:text-base text-foreground/50 leading-relaxed font-sans">
            {"Sky Venture Labs exists to incubate ventures properly before capital, execution, and markets are activated.."}
            <br />
            {"Across "}
            <span className="font-bold text-foreground">
              {"500+ real-world"}
            </span>
            {" ventures, we repeatedly observed:"}
          </p>
        </div>

        {/* Divider before cards */}
        <div className="w-full h-px bg-foreground/20 mb-10" />

        {/* Four cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.text} className="flex flex-col gap-4">
              {/* Card text */}
              <p className="text-sm lg:text-base text-foreground/70 leading-relaxed font-sans min-h-[48px]">
                {card.text}
              </p>

              {/* Card image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0A0A14]">
                <Image
                  src={card.image}
                  alt={card.text}
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
