import React from "react";
import "./Login.css";

import { Link } from "react-router-dom";

import vector1 from "./../../assets/Vector1.png";

const Login = () => {
  return (
    <div className="Login">
      <img src={vector1} alt="vector1" />
      <div className="Login__wrapper">
        <div className="Login__top">
          <h2>Welcome To Food's Restaurant</h2>
          <p>Login to your account</p>
        </div>
        <div className="Login__center">
          <form>
            <input type={"text"} placeholder="Enter email" />

            <input type={"password"} placeholder="Enter password" />
            <button className="Login__btn">Login</button>
          </form>
        </div>
        <div className="Login__bottom">
          <p>
            Not Registered?{" "}
            <span
              style={{ cursor: "pointer", color: "#ed2f09", fontWeight: 600 }}
            >
              <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                SignUp
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
