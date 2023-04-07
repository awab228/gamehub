import UseData from "./useData";

interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => UseData<Platfrom>("/platforms/lists/parents");

export default usePlatforms;
