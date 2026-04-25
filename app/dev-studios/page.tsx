import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Software Development Studio - Sky Venture Labs",
  description:
    "Production-grade software development across web, mobile, cloud, and enterprise systems. From MVPs to mission-critical platforms.",
}
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
        heading = {"Build the product.\nWin the market"}
        subtitle={"Tell us what you're building, we'll respond with a plan, timeline, and \nteam setup."}
        buttonText="Get a Quote"
        bgImage="/images/sky-venture-icon-color.png"
      />
      <Footer />
    </main>
  )
}
