import * as React from "react";
import { Pagination, Box } from "@mui/material";

export default function PaginationButtons() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pagination count={10} showFirstButton showLastButton />
    </Box>
  );
}
