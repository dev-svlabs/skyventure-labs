import Image from "next/image"

export function AdvisoryOperatorLedSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-10">
          {/* Left - text content */}
          <div className="flex flex-col">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-16">
              OPERATOR-LED.
              <br />
              MEASUREMENT-
              <br />
              DRIVEN.
            </h2>

            <div className="h-px bg-foreground/20 mb-6" />

            <p className="text-sm font-semibold text-foreground font-sans mb-5">
              Our advisory is designed to be runnable inside real teams:
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Weekly operator review cadence",
                "Simple reporting standards",
                "Clear governance: owners, timelines, decisions",
                "Execution-ready outputs your team can implement immediately",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/60 font-sans">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm font-semibold text-foreground font-sans">
              No fluff. No theatre. Only decisions that move the business.
            </p>
          </div>

          {/* Right - image */}
          <div className="flex flex-col">
            <div className="h-px bg-foreground/20 mb-8" />
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/advisory/operator-led.png"
                alt="Team whiteboard strategy session"
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
