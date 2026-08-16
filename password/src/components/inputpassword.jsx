import React, { useState } from "react";

function InputPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container">
      <div className="password-card">

        
        <h1>Show / Hide Password</h1>

        <p className="description">
          Enter your password and use the button to show or hide it.
        </p>

        <label>Password</label>

        <div className="password-input-box">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />

          <button onClick={togglePassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <p className="status">
          Password is currently{" "}
          <strong>{showPassword ? "Visible" : "Hidden"}</strong>
        </p>

      </div>
    </div>
  );
}

export default InputPassword;