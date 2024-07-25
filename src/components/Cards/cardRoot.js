import React from "react";
import { Root } from "./styles";


const CardRoot = ({ children, key }) => {
  return (
    <Root
      key={key}
    >
      {children}
    </Root>
  );
};

export default CardRoot;
