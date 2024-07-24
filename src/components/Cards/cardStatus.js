import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const CardStatus = ({ status }) => {
  return <Typography variant="caption">{status}</Typography>;
};

CardStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default CardStatus;
