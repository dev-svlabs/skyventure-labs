"use client"

import Image from "next/image"

export function FundraisingWhatChangesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Text */}
          <div className="flex flex-col justify-center">
            <div className="border-t border-foreground/20 pt-8 mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-sans text-foreground">
                WHAT CHANGES
                <br />
                AFTER WE{"'"}RE
                <br />
                INVOLVED
              </h2>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/60 shrink-0" />
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  Higher conversion in capital conversations due to clear narrative
                  + proof pack reduces {'"'}maybe later.{'"'}
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/60 shrink-0" />
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  Cleaner diligence due to fewer back-and-forth cycles, faster
                  confidence-building.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/60 shrink-0" />
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  Better capital fit due to right investors, right timing, right
                  structure.
                </p>
              </li>
            </ul>

            <div className="border-b border-foreground/20 mt-12" />
          </div>

          {/* Right side - Illustration */}
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-foreground/10">
            <Image
              src="/images/fundraising/what-changes-illustration.png"
              alt="Pre-readiness to post-readiness transformation showing investor network and project traction"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
