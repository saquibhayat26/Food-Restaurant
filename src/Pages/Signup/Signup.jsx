import React from "react";
import "./Signup.css";

import vector1 from "./../../assets/Vector1.png";

const Signup = () => {
  return (
    <div className="signup">
      <img src={vector1} />
      <div className="signup__wrapper" alt="vector1">
        <div className="signup__top">
          <h2>Welcome To Food's Restaurant</h2>
          <p>create a new account</p>
        </div>
        <div className="signup__center">
          <form action="submit">
            <input type={"text"} placeholder="Enter Full name" />
            <input type={"email"} placeholder="Enter email" />
            <input type={"password"} placeholder="Create New password" />
            <button className="signup__btn">signup</button>
          </form>
          <p className="signup__policy">
            By continuing, you agree to our{" "}
            <span style={{ cursor: "pointer", color: "#c9c2f6" }}>
              {" "}
              Terms of Service
            </span>{" "}
            <br />
            and{" "}
            <span style={{ cursor: "pointer", color: "#c9c2f6" }}>
              Privacy policy
            </span>
            .
          </p>
        </div>
        <div className="signup__bottom">
          <p>
            Already a member?{" "}
            <span
              style={{ cursor: "pointer", color: "#ed2f09", fontWeight: 600 }}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
