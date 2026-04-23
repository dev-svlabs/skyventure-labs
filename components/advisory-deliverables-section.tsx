import Image from "next/image"

const outcomes = [
  "Fintech & Payments",
  "B2B SaaS",
  "Commerce platforms",
  "Marketplaces",
  "SME tools",
  "Enterprise internal systems",
  "Institutions & transformation programs",
]

export function AdvisoryDeliverablesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-10">
          {/* Left - text */}
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-16">
              DELIVERABLES
            </h2>

            <p className="text-sm font-bold text-foreground font-sans mb-4">
              Typical Outcomes We Target
            </p>
            <ul className="flex flex-col gap-2.5">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-foreground/40 rounded-sm mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - illustration */}
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/advisory/deliverables-illustration.png"
                alt="Deliverables ecosystem - Fintech, Commerce, Marketplaces, B2B SaaS, SME tools, Enterprise systems"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
