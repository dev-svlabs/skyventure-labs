import Image from "next/image"

export function DevStudiosGovernanceSection() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Top divider */}
        <div className="flex gap-6 items-start mb-2">
          <div className="flex-1 border-t border-foreground/20" />
          <div className="w-1/3 border-t border-foreground/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-4">
              Delivery<br />Governance
            </h2>

            <p className="text-sm text-foreground/60 font-sans mb-12">
              How We Deliver Technology That Lasts
            </p>

            <div className="border-t border-foreground/20 pt-8 mb-12">
              <p className="text-sm font-bold text-foreground font-sans mb-4">
                We operate with:
              </p>
              <ul className="space-y-2">
                {[
                  "clear technical ownership & accountability",
                  "sprint-based delivery with weekly demos",
                  "CI/CD pipelines and automated testing",
                  "security-first architecture (OWASP-aligned)",
                  "monitoring, alerting & incident response",
                  "audit-ready documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                    <span className="text-sm text-foreground/60 font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-foreground/20 pt-8">
              <p className="text-sm font-bold text-foreground font-sans mb-4">
                Typical Delivery Benchmarks
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">
                    MVP delivery: <span className="font-bold text-foreground">8-12 weeks</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">
                    Platform modules: <span className="font-bold text-foreground">12-20 weeks</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">
                    <span className="font-bold text-foreground">0</span> critical incidents on audited releases
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - illustration */}
          <div className="relative rounded-lg overflow-hidden border border-foreground/10 min-h-[500px]">
            <Image
              src="/images/dev-studios/security-lock.png"
              alt="Security governance illustration with lock and monitoring icons"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
