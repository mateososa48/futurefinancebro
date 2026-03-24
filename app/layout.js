import localFont from 'next/font/local'
import { Alexandria } from 'next/font/google'
import './globals.css'

const sentient = localFont({
  src: [
    { path: '../public/fonts/Sentient-Light.otf',   weight: '300' },
    { path: '../public/fonts/Sentient-Regular.otf', weight: '400' },
    { path: '../public/fonts/Sentient-Medium.otf',  weight: '500' },
  ],
  variable: '--font-sentient',
  display: 'swap',
})

const alexandria = Alexandria({
  subsets: ['latin'],
  variable: '--font-alexandria',
  display: 'swap',
})

export const metadata = {
  title: 'Futurefinancebro — Financial Intelligence',
  description: 'Independent financial analysis and commentary for investors, professionals, and curious minds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sentient.variable} ${alexandria.variable}`}>
      <body>{children}</body>
    </html>
  )
}
