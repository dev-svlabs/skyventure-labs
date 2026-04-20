import Image from "next/image"

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Global footprint", value: "12+ countries" },
  { label: "Delivery cadence", value: "4-8 week sprints" },
  { label: "Operating rhythm", value: "weekly operator reviews + quarterly support" },
  { label: "Execution leadership", value: "15+ years" },
  { label: "Users onboarded", value: "4M+" },
  { label: "Business owners supported", value: "20,000+" },
  { label: "Capital raised across projects collectively", value: "$100M+" },
]

export function AboutAchievementsSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:w-[38%]">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase mb-16">
              Achievements
            </h2>

            <div className="flex flex-col gap-2">
              {stats.map((stat, i) => (
                <p key={i} className="text-sm text-foreground/50 font-sans leading-relaxed">
                  <span className="font-bold text-foreground">{stat.label}:</span>{" "}
                  {stat.value}
                </p>
              ))}
            </div>

            <div className="h-px bg-[#A672F9] mt-8" />
          </div>

          {/* Right column - team photo */}
          <div className="lg:w-[62%] flex items-start">
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src="/images/about/achievements-team.png"
                alt="Sky Venture Labs team collaborating"
                width={900}
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
