import React from "react";
import Button from "../Buttons/Button";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} />
      <p>{item.name}</p>
      <p>Price: Rs.{item.price}</p>
      <div className="item__btn">
        <Button text={"+"} bgColor={"#3f51b5"} color={"#fff"} />
        <Button text={"-"} bgColor={"#c6c6c6"} color={"#3f51b5"} />
      </div>
    </div>
  );
};

export default Item;
