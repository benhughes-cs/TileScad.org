import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sketch from "./Sketch2";
import Navigation from "../BarNav";

function Design() {
  return (
    <div className="Design">
      <Navigation />
      <div className="content">
        <div class="container">
          <Sketch />
        </div>
      </div>
    </div>
  );
}

export default Design;
