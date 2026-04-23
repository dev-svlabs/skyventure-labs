"use client"

import Image from "next/image"
import Link from "next/link"
import { FlippingStat } from "@/components/flipping-stat"

const fundraisingFlipStats = [
  { number: "12+", label: "Markets" },
  { number: "50+", label: "Founders Coached Through Raises" },
  { number: "40+", label: "Investor-Ready Teams Prepared" },
]

export function IncubationHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-10">
      {/* Hero banner with background image */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-16">
        <div className="relative w-full h-[500px] lg:h-[580px]">
          <Image
            src="/images/incubation-hero-bg.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
            aria-hidden="true"
          />
          {/* Dark gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Heading overlaid at bottom-left */}
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 max-w-4xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] font-sans">
              <span className="text-foreground/50">Fundraising Support</span>
              <br />
              <span className="text-foreground">for Startups and Scaleups</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content below banner - two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - description and CTAs */}
        <div className="max-w-lg">
          <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-4">
            Sky Venture Labs provides <strong className="text-foreground/80">advisory-led fundraising readiness</strong>: we fix
            structure, sharpen narrative, build proof, and prepare diligence
            — so your raise is run from a position of strength.
          </p>
          <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-8">
            This is <strong className="text-foreground/80">fundraising readiness</strong> built for real scrutiny. You lead your own raise — we make sure you&apos;re ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
            >
              Book a Readiness Diagnostic
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors flex items-center gap-2"
            >
              Operator Readiness Checklist
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right - auto-flipping stat */}
        <div className="flex flex-col items-end justify-start">
          <div className="w-full max-w-sm">
            <div className="h-px bg-foreground/20 mb-4" />
            <FlippingStat items={fundraisingFlipStats} size="default" />
          </div>
        </div>
      </div>
    </section>
  )
}
