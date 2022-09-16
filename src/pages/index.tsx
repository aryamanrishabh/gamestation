import { useState } from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import GameInterface from "@components/GameInterface";
import Circle from "@components/Circle";

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  box-sizing: border-box;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      {/* <Circle /> */}
      <GameInterface />
    </Wrapper>
  );
};

export default Home;
