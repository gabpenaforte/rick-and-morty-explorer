import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const CardLocation = ({ location }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      Location: {location}
    </Typography>
  );
};

CardLocation.propTypes = {
  location: PropTypes.string.isRequired,
}

export default CardLocation;
