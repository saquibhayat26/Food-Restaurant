import React from "react";
import Button from "../Buttons/Button";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top">
        <p>Order Summary</p>
      </div>
      <div className="cart__center">
        <div className="cart__quantity">
          <p>Coke:</p>
          <p>2</p>
          <div className="cart__quantityBtn">
            <Button text={"+"} bgColor={"#3f51b5"} color={"#fff"} />
            <Button text={"-"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
          </div>
        </div>

        <div className="cart__total">
          <p>Total (INR): 200</p>
        </div>
      </div>
      <div className="cart__bottom">
        <Button text={"SAVE AND CHECKOUT"} bgColor={"#3f51b5"} color={"#fff"} />
        <Button text={"CANCEL"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
      </div>
    </div>
  );
};

export default Cart;
