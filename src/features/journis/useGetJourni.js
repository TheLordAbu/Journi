import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getJourni } from "../../services/apiJournis";

export function useGetJourni() {
  const { journiId } = useParams();
  const {
    isLoading,
    data: journi,
    error,
  } = useQuery({
    queryKey: ["journi", journiId],
    queryFn: () => getJourni(journiId),
    retry: false,
  });
  return { isLoading, journi, error };
}
