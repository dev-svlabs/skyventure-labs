import React from "react"

const outcomes = [
  {
    label: "Reduction in failed or delayed listings",
    value: "30-50%",
  },
  {
    label: "Lower post-listing volatility vs category peers",
    value: "40%+",
  },
  {
    label: "Improvement in investor conversion rates",
    value: "2-3x",
  },
]

export function AdvisoryOutcomesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              ADVISORY<br />OUTCOMES
            </h2>
          </div>
          <div className="hidden lg:block w-[300px]">
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {outcomes.map((item) => (
            <div key={item.label} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <p className="text-sm text-foreground/70 font-sans leading-relaxed mb-4">
                {item.label}
              </p>
              <div className="bg-[#111118] rounded-lg flex items-center justify-center h-52">
                <span className="text-5xl lg:text-6xl font-mono font-light text-foreground tracking-tight">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-sm text-foreground/40 font-sans text-center">
          Stronger governance and unlock discipline post-launch
        </p>
      </div>
    </section>
  )
}
