import React from "react";
import { Species } from "./styles";
import PropTypes from "prop-types";

const CardSpecies = ({ species }) => {
  return (
    <Species variant="body2">
      Species: {species}
    </Species>
  );
};

CardSpecies.propTypes = {
  species: PropTypes.string.isRequired,
};

export default CardSpecies;
