import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAppStore } from "../../store";

export default function InputSearch() {
  const { search, setSearch, setPageNumber } = useAppStore();
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
        defaultValue={search}
      />
    </Box>
  );
}
