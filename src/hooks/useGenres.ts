import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  initialData: { count: genres.length, next: undefined, results: genres }
})
export default UseGenres;
