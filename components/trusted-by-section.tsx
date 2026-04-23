"use client"

import { useState } from "react"
import Image from "next/image"

function VerticalBars() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-[400px] overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-[40px]"
          style={{
            left: `${i * 42}px`,
            background:
              "linear-gradient(to left, rgba(255,255,255,0.04), transparent)",
          }}
        />
      ))}
    </div>
  )
}

interface TrustedBySectionProps {
  heading?: string
  categories?: Record<
    string,
    { partners: { name: string; bold?: boolean }[] }
  >
}

const defaultCategories: Record<
  string,
  { partners: { name: string; bold?: boolean }[] }
> = {
  "Technology Partners": {
    partners: [
      { name: "AWS", bold: true },
      { name: "Microsoft Azure" },
      { name: "Google Cloud" },
      { name: "Vercel" },
      { name: "Stripe" },
      { name: "Twilio" },
    ],
  },
  "Media & Distribution": {
    partners: [
      { name: "Forbes", bold: true },
      { name: "Yahoo Finance" },
      { name: "Business Insider" },
    ],
  },
}

export function TrustedBySection({
  heading = "Trusted Across Technology,\nMarkets & Distribution",
  categories = defaultCategories,
}: TrustedBySectionProps) {
  const categoryKeys = Object.keys(categories)
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0])

  const currentPartners = categories[activeCategory].partners

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <VerticalBars />

      <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto">
        {/* Top lines */}
        <div className="flex items-center gap-6 mb-10">
          <div className="flex-1 h-px bg-foreground/20" />
          <div className="hidden lg:block w-[280px] h-px bg-foreground/20" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-bold tracking-tight text-foreground leading-[1.08] font-sans uppercase max-w-4xl mb-20 whitespace-pre-line">
          {heading}
        </h2>

        {/* Content area */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Category tabs */}
          <div className="flex flex-col gap-4 lg:min-w-[280px]">
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left text-base lg:text-lg font-sans transition-colors ${
                  activeCategory === cat
                    ? "text-foreground font-medium"
                    : "text-foreground/30 hover:text-foreground/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Middle: Partner list */}
          <div className="flex flex-col gap-4 lg:min-w-[200px]">
            {currentPartners.map((partner) => (
              <span
                key={partner.name}
                className={`text-base lg:text-lg font-sans ${
                  partner.bold
                    ? "text-foreground font-semibold"
                    : "text-foreground/35"
                }`}
              >
                {partner.name}
              </span>
            ))}
          </div>

          {/* Right: AWS logo */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src="/images/logos/aws.png"
                alt="AWS"
                fill
                className="object-contain brightness-75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
