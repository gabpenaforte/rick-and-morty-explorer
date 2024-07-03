import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import { Root } from "./styles";


const HeaderRoot = ({ children }) => {
  return (
    <header
      className="p-3 mb-2 bg-danger-subtle text-danger-emphasis"
      style={{ height: "380px", width: "100%" }}
    >
        {children}
    </header>
  );
};

export default HeaderRoot;
