import React from "react";
import { Typography } from "@mui/material";

const CardTitle = ({ name }) => {
    return (
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
    )
}

export default CardTitle;