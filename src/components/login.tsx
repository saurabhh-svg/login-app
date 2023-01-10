import React from "react";
import "./login.css";

function login() {
  return (
    <div className="Login">
      <div className="LoginBox">
        <div className="LoginHeader">Login</div>
        <div className="inputs">
          <input
            className="email"
            placeholder="Enter your Email"
            type="email"
          />
          <input
            className="password"
            placeholder="Enter your Password"
            type="password"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="submitButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default login;
