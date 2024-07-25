import React from "react";
import { Location } from "./styles";
import PropTypes from "prop-types";

const CardLocation = ({ location }) => {
  return (
    <Location variant="body2">
      Location: {location}
    </Location>
  );
};

CardLocation.propTypes = {
  location: PropTypes.string.isRequired,
}

export default CardLocation;
