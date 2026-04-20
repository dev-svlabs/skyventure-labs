import Image from "next/image"

export function DevStudiosQualitySection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Top divider */}
        <div className="border-t border-foreground/20 mb-2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-4">
              Quality,<br />Security &<br />Reliability
            </h2>

            <p className="text-sm text-foreground/60 font-sans mb-16">
              Built Into the System
            </p>

            <div className="border-t border-foreground/20 pt-8">
              <p className="text-sm font-bold text-foreground font-sans mb-4">
                We operate with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">
                    <span className="font-bold text-foreground">80%+</span> automated test coverage on core platforms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">
                    <span className="font-bold text-foreground">0</span> critical vulnerabilities at handover (audited systems)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">
                    <span className="font-bold text-foreground">99.9%</span> uptime SLA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">
                    {"Compliance awareness: GDPR \u00B7 PDPA \u00B7 SOC2-ready \u00B7 PCI-DSS (where applicable)"}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - illustration */}
          <div className="relative rounded-lg overflow-hidden border border-foreground/10 min-h-[500px]">
            <Image
              src="/images/dev-studios/security-lock.png"
              alt="Quality and security illustration with lock and monitoring icons"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
