import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "About Sky Venture Labs - Full-Cycle Venture Partner",
  description:
    "Founded in 2021, Sky Venture Labs helps founders and organisations go from idea to product and traction through software development, advisory, and go-to-market execution.",
}
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
