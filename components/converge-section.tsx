export function ConvergeSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-10">
        {/* Top divider lines */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex-1 h-px bg-foreground/20" />
          <div className="w-[30%] h-px bg-foreground/20" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-normal tracking-tight text-foreground leading-[1.1]">
          {"Where Capital, Partners"}
          <br />
          {"& Markets Converge"}
        </h2>
      </div>
    </section>
  )
}
