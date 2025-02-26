/* eslint-disable react/prop-types */
import ReactCountryFlag from "react-country-flag";
import { getCode } from "country-list";

function CountryCode({ country, className }) {
  const countryCode = getCode(country);
  return (
    countryCode && (
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{ width: "1.2em", height: "1.2em" }}
        className={className}
      />
    )
  );
}

export default CountryCode;
