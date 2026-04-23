import Image from "next/image"

export function MarketingGrowthSystemsSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex gap-6 items-start mb-12">
          <div className="flex-1">
            <div className="w-full h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Growth Systems
            </h2>
          </div>
          <div className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="w-full h-px bg-foreground/20" />
          </div>
        </div>

        {/* Illustration */}
        <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden bg-[#0a0a0f]">
          <Image
            src="/images/marketing/growth-systems.png"
            alt="Growth systems diagram showing Analytics Setup, Reporting Cadence, Partner Pipeline Support, and Acquisition Testing around Sky Venture Labs logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
