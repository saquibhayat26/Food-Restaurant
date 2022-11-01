import React, { useState } from "react";
import { useEffect } from "react";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [localData, setLocaldata] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("data/feeds.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setLocaldata(myJson);
      });
  };
  console.log(localData);

  return (
    <div className="items">
      <div className="items__wrapper">
        {" "}
        {localData && localData.map((item) => <Item item={item} />)}
      </div>
    </div>
  );
};

export default Items;
