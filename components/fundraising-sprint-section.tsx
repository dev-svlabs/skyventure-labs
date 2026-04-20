"use client"

import Image from "next/image"

export function FundraisingSprintSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="border-t border-foreground/20 pt-8 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-sans text-foreground">
            4-8 WEEK
            <br />
            READINESS SPRINT
          </h2>
        </div>

        {/* Sprint process illustration */}
        <div className="relative w-full overflow-hidden rounded-lg border border-foreground/10">
          <Image
            src="/images/fundraising/readiness-sprint-process.png"
            alt="Incubation to fundraising process: Diagnose, Build Proof, Package, Route"
            width={1400}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
