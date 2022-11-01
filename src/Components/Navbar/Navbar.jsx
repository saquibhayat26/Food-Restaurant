import React, { useState } from "react";
import "./Navbar.css";

import cart from "../../assets/shopping_cart.png";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <p>Food's Restaurant</p>
      </div>
      <div className="navbar__right">
        <img src={cart} alt="cart" onClick={handleOpen} />
        <span>0</span>
      </div>
      {open && (
        <div className="navbar__cart centered">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
