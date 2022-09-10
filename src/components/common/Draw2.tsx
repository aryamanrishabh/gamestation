import { BLACK, WHITE } from "@constants/colors";
import { FC } from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";

interface Props {
  inDeck?: boolean;
}

const Wrapper = styled(FlexBox)`
  width: 100%;
  justify-content: center;
  cursor: pointer;

  .box-1 {
    position: relative;
    margin-right: -0.5rem;
    top: 0.5rem;
  }

  .box-2 {
    position: relative;
    margin-left: -0.5rem;
    top: -0.5rem;
    background-color: ${WHITE};
  }
`;

const Box = styled.div<{ inDeck?: boolean }>`
  width: ${({ inDeck }) => (inDeck ? "3rem" : "2.5rem")};
  height: ${({ inDeck }) => (inDeck ? "4rem" : "3.5rem")};
  border-radius: 0.5rem;
  transform: skewX(-10deg);
  border: 4px solid ${BLACK};
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
`;

const Draw2: FC<Props> = ({ inDeck }) => {
  return (
    <Wrapper>
      <Box className="box-1" inDeck={inDeck} />
      <Box className="box-2" inDeck={inDeck} />
    </Wrapper>
  );
};

export default Draw2;
