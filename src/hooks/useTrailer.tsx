import { useQuery } from "react-query"
import { Trailer } from "../entities"
import APIClient from "../services/apiClient"

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  })
}

export default useTrailers
