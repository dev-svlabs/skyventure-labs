import { Monitor, Smartphone, Code2, Boxes, Sparkles, CloudUpload, ShieldCheck } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    description: "SaaS, dashboards, admin systems, portals, internal tools.",
    icon: Monitor,
  },
  {
    title: "Mobile Apps",
    description: "iOS/Android (native + cross-platform), performance-first UX.",
    icon: Smartphone,
  },
  {
    title: "Backend & APIs",
    description: "Microservices, high-scale APIs, integrations, event-driven systems.",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure-as-code, CI/CD, monitoring, scalability, optimization.",
    icon: Boxes,
  },
  {
    title: "Data & AI Systems",
    description: "Analytics pipelines, automation, dashboards, ML-enabled features.",
    icon: Sparkles,
  },
  {
    title: "Enterprise Systems",
    description: "Workflows, CRM/ERP integrations, SSO, permissions, audit trails.",
    icon: CloudUpload,
  },
  {
    title: "Security & Reliability",
    description: "OWASP-aligned practices, vulnerability scanning, hardening.",
    icon: ShieldCheck,
  },
]

export function DevStudiosWeBuildSection() {
  return (
    <section className="bg-background py-24 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 border-t border-foreground/20 pt-6">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-display uppercase tracking-tight">
              We Build Everything
            </h2>
          </div>
          <div className="border-t border-foreground/20 pt-6" />
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-background flex flex-col">
                {/* Text area */}
                <div className="border-t border-foreground/20 pt-5 px-1 pb-4">
                  <h3 className="text-base font-semibold text-foreground font-mono mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-foreground/50 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Icon illustration area */}
                <div className="relative h-56 bg-[#0a0a0f] overflow-hidden">
                  {/* Vertical stripe pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, transparent, transparent 8px, currentColor 8px, currentColor 9px)",
                    }}
                  />
                  {/* Horizontal lines */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)",
                    }}
                  />
                  {/* Icon */}
                  <div className="absolute top-10 left-10">
                    <div className="w-20 h-20 rounded-2xl border border-foreground/20 flex items-center justify-center bg-[#111118]">
                      <Icon className="w-9 h-9 text-foreground/70" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Tagline card */}
          <div className="bg-background flex items-center px-6 py-12">
            <p className="text-2xl lg:text-3xl text-foreground font-sans leading-snug italic">
              {"If it\u2019s software, we can build and support it."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
