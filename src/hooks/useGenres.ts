import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchDataResponse } from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient
      .get<FetchDataResponse<Genre>>("/genres").then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24h
  initialData: { count: genres.length, results: genres }
})
export default UseGenres;
