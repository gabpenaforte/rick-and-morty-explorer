import * as React from "react";
import { Pagination, Box } from "@mui/material";

export default function PaginationButtons({ pages, setPageNumber }) {
  const handlePageChange = ( _ , page) => {
    setPageNumber(page);
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
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
