import Image from "next/image"

export function FundraisingCapitalNetworkSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      {/* Section header */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_1fr] gap-6 mb-16">
        <div>
          <div className="h-px bg-foreground/20 mb-6" />
          <h2 className="text-4xl lg:text-6xl font-bold font-sans tracking-tight text-foreground uppercase leading-tight">
            Capital & Institutional
            <br />
            Network
          </h2>
        </div>
        <div>
          <div className="h-px bg-foreground/20 mb-6" />
        </div>
      </div>

      {/* Capital types we route to */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-0.5 h-5 bg-foreground/30" />
          <span className="text-sm text-foreground/50 font-sans">Capital types we route to</span>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="relative w-full min-w-[1100px]">
            <Image
              src="/images/fundraising/capital-types-strip.png"
              alt="Capital types: Cointelegraph, Decrypt, Forbes, CoinDesk Data, Yahoo Finance"
              width={1400}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Ecosystem partners */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-0.5 h-5 bg-foreground/30" />
          <span className="text-sm text-foreground/50 font-sans">Ecosystem partners</span>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="relative w-full min-w-[1100px]">
            <Image
              src="/images/fundraising/ecosystem-partners-strip.png"
              alt="Ecosystem partners"
              width={1400}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
