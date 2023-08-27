import { useQuery } from "@tanstack/react-query";
import platfroms from "../data/platfroms";
import apiClient from "../services/api-client";
import { FetchDataResponse } from "./useData";

interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: () =>
    apiClient
    .get<FetchDataResponse<Platfrom>>("platforms/lists/parents").then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24h
  initialData: { count: platfroms.length, results: platfroms}
})

export default usePlatforms;
