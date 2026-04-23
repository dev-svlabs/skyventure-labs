import Image from "next/image"

export function DevStudiosQualityReliabilitySection() {
  return (
    <section className="bg-background px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left column - Text content */}
          <div>
            {/* Top rule */}
            <div className="border-t border-foreground/20 pt-8 mb-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight font-sans">
                QUALITY,
                <br />
                SECURITY &
                <br />
                RELIABILITY
              </h2>
            </div>

            <p className="text-base text-foreground/50 font-sans leading-relaxed mt-8 max-w-md">
              Security by design, practical governance and clear reporting
              standards expected by enterprise & institutional partners.
            </p>

            {/* Bullet list */}
            <div className="mt-12 border-t border-foreground/20 pt-8">
              <p className="text-lg font-semibold text-foreground font-sans mb-5">
                We ship fast, without shipping risk:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  { bold: "99.9%", rest: " uptime SLA (managed systems)" },
                  { bold: "80%+", rest: " automated test coverage on core modules" },
                  { bold: "0 critical vulnerabilities", rest: " at handover (for audited releases)" },
                  { bold: "", rest: "OWASP-aligned practices + secure SDLC" },
                  { bold: "", rest: "Monitoring, alerting, and incident response" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#A672F9] rounded-sm mt-2.5 shrink-0" />
                    <span className="text-base text-foreground/50 font-sans">
                      {item.bold && <strong className="text-foreground/80">{item.bold}</strong>}
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="relative w-full aspect-[4/3] lg:mt-8">
            <Image
              src="/images/dev-studios/security-lock.png"
              alt="Security and reliability illustration with lock icon surrounded by technology symbols"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
