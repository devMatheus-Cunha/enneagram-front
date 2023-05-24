'use client'

import { ReactNode } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ProviderReactQuery } from '../providers/reactQuery/providerReactQuery'
import { ProviderChakraUi } from '../providers/chakraUi/providerChakraUi'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ProviderReactQuery>
          <ProviderChakraUi>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          </ProviderChakraUi>
        </ProviderReactQuery>
      </body>
    </html>
  )
}
