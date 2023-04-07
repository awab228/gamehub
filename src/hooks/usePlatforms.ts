import platfroms from "../data/platfroms";
interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platfroms, isLoadding: null, error: null });

export default usePlatforms;
