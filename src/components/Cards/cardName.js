import React from "react";
import Typography from "@mui/material/Typography";

const CardName = ({ name }) => {
  return (
    <Typography gutterBottom variant="h5" component="div">
      {name}
    </Typography>
  );
};

export default CardName;
