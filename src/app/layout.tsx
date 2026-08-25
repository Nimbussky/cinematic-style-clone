import type { Metadata } from "next"
import { CartProvider } from "@/store/cart"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/cart/CartDrawer"
import { SmoothScrolling } from "@/components/ui/SmoothScrolling"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://organicgarlicpremium.com"),
  title: {
    default: "Organic Garlic Premium | Nature's Finest",
    template: "%s | Organic Garlic Premium",
  },
  description:
    "India's most premium organic grocery experience. Hand-selected garlic from Himachal Pradesh.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8F6F0]">
        <SmoothScrolling>
          <CartProvider>
            <Header />
            <CartDrawer />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </SmoothScrolling>
      </body>
    </html>
  )
}
