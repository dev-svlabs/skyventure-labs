import Image from "next/image"

export function AdvisoryWhoSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left column */}
          <div className="flex flex-col pr-0 lg:pr-16">
            <div className="h-px bg-foreground/20 mb-10" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans mb-32">
              WHO THIS IS FOR
            </h2>

            <div className="h-px bg-foreground/20 mb-10" />

            <p className="text-sm font-bold text-foreground font-sans mb-6">
              We Work Best With Teams That:
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "Are preparing for fundraising or exchange exposure",
                "Have real products or infrastructure in progress",
                "Understand that structure matters more than hype",
                "Want outcomes, not opinions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Office image */}
          <div className="mt-10 lg:mt-0">
            <div className="h-px bg-foreground/20 mb-4" />
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/advisory/office.png"
                alt="Open plan office workspace with teams collaborating"
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
