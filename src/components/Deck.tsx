import { FC } from "react";
import styled from "styled-components";

import Card from "@common/Card";
import FlexBox from "@common/FlexBox";

import { CardData } from "@declarations/CardData";

interface Props {
  cardsInCenter: CardData[];
  addToDeck: () => void;
}

const Wrapper = styled(FlexBox)`
  width: 100%;
`;

const RelativeFlex = styled(FlexBox)`
  position: relative;
`;

const Deck: FC<Props> = ({ cardsInCenter, addToDeck }) => {
  return (
    <Wrapper align="center" justify="center" colGap="2rem">
      <RelativeFlex>
        {cardsInCenter?.map((card, i) => (
          <Card
            key={`center${i}`}
            position={cardsInCenter.length - 1 === i ? "" : "absolute"}
            cardData={card}
          />
        ))}
      </RelativeFlex>
      <Card inverted onClick={addToDeck} />
    </Wrapper>
  );
};

export default Deck;
