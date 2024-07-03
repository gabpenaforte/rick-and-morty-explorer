import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Root } from "./styles";


const HeaderRoot = ({ children }) => {
  return (
    <Root>
        {children}
    </Root>
  );
};

export default HeaderRoot;
