import { BLUE, GREEN, RED, YELLOW } from "@constants/colors";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  width: 100%;
  height: 100%;
  transform: skewX(-17deg);
`;

const ColorBlock = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
`;

const WildCard: FC = () => {
  return (
    <Wrapper>
      <ColorBlock color={RED} />
      <ColorBlock color={BLUE} />
      <ColorBlock color={YELLOW} />
      <ColorBlock color={GREEN} />
    </Wrapper>
  );
};

export default WildCard;
