import * as React from "react";
import { useEffect } from "react";
import { useAppStore } from "./store";
import Cards from "./components/Cards/";
import Header from "./components/Header/index.js";
import InputSearch from "./components/Search/InputSearch.js";
import PaginationButtons from "./components/Pagination/Pagination.js";

const App = () => {
  const { pageNumber, search, getCharacters } = useAppStore();

  useEffect(() => {
    getCharacters(search, pageNumber);
  }, [pageNumber, search]);

  return (
    <div className="App">
      <Header.Root>
        <Header.Subtitle />
        <Header.Title />
        <Header.Image />
      </Header.Root>

      <InputSearch />

      <Cards.ListCardsRoot>
        <Cards.Card />
      </Cards.ListCardsRoot>

      <PaginationButtons />
    </div>
  );
};

export default App;
