import { useQuery } from "@tanstack/react-query";
import { getCharacterDetailService } from "services";
import { ICharacterList } from "types";

const useGetCharacterDetail = (id: number) => {
  const {
    data: character,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["characters", id],
    queryFn: () => getCharacterDetailService(id),
  });

  return { character, isLoading, isError };
};

export default useGetCharacterDetail;
