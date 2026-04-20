"use client"

import Image from "next/image"
import Link from "next/link"
import { FlippingStat } from "@/components/flipping-stat"

const marketingFlipStats = [
  { number: "500+", label: "Companies Supported" },
  { number: "12+", label: "Markets" },
  { number: "2,500+", label: "Distribution Partners" },
  { number: "30+", label: "Major Events Supported" },
  { number: "50+", label: "Launches Supported" },
]

export function MarketingHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-10">
      {/* Hero banner with background image */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-16">
        <div className="relative w-full h-[500px] lg:h-[580px]">
          <Image
            src="/images/marketing-hero-bg.png"
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
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] font-sans">
              <span className="text-foreground/40">{'Global Growth Marketing & Events'}</span>{" "}
              <span className="text-foreground">for Market Expansion</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content below banner - two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - description and CTAs */}
        <div className="max-w-lg">
          <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-4">
            Sky Venture Labs designs marketing and event systems that
            convert attention into adoption, liquidity, and long-term market
            presence.
          </p>
          <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-2">
            {"We don't run campaigns."}
          </p>
          <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-8">
            We build distribution infrastructure - online and on-ground.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="#"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
            >
              Get a Growth Plan
            </Link>
            <Link
              href="#"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors flex items-center gap-2"
            >
              Request Media & Events Kit
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right - auto-flipping stat */}
        <div className="flex flex-col items-end justify-start">
          <div className="w-full max-w-sm">
            <div className="h-px bg-foreground/20 mb-4" />
            <FlippingStat items={marketingFlipStats} size="default" />
          </div>
        </div>
      </div>
    </section>
  )
}
