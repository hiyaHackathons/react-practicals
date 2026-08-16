import React, { useState } from "react";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (temperature === "") {
      setResult("Please enter a temperature.");
      return;
    }

    const value = Number(temperature);

    if (unit === "C") {
      const fahrenheit = (value * 9) / 5 + 32;
      setResult(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
    } else {
      const celsius = ((value - 32) * 5) / 9;
      setResult(`${value}°F = ${celsius.toFixed(2)}°C`);
    }
  };

  const clearConverter = () => {
    setTemperature("");
    setUnit("C");
    setResult("");
  };

  return (
    <div>
      <h2>Temperature Converter</h2>

      <label>Enter Temperature</label>

      <br />

      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Enter temperature"
      />

      <br />
      <br />

      <label>Select Unit</label>

      <br />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="C">Celsius (°C)</option>
        <option value="F">Fahrenheit (°F)</option>
      </select>

      <br />
      <br />

      <button onClick={convertTemperature}>Convert</button>

      <button onClick={clearConverter}>Clear</button>

      {result && <h3>{result}</h3>}
    </div>
  );
}

export default TemperatureConverter;