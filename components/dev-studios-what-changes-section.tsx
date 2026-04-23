export function DevStudiosWhatChangesSection() {
  const stats = [
    {
      value: "70%",
      title: "Faster product delivery",
      description:
        "Reduction in time-to-market through clear architecture, focus sprints & execution discipline.",
    },
    {
      value: "35%",
      title: "Lower operational overhead",
      description:
        "Cost savings from better system design, automation & elimination of rework.",
    },
    {
      value: "3\u20135x",
      title: "Stronger user adoption post-GTM",
      description:
        "Higher early adoption driven by stable products, clearer positioning & coordinated go-to-market.",
    },
  ]

  return (
    <section className="bg-background px-6 lg:px-10 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mb-16">
          <div className="border-t border-foreground/20 pt-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight font-sans">
              WHAT CHANGES
              <br />
              AFTER WE{"'"}RE INVOLVED
            </h2>
            <p className="text-base text-foreground/50 font-sans mt-6">
              Across our technology and go-to-market engagements.
            </p>
          </div>
          <div className="border-t border-foreground/20 pt-8 hidden lg:block" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i}>
              {/* Top rule */}
              <div className="border-t border-foreground/20 pt-6" />

              {/* Stat card */}
              <div className="bg-[#111113] rounded-lg p-8 lg:p-10 mt-4 min-h-[260px] flex items-end">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight font-sans">
                  {stat.value}
                </span>
              </div>

              {/* Label + description */}
              <h3 className="text-lg font-semibold text-foreground font-sans mt-5">
                {stat.title}
              </h3>
              <p className="text-base text-foreground/50 font-sans leading-relaxed mt-3">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
