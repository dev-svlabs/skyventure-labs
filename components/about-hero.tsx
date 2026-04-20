"use client"

import Link from "next/link"
import Image from "next/image"
import { FlippingStat } from "@/components/flipping-stat"

const aboutFlipStats = [
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
            background:
              "linear-gradient(to bottom, transparent 0%, #A672F9 30%, #A672F9 70%, transparent 100%)",
          }}
        />
      ))}
    </div>
  )
}

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      <VerticalLines />

      {/* Top horizontal line */}
      <div className="absolute top-[140px] left-6 lg:left-10 w-[42%] h-px bg-foreground/20 z-10" />

      <div className="relative z-20 flex flex-col flex-1 px-6 lg:px-10 pt-32">
        <div className="flex flex-col lg:flex-row lg:gap-12 flex-1">
          {/* Left column */}
          <div className="lg:w-[45%] flex flex-col pt-8">
            <h1 className="text-5xl lg:text-[4.25rem] xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-foreground font-sans text-balance">
              Global Venture Lab for Zero-to-One Execution
            </h1>

            {/* Purple separator */}
            <div className="mt-8 w-[85%] h-px bg-[#A672F9]" />

            {/* Companies stat - auto-flips */}
            <div className="mt-6">
              <FlippingStat items={aboutFlipStats} size="large" />
            </div>

            {/* Description */}
            <div className="mt-auto">
              <p className="text-base text-foreground/50 leading-relaxed max-w-[520px] font-sans mb-8">
                Founded in 2021, Sky Venture Labs helps founders and
                organizations go from idea to product and traction through
                digital transformation, AI adoption, software delivery, and
                go-to-market execution.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-wrap mb-10">
                <Link
                  href="#"
                  className="inline-flex items-center px-6 py-2.5 rounded-full border border-foreground/30 text-foreground text-base font-mono tracking-wide hover:bg-foreground/5 transition-colors"
                >
                  Talk to Us
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center px-6 py-2.5 rounded-full border border-foreground/30 text-foreground text-base font-mono tracking-wide hover:bg-foreground/5 transition-colors"
                >
                  {'Explore Our Services \u2192'}
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - SVL coin */}
          <div className="lg:w-[55%] flex items-start justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-[680px]">
              <div className="relative w-full rounded-[24px] border border-foreground/10 overflow-hidden bg-[#0c0b18]/60">
                <Image
                  src="/images/about/hero-svl-coin.png"
                  alt="Sky Venture Labs 3D coin"
                  width={680}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling partner logos */}
      <div className="relative z-20 overflow-hidden py-8 border-t border-foreground/10">
        <div className="flex animate-scroll gap-12 items-center">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12 items-center shrink-0">
              {[
                { name: "Binance Labs", src: "/images/logos/binance-labs.png", w: 140, h: 40 },
                { name: "Gate Ventures", src: "/images/logos/gate-ventures.png", w: 120, h: 40 },
                { name: "Bybit", src: "/images/logos/bybit.png", w: 90, h: 30 },
                { name: "AWS", src: "/images/logos/aws.png", w: 80, h: 35 },
                { name: "Binance", src: "/images/logos/binance.png", w: 120, h: 30 },
                { name: "KuCoin Ventures", src: "/images/logos/kucoin-ventures.png", w: 140, h: 40 },
              ].map((logo) => (
                <Image
                  key={`${setIndex}-${logo.name}`}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.w}
                  height={logo.h}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity shrink-0"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
