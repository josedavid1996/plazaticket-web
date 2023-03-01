import { useGetAllFeriasQuery } from '@generated/graphql'

export const useFeriaService = () => {
  const { data, loading, error } = useGetAllFeriasQuery({
    fetchPolicy: 'no-cache'
  })

  const dataFeria = data?.GetAllFerias?.data ?? []

  return {
    dataFeria,
    loading
  }
}
