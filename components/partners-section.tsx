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

export function PartnersSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-start gap-8 mb-6">
          <div className="flex-1">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase">
              Ecosystem & Partners
            </h2>
          </div>
          <div className="hidden lg:block w-[320px] pt-0">
            <div className="h-px bg-foreground/20" />
          </div>
        </div>

        <p className="text-sm lg:text-base text-foreground/50 font-sans leading-relaxed mb-20 max-w-3xl">
          We operate across global infrastructure, platforms, and ecosystem
          networks - enabling faster delivery and market activation.
        </p>

        {/* Logo grid - 3 rows */}
        <div className="flex flex-col gap-16">
          {[0, 1, 2].map((rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-10 items-center"
            >
              {logos.map((logo) => (
                <div
                  key={`${rowIndex}-${logo.name}`}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
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
