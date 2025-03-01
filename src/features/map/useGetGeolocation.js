import { useQuery } from "@tanstack/react-query";
import { getGeolocation } from "../../services/apiGeoLocation";
// import { API_KEY, URL } from "../../utils/constants";

// export function useGetGeolocation() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["position"],
//     queryFn: async function (city, country) {
//       const res = await fetch(`${URL}?city=${city}&country=${country}`, {
//         method: "GET",
//         headers: {
//           "X-Api-Key": API_KEY,
//         },
//       });
//       const data = await res.json();
//       return { data };
//     },
//   });
//   return { data, isLoading, error };
// }

export function useGetGeolocation(city, country) {
  return useQuery({
    queryKey: ["position", city, country],
    queryFn: () => getGeolocation(city, country),
  });
}

// export function useGetGeolocation() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["position"],
//     queryFn: async function fetchGeolocation() {
//       const res = await getGeolocation();
//       const data = res.data;
//       return data;
//     },
//   });
//   return { data, isLoading, error };
// }
