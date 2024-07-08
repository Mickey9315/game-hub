import { create } from "zustand";
import { Platform } from "./entities";


interface GameQuery {
    genreId?: number;
    platform?: Platform;
    sortOrder?: string;
    searchText?: string;

}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatform: (platform: Platform) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId, searchText: '' } })),
    setPlatform: (platform) => set((store) => ({
        gameQuery: {
            ...store.gameQuery,
            platform,
            searchText: '',
        },
    })),
    setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } }))


}))

export default useGameQueryStore