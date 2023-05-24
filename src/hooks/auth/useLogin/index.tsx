import { LoginProps, loginService } from '@/services/auth/loginService'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
// import { useColorMode } from '@chakra-ui/react'
// import { toast } from 'react-toastify'

const useLogin = () => {
  const router = useRouter()
  // const { colorMode } = useColorMode()

  const { mutate: loginWithEmailAndPassword, isLoading } = useMutation(
    (values: LoginProps) => loginService(values),
    {
      onSuccess: async (user) => {
        router.push(`/dashboard`)
      },
      onError: ({ message }: { message: string }) => {
        router.push(`/dashboard`)
        // toast.error('Erro ao fazer login! Tente novamente.', {
        //   theme: colorMode,
        // })
      },
    },
  )

  return {
    loginWithEmailAndPassword,
    isLoading,
  }
}

export default useLogin
