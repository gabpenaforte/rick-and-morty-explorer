import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Image } from "./styles";

import rickAndMorty from "../../assets/background.png";


const HeaderImage = () => {
    return (
        <Image>
        <img src={rickAndMorty} alt="rick and morty" />
      </Image>
    )
}

export default HeaderImage;
