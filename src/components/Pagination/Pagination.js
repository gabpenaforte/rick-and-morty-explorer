import * as React from "react";
import { Pagination, Box } from "@mui/material";
import { useAppStore } from "../../store";

export default function PaginationButtons() {
  const { pages, pageNumber, setPageNumber } = useAppStore();
  const handlePageChange = (_, page) => {
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
        page={pageNumber}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}
