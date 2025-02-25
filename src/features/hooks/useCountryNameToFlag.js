import { useJournis } from "../journis/useJournis";
import { getCode } from "country-list";

function useCountryNameToFlag() {
  const { journis } = useJournis();
  const country = journis?.map((journi) => journi.country);
  const countryCode = getCode(country);
  if (!countryCode) return null;
  return countryCode;
}

export default useCountryNameToFlag;
