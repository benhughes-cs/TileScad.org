import React from "react";
import Sketch from "react-p5";

let w = 800;
let h = 800;
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(w, h).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);
    for (let x = 0; x < w; x += w / 16) {
      for (let y = 0; y < h; y += h / 16) {
        p5.stroke(0);
        p5.noFill();
        p5.square(x, y, w / 16);
      }
    }
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};
