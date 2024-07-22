import React from "react";
import { CardActions } from "@mui/material";

const CardActionsRoot = ({ children }) => {
    return (
        <CardActions>
            {children}
        </CardActions>
    )
}

export default CardActionsRoot;