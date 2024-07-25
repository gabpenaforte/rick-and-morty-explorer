import * as React from "react";
import { Root, SearchInput } from "./styles";
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
    <Root
      component="form"
      noValidate
      autoComplete="off"
    >
      <SearchInput
        id="outlined-basic"
        onChange={handleChangeSearch}
        label="Digite o nome do personagem"
        variant="outlined"
        defaultValue={search}
      />
    </Root>
  );
}
