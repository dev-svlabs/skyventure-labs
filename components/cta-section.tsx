import Image from "next/image"
import Link from "next/link"

interface CTASectionProps {
  heading?: string
  subtitle?: string
  buttonText?: string
  bgImage?: string
}

export function CTASection({
  heading = "Build With a Partner That\nUnderstands the Stakes",
  subtitle = "Confidential \u00B7 No obligation \u00B7 Avg response < 24h",
  buttonText = "Start a Conversation",
  bgImage = "/images/sky-venture-icon.png",
}: CTASectionProps) {
  const headingLines = heading.split("\n")
  return (
    <section className="relative py-40 lg:py-56 overflow-hidden bg-background">
      {/* Rectangular gradient vertical bars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-[10%] bottom-[10%] w-[3px] rounded-full"
            style={{
              left: `${i * 3.45}%`,
              background: "linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 70%, rgba(255,255,255,0.0))",
            }}
          />
        ))}
      </div>

      {/* Blurred logo background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-contain blur-[30px] opacity-70"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 px-6 lg:px-10 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15] font-sans mb-5 text-balance">
          {headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-base text-foreground/50 leading-relaxed font-sans max-w-lg mx-auto mb-8">
          {subtitle}
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 rounded-full bg-white text-[#0a0a12] text-base font-mono font-medium hover:bg-white/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
