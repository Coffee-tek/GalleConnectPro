import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from 'sonner';

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'GalleConnect Pro - La plateforme tout-en-un pour les agences immobilières',
  description: 'Centralisez la gestion de vos biens, clients, visites, contrats et factures. GalleConnect Pro est la solution SaaS moderne pour les agences immobilières.',
}

export const viewport = {
  themeColor: '#374250',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${_inter.variable} ${_playfair.variable} font-sans antialiased`}>
          <Toaster position="top-center" richColors />

        {children}
        <Analytics />
      </body>
    </html>
  )
}
