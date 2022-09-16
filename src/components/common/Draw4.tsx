import { FC } from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";
import { BLACK, BLUE, GREEN, RED, WHITE, YELLOW } from "@constants/colors";

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

  .red {
    background-color: ${RED};
  }

  .blue {
    background-color: ${BLUE};
  }

  .green {
    background-color: ${GREEN};
  }

  .yellow {
    background-color: ${YELLOW};
  }
`;

const Box = styled(FlexBox)<{ inDeck?: boolean }>`
  border-radius: 0.5rem;
  transform: skewX(-10deg);
  border: 2px solid ${BLACK};
  box-sizing: border-box;
  background-color: ${WHITE};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
  width: ${({ inDeck }) => (inDeck ? "2.5rem" : "2rem")};
  height: ${({ inDeck }) => (inDeck ? "3.5rem" : "3rem")};
  padding: ${({ inDeck }) => (inDeck ? "0.25rem" : "0.2rem")};
`;

const RelativeBoxContainer = styled.div`
  position: relative;
`;

const InsideBox = styled(FlexBox)<{ color?: string }>`
  flex: 1;
  border-radius: 0.25rem;
`;

const Draw4: FC<Props> = ({ inDeck }) => {
  return (
    <Wrapper>
      <Box className="box-1" inDeck={inDeck}>
        <InsideBox className="red" />
      </Box>
      <RelativeBoxContainer>
        <Box className="box-2" inDeck={inDeck}>
          <InsideBox className="blue" />
        </Box>
        <Box className="box-3" inDeck={inDeck}>
          <InsideBox className="yellow" />
        </Box>
      </RelativeBoxContainer>
      <Box className="box-4" inDeck={inDeck}>
        <InsideBox className="green" />
      </Box>
    </Wrapper>
  );
};

export default Draw4;
