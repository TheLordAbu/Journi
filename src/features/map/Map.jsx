import { MapContainer, TileLayer } from "react-leaflet";
import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Map({ position }) {
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
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Map;
