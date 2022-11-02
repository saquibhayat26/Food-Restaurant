import React from "react";
import Button from "../Buttons/Button";
import "./Item.css";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  function handleAdd(item) {
    dispatch(addToCart(item));
  }

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>Price: Rs.{item.price}</p>
      <div className="item__btn">
        <div onClick={() => handleAdd(item)}>
          <Button text={"+"} bgColor={"#3f51b5"} color={"#fff"} />
        </div>
        <div onClick={() => handleRemove(item.id)}>
          <Button text={"-"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
        </div>
      </div>
    </div>
  );
};

export default Item;
