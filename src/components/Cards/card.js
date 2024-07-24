import * as React from "react";
import { useAppStore } from "../../store";
import Cards from ".";

const Card = () => {
  const { charactersList } = useAppStore();
  return (
    <>
      {charactersList.map((character) => (
        <Cards.CardRoot key={character?.id}>
          <Cards.ActionAreaRoot>
            <Cards.CardImage image={character?.image} title={character?.name}/>
            <Cards.ContentRoot>
              <Cards.CardName name={character?.name}/>
              <Cards.CardSpecies species={character?.species}/>
              <Cards.CardLocation location={character?.location.name}/>
            </Cards.ContentRoot>
            <Cards.ActionsRoot>
              <Cards.CardStatusIcon status={character?.status} />
              <Cards.CardStatus status={character?.status} />
            </Cards.ActionsRoot>
          </Cards.ActionAreaRoot>
        </Cards.CardRoot>
      ))}
    </>
  );
};

export default Card;
