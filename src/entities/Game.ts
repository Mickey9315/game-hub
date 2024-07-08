import { Genre } from "./Genre";
import { Platform } from "./Platform";

export type Game = {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
    rating_top: number;
    description_raw: string;
    publishers: Publisher[]
}


type Publisher = {
    id: number
    name: string
}