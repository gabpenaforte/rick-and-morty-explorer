import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { SearchStatus } from "iconsax-react";
import { auto } from "@popperjs/core";

import rickAndMorty from "../../assets/background.png";

function Header() {
  return (
    <div
      className="p-3 mb-2 bg-danger-subtle text-danger-emphasis"
      style={{ height: "380px", width: "100%" }}
    >
      <div
        className="position-relative"
        style={{ width: "68%", marginLeft: auto, marginRight: auto }}
      >
        <SearchStatus
          className="position-absolute top-100 start-0"
          size="32"
          color="#000"
          variant="Bold"
        />
        <div
          className="fs-5"
          style={{ position: "relative", top: "30px", left: "50px" }}
        >
          <strong>rick_and_morty</strong>_explorer
        </div>
      </div>

      <div
        className="fs-1 fw-bold"
        style={{ width: "350px", position: "relative", top: "80px", left: "230px"  }}
      >
        Explore os personagens de Rick and Morty
      </div>

      <div
        className="rickAndMorty"
        style={{ position: "absolute", top: "200px", right: "260px" }}
      >
        <img src={rickAndMorty} alt="rick and morty" style={{ width:"200px", height:"150px" }}/>
      </div>
    </div>
  );
}

export default Header;
