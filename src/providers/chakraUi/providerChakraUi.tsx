'use client'

import { ReactNode } from 'react'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/assets/theme'

export function ProviderChakraUi({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </ChakraProvider>
    </CacheProvider>
  )
}
