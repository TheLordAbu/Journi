import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getJourni } from "../../services/apiJournis";

export function useGetJourni() {
  const { id } = useParams();
  const {
    isLoading,
    data: journi,
    error,
  } = useQuery({
    queryKey: ["journi", id],
    queryFn: () => getJourni(id),
    retry: false,
  });
  return { isLoading, journi, error };
}
