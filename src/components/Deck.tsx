import { FC } from "react";
import styled from "styled-components";

import Card from "@common/Card";
import FlexBox from "@common/FlexBox";

import { CardData } from "@declarations/CardData";

interface Props {
  cardsInCenter: CardData[];
  pickACard: () => void;
}

const Wrapper = styled(FlexBox)`
  width: 100%;
`;

const RelativeFlex = styled(FlexBox)`
  position: relative;
`;

const Deck: FC<Props> = ({ cardsInCenter, pickACard }) => {
  return (
    <Wrapper align="center" justify="center" colGap="2rem">
      <RelativeFlex>
        {cardsInCenter?.map((card, i) => (
          <Card
            key={`center${i}`}
            position={cardsInCenter.length - 1 === i ? "" : "absolute"}
            cardData={card}
            className="cursor-disabled"
          />
        ))}
      </RelativeFlex>
      <Card inverted onClick={pickACard} />
    </Wrapper>
  );
};

export default Deck;
