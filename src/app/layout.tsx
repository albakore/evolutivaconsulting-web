import { Inter } from 'next/font/google'
import { GoogleTagManager,GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evolutiva',
  description: 'Evolutiva Consulting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <GoogleAnalytics gaId="G-FYFEN1LWGW" />
      <head>
        <title>Evolutiva Consulting</title>
      </head>
      <body>
      {children}
        
      </body>
      
    </html>
  )
}
