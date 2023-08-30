import { useQuery } from "@tanstack/react-query";
import platfroms from "../data/platfroms";
import APIClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("platforms/lists/parents");

const usePlatforms = () => useQuery({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: { count: platfroms.length, next: undefined, results: platfroms}
})

export default usePlatforms;
