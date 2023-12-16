import { Metadata } from "next"
import "@/app/globals.css"

export const metadata: Metadata = {
    title: "Example of Documentation",
}

export default function DocsLayout({children}: {
    children: React.ReactNode
}) {
   return children
}