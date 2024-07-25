import React from "react";
import { Name } from "./styles";
import PropTypes from "prop-types";

const CardName = ({ name }) => {
  return (
    <Name variant="h5">
      {name}
    </Name>
  );
};

CardName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardName;
