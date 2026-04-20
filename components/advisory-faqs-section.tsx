const faqs = [
  {
    question: "Is this consulting?",
    answer: "No. This is operator-led advisory built to ship.",
  },
  {
    question: "Do you provide legal, financial, or investment advice?",
    answer: "No. We provide product, GTM, execution and operational advisory.",
  },
  {
    question: "How quickly can we start?",
    answer: "Typically within days, depending on availability.",
  },
  {
    question: "What does success look like?",
    answer: "Clear decisions, measurable KPIs, and an execution cadence that compounds.",
  },
]

export function AdvisoryFaqsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-16">
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight text-foreground leading-[1.05] font-sans">
              FAQS
            </h2>
          </div>
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
          </div>
        </div>

        {/* FAQ rows */}
        <div className="flex flex-col">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-t border-foreground/10 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-6">
                <h3 className="text-base font-bold text-foreground font-sans">
                  {faq.question}
                </h3>
                <p className="text-sm text-foreground/50 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
