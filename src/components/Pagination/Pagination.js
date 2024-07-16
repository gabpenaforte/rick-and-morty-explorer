import * as React from "react";
import { Pagination, Box } from "@mui/material";

export default function PaginationButtons({ pages, setPageNumber }) {
  const handlePageChange = (e) => {
    setPageNumber(e.target.innerText);
    console.log(e)
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      <Pagination
        count={pages}
        onChange={(e) => handlePageChange(e)}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
