import React from "react";
import Card from "../Card/Card";
import "./Support.css";
import covid from "../../assets/covid.jpg";
import foodbank from "../../assets/foodbank.jpg";
import water from "../../assets/water.jpg";
const Support = () => {
  return (
    <div className="support">
      <div className="s-left">
        <div className="s-description">
          <span>Dukung Komunitas Kami</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos
            consectetur alias inventore expedita
            <br /> laborum velit quo, facere facilis.
          </span>
        </div>
        <div className="community">
          <Card image={covid} title={"Covid - 19"} />
          <Card image={foodbank} title={"Food Bank"} />
          <Card image={water} title={"Air Bersih"} />
        </div>
      </div>
    </div>
  );
};

export default Support;
