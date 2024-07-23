import React from "react";
import Card from "@mui/material/Card";

const CardRoot = ({ children, key }) => {
  return (
    <Card
      key={key}
      sx={{ maxWidth: 250, marginTop: 5, marginLeft: 8, marginBottom: 5 }}
    >
      {" "}
      {children}{" "}
    </Card>
  );
};

export default CardRoot;
