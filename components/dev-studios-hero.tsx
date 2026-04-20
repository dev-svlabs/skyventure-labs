"use client"

import Image from "next/image"
import Link from "next/link"
import { FlippingStat } from "@/components/flipping-stat"

const devFlipStats = [
  { number: "1,000+", label: "Developers & Designers" },
  { number: "35+", label: "Production Technologies" },
  { number: "4M+", label: "Users on Live Systems" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "100+", label: "Releases Shipped" },
]

export function DevStudiosHero() {
  return (
    <section className="relative pt-24 pb-20 px-6 lg:px-10">
      {/* Hero banner with background image */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-foreground/10 mb-16">
        <div className="relative w-full h-[500px] lg:h-[580px]">
          <Image
            src="/images/dev-studios-hero-bg.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
            aria-hidden="true"
          />
          {/* Dark gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Heading overlaid at bottom-left */}
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] font-sans">
              <span className="text-foreground/40">World-Class Software Development</span>
              <br />
              <span className="text-foreground">{'for Web, Mobile & AI'}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content below banner - two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - description and CTAs */}
        <div className="max-w-lg">
          <p className="text-base text-foreground/60 font-sans leading-relaxed mb-4">
            Sky Venture Studios builds{" "}
            <strong className="text-foreground/90 font-semibold">
              production-grade software
            </strong>{" "}
            across web, mobile, cloud, data, and enterprise systems - from MVPs
            to mission-critical platforms.
          </p>
          <p className="text-base text-foreground/60 font-sans leading-relaxed mb-8">
            We deliver systems that{" "}
            <strong className="text-foreground/90 font-semibold">
              scale, perform, and stay maintainable.
            </strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="#"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="#"
              className="px-5 py-2.5 text-sm font-mono rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors flex items-center gap-2"
            >
              Talk to the Tech Team
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right - auto-flipping stat */}
        <div className="flex flex-col items-end justify-start">
          <div className="w-full max-w-sm">
            <div className="h-px bg-foreground/20 mb-4" />
            <FlippingStat items={devFlipStats} size="default" />
          </div>
        </div>
      </div>
    </section>
  )
}
