export function AdvisoryTrustedBuildersSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans">
              Trusted by Builders,
              <br />
              {'Operators & Institutions'}
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-px bg-foreground/20 mb-8 w-full" />
            <p className="text-sm text-foreground/50 font-sans">
              {'Trusted Media, Platforms & Event Ecosystems'}
            </p>
          </div>
        </div>

        {/* Capital & Venture Partners */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-0.5 h-6 bg-foreground/40" />
            <h3 className="text-base text-foreground/70 font-sans font-medium">
              {'Capital & Venture Partners'}
            </h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/advisory/capital-partners.svg"
            alt="Capital & Venture Partners"
            className="w-full max-w-5xl"
          />
        </div>

        {/* Institution & Ecosystem Partners */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-0.5 h-6 bg-foreground/40" />
            <h3 className="text-base text-foreground/70 font-sans font-medium">
              {'Institution & Ecosystem Partners'}
            </h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/advisory/institution-partners.svg"
            alt="Institution & Ecosystem Partners"
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
