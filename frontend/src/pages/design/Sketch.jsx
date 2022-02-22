import React from "react";
import Sketch from "react-p5";

let dim = 800;
let num = 16;
var arr = new Array(num);
let button;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(dim, dim).parent(canvasParentRef);

    for (var i = 0; i < num; i++) {
      arr[i] = new Array(num);
    }
    for (let x = 0; x < dim; x += dim / num) {
      for (let y = 0; y < dim; y += dim / num) {
        arr[x][y] = false;
      }
    }

    button = p5.createButton("Submit").parent(canvasParentRef);
    button.position(800,800);
    
  };

  const draw = (p5) => {
    p5.background(255);
    // for (let x = 0; x < num; x++) {
    //   for (let y = 0; y < num; y++) {
    //     if (arr[x][y] == true) p5.fill(0);
    //     else p5.noFill();
    //     p5.stroke(0);
    //     p5.square(x, y, dim / num);
    //   }
    // }
    p5.square(dim / 2, dim / 2, 20);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes


  };

  return <Sketch setup={setup} draw={draw} />;
};

function create2DArray(rows) {
  var arr = new Array(rows);

  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(rows);
  }


  return arr;
}
