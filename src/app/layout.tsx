import { Inter } from 'next/font/google'
import { GoogleTagManager,GoogleAnalytics, sendGTMEvent } from '@next/third-parties/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evolutiva Consulting',
  description: 'Evolutiva Consulting',
}

export default function RootLayout({ children }) {
    sendGTMEvent({
        event: 'page_view',
    })
  return (
    <html lang="es">
        <GoogleTagManager gtmId="G-FYFEN1LWGW" />
      <body>
      {children}
        
      </body>
      
    </html>
  )
}
