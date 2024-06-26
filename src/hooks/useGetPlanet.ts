import { useQuery } from "@tanstack/react-query";
import { getPlanetDetailService } from "services";
import { IPlanet } from "types";

const useGetPlanet = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["planets", id],
    queryFn: () => getPlanetDetailService(id),
  });

  const planet: IPlanet = data?.data || undefined;
  return { planet, isLoading, isError };
};

export default useGetPlanet;
