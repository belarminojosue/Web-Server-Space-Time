import { ReactNode } from 'react'
import './globals.css'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'

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
  return (
    <html lang="en">
      <body
        className={`${bai.variable} ${roboto.variable} bg-gray-900 font-sans text-gray-200`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  )
}
