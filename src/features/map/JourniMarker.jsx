import { Marker, Popup } from "react-leaflet";
import CountryCode from "../journis/CountryCode";
import { useGetGeolocation } from "./useGetGeolocation";
import Spinner from "../../UI/Spinner";

function JourniMarker({ journi }) {
  const { city, country, id } = journi;
  const { data, isLoading, isError } = useGetGeolocation(city, country);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error loading geolocation for {city}</div>;

  const position = [data?.data[0]?.latitude, data?.data[0]?.longitude];
  console.log(position);

  return (
    position && (
      <Marker position={position} key={id}>
        <Popup className="text-md">
          <span>{city}</span>
          <span>
            <CountryCode country={country} />
          </span>
        </Popup>
      </Marker>
    )
  );
}

export default JourniMarker;
