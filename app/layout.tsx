import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'

export const metadata: Metadata = {
  title: 'Resource',
  description: 'Resource is platform for documentation, referance and sample code for developers.',
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
