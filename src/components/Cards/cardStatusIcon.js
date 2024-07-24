import React from "react";
import { Heart, HeartSlash, Unlimited } from "iconsax-react";
import PropTypes from "prop-types";

const CardStatusIcon = ({ status }) => {
  switch (status) {
    case "Alive":
      return <Heart color="#B22222" variant="Bold" />;
    case "Dead":
      return <HeartSlash color="#A9A9A9" variant="Bold" />;
    default:
      return <Unlimited color="#6495ED" variant="Bold" />;
  }
};

CardStatusIcon.propTypes = {
  status: PropTypes.string.isRequired,
};

export default CardStatusIcon;
