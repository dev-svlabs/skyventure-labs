import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Fundraising Readiness - Sky Venture Labs",
  description:
    "Advisory-led fundraising readiness for startups and scaleups. Pitch narrative, investor materials, financial model, and diligence prep.",
}
import { IncubationHero } from "@/components/incubation-hero"
import { FundraisingCapitalNetworkSection } from "@/components/fundraising-capital-network-section"
import { IncubationWhySection } from "@/components/incubation-why-section"
import { FundraisingReadinessSection } from "@/components/fundraising-readiness-section"
import { FundraisingWhatChangesSection } from "@/components/fundraising-what-changes-section"
import { FundraisingSprintSection } from "@/components/fundraising-sprint-section"
import { FundraisingStagesSection } from "@/components/fundraising-stages-section"
import { IncubationCasesSection } from "@/components/incubation-cases-section"
import { IncubationWhoSection } from "@/components/incubation-who-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function IncubationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activePage="Fundraising" />
      <IncubationHero />
      <FundraisingCapitalNetworkSection />
      <IncubationWhySection />
      <FundraisingReadinessSection />
      <FundraisingWhatChangesSection />
      <FundraisingSprintSection />
      <FundraisingStagesSection />
      <IncubationWhoSection />
      <IncubationCasesSection />
      <CTASection
        heading={"Ready to Run a Stronger Raise?"}
        subtitle={"Confidential · No obligation · Avg response < 24h"}
        buttonText="Book a Readiness Diagnostic"
        bgImage="/images/sky-venture-icon-color.png"
      />
      <Footer />
    </main>
  )
}
