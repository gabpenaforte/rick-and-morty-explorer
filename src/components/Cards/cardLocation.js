import React from "react";
import Typography from "@mui/material/Typography";

const CardLocation = ({ location }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      Location: {location}
    </Typography>
  );
};

export default CardLocation;
