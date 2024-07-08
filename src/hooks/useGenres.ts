import genres from "../data/genres";
import { useQuery } from "react-query";
import ms from 'ms'
import APIClient from "../services/apiClient";
import { Genre } from "../entities";

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres
    })

}

export default useGenres;