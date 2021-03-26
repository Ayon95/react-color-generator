import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [list, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder="f15025"
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>

      <section className="colors"></section>
    </>
  );
}

export default App;

/* values.js library

- this library allows you to get tints and shades of a CSS color
- color.all(weight) returns an array with all the tints and shades (incrementing by the specified weight) of the color
- weight is a measure of how much a color is mixed with white (tint) or black (shade)
- the base color has a weight of 0
- the tint with a weight of 100 is pure white
- the shade with a weight of 100 is pure black */