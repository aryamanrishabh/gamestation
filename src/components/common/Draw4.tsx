import { FC } from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";
import { BLACK, WHITE } from "@constants/colors";

interface Props {
  inDeck?: boolean;
}

const Wrapper = styled(FlexBox)`
  width: 100%;
  justify-content: center;
  cursor: pointer;

  .box-2 {
    position: absolute;
    top: -1rem;
    left: -1rem;
  }

  .box-3 {
    position: absolute;
    top: 1rem;
    left: -0.85rem;
  }
`;

const Box = styled.div<{ inDeck?: boolean }>`
  width: ${({ inDeck }) => (inDeck ? "2.5rem" : "2rem")};
  height: ${({ inDeck }) => (inDeck ? "3.5rem" : "3rem")};
  border-radius: 0.5rem;
  transform: skewX(-10deg);
  border: 4px solid ${BLACK};
  box-sizing: border-box;
  background-color: ${WHITE};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
`;

const RelativeBoxContainer = styled.div`
  position: relative;
`;

const Draw4: FC<Props> = ({ inDeck }) => {
  return (
    <Wrapper>
      <Box className="box-1" inDeck={inDeck} />
      <RelativeBoxContainer>
        <Box className="box-2" inDeck={inDeck} />
        <Box className="box-3" inDeck={inDeck} />
      </RelativeBoxContainer>
      <Box className="box-4" inDeck={inDeck} />
    </Wrapper>
  );
};

export default Draw4;
