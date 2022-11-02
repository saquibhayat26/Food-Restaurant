import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import "./Cart.css";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cartSlice";

const Cart = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    {
      cartData.items.length > 0 &&
        cartData.items.forEach((item) => {
          if (item.productQuantity === 1) {
            total += item.price * 1;
          } else {
            total += item.price * item.productQuantity * 1;
          }
        });
    }
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartData, total]);

  function handleAdd(item) {
    dispatch(addToCart(item));
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="cart">
      <div className="cart__top">
        <p>Order Summary</p>
      </div>
      {cartData.items.length > 0 &&
        cartData.items.map((item, index) => (
          <div className="cart__center" key={index}>
            <div className="cart__quantity">
              <p>{item.name}:</p>
              <p>{item.productQuantity}</p>
              <div className="cart__quantityBtn">
                <div onClick={() => handleAdd(item)}>
                  <Button text={"+"} bgColor={"#3f51b5"} color={"#fff"} />
                </div>
                <div onClick={() => handleRemove(item.id)}>
                  <Button text={"-"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="cart__total">
        <p>Total (INR): {total}</p>
      </div>
      <div className="cart__bottom">
        <div>
          <Button
            text={"SAVE AND CHECKOUT"}
            bgColor={"#3f51b5"}
            color={"#fff"}
          />
        </div>
        <div onClick={handleClick}>
          <Button text={"CANCEL"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
