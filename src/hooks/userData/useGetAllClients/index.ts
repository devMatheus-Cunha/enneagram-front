import { getAllClientsService } from '@/services/userData/getAllClientsService'
import { useQuery } from '@tanstack/react-query'

export const useGetAllClients = () => {
  const {
    data: allClientsData,
    isLoading: isLoadingAllClientsData,
    status: statusaAllClientsData,
    refetch: refetchaAllClientsData,
  } = useQuery(['getAllClients'], async () => await getAllClientsService())

  return {
    allClientsData,
    isLoadingAllClientsData,
    statusaAllClientsData,
    refetchaAllClientsData,
  }
}
