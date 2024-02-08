import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  const priceRef = useRef(price)

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {

    if (priceRef.current > price) {
       setColor("red")}

    else if (priceRef.current < price) {
      setColor("green")}

    else {
        setColor("black")
      }

      priceRef.current = price

  },[price])

  console.log(color, priceRef)


  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color}}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
