import Image from "next/image"
import Link from "next/link"

export function AdvisoryInflectionSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-10">
          {/* Left - Text content */}
          <div className="flex flex-col">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans mb-10">
              Built for
              <br />
              Inflection
              <br />
              Points
            </h2>

            <div className="h-px bg-foreground/20 mb-6" />

            <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-6">
              This advisory is designed for teams facing decisions that shape the next 6-18 months:
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                "You\u2019re shipping, but priorities keep changing",
                "GTM exists, but conversion doesn\u2019t compound",
                "Leadership isn\u2019t aligned on \u201Cwhat matters next\u201D",
                "Expansion is planned, but the operating system isn\u2019t ready",
                "AI is being discussed, but business value isn\u2019t measurable yet",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/50 font-sans">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="h-px bg-foreground/20 mb-6" />

            <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-8">
              Best-fit profiles: Founders / CEOs, COOs, Heads of Product, Heads of Growth, Corporate innovation {'&'} transformation leaders
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-mono text-foreground hover:bg-foreground/5 transition-colors w-fit"
            >
              Get a Recommendation
            </Link>
          </div>

          {/* Right - Photo */}
          <div className="relative rounded-xl overflow-hidden min-h-[500px] lg:min-h-[600px]">
            <Image
              src="/images/advisory/inflection-team.png"
              alt="Team in boardroom discussing strategy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
