import Image from "next/image"

const logos = [
  { name: "Binance Labs", src: "/images/logos/binance-labs.png", width: 140, height: 40 },
  { name: "KuCoin Ventures", src: "/images/logos/kucoin-ventures.png", width: 140, height: 40 },
  { name: "Gate Ventures", src: "/images/logos/gate-ventures.png", width: 120, height: 40 },
  { name: "Binance", src: "/images/logos/binance.png", width: 120, height: 30 },
  { name: "Bybit", src: "/images/logos/bybit.png", width: 90, height: 30 },
  { name: "AWS", src: "/images/logos/aws.png", width: 80, height: 35 },
  { name: "TOKEN2049", src: "/images/logos/token2049.png", width: 120, height: 35 },
]

export function ExchangeAdvantageSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-8">
              Exchange<br />Advantage
            </h2>
            <p className="text-sm text-foreground/50 font-sans leading-relaxed max-w-xl">
              We maintain working relationships with listing and ecosystem teams across major exchanges,
              enabling founders to avoid blind applications and misaligned pathways.
            </p>
          </div>
          <div className="lg:max-w-[300px]">
            <div className="h-px bg-foreground/20 mb-8" />
            <p className="text-sm text-foreground/50 font-sans">
              Direct Routes to Tier-1 / Tier-2 Exchanges
            </p>
          </div>
        </div>

        {/* Logo grid - 3 rows of 7 logos */}
        <div className="flex flex-col gap-12 mt-20">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-8 items-center"
            >
              {logos.map((logo) => (
                <div
                  key={`${row}-${logo.name}`}
                  className="flex items-center justify-center h-12"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain max-h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
