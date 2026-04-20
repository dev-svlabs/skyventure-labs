import Image from "next/image"

export function AiAdoptionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto">
        {/* Header with split dividers */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 mb-16">
          <div className="border-t border-foreground/20 pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-sans uppercase leading-[1.1]">
              Practical AI
              <br />
              Adoption
            </h2>
          </div>
          <div className="border-t border-foreground/20 hidden md:block" />
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
