import React from "react";
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
