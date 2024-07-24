import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const CardSpecies = ({ species }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      Species: {species}
    </Typography>
  );
};

CardSpecies.propTypes = {
  species: PropTypes.string.isRequired,
};

export default CardSpecies;
