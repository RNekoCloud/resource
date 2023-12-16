'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
    const pathName = usePathname()

    return (
        <nav className="w-full border-b p-3">
            <div className="flex w-full ">
            <h2 className="text-2xl mx-10 font-medium">Resource</h2>
            <div className="flex ms-auto">
                <Link href="/docs" className={`mr-4  hover:text-cyan-700 ${pathName === '/docs' ? 'text-cyan-700': ''}`}>Documentation</Link>
                <Link href="/contributor" className={`mr-4 hover:text-cyan-700 ${pathName === '/contributor' ? 'text-cyan-700': ''}`}>Contributor</Link>
                <Link href="/about" className={`mr-4 hover:text-cyan-700 ${pathName === '/about' ? 'text-cyan-700': ''}`}>About</Link>
            </div>
            </div>
        </nav>
    )
}