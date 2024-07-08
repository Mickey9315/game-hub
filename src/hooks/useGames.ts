import ms from "ms";
import { useInfiniteQuery } from "react-query";
import { Game } from "../entities";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";

const apiCient = new APIClient<Game>('/games')


const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiCient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h') //24h
    })
}

export default useGames;