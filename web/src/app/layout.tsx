import { ReactNode } from 'react'
import './globals.css'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import { cookies } from 'next/headers'

import { Copyright } from '@/components/Copyright'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Profile } from '@/components/Profile'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const bai = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'A time capsule built with React, Next.js, TailwindCSS, and Typescript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${bai.variable} ${roboto.variable} bg-gray-900 font-sans text-gray-200`}
      >
        <main className="grid min-h-screen grid-cols-2 overflow-visible">
          {/* LEFT SIDE PAGE */}
          <div className="relative flex flex-col items-start justify-between border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* BLUR EFFECT */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            {/* STRIPES EFFECT */}
            <div className="absolute bottom-0 right-2 top-0 -z-40 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {/* RIGHT SIDE PAGE */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
