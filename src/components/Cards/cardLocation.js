import React from "react";
import { Typography } from "@mui/material";

const CardLocation = ({ location }) => {
    return (
        <Typography gutterBottom variant="body2" color="text.secundary">
            {location}
        </Typography>
    )
}

export default CardLocation;