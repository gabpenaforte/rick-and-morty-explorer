import React from "react";
import { Typography } from "@mui/material";

const CardStatus = ({ status }) => {
    return (
        <Typography variant="caption">
            {status}
        </Typography>
    )
}

export default CardStatus;