import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputSearch() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "91ch",
          position: "absolute",
          left: "230px",
          top: "340px",
          background: "#FFF",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Digite o nome do personagem"
        variant="outlined"
      />
    </Box>
  );
}
