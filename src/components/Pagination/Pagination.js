import * as React from "react";
import { Pagination } from "@mui/material";
import { useAppStore } from "../../store";
import { Root } from "./styles";

export default function PaginationButtons() {
  const { pages, pageNumber, setPageNumber } = useAppStore();
  const handlePageChange = (_, page) => {
    setPageNumber(page);
  };

  return (
    <Root>
      <Pagination
        count={pages}
        page={pageNumber}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Root>
  );
}
