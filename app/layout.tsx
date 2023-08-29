import './globals.css'
import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <body>{children}</body>
      <Footer />
    </>
  )
}
