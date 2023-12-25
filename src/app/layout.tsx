import {Inter} from 'next/font/google'
import './sass/app.scss'
import {Providers} from "./providers"
import React from "react";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </Providers>
    )
}
