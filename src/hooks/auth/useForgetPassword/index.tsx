import {
  ForgetPasswordProps,
  forgetPasswordService,
} from '@/services/auth/forgetPasswordService'
import { useColorMode } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const useForgetPassword = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()

  const { mutate: forgetPassword, isLoading } = useMutation(
    (values: ForgetPasswordProps) => forgetPasswordService(values),
    {
      onSuccess: async (user) => {
        router.push(`/`)
      },
      onError: ({ message }: { message: string }) => {
        toast.error('Erro ao recuperar senha! Tente novamente.', {
          position: toast.POSITION.TOP_RIGHT,
          theme: colorMode,
        })
      },
    },
  )

  return {
    forgetPassword,
    isLoading,
  }
}

export default useForgetPassword
