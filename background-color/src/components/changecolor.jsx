import React, { useState } from "react";

function changeColor() {
  const [color, setColor] = useState("white");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1>Background Color Changer</h1>

      <p>Select a color to change the background:</p>

      <input
        type="color"
        value={color}
        onChange={handleColorChange}
      />

      <p>Selected Color: {color}</p>
    </div>
  );
}

export default changeColor;