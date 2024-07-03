import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import rickAndMorty from "../../assets/background.png";


const HeaderImage = () => {
    return (
        <div
        className="rickAndMorty"
        style={{ position: "absolute", top: "200px", right: "260px" }}
      >
        <img src={rickAndMorty} alt="rick and morty" style={{ width:"200px", height:"150px" }}/>
      </div>
    )
}

export default HeaderImage;
