import React from "react";

const Square = ({ value, onClick }) => (
  <button className = "squares" onClick={onClick}>
      {value}
  </button>
);

export default Square;
