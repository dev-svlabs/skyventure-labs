import Image from "next/image"
import Link from "next/link"

export function IncubationNotAccelerationSection() {
  const bullets = [
    "Capital structure and sequencing",
    "Narrative and positioning",
    "Governance and decision-making",
    "Execution readiness (product, tech, ops)",
    "Market timing and exposure",
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Top dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-px bg-foreground/20" />
          <div className="h-px bg-foreground/20 hidden lg:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Left column */}
          <div className="flex flex-col">
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-16">
              Incubation is<br />
              Not<br />
              Acceleration<br />
              Programs
            </h2>

            <div className="h-px bg-foreground/20 mb-8" />

            <p className="text-sm text-foreground/50 font-sans leading-relaxed mb-16">
              Our incubation focuses on structural readiness, not demo days.
            </p>

            <div className="h-px bg-foreground/20 mb-8" />

            <p className="text-sm font-semibold text-foreground font-sans mb-4">
              We incubate ventures across:
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-foreground/40 mt-0.5 text-[8px]">{"\u25A0"}</span>
                  <span className="text-sm text-foreground/50 font-sans">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-semibold text-foreground font-sans leading-relaxed">
              This incubation layer is what makes fundraising faster,
              <br />
              cleaner, and more credible.
            </p>
          </div>

          {/* Right column - Grid illustration */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] border border-foreground/10 rounded-lg overflow-hidden">
              <Image
                src="/images/incubation-grid.png"
                alt="Technical grid illustration with wireframe polyhedron"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
