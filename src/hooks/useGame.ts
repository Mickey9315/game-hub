import { useQuery } from "react-query";
import { Game } from "../entities";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Game>('/games');

const useGame = (id: number) => useQuery({
    queryKey: ['games', id],
    queryFn: () => apiClient.get(id)
});

export default useGame;