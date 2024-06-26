import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getAllCharacterService } from "services";
import { ICharacterList } from "types";

const useGetCharacters = (page = 1) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getAllCharacterService(page),
  });
  const characters: ICharacterList = data?.data || [];
  const customCharactor = useMemo(() => {
    const resultCustom = characters.results?.map((item) => {
      return {
        ...item,
        image: `https://picsum.photos/seed/${Math.random()}/200/300`,
      };
    });
    return {
      ...characters,
      results: resultCustom,
    };
  }, [characters]);
  return { customCharactor, isLoading, isError };
};

export default useGetCharacters;
