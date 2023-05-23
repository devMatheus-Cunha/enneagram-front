import { LoginProps, loginService } from '@/services/auth/loginService'
import { useColorMode } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const useLogin = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()

  const { mutate: loginWithEmailAndPassword, isLoading } = useMutation(
    (values: LoginProps) => loginService(values),
    {
      onSuccess: async (user) => {
        const id = '123'
        router.push(`/control/${id}`)
      },
      onError: ({ message }: { message: string }) => {
        toast.error('Erro ao fazer login! Tente novamente.', {
          position: toast.POSITION.TOP_RIGHT,
          theme: colorMode,
        })
      },
    },
  )

  return {
    loginWithEmailAndPassword,
    isLoading,
  }
}

export default useLogin
