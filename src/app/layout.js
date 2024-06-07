'use client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

import { themeConfig } from '@/ThemeConfig'

export const metadata = {
  title: 'Evolutiva',
  description: 'Evolutiva Consulting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Evolutiva Consulting</title>
      </head>
      <body>
        <ChakraProvider resetCSS theme={themeConfig}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
