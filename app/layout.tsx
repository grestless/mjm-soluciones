import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mjmsoluciones.com"),
  title: {
    default: "M.J.M Soluciones Ecológicas | Control de plagas",
    template: "%s | M.J.M Soluciones Ecológicas",
  },
  description:
    "Empresa SAS líder en control de plagas. Productos ecológicos para ratas y cucarachas, productos seguros para mascotas. Envíos a todo el norte argentino. ¡Conocenos!",
  keywords: [
    "control de plagas",
    "fumigación",
    "productos ecológicos",
    "ratas",
    "cucarachas",
    "norte argentino",
    "MJM Soluciones",
    "seguro para mascotas",
    "productos seguros para mascotas",
    "no tóxicos",
    "productos ecológicos",
  ],
  authors: [{ name: "M.J.M Soluciones" }],
  creator: "M.J.M Soluciones",
  publisher: "M.J.M Soluciones",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mjmsoluciones.com",
    title: "M.J.M Soluciones Ecológicas | Control de plagas",
    description:
      "Empresa SAS líder en control de plagas. Productos ecológicos para ratas y cucarachas, seguros para mascotas. Envíos a todo el norte argentino.",
    siteName: "M.J.M Soluciones Ecológicas",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "M.J.M Soluciones Ecológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.J.M Soluciones Ecológicas | Control de plagas",
    description:
      "Empresa SAS líder en control de plagas. Productos ecológicos para ratas y cucarachas, seguros para mascotas.",
    images: ["/placeholder-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
