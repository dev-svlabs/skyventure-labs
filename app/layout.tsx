import type { Metadata } from 'next'
import { Darker_Grotesque } from 'next/font/google'

import './globals.css'

const darkerGrotesque = Darker_Grotesque({ subsets: ['latin'], variable: '--font-darker-grotesque', weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Sky Venture Labs - Engineering the Next Trillion Dollar Economy',
  description: 'A global venture lab providing strategy, incubation, capital access, technology development, and market expansion for companies building the digital economy.',
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
