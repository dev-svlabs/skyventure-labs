import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-background">
      {/* Decorative stripe rows */}
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto pt-16 pb-8 flex flex-col gap-6">
        {/* First row - slim lines */}
        <div className="flex justify-between h-28">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={`r1-${i}`} className="w-px bg-foreground/25 h-full" />
          ))}
        </div>
        {/* Second row - thicker lines */}
        <div className="flex justify-between h-28">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={`r2-${i}`} className="w-[2px] bg-foreground/40 h-full" />
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-5">
            <div className="border-t border-foreground/20 pt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/svl-logo-footer.svg"
                alt="Sky Venture Labs"
                className="h-16 lg:h-20 w-auto"
              />
            </div>
            <p className="text-base font-semibold text-foreground font-sans">
              Full-cycle venture partner — build, advise, scale.
            </p>
            <p className="text-base text-foreground/50 font-sans leading-relaxed">
              Global venture partner delivering technology development, market expansion, advisory, and fundraising readiness.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <div className="border-t border-foreground/20 pt-6">
              <h4 className="text-base font-semibold text-foreground font-sans">Services</h4>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Dev Studios", href: "/dev-studios" },
                { label: "Marketing & Events", href: "/marketing-events" },
                { label: "Advisory", href: "/advisory" },
                { label: "Fundraising Readiness", href: "/fundraising" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-foreground/50 hover:text-foreground/70 transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sky Venture Labs Contact */}
          <div className="flex flex-col gap-4">
            <div className="border-t border-foreground/20 pt-6">
              <h4 className="text-base font-semibold text-foreground font-sans">Sky Venture Labs</h4>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base text-foreground/50 font-sans">
                Email: support@skyventurelabs.com
              </p>
              <p className="text-base text-foreground/50 font-sans">
                Whatsapp: (+60) 14-387 9594
              </p>
              <div className="flex gap-3 mt-1">
                <Link
                  href="https://www.linkedin.com/company/skyventurelabsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-4">
            <div className="border-t border-foreground/20 pt-6">
              <h4 className="text-base font-semibold text-foreground font-sans">Legal</h4>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-foreground/50 hover:text-foreground/70 transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto pb-10 pt-8">
        <div className="border-t border-foreground/10 pt-6">
          <p className="text-sm text-foreground/30 text-center font-sans leading-relaxed max-w-5xl mx-auto">
            Sky Venture Labs provides advisory and software development services. We do not provide legal, financial, investment, tax, or regulatory advice. We do not raise capital on behalf of clients, broker securities, solicit investments, or act as a financial intermediary. All information on this site is for general educational and informational purposes only. Engage qualified professionals before making any business, legal, or financial decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
