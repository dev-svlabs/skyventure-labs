import Image from "next/image"

export function IncubationWhySection() {
  const bulletPoints = [
    "Narrative doesn't match traction",
    "KPIs aren't credible or consistent",
    "Unit economics are unclear",
    "Capital route is wrong (talking to the wrong investors)",
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column - bordered container */}
          <div className="border border-foreground/10 rounded-lg p-8 lg:p-10 flex flex-col">
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans mb-4">
              WHY READINESS
              <br />
              COMES FIRST
            </h2>

            <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-16">
              {"Funding doesn\u2019t fail on \u201Cideas.\u201D It fails on readiness."}
            </p>

            <div className="h-px bg-foreground/20 mb-8" />

            {/* Body text */}
            <p className="text-sm font-semibold text-foreground/90 font-sans leading-relaxed mb-4">
              Most raises break at the same points:
            </p>

            <ul className="space-y-3 mb-8">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground/50 mt-2 shrink-0" />
                  <span className="text-sm text-foreground/50 font-sans leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-semibold text-foreground/90 font-sans leading-relaxed">
              We fix these before you enter the room.
            </p>
          </div>

          {/* Right column - bordered image container */}
          <div className="border border-foreground/10 rounded-lg overflow-hidden relative min-h-[500px] lg:min-h-0">
            <Image
              src="/images/incubation-capsule.png"
              alt="3D purple capsule representing fundraising readiness"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
