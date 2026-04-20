import Link from "next/link"
import Image from "next/image"

const leaders = [
  {
    name: "Sky Wee",
    title: "Co-Founder & Managing Partner",
    stats: [
      "$45M+ capital facilitated",
      "50+ exchange listings supported",
      "4M+ combined distribution reach",
      "Active across Asia, Europe, and North America",
    ],
    photo: "/images/about/sky-wee.png",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Allen Tan Chee Hoe",
    title: "Co-Founder & Managing Director",
    stats: [
      "15+ years building scalable systems",
      "4M+ users onboarded",
      "20,000+ business owners supported",
      "$100M+ raised across projects collectively",
    ],
    photo: "/images/about/allen-tan.png",
    xUrl: "#",
    linkedinUrl: "#",
  },
]

export function AboutLeadershipSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - title */}
          <div className="lg:w-[30%]">
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase mb-8">
              Leadership<br />Team
            </h2>
            <p className="text-sm text-foreground/50 font-sans">
              Operator-Led Leadership
            </p>
          </div>

          {/* Right - leader cards */}
          <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((leader, i) => (
              <div key={i} className="flex flex-col">
                {/* Card with photo on white bg + stats overlay */}
                <div className="relative bg-white rounded-lg overflow-hidden min-h-[420px] flex flex-col justify-end">
                  {/* Photo on white background */}
                  <div className="absolute inset-0">
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                    {/* Gradient overlay for stats readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/50 to-transparent to-60%" />
                  </div>

                  {/* Stats at bottom of card */}
                  <ul className="relative z-10 flex flex-col gap-2 p-6">
                    {leader.stats.map((stat, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full mt-1.5 shrink-0" />
                        <span className="text-sm text-foreground/70 font-sans">{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Name and title below card */}
                <div className="mt-4">
                  <p className="text-xs text-foreground/50 font-mono uppercase tracking-wider mb-1">
                    {leader.title}
                  </p>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-foreground font-sans">
                      {leader.name}
                    </h3>
                    {/* Social icons */}
                    <Link
                      href={leader.xUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                      aria-label={`${leader.name} on X`}
                    >
                      <svg className="w-3.5 h-3.5 text-foreground/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </Link>
                    <Link
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <svg className="w-3.5 h-3.5 text-foreground/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
