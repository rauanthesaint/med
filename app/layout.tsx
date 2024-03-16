import type { Metadata } from 'next'
import './globals.css'
import 'tracey-ui/dist/cjs/index.css'

export const metadata: Metadata = {
    title: 'Med_DevMode',
    description: 'Descriptions',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
