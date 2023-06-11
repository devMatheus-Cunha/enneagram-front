import { getAllQuestionsService } from '@/services/questions/getAllQuestionsService'
import { useQuery } from '@tanstack/react-query'

export const useGetAllQuestions = () => {
  const {
    data: allQuestionsData,
    isLoading: isLoadingAllQuestionsData,
    status: statusaAllQuestionsData,
    refetch: refetchaAllQuestionsData,
  } = useQuery(['getAllQuestions'], async () => await getAllQuestionsService())

  return {
    allQuestionsData,
    isLoadingAllQuestionsData,
    statusaAllQuestionsData,
    refetchaAllQuestionsData,
  }
}
