export function ProcessSection() {
  const steps = [
    {
      label: "Diagnose",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="12" />
          <line x1="28.5" y1="28.5" x2="40" y2="40" />
        </svg>
      ),
    },
    {
      label: "Incubate",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 4h12v2l4 18a6 6 0 01-6 6H20a6 6 0 01-6-6L18 6V4z" />
          <circle cx="32" cy="12" r="3" fill="currentColor" />
          <circle cx="36" cy="8" r="2" fill="currentColor" />
          <line x1="16" y1="4" x2="32" y2="4" />
        </svg>
      ),
    },
    {
      label: "Capitalize",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 16l16-10 16 10v16l-16 10-16-10V16z" />
          <path d="M8 16l16 10 16-10" />
          <line x1="24" y1="26" x2="24" y2="42" />
        </svg>
      ),
    },
    {
      label: "Build",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M28 8l12 12-20 20-12-12L28 8z" />
          <circle cx="20" cy="28" r="4" />
          <path d="M32 12l4-4 4 4-4 4-4-4z" />
        </svg>
      ),
    },
    {
      label: "Launch",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 34l-4 8 8-4" />
          <path d="M6 42l6-6" />
          <path d="M20 28C20 28 30 18 36 12c2-2 6-6 6-6s-2 8-6 14c-4 6-10 12-10 12l-6-4z" />
          <circle cx="32" cy="16" r="3" />
        </svg>
      ),
    },
  ]

  const numberedItems = [
    { num: 1, text: "Diagnose" },
    { num: 2, text: "Incubate" },
    { num: 3, text: "Capitalize" },
    { num: 4, text: "Build" },
    { num: 5, text: "Launch" },
    { num: 6, text: "Scale" },
  ]

  return (
    <section className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* HOW WE WORK header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              HOW WE<br />WORK
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <p className="text-sm text-foreground/50 font-sans">
              Operator-Led. Outcome-Driven
            </p>
          </div>
        </div>

        {/* Numbered row */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {numberedItems.map((item) => (
            <div key={item.num} className="flex flex-col">
              <div className="h-px bg-foreground/20 mb-4" />
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-foreground/10 flex items-center justify-center text-xs font-sans text-foreground/80">{item.num}</span>
                <span className="text-xs text-foreground/40 font-sans">{item.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline container */}
        <div className="relative border border-foreground/10 rounded-lg overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, white 0px, white 1px, transparent 1px, transparent 80px), repeating-linear-gradient(to bottom, white 0px, white 1px, transparent 1px, transparent 80px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative flex items-stretch">
            {/* Left side icons */}
            <div className="hidden lg:flex flex-col items-center justify-between py-6 px-4 border-r border-foreground/10">
              {[
                <svg key="l1" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25">
                  <rect x="2" y="2" width="7" height="7" /><rect x="13" y="2" width="7" height="7" />
                  <rect x="2" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" />
                </svg>,
                <svg key="l2" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25">
                  <rect x="2" y="2" width="7" height="7" /><rect x="13" y="2" width="7" height="7" />
                  <rect x="2" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" />
                </svg>,
                <svg key="l3" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25">
                  <rect x="2" y="2" width="7" height="7" /><rect x="13" y="2" width="7" height="7" />
                  <rect x="2" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" />
                </svg>,
                <svg key="l4" width="22" height="22" viewBox="0 0 22 22" fill="currentColor" opacity="0.5">
                  <rect x="2" y="8" width="10" height="10" />
                </svg>,
                <svg key="l5" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25">
                  <rect x="2" y="2" width="7" height="7" /><rect x="13" y="2" width="7" height="7" />
                </svg>,
                <svg key="l6" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15">
                  <rect x="2" y="2" width="7" height="7" />
                </svg>,
              ].map((icon, i) => (
                <div key={i} className="text-foreground/30">{icon}</div>
              ))}
            </div>

            {/* Main pipeline */}
            <div className="flex-1 flex items-center justify-center py-10 lg:py-14 px-4 lg:px-10">
              <div className="flex items-center gap-3 lg:gap-5">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 lg:gap-5">
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-xs lg:text-sm text-foreground/50 font-sans tracking-wide">
                        {step.label}
                      </span>
                      <div className="w-24 h-28 lg:w-36 lg:h-40 rounded-lg border border-foreground/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-foreground/[0.06] to-transparent" />
                        <div className="relative text-foreground/60">{step.icon}</div>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="text-foreground/15 flex-shrink-0 mt-6">
                        <svg width="36" height="12" viewBox="0 0 36 12" fill="none" stroke="currentColor" strokeWidth="1">
                          <line x1="0" y1="6" x2="30" y2="6" />
                          <path d="M26 2l6 4-6 4" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="hidden lg:flex flex-col items-center justify-between py-6 px-4 border-l border-foreground/10">
              {[
                <svg key="r1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                  <circle cx="12" cy="12" r="8" /><line x1="12" y1="4" x2="12" y2="20" /><line x1="4" y1="12" x2="20" y2="12" />
                  <path d="M5 7a12 12 0 0014 0M5 17a12 12 0 0114 0" />
                </svg>,
                <svg key="r2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                  <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
                </svg>,
                <svg key="r3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                  <path d="M12 2l10 20H2z" />
                </svg>,
                <svg key="r4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                  <path d="M6 6h3v4H6zM15 6h3v4h-3zM6 14h3v4H6zM15 14h3v4h-3zM9 8h6M9 16h6M8 10v4M16 10v4" />
                </svg>,
                <svg key="r5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>,
              ].map((icon, i) => (
                <div key={i} className="text-foreground/30">{icon}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
