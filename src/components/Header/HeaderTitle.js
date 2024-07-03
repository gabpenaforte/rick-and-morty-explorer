import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HeaderTitle = () => {
  return (
    <Box
      sx={{
        width: "350px",
        position: "relative",
        top: "80px",
        left: "230px",
      }}
    >
      <Typography variant="h1" gutterBottom>
        Explore os personagens de Rick and Morty
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
