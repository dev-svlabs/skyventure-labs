import Image from "next/image"
import Link from "next/link"

const adviseCards = [
  { title: "Tokenomics Design", desc: "Structuring token models that withstand unlock pressure, maintain price stability, and align incentives across stakeholders." },
  { title: "Exchange Strategy", desc: "Navigating listing timelines, market maker selection, and post-listing liquidity to protect valuation from day one." },
  { title: "Governance Frameworks", desc: "Building decision-making structures that scale with the protocol without creating centralization risk." },
  { title: "GTM Readiness", desc: "Ensuring product-market fit, narrative positioning, and launch sequencing are aligned before capital deployment." },
  { title: "Fundraising Architecture", desc: "Designing raise structures, investor alignment, and valuation frameworks that attract institutional capital." },
  { title: "Regulatory Navigation", desc: "Mapping jurisdictional requirements and compliance frameworks to reduce legal exposure across markets." },
  { title: "Narrative Positioning", desc: "Crafting defensible market narratives that differentiate from competitors and resonate with target audiences." },
  { title: "Post-Listing Operations", desc: "Managing community sentiment, token buybacks, and ecosystem incentives after public market exposure." },
]

export function AdvisoryDecisionsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - text content */}
          <div className="flex flex-col">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight text-foreground leading-[1.1] font-sans mb-12">
              Built for High-<br />
              Consequence<br />
              Decisions
            </h2>

            <div className="h-px bg-foreground/20 mb-8" />

            <div className="mb-8">
              <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-6">
                Across <strong className="text-foreground">500+ advisory engagements</strong>, the same failure patterns repeat:
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "projects raise before they are structurally ready",
                  "token models collapse under unlock pressure",
                  "listings damage credibility instead of enhancing it",
                  "governance breaks at scale",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/50 font-sans">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/60 font-sans leading-relaxed">
                We exist to <strong className="text-foreground">intervene before these mistakes become irreversible.</strong>
              </p>
            </div>

            <div className="h-px bg-foreground/20 mb-8" />

            <div className="mb-8">
              <p className="text-sm text-foreground/60 font-sans leading-relaxed mb-1">
                This is not opinion-based advisory.
              </p>
              <p className="text-sm text-foreground/60 font-sans leading-relaxed">
                This is <strong className="text-foreground">decision-grade advisory tied to execution and markets.</strong>
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-mono text-foreground hover:bg-foreground/5 transition-colors w-fit"
            >
              Launch your Web3 Project
            </Link>
          </div>

          {/* Right column - purple gradient card grid */}
          <div className="relative min-h-[700px] rounded-2xl overflow-hidden">
            {/* Purple gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(160deg, #1a0a2e 0%, #2d1052 20%, #6b21a8 45%, #a855f7 60%, #c084fc 70%, #d946ef 85%, #e879f9 100%)",
              }}
            />

            {/* Card grid */}
            <div className="relative z-10 p-6 grid grid-cols-3 gap-4 h-full auto-rows-min">
              {adviseCards.map((card, i) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-white/15 p-5 flex flex-col gap-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(16px)",
                    marginTop: i % 3 === 1 ? "40px" : i % 3 === 2 ? "0px" : "20px",
                  }}
                >
                  {/* Top row with circle and optional MEXC */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5" />
                    {i % 2 === 1 && (
                      <Image
                        src="/images/mexc-logo.png"
                        alt="MEXC"
                        width={48}
                        height={20}
                        className="opacity-60"
                      />
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-foreground font-sans">
                    {card.title}
                  </h3>
                  <p className="text-xs text-foreground/60 font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
