import React from "react";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";

const CardImage = ({ image, title, height }) => {
  return (
    <CardMedia
      component="img"
      height={height}
      image={image}
      alt={title}
      title={title}
    />
  );
};

CardImage.propTypes = {
  height: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

CardImage.defaultProps = {
  height: "250",
};

export default CardImage;
