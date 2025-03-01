/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
// import { getGeolocation } from "../../services/apiGeoLocation";
import { useGetGeolocation } from "./useGetGeolocation";
import { useJournis } from "../journis/useJournis";
import Loader from "../../UI/Loader";
// import CountryCode from "../journis/CountryCode";

function Map({ position }) {
  const { journis, isLoading } = useJournis();
  // console.log(useGetGeolocation(journis[1].city, journis[1].country));
  // journis.map((journi) => {
  //   console.log(journi);
  // });
  // console.log(journiss);
  // const { data } = useGetGeolocation("Lagos", "Nigeria").data;
  // console.log(data[0].latitude);
  if (isLoading) return <Loader />;
  return (
    <>
      <div>
        <nav className="px-4 rounded absolute top-8 right-8 h-12 flex items-center justify-center bg-(--color-brand) mb-4 z-[9999] shadow-xl shadow-black-200 text-white font-semibold">
          <NavLink to="/app">
            <h2 className="flex gap-2">
              <HiOutlineHome />
              <span>Home</span>
            </h2>
          </NavLink>
        </nav>
        <div className="mapContainer">
          <MapContainer
            center={position}
            zoom={6}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {journis.map((journi) => (
              <Marker
                position={[
                  useGetGeolocation(journi.city.position.lat),
                  useGetGeolocation(journi.city.position.lng),
                ]}
                key={journi.id}
              >
                <Popup>
                  <span>{journi.city}</span>{" "}
                  <span>
                    <CountryCode country={journi.country} />
                  </span>
                </Popup>
              </Marker>
            ))} */}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Map;
