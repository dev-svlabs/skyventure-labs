import Link from "next/link"

interface PillarStat {
  value: string
  label: string
}

interface Pillar {
  title: string
  description: string
  stats: PillarStat[]
  cta: string
  href: string
}

const pillars: Pillar[] = [
  {
    title: "Sky Venture Studios",
    description:
      "Technology and product development for businesses, apps, platforms, SaaS, and digital infrastructure.",
    stats: [
      { value: "1,000+", label: "Developer and designer network" },
      { value: "500+", label: "Companies supported" },
      { value: "4M+", label: "Users on live systems" },
    ],
    cta: "Explore Sky Venture Studios",
    href: "/dev-studios",
  },
  {
    title: "Marketing & Events",
    description:
      "Growth systems, brand positioning, distribution, and high-impact industry events.",
    stats: [
      { value: "2,500+", label: "KOLs & influencers" },
      { value: "30+", label: "Major global events" },
      { value: "12+", label: "Active global markets" },
    ],
    cta: "Explore Marketing & Events",
    href: "/marketing-events",
  },
  {
    title: "Advisory",
    description:
      "Business strategy, operating models, market entry, governance, and scale readiness.",
    stats: [
      { value: "500+", label: "Companies advised" },
      { value: "50+", label: "GTM structured" },
    ],
    cta: "Explore Advisory",
    href: "/advisory",
  },
  {
    title: "Fundraising",
    description:
      "Pitch narrative, investor materials, financial model, and diligence prep for founders running their own raise.",
    stats: [
      { value: "50+", label: "Founders coached through raises" },
      { value: "40+", label: "Investor-ready teams prepared" },
      { value: "20+", label: "Grant applications supported" },
    ],
    cta: "Explore Fundraising",
    href: "/fundraising",
  },
]

export function OperatingModelSection() {
  return (
    <section id="operating-model" className="relative py-24 bg-background">
      <div className="px-6 lg:px-10">
        {/* Section header with top rule */}
        <div className="flex gap-6">
          <div className="flex-1 border-t border-foreground/20 pt-8 pb-16">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] font-sans uppercase">
              Operating Model
            </h2>
            <p className="mt-4 text-base text-foreground/50 font-sans">
              Four Pillars. One Integrated System.
            </p>
          </div>
          <div className="hidden lg:block w-1/3 border-t border-foreground/20" />
        </div>

        {/* 2x2 pillar grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col">
              {/* Top rule */}
              <div className="border-t border-foreground/20 pt-8" />

              {/* Title chip */}
              <div className="mb-4">
                <span className="inline-block border border-foreground/30 px-3 py-1.5 text-base font-semibold text-foreground font-sans">
                  {pillar.title}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-foreground/50 font-sans leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Stat cards row */}
              <div className="flex gap-3 mb-8">
                {pillar.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 bg-foreground/5 border-l border-foreground/15 pl-5 py-5 pr-4 flex flex-col justify-end min-h-[110px]"
                  >
                    <span className="text-3xl lg:text-4xl font-bold text-foreground font-sans tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-sm text-foreground/50 font-sans mt-1.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div>
                <Link
                  href={pillar.href}
                  className="inline-block border border-foreground/30 px-4 py-2.5 text-sm font-mono text-foreground/80 hover:text-foreground hover:border-foreground/60 transition-colors tracking-wide"
                >
                  {pillar.cta}
                </Link>
              </div>

              {/* Bottom rule */}
              <div className="border-b border-foreground/20 mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
