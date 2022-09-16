import { BLACK, WHITE } from "@constants/colors";
import { FC } from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";

interface Props {
  inDeck?: boolean;
  color?: string;
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

const Box = styled(FlexBox)<Props>`
  border: 2px solid ${BLACK};
  border-radius: 0.5rem;
  transform: skewX(-10deg);
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
  width: ${({ inDeck }) => (inDeck ? "3rem" : "2.5rem")};
  height: ${({ inDeck }) => (inDeck ? "4rem" : "3.5rem")};
  padding: ${({ inDeck }) => (inDeck ? "0.5rem" : "0.25rem")};
`;

const InsideBox = styled(FlexBox)<{ color?: string }>`
  flex: 1;
  border-radius: 0.25rem;
  background-color: ${({ color }) => color || WHITE};
`;

const Draw2: FC<Props> = ({ inDeck, color = "" }) => {
  return (
    <Wrapper>
      <Box className="box-1" inDeck={inDeck} color={color}>
        <InsideBox color={color} />
      </Box>
      <Box className="box-2" inDeck={inDeck} color={color}>
        <InsideBox color={color} />
      </Box>
    </Wrapper>
  );
};

export default Draw2;
