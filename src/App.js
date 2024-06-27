import { MdOutlinePersonSearch } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards.js";

function App() {
  return (
    <div className="App">
      <div className="topSection">
      <MdOutlinePersonSearch size={25} color='black'/>
      <h1 className="text-center fw-bold ubuntu my-4">rick and morty <span className="fw-lighter">explorer</span></h1>
      </div>

      <div className="container">
        <div className="row">
              <Cards />
              <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
