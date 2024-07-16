import * as React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Cards/Cards.js";
import Header from "./components/Header/index.js";
import InputSearch from "./components/Search/InputSearch.js";
import PaginationButtons from "./components/Pagination/Pagination.js";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([]);

  const getCharacters = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      );

      const data = response.data;

      setCharacters(data.results);
      setPages(data.info.pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters(pageNumber);
  }, [pageNumber]);

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
          <Card page="/" characters={characters} />
        </div>
      </div>

      <PaginationButtons pages={pages} setPageNumber={setPageNumber} />
    </div>
  );
};

export default App;
