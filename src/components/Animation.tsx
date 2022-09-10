import { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import dynamic from "next/dynamic";
import Card from "@common/Card";
import FlexBox from "@common/FlexBox";

import { colors } from "@metadata/colors";
import { cardTypes } from "@metadata/cardTypes";

const Portal = dynamic(() => import("@HOC/Portal"), { ssr: false });

const EaseIn = keyframes`
  from {
    transform: translateX(2rem);
    opacity: 0.5;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 2fr;

  .selected {
    transform: translateY(19rem) scale(1.25);
    transition: transform 500ms linear;
  }

  .ease-in-deck {
    animation: ${EaseIn};
    animation-duration: 250ms;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }

  .expand {
    column-gap: 2.5rem;
    transition: column-gap 200ms linear;
  }

  > * {
    box-sizing: border-box;
  }
`;

const Deck = styled(FlexBox)`
  background-color: red;
  grid-column: 2 / 3;
  grid-row: 2;
  padding: 2rem;
`;

const PersonalDeck = styled(FlexBox)`
  background-color: dodgerblue;
  grid-column: 1 / 4;
  grid-row: 3;
  padding: 1rem 2rem;
`;

const DeckFlex = styled(FlexBox)`
  width: 80%;
  background-color: greenyellow;

  column-gap: 0;
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

const CenterFlex = styled(FlexBox)`
  width: 100%;
`;

const RelativeFlex = styled(FlexBox)`
  position: relative;
`;

interface CardData {
  color?: string;
  value?: string;
  action?: any;
  slug?: string;
  special?: boolean;
}

const Animation: FC = () => {
  const [showPortal, setShowPortal] = useState(false);
  const [cardsInDeck, setCardsInDeck] = useState<CardData[]>([
    {
      color: "YELLOW",
      value: "FOUR",
      action: null,
      slug: "YELLOW_4",
      special: false,
    },
    {
      color: "RED",
      value: "TWO",
      action: null,
      slug: "RED_2",
      special: false,
    },
    {
      color: "YELLOW",
      value: "SKIP",
      action: "SKIP",
      slug: "YELLOW_SKIP",
      special: true,
    },
    {
      color: "GREEN",
      value: "REVERSE",
      action: "REVERSE",
      slug: "GREEN_REVERSE",
      special: true,
    },
    {
      color: "BLACK",
      value: "WILD_DRAW_4",
      action: "WILD_D4",
      slug: "WILD_D4",
      special: true,
    },
    {
      color: "BLACK",
      value: "WILD",
      action: "WILD",
      slug: "WILD",
      special: true,
    },
  ]);
  const [cardsInCenter, setCardsInCenter] = useState<CardData[]>([]);

  const removeFromDeck = (index: number) => {
    let temp = [...cardsInDeck];
    temp.splice(index, 1);

    setCardsInDeck(temp);
  };

  const addToCenter = (index: number, card: CardData) => {
    removeFromDeck(index);

    setCardsInCenter([...cardsInCenter, card]);
  };

  const addToDeck = () => {
    const colorKeys = Object.keys(colors);
    const cardTypeKeys = Object.keys(cardTypes);

    const randomColor = colorKeys[generateRandomNumber(colorKeys.length)];
    const randomCardType =
      cardTypeKeys[generateRandomNumber(cardTypeKeys.length)];

    const newCard: CardData = {
      color: randomColor,
      value: randomCardType,
      action: null,
      slug: "random-slug",
      special: false,
    };

    setCardsInDeck([...cardsInDeck, newCard]);
  };

  const togglePortal = () => setShowPortal(!showPortal);

  const generateRandomNumber = (max: number) => ~~(Math.random() * max);

  return (
    <Wrapper>
      <Deck>
        <CenterFlex align="center" justify="center" colGap="2rem">
          <RelativeFlex>
            {cardsInCenter.map((card, i) => (
              <Card
                key={`center${i}`}
                position={cardsInCenter.length - 1 === i ? "" : "absolute"}
                cardData={card}
              />
            ))}
          </RelativeFlex>
          <Card inverted onClick={addToDeck} />
        </CenterFlex>
      </Deck>

      <PersonalDeck align="center" justify="center">
        <DeckFlex className="" justify="center" align="center">
          {cardsInDeck.map((card, i) => (
            <Card
              key={`deck${i}`}
              className="ease-in-deck"
              inDeck
              cardData={card}
              onClick={() => addToCenter(i, card)}
            />
          ))}
        </DeckFlex>
      </PersonalDeck>
    </Wrapper>
  );
};

export default Animation;
