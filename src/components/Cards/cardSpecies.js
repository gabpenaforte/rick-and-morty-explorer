import React from "react";
import Typography from "@mui/material/Typography";

const CardSpecies = ({ species }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      Species: {species}
    </Typography>
  );
};

export default CardSpecies;
