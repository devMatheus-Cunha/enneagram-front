'use client'

import React from 'react'
import useLogin from '@/hooks/useLogin'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, VStack, Stack, useColorMode } from '@chakra-ui/react'
import Input from '@/components/Forms/Input'
import { LoginProps } from '@/services/auth/loginService'

const schema = z.object({
  email: z
    .string()
    .nonempty('Este campo é obrigatório')
    .email('Email Invalido'),
  password: z
    .string()
    .nonempty('Este campo é obrigatório')
    .min(6, 'Senha deve conter mais de 6 caracteres'),
})

export default function Home() {
  const router = useRouter()

  const { colorMode } = useColorMode()
  const { loginWithEmailAndPassword, isLoading } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(schema),
  })

  return (
    <Stack
      direction="column"
      align="center"
      minH="100vh"
      justify="center"
      px={{ base: 4, md: 8 }}
    >
      <form
        onSubmit={handleSubmit((values: LoginProps) =>
          loginWithEmailAndPassword(values),
        )}
      >
        <VStack
          spacing={14}
          align="stretch"
          w="500px"
          bg="gray.700"
          p={7}
          rounded="lg"
        >
          <VStack spacing={6}>
            <Input
              placeholder="exemplo@gmail.com"
              label="Email"
              name="email"
              type="text"
              required
              error={errors.email?.message}
              register={register}
            />
            <Input
              label="Senha"
              placeholder="**********"
              type="password"
              name="password"
              required
              error={errors.password?.message}
              register={register}
            />
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              justify="space-between"
              align="self-end"
            >
              <Button
                type="button"
                variant="link"
                onClick={() => router.push('/forgetPassword')}
              >
                Esqueceu a senha?
              </Button>
            </Stack>
          </VStack>
          <Button type="submit" isLoading={isLoading} mt={4}>
            {colorMode === 'light' ? 'Login...' : 'Login'}
          </Button>
        </VStack>
      </form>
    </Stack>
  )
}
