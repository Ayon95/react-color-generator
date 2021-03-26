import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#337df5");
  const [weight, setWeight] = useState(10);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [list, setList] = useState(new Values(color).all(weight));
  const baseColorIndex = (list.length - 1) / 2;

  function handleSubmit(event) {
    event.preventDefault();
    setErrorOccurred(false); // so that previous error is removed when the user re-submits the form with valid input
    try {
      const colors = new Values(color).all(Number.parseFloat(weight));
      setList(colors);
    } catch (error) {
      setErrorOccurred(true);
      console.error(error.message);
    }
  }
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="hexValue" className="label">
              Hex value
            </label>
            <input
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
              placeholder="e.g. #337df5"
              id="hexValue"
              className={errorOccurred ? "error" : ""}
            />
          </div>

          <div className="input-container">
            <label htmlFor="weight" className="label">
              Weight
            </label>
            <input
              type="number"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="e.g. 10"
              id="weight"
              className={errorOccurred ? "error" : ""}
            />
          </div>
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            color={color}
            index={index}
            baseColorIndex={baseColorIndex}
          />
        ))}
      </section>
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
