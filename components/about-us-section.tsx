import Image from "next/image"

export function AboutUsSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:w-[40%]">
            {/* Header */}
            <div className="mb-12">
              <div className="h-px bg-foreground/20 mb-8" />
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase">
                About Us
              </h2>
            </div>

            {/* Description block */}
            <div className="mb-10">
              <div className="h-px bg-foreground/20 mb-8" />
              <p className="text-base font-bold text-foreground leading-relaxed font-sans mb-4">
                Sky Venture Labs is a global venture lab delivering services, not a platform.
              </p>
              <p className="text-sm text-foreground/50 leading-relaxed font-sans">
                {"We don't sell theory. We deliver outcomes: the first real version of your business, built to ship, measured weekly, and ready to scale."}
              </p>
            </div>

            {/* What Zero-to-One means */}
            <div>
              <div className="h-px bg-foreground/20 mb-8" />
              <p className="text-base font-bold text-foreground font-sans mb-4">
                {"What \u201CZero-to-One\u201D means here:"}
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "A production-ready product (not just a prototype)",
                  "A GTM plan your team can run weekly",
                  "Reporting that leadership can make decisions on",
                  "Execution cadence that holds after launch",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-foreground/50 font-sans leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - illustration */}
          <div className="lg:w-[60%] flex items-start">
            <div className="relative w-full rounded-lg border border-foreground/10 overflow-hidden">
              <Image
                src="/images/about/about-us-illustration.png"
                alt="Sky Venture Labs service ecosystem"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
