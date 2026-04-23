import Image from "next/image"
import Link from "next/link"

export function AiAdoptionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto">
        {/* Header with split dividers */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 mb-10">
          <div className="border-t border-foreground/20 pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans uppercase leading-[1.1]">
              Practical AI
              <br />
              Adoption
            </h2>
          </div>
          <div className="border-t border-foreground/20 hidden md:block" />
        </div>

        {/* Value proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-base text-foreground/60 font-sans leading-relaxed mb-6">
              We help businesses embed AI into operations — not as a buzzword, but as a productivity multiplier.
              From workflow automation to intelligent reporting, our team designs and builds AI systems
              that fit your existing processes and deliver measurable output from day one.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Internal productivity tools and copilot integrations",
                "Automated operations and process orchestration",
                "Strengthened analytics and reporting pipelines",
                "Enhanced customer-facing workflows and AI-assisted experiences",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#A672F9] rounded-full mt-2 shrink-0" />
                  <span className="text-sm text-foreground/60 font-sans leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-foreground/30 text-foreground text-sm font-mono hover:bg-foreground/5 transition-colors"
            >
              Talk to our AI Team
            </Link>
          </div>
          <div className="hidden lg:block" />
        </div>

        {/* Single illustration */}
        <div className="relative w-full aspect-[1400/400] rounded-lg overflow-hidden">
          <Image
            src="/images/ai/ai-adoption-illustration.png"
            alt="AI Adoption - Internal productivity, Automate operations, Strengthen analytics, Enhance workflows"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
