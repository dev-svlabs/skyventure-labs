import Image from "next/image"

const records = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L4 20l16 16 16-16L20 4z" fill="#E8531E" />
        <path d="M20 12l-8 8 8 8 8-8-8-8z" fill="#FF6B35" />
      </svg>
    ),
    name: "AstraNet Protocol",
    category: "DeFi Infrastructure",
    stat: (
      <span>
        {"Tier-1 listings \u00B7 "}
        <strong className="text-foreground font-semibold">{"$180M+ FDV"}</strong>
        {" stabilized"}
      </span>
    ),
    image: "/images/astranet.png",
    imageBg: "bg-black",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="16" y="8" width="8" height="24" rx="2" fill="#4BA3E3" />
        <rect x="8" y="16" width="24" height="8" rx="2" fill="#4BA3E3" />
      </svg>
    ),
    name: "NovaPlay Network",
    category: "GameFi",
    stat: (
      <span>
        <strong className="text-foreground font-semibold">{"1.4M"}</strong>
        {" users onboarded in 90 days"}
      </span>
    ),
    image: "/images/novaplay.png",
    imageBg: "bg-[#F0F0F0]",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12 12l8-4 8 4v8l-8 4-8-4v-8z" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        <path d="M12 20l8 4 8-4" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        <path d="M20 24v8" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        <path d="M12 12l8 4 8-4" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        <path d="M20 16v8" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    name: "HelixChain",
    category: "Layer-1",
    stat: (
      <span>
        <strong className="text-foreground font-semibold">{"$12M+"}</strong>
        {" ecosystem funding across regions"}
      </span>
    ),
    image: "/images/helixchain.png",
    imageBg: "bg-black",
  },
]

export function TrackRecordsSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">
          {/* Left heading */}
          <div>
            <div className="h-px bg-foreground/20 mb-8" />
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] font-sans uppercase">
              Track<br />Records
            </h2>
          </div>

          {/* Right - Case studies */}
          <div className="flex flex-col">
            {records.map((record, i) => (
              <div key={i} className={`${i > 0 ? "border-t border-foreground/10 pt-12 mt-12" : ""}`}>
                <div className="h-px bg-foreground/20 mb-8 lg:block hidden" style={{ display: i === 0 ? "block" : "none" }} />
                {i === 0 && <div className="h-px bg-foreground/20 mb-8 lg:hidden" />}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-center">
                  {/* Text content */}
                  <div>
                    <div className="mb-4">{record.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground font-sans mb-2">
                      {record.name}
                    </h3>
                    <p className="text-foreground/50 text-sm font-sans mb-4">
                      {record.category}
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 text-xs mt-0.5">{"\u25AA"}</span>
                      <p className="text-foreground/60 text-sm font-sans leading-relaxed">
                        {record.stat}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${record.imageBg} rounded-lg overflow-hidden`}>
                    <Image
                      src={record.image}
                      alt={record.name}
                      width={380}
                      height={220}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
