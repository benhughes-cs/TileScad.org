import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sketch from "./Sketch";
import Navigation from "../BarNav";

function Design() {
  return (
    <div className="Design">
      <Navigation />
      <div className="content">
        <div class="container">
          <div class="row">
            {/* <div class="col-3">
              <h1>Settings</h1>
            </div> */}
            <div class="col">
              <Sketch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
