import React from "react";
import Sketch from "react-p5";

let w = 1500;
let h = 1000;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(w, h).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);
    for (let x = 0; x < w; x += w / 15) {
      for (let y = 0; y < h; y += h / 10) {
        p5.stroke(0);
        p5.strokeWeight(1);
        p5.line(x, 0, x, h);
        p5.line(0, y, w, y);
      }
    }
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};
