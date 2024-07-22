import * as React from "react";
import { useAppStore } from "../../store";
import Cards from ".";


const Card = () => {
  const { charactersList } = useAppStore();
  return (
    <>
      {charactersList.map((character) => (
        <Cards.CardRoot key={character?.id} >
          <Cards.ActionAreaRoot>
            <Cards.Image image={character?.image} />
            <Cards.Content>
              <Cards.CardTitle name={character?.name} />
              <Cards.CardSpecies species={character?.species} />
              <Cards.CardLocation location={character?.location.name} />
            </Cards.Content>
            <Cards.ActionsArea>
              <Cards.StatusIcon status={character?.status} />
              <Cards.Status status={character?.status} />
            </Cards.ActionsArea>
          </Cards.ActionAreaRoot>
        </Cards.CardRoot>
      ))}
    </>
  );
}

export default Card;
