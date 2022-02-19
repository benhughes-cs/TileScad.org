import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../public/android-chrome-192x192.png";
import Navigation from "./pages/BarNav";

export default () => {
  return (
    <div className="App">
      <Navigation />
      <div className="content">This is a content.</div>
    </div>
  );
};
