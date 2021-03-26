import React, { useState, useEffect } from "react";

const SingleColor = ({ color, index, baseColorIndex }) => {
  const [showAlert, setShowAlert] = useState(false);
  const backgroundColor = color.rgb.join(", "); // rgb is an array of rgb values
  const hexValue = `#${color.hex}`;

  function handleClickCopy(value) {
    setShowAlert(true);
    navigator.clipboard.writeText(value); // copying it to the clipboard
    setTimeout(setShowAlert, 3000, false); // want the alert to disappear after 3 seconds
  }
  return (
    <article
      // want the font color to be white for the shades (the colors with indices greater than that of the base color)
      className={`color ${index > baseColorIndex ? "color-light" : ""}`}
      style={{ backgroundColor: `rgb(${backgroundColor})` }}
      onClick={() => handleClickCopy(hexValue)}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">{hexValue}</p>
      {showAlert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
