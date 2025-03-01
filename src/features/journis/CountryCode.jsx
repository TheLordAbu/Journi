/* eslint-disable react/prop-types */
import ReactCountryFlag from "react-country-flag";
import { getCode } from "country-list";

function CountryCode({ country, className, type }) {
  const countryCode = getCode(country);
  if (type == "journi")
    return (
      countryCode && (
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: "3em", height: "2em" }}
          className={className}
        />
      )
    );
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
