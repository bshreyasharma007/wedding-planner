import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "./component/navbar/Navbar"

const font = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wedding Planning",
  description: "Wedding Planning by Shreya Sharma",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
