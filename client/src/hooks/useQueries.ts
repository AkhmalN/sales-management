import { useQuery, UseQueryResult } from "@tanstack/react-query";

type TUseQueries<T> = {
  queryFnc: () => Promise<T>;
  queryKey: string[];
};

export const useQueries = <T>({
  queryKey,
  queryFnc,
}: TUseQueries<T>): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey,
    queryFn: queryFnc,
  });
};
