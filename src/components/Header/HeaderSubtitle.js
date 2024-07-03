import React from "react";
import { SearchStatus } from "iconsax-react";
import { Subtitle } from "./styles";

const HeaderSubtitle = () => {
  return (
    <Subtitle>
      <SearchStatus size="32" color="black" variant="Bold"/>
      <span>
        <strong>rick_and_morty</strong>_explorer
      </span>
    </Subtitle>
  );
};

export default HeaderSubtitle;
