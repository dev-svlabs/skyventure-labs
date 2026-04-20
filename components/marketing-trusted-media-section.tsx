import Image from "next/image"

export function MarketingTrustedMediaSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      {/* Header area */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-16">
        {/* Left - heading */}
        <div>
          <div className="w-full h-px bg-foreground/20 mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-sans text-foreground">
            TRUSTED BY MEDIA{" "}
            <span className="text-foreground/40">{"& EVENT"}</span>
            <br />
            <span className="text-foreground/40">ECOSYSTEMS</span>
          </h2>
        </div>

        {/* Right - subtitle */}
        <div className="flex flex-col items-end">
          <div className="w-full h-px bg-foreground/20 mb-8" />
          <p className="text-base text-foreground/50 font-sans">
            Trusted Media, Platforms & Event Ecosystems
          </p>
        </div>
      </div>

      {/* Media & Publications */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-0.5 h-5 bg-foreground/60" />
          <span className="text-base text-foreground/70 font-sans">
            Media & Publications
          </span>
        </div>
        <div className="overflow-hidden">
          <div className="relative">
            <Image
              src="/images/marketing/media-logos.png"
              alt="Media partners - Cointelegraph, Decrypt, Forbes, CoinDesk Data, Yahoo Finance"
              width={1400}
              height={140}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "160px" }}
            />
          </div>
        </div>
      </div>

      {/* Global Event & Ecosystem Platforms */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-0.5 h-5 bg-foreground/60" />
          <span className="text-base text-foreground/70 font-sans">
            Global Event & Ecosystem Platforms
          </span>
        </div>
        <div className="overflow-hidden">
          <div className="relative">
            <Image
              src="/images/marketing/events-logos.png"
              alt="Event partners - TOKEN2049, Binance Blockchain Week, ATX Summit, Cointelegraph"
              width={1400}
              height={140}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "160px" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
