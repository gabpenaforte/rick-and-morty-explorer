import React from "react";
import CardMedia from "@mui/material/CardMedia";

const CardImage = ({ image }) => {
    return (
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="character"
        />
    )
}

export default CardImage;