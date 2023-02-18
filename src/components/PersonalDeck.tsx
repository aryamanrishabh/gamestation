import { FC } from "react";
import styled from "styled-components";

import Card from "@common/Card";
import FlexBox from "@common/FlexBox";

import { CardData } from "@declarations/CardData";

interface Props {
  cardOnTop: CardData;
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

const PersonalDeck: FC<Props> = ({ cardOnTop, cardsInDeck, addToCenter }) => {
  const conditionToBeAnOption = `(card.color === card.color of top card in center deck || card.value === card.value of top card in deck || card.special) 
  && currentTurn === playerId`;
  const isCardAnOption = (cardInQuestion: CardData) => {
    if (
      cardInQuestion.color === cardOnTop.color ||
      cardInQuestion.value === cardOnTop.value ||
      cardInQuestion.special
    ) {
      return true;
    }
    return false;
  };

  return (
    <Wrapper justify="center" align="center">
      {cardsInDeck?.map((card, i) => {
        const isAnOption = isCardAnOption(card);
        return (
          <Card
            inDeck
            cardData={card}
            key={`deck${i}`}
            className={`ease-in-deck${isAnOption ? "" : " cursor-disabled"}`}
            onClick={() => addToCenter(i, card)}
          />
        );
      })}
    </Wrapper>
  );
};

export default PersonalDeck;
