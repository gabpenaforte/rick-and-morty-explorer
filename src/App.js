import * as React from "react";
import ActionAreaCard from "./components/Cards/Cards.js";
import Header from "./components/Header/index.js";
import InputSearch from "./components/Search/InputSearch.js";
import PaginationButtons from "./components/Pagination/Pagination.js";

function App() {
  return (
    <div className="App">
      <Header.Root>
        <Header.Subtitle />
        <Header.Title />
      </Header.Root>

      <InputSearch />

      <div className="container">
        <div className="row">
          <ActionAreaCard />
          <ActionAreaCard />
        </div>
      </div>

      <PaginationButtons />
    </div>
  );
}

export default App;
