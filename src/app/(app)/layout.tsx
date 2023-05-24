'use client'

import {
  Flex,
  Spacer,
  Switch,
  Button,
  useColorMode,
  Text,
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

export default function LayoutApp({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex w="full" bg="gray.700" align="center" p={3}>
        {pathname !== '/dashboard' && (
          <Button variant="link" type="button" onClick={router.back}>
            Voltar
          </Button>
        )}
        <Spacer />
        <Flex align="center" gap={6} mr={8}>
          <Flex align="center" gap={2}>
            <Text fontSize="sm">Light</Text>
            <Switch
              size="sm"
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
            />
            <Text fontSize="sm">Dark</Text>
          </Flex>
          <Button
            type="button"
            onClick={() => router.push('/')}
            variant="link"
            h={30}
          >
            Sair
          </Button>
        </Flex>
      </Flex>
      {children}
    </>
  )
}
