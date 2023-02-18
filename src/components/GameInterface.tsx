import { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import dynamic from "next/dynamic";
import Card from "@common/Card";
import FlexBox from "@common/FlexBox";

import { colors } from "@metadata/colors";
import { cardTypes } from "@metadata/cardTypes";
import { CardData } from "@declarations/CardData";
import PersonalDeck from "./PersonalDeck";
import Deck from "./Deck";
import axiosInstance from "@axiosInstance";
import { urls } from "@urls";
import { logger } from "@utils/helpers";

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

  * {
    box-sizing: border-box;
  }
`;

const ButtonDiv = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  padding: 2rem;
`;

const CenterDeck = styled(FlexBox)`
  background-color: red;
  grid-column: 2 / 3;
  grid-row: 2;
  padding: 2rem;
`;

const DeckFlex = styled(FlexBox)`
  background-color: dodgerblue;
  grid-column: 1 / 4;
  grid-row: 3;
  padding: 1rem 2rem;
`;

const Animation: FC = () => {
  const conditionToBeAnOption = `(card.color === card.color of top card in center deck || card.value === card.value of top card in deck || card.special) 
  && currentTurn === playerId`;

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
      special: false,
    },
    {
      color: "GREEN",
      value: "REVERSE",
      action: "REVERSE",
      slug: "GREEN_REVERSE",
      special: false,
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
  const [cardsInCenter, setCardsInCenter] = useState<CardData[]>([
    {
      color: "YELLOW",
      value: "FOUR",
      action: null,
      slug: "YELLOW_4",
      special: false,
    },
  ]);
  const cardOnTop: CardData = cardsInCenter[cardsInCenter?.length - 1];

  const removeFromDeck = (index: number) => {
    let temp = [...cardsInDeck];
    temp.splice(index, 1);

    setCardsInDeck(temp);
  };

  const addToCenter = (index: number, card: CardData) => {
    removeFromDeck(index);

    setCardsInCenter([...cardsInCenter, card]);
  };

  const pickACard = () => {
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

  const createGame = async () => {
    try {
      const res = await axiosInstance.post(urls.createGame, {
        gameType: "PRIVATE",
        playerName: "aryaman",
        turnTimeout: 30,
      });

      logger(res);
    } catch (err) {
      logger(err);
    }
  };

  return (
    <>
      <Wrapper>
        <ButtonDiv>
          <button onClick={createGame} className="cursor-pointer">
            Click
          </button>
        </ButtonDiv>

        <CenterDeck>
          <Deck cardsInCenter={cardsInCenter} pickACard={pickACard} />
        </CenterDeck>

        <DeckFlex align="center" justify="center">
          <PersonalDeck
            cardsInDeck={cardsInDeck}
            addToCenter={addToCenter}
            cardOnTop={cardOnTop}
          />
        </DeckFlex>
      </Wrapper>

      {/* <Portal>
        {cardsInDeck?.map((card, i) => (
          <Card inDeck cardData={card} key={`deck${i}`} />
        ))}
      </Portal> */}
    </>
  );
};

export default Animation;
