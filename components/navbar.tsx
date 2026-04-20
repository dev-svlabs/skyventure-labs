import Link from "next/link"
import Image from "next/image"

interface NavbarProps {
  activePage?: string
}

export function Navbar({ activePage = "Home" }: NavbarProps) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Dev Studios", href: "/dev-studios" },
    { label: "Marketing & Events", href: "/marketing-events" },
    { label: "Advisory", href: "/advisory" },
    { label: "Fundraising", href: "/fundraising" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/about" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 lg:px-10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <Image
          src="/images/sky-venture-labs-logo.png"
          alt="Sky Venture Labs"
          width={123}
          height={45}
          className="object-contain"
          style={{ width: "123px", height: "45px" }}
          priority
        />
      </Link>

      {/* Nav Links + Contact grouped right */}
      <div className="hidden xl:flex items-center gap-1">
      <nav className="flex items-center gap-0.5">
        {navLinks.map((item) => {
          const isActive = item.label === activePage
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative px-3 py-2 text-base transition-colors font-sans ${
                isActive
                  ? "text-foreground font-medium"
                  : "text-foreground/50 hover:text-foreground/80"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#A672F9] rounded-sm" />
              )}
              <span className={isActive ? "ml-1" : ""}>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Contact Button */}
      <Link
        href="#"
        className="ml-3 px-6 py-2.5 text-base rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors font-sans"
      >
        Contact us
      </Link>
      </div>
    </header>
  )
}
