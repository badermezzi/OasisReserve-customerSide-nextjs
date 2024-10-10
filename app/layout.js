import Logo from "@/app/_components/Logo"
import Navigation from "@/app/_components/Navigation"

import { Josefin_Sans } from "next/font/google"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
})


import "@/app/_styles/globals.css"
import Header from "./_components/Header"
import { ReservationProvider } from "./_components/ReservationContext"


export const metadata = {
  // title: 'OasisReserve',
  title: {
    template: "OasisReserve | %s",
    default: "Welcome | OasisReserve"
  },
  description: "Experience a luxurious cabin retreat, nestled in the heart of the Italian Dolomites, where breathtaking mountain views and serene forests create the perfect escape.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative `}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">

            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
