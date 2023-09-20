'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
