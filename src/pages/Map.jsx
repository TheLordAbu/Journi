import { NavLink } from "react-router-dom";
import { gridLayout, navBarStyles } from "../utils/Styles";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  return (
    <div className="relative">
      <div className={`${gridLayout}`}>
        <div className={`${navBarStyles}`}>Sidebar</div>
        <div>
          <nav className="px-6 rounded absolute top-8 right-8 h-16 flex items-center justify-center bg-gray-50 mb-4 border-b border-gray-200 z-10 shadow-sm shadow-gray-200">
            <NavLink to="/app">
              <h2>&larr; Back to home</h2>
            </NavLink>
          </nav>
          <div className="mapContainer">
            <MapContainer
              center={[51.505, -0.09]}
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
      </div>
    </div>
  );
}

export default Map;
