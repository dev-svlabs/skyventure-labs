import Image from "next/image"
import Link from "next/link"

const options = [
  {
    label: "Option A",
    title: "48-Hour Diagnostic",
    description: "Fast diagnosis of constraints + the next 3 moves.",
    includes: "problem map, decision priorities, KPI snapshot.",
    bestFor: null,
    cta: "Request Diagnostic",
  },
  {
    label: "Option B",
    title: "Advisory Sprint (2 weeks)",
    description: "Clarity fast. Roadmap + GTM + governance installed.",
    includes: null,
    bestFor: "founders who need immediate alignment and direction.",
    cta: "Start a Sprint",
  },
  {
    label: "Option C",
    title: "Operator Advisory (4-8 weeks)",
    description: "Weekly operating rhythm, GTM system, and execution routing.",
    includes: null,
    bestFor: "teams scaling products and markets.",
    cta: "Book Advisory",
  },
]

export function AdvisoryDeliveryOptionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-20">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              DELIVERY OPTIONS
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option) => (
            <div key={option.label} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-6" />
              <span className="text-xs text-foreground/40 font-sans mb-2">{option.label}</span>
              <h3 className="text-lg font-bold text-foreground font-sans mb-6">
                {option.title}
              </h3>

              {/* Card body */}
              <div className="border border-foreground/10 rounded-lg p-6 flex-1 flex flex-col">
                <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-3">
                  {option.description}
                </p>
                {option.includes && (
                  <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-4">
                    <strong className="text-foreground/80">Includes:</strong> {option.includes}
                  </p>
                )}
                {option.bestFor && (
                  <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-4">
                    <strong className="text-foreground/80">Best for:</strong> {option.bestFor}
                  </p>
                )}

                {/* Illustration placeholder */}
                <div className="mt-auto pt-6">
                  <div className="relative w-full aspect-[4/3] bg-[#111] rounded-md border border-foreground/5 overflow-hidden flex items-center justify-center">
                    <div className="grid grid-cols-4 grid-rows-3 w-full h-full opacity-20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="border border-foreground/10" />
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-foreground/90 rounded-sm flex items-center justify-center">
                        {option.label === "Option A" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        )}
                        {option.label === "Option B" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                          </svg>
                        )}
                        {option.label === "Option C" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/20 rounded-full text-sm font-mono text-foreground hover:bg-foreground/5 transition-colors w-fit"
              >
                {option.cta} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
