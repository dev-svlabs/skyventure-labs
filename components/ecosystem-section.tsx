import Image from "next/image"

export function EcosystemSection() {
  const stats = [
    { label: "Venture funds & capital partners", value: "100+" },
    { label: "Exchanges & market operators", value: "50+" },
    { label: "Institutions & community nodes", value: "2000+" },
    { label: "Geographic markets", value: "12+" },
  ]

  const logos = [
    { name: "Binance Labs", src: "/images/logos/binance-labs.png", width: 140, height: 36 },
    { name: "KuCoin Ventures", src: "/images/logos/kucoin-ventures.png", width: 130, height: 36 },
    { name: "Gate Ventures", src: "/images/logos/gate-ventures.png", width: 110, height: 36 },
    { name: "Binance", src: "/images/logos/binance.png", width: 120, height: 24 },
    { name: "Bybit", src: "/images/logos/bybit.png", width: 80, height: 24 },
    { name: "AWS", src: "/images/logos/aws.png", width: 70, height: 28 },
    { name: "TOKEN2049", src: "/images/logos/token2049.png", width: 100, height: 36 },
  ]

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header with divider lines */}
        <div className="flex items-start gap-8 mb-20">
          <div className="flex-1">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase">
              Global Ecosystem<br />Power
            </h2>
          </div>
          <div className="hidden lg:block w-[320px] pt-0">
            <div className="h-px bg-foreground/20" />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="h-px bg-foreground/20 mb-4" />
              <p className="text-sm text-foreground/60 font-sans mb-3">{stat.label}</p>
              <div className="bg-[#111118] rounded-xl p-8 aspect-[4/3] flex items-center justify-center">
                <span className="text-5xl lg:text-7xl font-light tracking-tight text-foreground font-mono">
                  {stat.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos bar */}
        <div className="flex items-center justify-between flex-wrap gap-y-6 gap-x-4 pt-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
