import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputSearch({ setSearch, setPageNumber }) {
  const handleChangeSearch = (e) => {
    setTimeout(() => {
      setPageNumber(1);
      setSearch(e.target.value);
    }, 500);
  };

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
        onChange={handleChangeSearch}
        label="Digite o nome do personagem"
        variant="outlined"
      />
    </Box>
  );
}
