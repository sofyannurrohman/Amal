import React from "react";
import "./Achievement.css";
import Vector1 from "../../assets/donation.png";
import Vector2 from "../../assets/money.png";
import Vector3 from "../../assets/megaphone.png";
import Vector4 from "../../assets/peace.png";
const Achievement = () => {
  return (
    <div className="achievement">
      <div className="icon">
        <img style={{ marginRight: "2rem" }} src={Vector1} alt="vector1" />
        <span>985+</span>
        <span>Donasi Diterima</span>
      </div>
      <div className="icon">
        <img src={Vector2} alt="vector2" />
        <span>57jt+</span>
        <span>Uang Donasi Masuk</span>
      </div>
      <div className="icon">
        <img src={Vector3} alt="vector3" />
        <span>32+</span>
        <span>Campaign Aktif</span>
      </div>
      <div className="icon">
        <img src={Vector4} alt="vector4" />
        <span>100jt+</span>
        <span>Total Donasi </span>
      </div>
    </div>
  );
};

export default Achievement;
