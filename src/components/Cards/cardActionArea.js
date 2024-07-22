import React from "react";
import { CardActionArea } from "@mui/material";

const CardActionRoot = ({ children }) => {
    return (
        <CardActionArea>
            {children}
        </CardActionArea>
    )
}

export default CardActionRoot;