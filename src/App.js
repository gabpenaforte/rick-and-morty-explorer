import * as React from "react";
import { useEffect } from "react";
import { useAppStore } from './store';
import Card from "./components/Cards/Cards.js";
import Header from "./components/Header/index.js";
import InputSearch from "./components/Search/InputSearch.js";
import PaginationButtons from "./components/Pagination/Pagination.js";

const App = () => {
const {
  charactersList,
  pageNumber,
  search,
  getCharacters
} = useAppStore();

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

      <div className="container">
        <div className="row">
          <Card page="/" characters={charactersList} />
        </div>
      </div>

      <PaginationButtons />
    </div>
  );
};

export default App;
