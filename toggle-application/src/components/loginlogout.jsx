import { useState } from "react";

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-icon">
          {isLoggedIn ? "👋" : "🔐"}
        </div>

        <h1>
          {isLoggedIn ? "Welcome Back!" : "Welcome!"}
        </h1>

        <p>
          {isLoggedIn
            ? "You are successfully logged in."
            : "Please log in to continue."}
        </p>

        <p className="status">
          Status: {isLoggedIn ? "Logged In" : "Logged Out"}
        </p>

        <button
          onClick={handleLoginLogout}
          className={isLoggedIn ? "logout-btn" : "login-btn"}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

      </div>
    </div>
  );
}

export default LoginLogout;