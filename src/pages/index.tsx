import { useState } from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import Animation from "@components/Animation";
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
      <Animation />
    </Wrapper>
  );
};

export default Home;
