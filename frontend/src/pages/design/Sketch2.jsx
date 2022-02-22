import React, { createRef } from "react";
import Sketch from "react-p5";
import { uploadDesign } from "../../APIService";

class Tile {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.isClicked = false;
  }

  draw(p5) {
    p5.stroke(10);
    p5.fill(this.isClicked ? 10 : 230);
    p5.rectMode(p5.CENTER);
    p5.square(this.x, this.y, this.s);
  }

  clicked() {
    this.isClicked = !this.isClicked;
  }
}

export default (props) => {
  const numTiles = 16;
  const tileSize = 50;
  const hiddenForm = createRef();
  const filenameInput = createRef();

  let tiles = []; // tiles[numTiles][numTiles] grid

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    const dim = numTiles * tileSize;
    p5.createCanvas(dim, dim).parent(canvasParentRef);

    // console.log(p5.mouseX);
    // console.log(p5.mouseY);

    for (let y = tileSize / 2; y < p5.height; y += tileSize) {
      let tileRow = [];
      for (let x = tileSize / 2; x < p5.width; x += tileSize) {
        tileRow.push(new Tile(x, y, tileSize));
      }
      tiles.push(tileRow);
    }
  };

  const draw = (p5) => {
    p5.background(255);
    for (let i = 0; i < tiles.length; i++) {
      for (let j = 0; j < tiles[0].length; j++) {
        tiles[i][j].draw(p5);
      }
    }

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
  };

  const mousePressed = (event) => {
    console.log("mousePressed", event.mouseX, event.mouseY);
    const x = Math.floor(event.mouseX / tileSize);
    const y = Math.floor(event.mouseY / tileSize);
    console.log("x, y", x, y);

    if (x >= 0 && x < numTiles && y >= 0 && y < numTiles) {
      tiles[y][x].clicked();
    }
  };

  return (
    <div class="row">
      <div class="col">
        <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
      </div>
      <div class="col">
        <button
          onClick={() => {
            uploadDesign(tiles.map((t) => t.map((x) => x.isClicked))).then(
              (filename) => {
                console.log(filename);
                filenameInput.current.setAttribute("value", filename);
                hiddenForm.current.submit();
              }
            );
          }}
          type="button"
          class="btn btn-primary"
        >
          Upload data
        </button>
        {/* hidden form so user can download scadnano file */}
        <form ref={hiddenForm} action="/api/download-file" method="POST">
          <input
            ref={filenameInput}
            type="hidden"
            name="filename"
            value="null"
          />
        </form>
      </div>
    </div>
  );
};
