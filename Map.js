import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MapSearch from "./MapSearch";

const MapExample = props => {
  return (
    <Map center={props.center} zoom={props.zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapSearch />
    </Map>
  );
};

export default MapExample;
