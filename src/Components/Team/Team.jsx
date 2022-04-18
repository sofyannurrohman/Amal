import React from "react";
import "./Team.css";
import sofyan from "../../assets/sofyan.png";
import blob from "../../assets/blob-haikei.png";
function Team() {
  return (
    <div className="team">
      <div className="judul">
        <span>Tim Kami</span>
      </div>
      <div className="Wrapper">
        {" "}
        <div className="Anggota">
          <img src={sofyan} alt="" />
          <span>Sofyan Nur Rohman</span>
          <span>Founder</span>
        </div>
        <div className="Anggota">
          <img src="" alt="" />
          <span>Vincensius Pramudito</span>
          <span>CO Founder</span>
        </div>
        <div className="Anggota">
          <img src="" alt="" />
          <span>Deprinico Riyadsyah</span>
          <span>Manager</span>
        </div>
        <div className="Anggota">
          <img src="" alt="" />
          <span>Yohanes Indra</span>
          <span>Supervisor</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
