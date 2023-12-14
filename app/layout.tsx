import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'

export const metadata: Metadata = {
  title: 'Learning Resource',
  description: 'The source of material learning by CV ZAMAN NOW',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-Poppins">
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
