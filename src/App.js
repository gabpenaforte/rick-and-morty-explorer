import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import ActionAreaCard from "./components/Cards/Cards.js";
import Header from "./components/Header/Header.js";
import InputSearch from "./components/Search/InputSearch.js";
import PaginationButtons from "./components/Pagination/Pagination.js";


function App() {
  return (
    <div className="App">
      <Header />

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
