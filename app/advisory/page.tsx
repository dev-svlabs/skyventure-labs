import { Navbar } from "@/components/navbar"
import { AdvisoryHero } from "@/components/advisory-hero"
import { AdvisoryTrustedBuildersSection } from "@/components/advisory-trusted-builders-section"
import { AdvisoryInflectionSection } from "@/components/advisory-inflection-section"
import { AdvisoryOperatorLedSection } from "@/components/advisory-operator-led-section"
import { AdvisorySprintSection } from "@/components/advisory-sprint-section"
import { AdvisoryDeliveryOptionsSection } from "@/components/advisory-delivery-options-section"
import { AdvisoryDeliverablesSection } from "@/components/advisory-deliverables-section"
import { AdvisoryWhatChangesSection } from "@/components/advisory-what-changes-section"
import { AdvisoryWhySvlSection } from "@/components/advisory-why-svl-section"
import { AdvisoryFaqsSection } from "@/components/advisory-faqs-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product & GTM Advisory - Sky Venture Labs",
  description:
    "Operator-led advisory on positioning, roadmap, business model design, pricing, and go-to-market planning for digital and AI transformation.",
}

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar activePage="Advisory" />
      <AdvisoryHero />
      <AdvisoryTrustedBuildersSection />
      <AdvisoryInflectionSection />
      <AdvisoryOperatorLedSection />
      <AdvisorySprintSection />
      <AdvisoryDeliveryOptionsSection />
      <AdvisoryDeliverablesSection />
      <AdvisoryWhatChangesSection />
      <AdvisoryWhySvlSection />
      <AdvisoryFaqsSection />
      <CTASection
        heading={"Build With a Partner That\nUnderstands the Stakes"}
        subtitle={"Confidential \u00B7 No obligation \u00B7 Avg response < 24h"}
        buttonText="Book a Consultation"
        bgImage="/images/sky-venture-icon-color.png"
      />
      <Footer />
    </main>
  )
}
