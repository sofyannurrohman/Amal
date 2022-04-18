import React from "react";
import "./Card.css";
function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <span>{title}</span>
    </div>
  );
}

export default Card;
