import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const CardName = ({ name }) => {
  return (
    <Typography gutterBottom variant="h5" component="div">
      {name}
    </Typography>
  );
};

CardName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardName;
