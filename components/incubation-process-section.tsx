import Image from "next/image"

const phases = [
  {
    title: "Phase 1 - Incubation & Readiness",
    desc: "Structure, narrative, governance, materials, and execution alignment.",
    duration: "2-4 weeks",
  },
  {
    title: "Phase 2 - Pipeline Activation",
    desc: "Investor and grant routing, meetings, and feedback loops.",
    duration: "2-4 weeks",
  },
  {
    title: "Phase 3 - Momentum & Signaling",
    desc: "Lead identification, allocation shaping, and credibility reinforcement.",
    duration: "2-3 weeks",
  },
  {
    title: "Phase 4 - Close & Transition",
    desc: "Final allocations, close execution, and post-raise handover.",
    duration: "1-2 weeks",
  },
]

const steps = [
  { label: "BUILD", color: "border-foreground/30" },
  { label: "TEST", color: "border-purple-500" },
  { label: "REFINE", color: "border-purple-400" },
  { label: "MVP", color: "border-green-500 border-dashed" },
]

export function IncubationProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              {"INCUBATION \u2192"}<br />FUNDRAISING PROCESS
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <p className="text-sm text-foreground/50 font-sans">
              A Disciplined Capital System
            </p>
          </div>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {phases.map((phase) => (
            <div key={phase.title}>
              <div className="h-px bg-foreground/20 mb-4" />
              <h3 className="text-sm font-bold text-foreground font-sans mb-2">
                {phase.title}
              </h3>
              <p className="text-xs text-foreground/40 font-sans leading-relaxed mb-4">
                {phase.desc}
              </p>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/50">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-xs text-foreground/50 font-mono">{phase.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline container */}
        <div className="relative border border-foreground/10 rounded-lg overflow-hidden mb-6">
          {/* Grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div className="relative p-8">
            {/* Title bar */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="w-5 h-4 border border-foreground/20 rounded-sm" />
                  <div className="w-5 h-4 border border-foreground/20 rounded-sm" />
                </div>
                <div className="w-5 h-4 border border-foreground/20 rounded-sm" />
              </div>
              <div className="border-b border-foreground/30 pb-1">
                <span className="text-sm font-mono text-foreground/80 tracking-wide">
                  {"INCUBATION \u2192 FUNDRAISING PROCESS"}
                </span>
              </div>
            </div>

            {/* Steps row */}
            <div className="flex items-center justify-center gap-6 lg:gap-10 mb-6">
              {/* Left decorative squares */}
              <div className="hidden lg:flex flex-col gap-2">
                <div className="flex gap-1">
                  <div className="w-5 h-5 border border-foreground/20 rounded-sm" />
                  <div className="w-5 h-5 border border-foreground/20 rounded-sm" />
                </div>
                <div className="flex gap-1">
                  <div className="w-5 h-5 border border-foreground/20 rounded-sm" />
                  <div className="w-5 h-5 border border-foreground/20 rounded-sm" />
                </div>
              </div>

              <div className="hidden lg:block w-5 h-5 bg-foreground/80 rounded-sm" />

              {/* Circle icons */}
              <div className="flex items-center gap-5 lg:gap-8">
                {steps.map((step) => (
                  <div key={step.label} className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 ${step.color} flex items-center justify-center`}>
                      {step.label === "BUILD" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/60">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      )}
                      {step.label === "TEST" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          <line x1="2" y1="2" x2="8" y2="8" />
                        </svg>
                      )}
                      {step.label === "REFINE" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-300">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {step.label === "MVP" && (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-foreground/50 tracking-widest">{step.label}</span>
                  </div>
                ))}
              </div>

              {/* Right side logos */}
              <div className="hidden lg:flex items-center gap-3 ml-auto">
                <Image
                  src="/images/sky-venture-icon.png"
                  alt=""
                  width={70}
                  height={70}
                  className="opacity-20"
                  aria-hidden="true"
                />
                <Image
                  src="/images/sky-venture-icon.png"
                  alt=""
                  width={70}
                  height={70}
                  className="opacity-15"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* S A B row */}
            <div className="flex items-center gap-4 mt-4">
              <div className="hidden lg:flex flex-col gap-2">
                <div className="w-5 h-5 border border-foreground/20 rounded-sm" />
              </div>
              <div className="flex items-center gap-3">
                {["S", "A", "B"].map((letter) => (
                  <div
                    key={letter}
                    className="w-10 h-10 rounded border border-foreground/20 flex items-center justify-center text-sm font-mono text-foreground/50"
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm font-sans text-foreground/50">
          <span className="font-bold text-foreground">Typical Duration: 6-10 weeks</span>{" "}
          from incubation start to close.
        </p>
      </div>
    </section>
  )
}
