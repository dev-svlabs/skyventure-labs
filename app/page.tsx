import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { OperatingSystemSection } from "@/components/operating-system-section"
import { PartnersSection } from "@/components/partners-section"

import { OperatingModelSection } from "@/components/operating-model-section"
import { AiAdoptionSection } from "@/components/ai-adoption-section"
import { FeaturedInSection } from "@/components/featured-in-section"
import { ClientsFeedbackSection } from "@/components/clients-feedback-section"
import { WhatChangesSection } from "@/components/what-changes-section"
import { DeliveryProcessSection } from "@/components/delivery-process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar activePage="Home" />
      <HeroSection />
      <OperatingSystemSection />
      <PartnersSection />
      <OperatingModelSection />
      <AiAdoptionSection />
      <FeaturedInSection />
      <ClientsFeedbackSection />
      <WhatChangesSection />
      <DeliveryProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}
