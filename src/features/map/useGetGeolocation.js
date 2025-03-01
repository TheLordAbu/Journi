import { useQuery } from "@tanstack/react-query";
import { getGeolocation } from "../../services/apiGeoLocation";

export function useGetGeolocation(city, country) {
  return useQuery({
    queryKey: ["position", city, country],
    queryFn: () => getGeolocation(city, country),
  });
}
