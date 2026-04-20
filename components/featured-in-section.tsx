import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    source: "BUSINESS INSIDER",
    title: "Sky Venture Labs Announces the Launch of WorldX Ventures",
    date: "Feb 2026",
    image: "/images/featured/card-worldx.png",
    href: "https://markets.businessinsider.com/news/currencies/sky-wee-of-sky-venture-labs-announces-the-launch-of-worldx-ventures-1035802432",
  },
  {
    source: "BUSINESS INSIDER",
    title: "Sky Venture Labs Launches Malaysia Hub to Accelerate Digital and AI Transformation in Asia",
    date: "Feb 2026",
    image: "/images/featured/card-malaysia.png",
    href: "https://markets.businessinsider.com/news/currencies/sky-venture-labs-launches-malaysia-hub-to-accelerate-digital-and-ai-transformation-in-asia-1035802431",
  },
  {
    source: "decrypt",
    title: "Sky Wee Launches Sky Venture Labs: A Web3 Incubation Hub",
    date: "Sep 2024",
    image: "/images/featured/card-decrypt.png",
    href: "https://decrypt.co/249816/sky-wee-lanches-sky-venture-labs-a-web3-incubation-hub",
  },
]

export function FeaturedInSection() {
  return (
    <section className="px-6 lg:px-10 py-20 max-w-[1400px] mx-auto">
      {/* Header with split dividers */}
      <div className="flex items-start gap-8 mb-16">
        <div className="flex-1">
          <div className="h-px bg-foreground/20 mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans text-foreground">
            FEATURED IN
          </h2>
        </div>
        <div className="hidden md:block w-1/3">
          <div className="h-px bg-foreground/20" />
        </div>
      </div>

      {/* 3-column Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/10 rounded-lg overflow-hidden flex flex-col cursor-pointer hover:border-foreground/20 transition-colors"
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
