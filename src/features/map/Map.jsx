/* eslint-disable react/prop-types */
import { MapContainer, TileLayer } from "react-leaflet";
import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useJournis } from "../journis/useJournis";
import Loader from "../../UI/Loader";
import JourniMarker from "./JourniMarker";

function Map({ position }) {
  const { journis, isLoading } = useJournis();
  console.log(journis);

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
            {journis &&
              journis.map((journi) => (
                <JourniMarker key={journi.id} journi={journi} />
              ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Map;
