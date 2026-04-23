import Image from "next/image"

const changes = [
  {
    title: "Faster product delivery",
    description:
      "Reduction in time-to-market through clear architecture, focus sprints & execution discipline.",
    stat: "70%",
  },
  {
    title: "Lower operational overhead",
    description:
      "Cost savings from better system design, automation & elimination of rework.",
    stat: "35%",
  },
  {
    title: "Stronger user adoption post-GTM",
    description:
      "Higher early adoption driven by stable products, clearer positioning & coordinated go-to-market.",
    stat: "3\u20135x",
  },
]

export function WhatChangesSection() {
  return (
    <section className="px-6 lg:px-10 py-24 max-w-[1400px] mx-auto">
      {/* Header with split divider */}
      <div className="flex items-start gap-8 mb-16">
        <div className="flex-1">
          <div className="h-px bg-foreground/20 mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans leading-tight">
            WHAT CHANGES
            <br />
            AFTER WE{"\u2019"}RE INVOLVED
          </h2>
          <p className="text-foreground/50 text-base mt-4 font-sans">
            Across our technology, growth, and advisory engagements:
          </p>
        </div>
        <div className="hidden md:block w-1/3">
          <div className="h-px bg-foreground/20" />
        </div>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {changes.map((item) => (
          <div key={item.title} className="flex flex-col">
            <div className="h-px bg-foreground/20 mb-6" />
            <h3 className="text-lg font-semibold text-foreground font-sans mb-3">
              {item.title}
            </h3>
            <p className="text-base text-foreground/50 font-sans mb-6 leading-relaxed">
              {item.description}
            </p>
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-8 flex items-end h-48">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-mono tracking-tight">
                {item.stat}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
