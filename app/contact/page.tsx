import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Sky Venture Labs - Book a Consultation",
  description:
    "Get in touch with Sky Venture Labs. Book a consultation for software development, advisory, marketing, or fundraising readiness.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activePage="Contact" />

      <section className="relative pt-36 pb-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - heading and contact details */}
            <div>
              <div className="h-px bg-foreground/20 mb-8" />
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] font-sans uppercase mb-8">
                Let&apos;s Talk
              </h1>
              <p className="text-base text-foreground/60 font-sans leading-relaxed mb-12 max-w-md">
                Tell us about your project, your stage, and what you need. We&apos;ll review and come back within 24 hours with the right path forward.
              </p>

              <div className="flex flex-col gap-6">
                <div className="border-t border-foreground/20 pt-6">
                  <p className="text-xs text-foreground/40 font-mono uppercase tracking-wider mb-2">Sky Venture Labs</p>
                  <p className="text-base text-foreground/70 font-sans">support@skyventurelabs.com</p>
                </div>
                <div className="border-t border-foreground/20 pt-6">
                  <p className="text-xs text-foreground/40 font-mono uppercase tracking-wider mb-2">Sky Venture Studios</p>
                  <p className="text-base text-foreground/70 font-sans">sales@svstudios.co</p>
                </div>
                <div className="border-t border-foreground/20 pt-6">
                  <p className="text-xs text-foreground/40 font-mono uppercase tracking-wider mb-2">WhatsApp</p>
                  <p className="text-base text-foreground/70 font-sans">(+60) 14-387 9594</p>
                </div>
                <div className="border-t border-foreground/20 pt-6">
                  <p className="text-xs text-foreground/40 font-mono uppercase tracking-wider mb-3">Follow us</p>
                  <div className="flex gap-3">
                    <Link
                      href="https://www.linkedin.com/company/skyventurelabsofficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 text-foreground/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - contact form */}
            <div>
              <div className="h-px bg-foreground/20 mb-8" />
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-foreground/50 font-mono uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-base text-foreground font-sans placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-foreground/50 font-mono uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-base text-foreground font-sans placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-foreground/50 font-mono uppercase tracking-wider">Company (optional)</label>
                  <input
                    type="text"
                    name="company"
                    className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-base text-foreground font-sans placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30"
                    placeholder="Your company or project"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-foreground/50 font-mono uppercase tracking-wider">What do you need help with?</label>
                  <select
                    name="service"
                    className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-base text-foreground font-sans focus:outline-none focus:border-foreground/30 appearance-none"
                  >
                    <option value="">Select a service area</option>
                    <option value="dev-studios">Software Development (Dev Studios)</option>
                    <option value="marketing-events">Marketing & Events</option>
                    <option value="advisory">Product & GTM Advisory</option>
                    <option value="fundraising">Fundraising Readiness</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-foreground/50 font-mono uppercase tracking-wider">Tell us more</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-base text-foreground font-sans placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 resize-none"
                    placeholder="Describe your project, your stage, and what you're trying to achieve."
                  />
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 rounded-full bg-white text-[#0a0a12] text-base font-mono font-medium hover:bg-white/90 transition-colors"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-foreground/30 font-sans mt-3">
                    Confidential · No obligation · Average response under 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
