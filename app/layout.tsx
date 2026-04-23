import type { Metadata } from 'next'
import { Darker_Grotesque } from 'next/font/google'

import './globals.css'

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'], variable: '--font-darker-grotesque', weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Sky Venture Labs - Build, Scale, and Operate Real Businesses',
  description: 'Sky Venture Labs is a full-cycle venture partner — software development, growth systems, operator advisory, and fundraising readiness — for founders, SMEs, and enterprises.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${darkerGrotesque.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
