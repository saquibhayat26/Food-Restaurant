import React, { useState } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import cart from "../../assets/shopping_cart.png";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Navbar = () => {
  const data = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [total, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(data.items.length);
  }, [data]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          color="#fff"
        >
          <path d="M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z" />
        </svg>
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          <p>Food's Restaurant</p>
        </Link>
      </div>

      <div className="navbar__right">
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <p className="login">LOGIN</p>
        </Link>

        <img src={cart} alt="cart" onClick={handleOpen} />
        <span>{total}</span>
      </div>
      {open && (
        <div className="navbar__cart centered">
          <Cart open={open} setOpen={setOpen} setCartTotal={setCartTotal} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
