import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";

import "./style.css";

const App = () => {
  return <Map center={{ lat: 43.615, lng: -116.2023 }} zoom={13} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
