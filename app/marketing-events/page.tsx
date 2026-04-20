import { Navbar } from "@/components/navbar"
import { MarketingHero } from "@/components/marketing-hero"
import { MarketingTrustedMediaSection } from "@/components/marketing-trusted-media-section"
import { MarketingEndToEndSection } from "@/components/marketing-end-to-end-section"
import { MarketingGrowthSystemsSection } from "@/components/marketing-growth-systems-section"
import { MarketingEventsLeverageSection } from "@/components/marketing-events-leverage-section"
import { MarketingBuiltForTeamsSection } from "@/components/marketing-built-for-teams-section"
import { MarketingWhatChangesSection } from "@/components/marketing-what-changes-section"
import { MarketingDeliveryProcessSection } from "@/components/marketing-delivery-process-section"
import { MarketingMeasurementSection } from "@/components/marketing-measurement-section"
import { MarketingWhySVLSection } from "@/components/marketing-why-svl-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activePage="Marketing & Events" />
      <MarketingHero />
      <MarketingTrustedMediaSection />
      <MarketingEndToEndSection />
      <MarketingGrowthSystemsSection />
      <MarketingEventsLeverageSection />
      <MarketingBuiltForTeamsSection />
      <MarketingWhatChangesSection />
      <MarketingDeliveryProcessSection />
      <MarketingMeasurementSection />
      <MarketingWhySVLSection />
      <CTASection
        heading={"Build With a Partner That\nUnderstands the Stakes"}
        subtitle={"Confidential \u00B7 No obligation \u00B7 Avg response < 24h"}
        buttonText="Start a Conversation"
        bgImage="/images/sky-venture-icon-color.png"
      />
      <Footer />
    </main>
  )
}
