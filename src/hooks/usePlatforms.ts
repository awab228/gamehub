import { useQuery } from "@tanstack/react-query";
import platfroms from "../data/platfroms";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Platfrom>("platforms/lists/parents");

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: { count: platfroms.length, next: undefined, results: platfroms}
})

export default usePlatforms;
