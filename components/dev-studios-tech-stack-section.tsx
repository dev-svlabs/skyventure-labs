import Image from "next/image"

type TechItem = {
  name: string
  image?: string
  displayName?: string
}

const categories: { label: string; techs: TechItem[] }[] = [
  {
    label: "Frontend",
    techs: [
      { name: "React", displayName: "React" },
      { name: "Next.js", image: "/images/tech/nextjs.png" },
      { name: "Vue.js", image: "/images/tech/vuejs.png" },
      { name: "TypeScript", image: "/images/tech/typescript.png" },
      { name: "Angular", image: "/images/tech/angular.png" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", displayName: "Node.js" },
      { name: "Go", displayName: "Go" },
      { name: "Java", displayName: "Java" },
      { name: ".NET", displayName: ".NET" },
      { name: "Python", displayName: "Python" },
    ],
  },
  {
    label: "Mobile",
    techs: [
      { name: "React Native", image: "/images/tech/react-native.png" },
      { name: "Swift", displayName: "Swift" },
      { name: "Kotlin", displayName: "Kotlin" },
      { name: "Flutter", displayName: "Flutter" },
    ],
  },
  {
    label: "Data",
    techs: [
      { name: "PostgreSQL", image: "/images/tech/postgresql.png" },
      { name: "MongoDB", displayName: "MongoDB" },
      { name: "Redis", image: "/images/tech/redis.png" },
      { name: "Kafka", image: "/images/tech/kafka.png" },
      { name: "MySQL", displayName: "MySQL" },
    ],
  },
  {
    label: "Cloud",
    techs: [
      { name: "Kubernetes", displayName: "Kubernetes" },
      { name: "Terraform", displayName: "Terraform" },
    ],
  },
  {
    label: "Testing",
    techs: [
      { name: "Playwright", image: "/images/tech/playwright.png" },
      { name: "Cypress", image: "/images/tech/cypress.png" },
      { name: "Firebase", displayName: "Firebase" },
      { name: "Supabase", displayName: "Supabase" },
    ],
  },
]

function ReactIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="white" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="white" strokeWidth="1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="white" strokeWidth="1" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function DevStudiosTechStackSection() {
  return (
    <section className="bg-background py-24 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-4">
          <div className="lg:col-span-2 border-t border-foreground/20 pt-6">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-display uppercase tracking-tight">
              Technology Stack
            </h2>
          </div>
          <div className="border-t border-foreground/20 pt-6" />
        </div>

        {/* Subtitle */}
        <p className="text-base text-foreground/50 font-sans leading-relaxed mb-4">
          We work across a pragmatic, widely supported stack built to keep your systems maintainable and your team hire-able
        </p>

        {/* Tech rows */}
        <div className="flex flex-col">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 items-center border-t border-foreground/10 py-8"
            >
              {/* Category label */}
              <div className="flex items-center gap-3">
                <span className="w-0.5 h-5 bg-foreground/50" />
                <span className="text-base text-foreground/70 font-sans">
                  {cat.label}
                </span>
              </div>

              {/* Tech logos */}
              <div className="flex flex-wrap items-center gap-x-14 gap-y-6 justify-start lg:justify-end">
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="flex items-center">
                    {tech.image ? (
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        width={160}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    ) : tech.name === "React" || tech.name === "React Native" ? (
                      <div className="flex items-center gap-2.5">
                        <ReactIcon />
                        <span className="text-lg font-semibold text-foreground/80 font-sans">
                          {tech.displayName}
                        </span>
                      </div>
                    ) : (
                      <span className="text-lg font-semibold text-foreground/80 font-sans tracking-wide">
                        {tech.displayName}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
