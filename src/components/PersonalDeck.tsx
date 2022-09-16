import { FC } from "react";
import styled from "styled-components";

import Card from "@common/Card";
import FlexBox from "@common/FlexBox";

import { CardData } from "@declarations/CardData";

interface Props {
  cardsInDeck: CardData[];
  addToCenter: (index: number, card: CardData) => void;
}

const Wrapper = styled(FlexBox)`
  width: 80%;
  column-gap: 0;
  background-color: greenyellow;
  transition: column-gap 200ms linear;

  > :not(:first-child) {
    margin-left: -2rem;

    @media only screen and (max-width: 768px) {
      margin-left: -5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PersonalDeck: FC<Props> = ({ cardsInDeck, addToCenter }) => {
  return (
    <Wrapper justify="center" align="center">
      {cardsInDeck?.map((card, i) => (
        <Card
          inDeck
          cardData={card}
          key={`deck${i}`}
          className="ease-in-deck"
          onClick={() => addToCenter(i, card)}
        />
      ))}
    </Wrapper>
  );
};

export default PersonalDeck;
