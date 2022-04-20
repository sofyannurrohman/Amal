import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpg";
import Facebook from "../../assets/facebook .png";
import Youtube from "../../assets/youtube.png";
import Instagram from "../../assets/ig.png";
import Donate from "../../pages/Donate";
const Hero = () => {
  return (
    <div className="hero">
      <div className="h-left">
        <div className="description">
          <span>
            Cari Kebahagiaanmu
            <br /> dengan Berbagi
          </span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ut
            corporis <br /> reiciendis quos voluptates. Reprehenderit
            voluptatum,
          </span>
        </div>
        <a href="../../pages/Donate.js">
          <button className="button h-button">Sedekah Sekarang</button>
        </a>

        <div className="sosmed">
          <a href="https://github.com/sofyannurrohman">
            <img src={Facebook} alt="facebook" />
          </a>
          <img src={Youtube} alt="youtube" />
          <a href="https://www.instagram.com/sofyannr.id">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="h-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
