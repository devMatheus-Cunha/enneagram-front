'use client'

import React from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, VStack, Stack, Text, Box } from '@chakra-ui/react'
import Input from '@/components/Forms/Input'

import { useRouter } from 'next/navigation'
import { ForgetPasswordProps } from '@/services/auth/forgetPasswordService'
import useForgetPassword from '@/hooks/auth/useForgetPassword'

const schema = z.object({
  email: z
    .string()
    .nonempty('Este campo é obrigatório')
    .email('Email Invalido'),
})

export default function ForgetPassword() {
  const router = useRouter()
  const { forgetPassword, isLoading } = useForgetPassword()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordProps>({
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
        onSubmit={handleSubmit((values: ForgetPasswordProps) =>
          forgetPassword(values),
        )}
      >
        <VStack
          spacing={8}
          align="stretch"
          w="500px"
          bg="gray.700"
          p={7}
          rounded="lg"
        >
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">
              Esqueceu sua senha?
            </Text>
            <Text color="slate.300">
              Não se preocupe! Insira o seu e-mail de cadastro e enviaremos
              instruções para você.
            </Text>
          </Box>
          <Input
            placeholder="exemplo@gmail.com"
            label="Email"
            name="email"
            type="text"
            required
            error={errors.email?.message}
            register={register}
          />
          <Button type="submit" isLoading={isLoading} mt={4}>
            Enviar
          </Button>
          <Button variant="link" type="button" mt={4} onClick={router.back}>
            Voltar
          </Button>
        </VStack>
      </form>
    </Stack>
  )
}
