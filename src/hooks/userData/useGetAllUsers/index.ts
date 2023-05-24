import { getAllUsersService } from '@/services/userData/getAllUsersService'
import { useQuery } from '@tanstack/react-query'

export const useGetAllUsers = () => {
  const {
    data: allUsersData,
    isLoading: isLoadingAllUsersData,
    status: statusaAllUsersData,
    refetch: refetchaAllUsersData,
  } = useQuery(['getAllUsers'], async () => await getAllUsersService())

  return {
    allUsersData,
    isLoadingAllUsersData,
    statusaAllUsersData,
    refetchaAllUsersData,
  }
}
