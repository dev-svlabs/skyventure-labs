import Image from "next/image"

const testimonials = [
  {
    image: "/images/feedback/jason-kim.png",
    role: "Founder & CEO",
    company: "B2B SaaS Company",
    name: "Jason Kim",
  },
  {
    image: "/images/feedback/carly-johnson.png",
    role: "Head of Product",
    company: "Fintech Infrastructure",
    name: "Carly Johnson",
  },
]

export function ClientsFeedbackSection() {
  return (
    <section className="px-6 lg:px-10 py-20 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8">
        {/* Left heading column */}
        <div>
          <div className="h-px bg-foreground/20 mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans text-foreground leading-tight">
            {"CLIENTS\u2019"}
            <br />
            FEEDBACK
          </h2>
          <div className="h-px bg-foreground/20 mt-6 mb-4" />
          <p className="text-base text-foreground/50 font-sans">
            Built. Scaled. Trusted.
          </p>
        </div>

        {/* Testimonial cards */}
        {testimonials.map((t, index) => (
          <div key={index} className="flex flex-col">
            <div className="hidden lg:block h-px bg-foreground/20 mb-6" />
            {/* Card with full-bleed image */}
            <div className="flex-1 rounded-lg overflow-hidden border border-foreground/10">
              <Image
                src={t.image}
                alt={`Testimonial from ${t.name}`}
                width={460}
                height={580}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Attribution */}
            <div className="mt-4">
              <p className="text-base text-foreground/40 font-mono">
                {t.role}
                <span className="mx-3">|</span>
                {t.company}
              </p>
              <p className="text-lg font-semibold text-foreground font-sans mt-1">
                {t.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
