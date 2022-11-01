import React from "react";
import "./Login.css";

import vector2 from "./../../assets/Vector2.png";

const Login = () => {
  return (
    <div className="Login">
      <img src={vector2} alt="vector2" />
      <div className="Login__wrapper">
        <div className="Login__top">
          <h2>Welcome To Food's Restaurant</h2>
          <p>Login to your account</p>
        </div>
        <div className="Login__center">
          <form action="submit">
            <input type={"text"} placeholder="Enter email" />

            <input type={"password"} placeholder="Enter password" />
            <button className="Login__btn">Login</button>
          </form>
        </div>
        <div className="Login__bottom">
          <p>
            Not Registered?{" "}
            <span style={{ cursor: "pointer", color: "#0937ed" }}>SignUp</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
