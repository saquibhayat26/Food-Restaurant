import React from "react";
import "./Home.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Navbar from "../../Components/Navbar/Navbar";
import Menu from "../../Components/HomeMenu/Menu";
import Items from "../../Components/Items/Items";

const Home = () => {
  return (
    <div>
      {/* <Signup /> */}
      {/* <Login /> */}
      <Navbar />
      {/* <Menu /> */}
      <Items />
    </div>
  );
};

export default Home;
