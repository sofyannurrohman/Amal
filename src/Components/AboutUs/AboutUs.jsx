import React from "react";
import "./AboutUs.css";
import illus from "../../assets/illus.png";
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="illus">
        <img src={illus} alt="" />
      </div>
      <div className="Detail">
        <span>
          Tentang{" "}
          <span
            style={{ color: "#00715d", fontSize: "4rem", fontWeight: "bold" }}
          >
            Amal
          </span>
        </span>

        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis iusto
          ea neque repellat! Mollitia veniam quae id molestiae. Ea sed quos
          doloremque, quaerat quibusdam exercitationem laborum iure praesentium
          omnis harum? Nesciunt at natus maiores architecto consequuntur tempora
          possimus, inventore facere illo molestias hic soluta doloremque
          praesentium velit id delectus consectetur impedit laboriosam vero sit
          dignissimos et modi? Repellat, doloremque quisquam!
        </span>

        <span>Tampilkan Lebih</span>
      </div>
    </div>
  );
};

export default AboutUs;
