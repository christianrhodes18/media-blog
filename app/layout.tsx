import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Inter, Crimson_Text } from 'next/font/google'
import Navigation from './components/Nav/Navigation'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })
const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ['latin']})

export const metadata: Metadata = {
  title: "Aesthete's Digest",
  description: 'A media blog for aesthetes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <Navigation />
            {children}
            <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
