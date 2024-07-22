import React from "react";
import { Typography } from "@mui/material";

const CardSpecies = ({ species }) => {
    return (
        <Typography gutterBottom variant="body2" color="text.secundary">
            {species}
        </Typography>
    )
}

export default CardSpecies;