import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();
  console.log(elementRef.current.getBoundingClientRect())

  return (
    <div ref={elementRef}>
      <h1 > Box </h1>
      <button>Measure</button>
    </div>
  );
}

export default Box;
