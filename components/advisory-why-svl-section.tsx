import Image from "next/image"

const points = [
  "We advise with execution reality - not theory",
  "Decisions come with owners, timelines, and KPIs",
  "We design systems that survive scale",
  "Advisory plugs into delivery via Dev Studios and Growth Systems when needed",
]

export function AdvisoryWhySvlSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-10">
          {/* Left - text */}
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans italic mb-16">
              WHY SKY
              <br />
              VENTURE
              <br />
              LABS?
            </h2>

            <div className="h-px bg-foreground/20 mb-8" />
            <ul className="flex flex-col gap-3">
              {points.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-foreground/40 rounded-sm mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - team photo */}
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
              <Image
                src="/images/advisory/why-svl-team.png"
                alt="Sky Venture Labs team collaborating in modern office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
