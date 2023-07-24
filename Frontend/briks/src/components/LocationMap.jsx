import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import image from "../img/maps.svg";

const LocationMap = ({ lat, long, tag }) => {
  const position = [lat, long];
  console.log(lat, long);

  const customIcon = new Icon({
    iconUrl: image,
    iconSize: [40, 40],
  });
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          <h2>{tag}</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
