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

const bulletPoints = [
  "100+ venture funds, family offices, and launchpads",
  "20+ ecosystem grant programs",
  "Active capital across Asia, Europe, and North America",
]

export function IncubationCapitalRoutesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mb-12">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Direct Routes to Capital &<br />
              Non-Dilutive Funding
            </h2>
          </div>
          <div className="lg:max-w-[300px]">
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Subtitle and bullet points */}
        <div className="mb-16">
          <p className="text-sm text-foreground/50 font-sans mb-4">We operate with:</p>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {bulletPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <span className="text-foreground/50 mt-1 text-xs">&#9632;</span>
                <span className="text-sm text-foreground/50 font-sans">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo grid - 3 rows of 7 logos */}
        <div className="flex flex-col gap-12 mt-8">
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
