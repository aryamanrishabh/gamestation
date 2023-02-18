import { useState } from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import Home from "@components/Home";
import Circle from "@components/Circle";
import GameInterface from "@components/GameInterface";

const Wrapper = styled.main`
  flex: 1;
  display: flex;
  box-sizing: border-box;
`;

const HomePage: NextPage = () => {
  return (
    <Wrapper>
      {/* <Circle /> */}
      {/* <GameInterface /> */}
      <Home />
    </Wrapper>
  );
};

export default HomePage;
