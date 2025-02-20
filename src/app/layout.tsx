import { Lightbulb } from 'lucide-react'
import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'devstage',
}

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  weight: ['500', '600'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-right-top bg-cover">
        {/* disclaimer */}
        <div className="bg-white/4 text-sm py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-4 hover:bg-white/8 transition-colors duration-300">
          <div className="flex justify-center items-center border border-amber-300/20 min-w-10 h-10 rounded-full">
            <Lightbulb className="text-amber-300 size-5" />
          </div>
          <p>
            Os dados apresentados nesta página são fictícios e foram gerados
            para fins de demonstração.
          </p>
        </div>

        {/* main content */}
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  )
}
