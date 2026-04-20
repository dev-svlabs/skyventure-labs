import { Navbar } from "@/components/navbar"
import { DevStudiosHero } from "@/components/dev-studios-hero"
import { DevStudiosTechStackSection } from "@/components/dev-studios-tech-stack-section"
import { DevStudiosWeBuildSection } from "@/components/dev-studios-we-build-section"
import { DevStudiosProcessSection } from "@/components/dev-studios-process-section"
import { DevStudiosQualityReliabilitySection } from "@/components/dev-studios-quality-reliability-section"
import { DevStudiosWhatChangesSection } from "@/components/dev-studios-what-changes-section"
import { DevStudiosBuildsSectionComponent } from "@/components/dev-studios-builds-section"
import { DevStudiosWebsitePackagesSection } from "@/components/dev-studios-website-packages-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function DevStudiosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activePage="Dev Studios" />
      <DevStudiosHero />
      <DevStudiosTechStackSection />
      <DevStudiosWeBuildSection />
      <DevStudiosProcessSection />
      <DevStudiosQualityReliabilitySection />
      <DevStudiosWhatChangesSection />
      <DevStudiosBuildsSectionComponent />
      <DevStudiosWebsitePackagesSection />
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
