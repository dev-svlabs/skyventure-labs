"use client"

import Link from "next/link"
import Image from "next/image"
import { FlippingStat } from "@/components/flipping-stat"

const homeFlipStats = [
  { number: "500+", label: "Companies Supported" },
  { number: "1,000+", label: "Developers & Designers" },
  { number: "12+", label: "Markets" },
]

function VerticalLines() {
  return (
    <div className="absolute left-0 top-[160px] bottom-0 w-[45%] overflow-hidden opacity-[0.12]">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-[3px]"
          style={{
            left: `${(i / 20) * 100}%`,
            background: "linear-gradient(to bottom, transparent 0%, #A672F9 30%, #A672F9 70%, transparent 100%)",
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Vertical line pattern behind left content */}
      <VerticalLines />

      {/* Top horizontal line accent */}
      <div className="absolute top-[140px] left-6 lg:left-10 w-[42%] h-px bg-foreground/20 z-10" />

      {/* Main content */}
      <div className="relative z-20 flex flex-col flex-1 px-6 lg:px-10 pt-32">
        <div className="flex flex-col lg:flex-row lg:gap-12 flex-1">
          {/* Left column */}
          <div className="lg:w-[45%] flex flex-col pt-8">
            {/* Heading */}
            <h1 className="text-5xl lg:text-[4.25rem] xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-foreground font-display text-balance">
              Engineering the Next Trillion Dollar Economy
            </h1>

            {/* Purple line separator */}
            <div className="mt-8 w-[85%] h-px bg-[#A672F9]" />

            {/* Companies Supported stat - auto-flips */}
            <div className="mt-6">
              <FlippingStat items={homeFlipStats} size="large" />
            </div>

            {/* Description */}
            <div className="mt-auto">
              <p className="text-base text-foreground/50 leading-relaxed max-w-[520px] font-sans mb-8">
                Sky Venture Labs is a global venture lab providing strategy, incubation, capital access, technology development, and market expansion for companies building the digital economy.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3 flex-wrap mb-10">
                <Link
                  href="#"
                  className="inline-flex items-center px-6 py-2.5 rounded-full border border-foreground/30 text-foreground text-base font-mono tracking-wide hover:bg-foreground/5 transition-colors"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center px-6 py-2.5 rounded-full border border-foreground/30 text-foreground text-base font-mono tracking-wide hover:bg-foreground/5 transition-colors"
                >
                  Explore Our Capabilities
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - 3D image card */}
          <div className="lg:w-[55%] flex items-start justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-[680px]">
              <div className="relative w-full rounded-[24px] border border-foreground/10 overflow-hidden bg-[#0c0b18]/60">
                <Image
                  src="/images/hero-3d.png"
                  alt="Sky Venture Labs - Engineering the digital economy"
                  width={680}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom right tagline */}
        <div className="flex justify-end pb-10 mt-8">
          <div className="text-right max-w-lg">
            <p className="text-xs lg:text-sm text-foreground/40 font-mono uppercase tracking-[0.2em] leading-relaxed">
              WE WORK WITH FOUNDERS, OPERATORS, AND INSTITUTIONS
            </p>
            <p className="text-xs lg:text-sm text-foreground/40 font-mono uppercase tracking-[0.2em] leading-relaxed">
              <span className="border-b border-foreground/30 pb-1">
                TO DESIGN, BUILD, AND SCALE REAL BUSINESSES.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
