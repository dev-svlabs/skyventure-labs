import { Navbar } from "@/components/navbar"
import { AboutHero } from "@/components/about-hero"
import { AboutUsSection } from "@/components/about-us-section"
import { AboutMilestonesSection } from "@/components/about-milestones-section"
import { AboutCoreValuesSection } from "@/components/about-core-values-section"
import { AboutAchievementsSection } from "@/components/about-achievements-section"
import { AboutLeadershipSection } from "@/components/about-leadership-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar activePage="About" />
      <AboutHero />
      <AboutUsSection />
      <AboutMilestonesSection />
      <AboutCoreValuesSection />
      <AboutAchievementsSection />
      <AboutLeadershipSection />
      <CTASection bgImage="/images/sky-venture-icon-color.png" />
      <Footer />
    </main>
  )
}
