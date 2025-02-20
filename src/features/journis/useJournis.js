import { useQuery } from "@tanstack/react-query";
import { getJournis } from "../../services/apiJournis";

export function useJournis() {
  const {
    isLoading,
    data: journis,
    error,
  } = useQuery({
    queryKey: ["Journis"],
    queryFn: getJournis,
  });
  return { isLoading, journis, error };
}
