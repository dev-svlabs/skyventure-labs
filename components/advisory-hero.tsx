"use client"

import Image from "next/image"
import Link from "next/link"
import { FlippingStat } from "@/components/flipping-stat"

const advisoryFlipStats = [
  { number: "15+", label: "Years Execution" },
  { number: "4M+", label: "Users Reached" },
  { number: "20,000+", label: "Business Owners Supported" },
  { number: "40+", label: "Founders Supported" },
]

export function AdvisoryHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-10">
      {/* Hero banner with background image */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-16">
        <div className="relative w-full h-[500px] lg:h-[580px]">
          <Image
            src="/images/advisory-hero-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          {/* Dark gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Heading overlaid at bottom-left */}
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] font-sans">
              <span className="text-foreground/40">{'Product & GTM Advisory'}</span>
              <br />
              <span className="text-foreground">for Digital Transformation</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content below banner - two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - description and CTAs */}
        <div className="max-w-lg">
          <p className="text-base text-foreground/60 font-sans leading-relaxed mb-4">
            We advise on{" "}
            <strong className="text-foreground/90 font-semibold">
              positioning, roadmap, business model design, pricing, and go-to-market planning
            </strong>{" "}
            - with practical governance, security-by-design thinking, and clear reporting standards.
          </p>
          <p className="text-base text-foreground/60 font-sans leading-relaxed mb-8">
            Built for{" "}
            <strong className="text-foreground/90 font-semibold">
              digital and AI transformation
            </strong>{" "}
            across Asia: execution-led, measurable, and fast.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
            >
              Talk to an Advisor
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors flex items-center gap-2"
            >
              Book a 30-min Diagnostic
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right - auto-flipping stat */}
        <div className="flex flex-col items-end justify-start">
          <div className="w-full max-w-sm">
            <div className="h-px bg-foreground/20 mb-4" />
            <FlippingStat items={advisoryFlipStats} size="default" />
          </div>
        </div>
      </div>
    </section>
  )
}
