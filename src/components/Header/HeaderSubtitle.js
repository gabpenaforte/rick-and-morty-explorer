import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { SearchStatus } from "iconsax-react";
import { auto } from "@popperjs/core";

const HeaderSubtitle = () => {
    return (
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
    )
}

export default HeaderSubtitle;