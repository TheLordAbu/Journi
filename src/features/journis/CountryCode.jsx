import ReactCountryFlag from "react-country-flag";
import useCountryNameToFlag from "../hooks/useCountryNameToFlag";

function CountryCode() {
  const { countryCode } = useCountryNameToFlag();
  return <ReactCountryFlag countryCode={countryCode} />;
}

export default CountryCode;
