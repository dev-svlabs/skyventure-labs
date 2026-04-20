import { Box, CloudUpload, Users, Database } from "lucide-react"

const failurePatterns = [
  {
    description: "products that work in demos but break under real users",
    icon: Box,
  },
  {
    description: "platforms built without scalability or observability",
    icon: CloudUpload,
  },
  {
    description: "teams shipping features without system ownership",
    icon: Users,
  },
  {
    description: "short-term builds that block long-term growth",
    icon: Database,
  },
]

export function DevStudiosProductionSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex gap-8 mb-16">
          <div className="flex-1">
            <div className="w-full h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              Built for Production,
              <br />
              Not Prototypes
            </h2>
          </div>
          <div className="hidden lg:block w-[300px] flex-shrink-0">
            <div className="w-full h-px bg-foreground/20" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-foreground/50 font-sans leading-relaxed mb-6">
          Across 500+ delivery engagements, we see the same failure patterns
        </p>

        {/* 4-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {failurePatterns.map((pattern, index) => (
            <div key={index}>
              <div className="w-full h-px bg-foreground/20 mb-4" />
              <p className="text-sm font-semibold text-foreground font-sans leading-relaxed mb-4 min-h-[48px]">
                {pattern.description}
              </p>
              {/* Grid illustration with icon */}
              <div className="relative w-full aspect-square bg-foreground/[0.03] border border-foreground/10 rounded-sm overflow-hidden">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Vertical stripes */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, hsl(var(--foreground) / 0.15) 0px, hsl(var(--foreground) / 0.15) 1px, transparent 1px, transparent 12px)",
                  }}
                />
                {/* Icon centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 border border-foreground/20">
                    <pattern.icon
                      className="w-8 h-8 text-foreground/70"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-sm text-foreground/50 font-sans leading-relaxed">
          Sky Venture Studios exists to deliver{" "}
          <span className="font-semibold text-foreground">
            technology systems that remain stable, secure, and evolvable over
            time.
          </span>
        </p>
      </div>
    </section>
  )
}
