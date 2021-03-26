import React, { useState, useEffect } from "react";

const SingleColor = ({ color, index, weightIncrementValue }) => {
  const [alert, setAlert] = useState(false);
  const backgroundColor = color.rgb.join(", "); // rgb is an array of rgb values
  return (
    <article
      // want the font color to be white for the shades (the colors with indices greater than that of the base color)
      className={`color ${index > weightIncrementValue ? "color-light" : ""}`}
      style={{ backgroundColor: `rgb(${backgroundColor})` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
};

export default SingleColor;
