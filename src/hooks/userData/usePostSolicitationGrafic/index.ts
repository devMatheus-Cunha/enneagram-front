import { solicitationGraficService } from '@/services/userData/solicitationGraficService'
import { useColorMode } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export default function usePostSolicitationGrafic() {
  const { colorMode } = useColorMode()
  const {
    isLoading: isLoadingSolicitationGrafic,
    mutateAsync: solicitationGrafic,
  } = useMutation(
    async (base64: string) => await solicitationGraficService(base64),
    {
      onSuccess: (res) => {
        toast.success('Solicitação feita com sucesso.', {
          theme: colorMode,
        })
        return res
      },
      onError: () => {
        toast.error('Erro ao solicitar grafico.', {
          theme: colorMode,
        })
      },
    },
  )

  return { solicitationGrafic, isLoadingSolicitationGrafic }
}
