import { FC, useState } from "react";
import styled, { css } from "styled-components";
import useTimer from "@hooks/useTimer";

const loopItems = (itemCount: number, circleSize: number) => {
  const angle: number = 360 / itemCount;
  let rot: number = 0;
  let styles: string = ``;

  for (let i = 1; i <= itemCount; i++) {
    styles += `
      &:nth-of-type(${i}) {
        transform: ${`rotate(${rot}deg) translate(${circleSize / 2}px) rotate(${
          rot * -1
        }deg)`};
      }
    `;

    rot += angle;
  }

  return css`
    ${styles}
  `;
};

const onCirlce = (
  itemCount: number,
  itemSize: number,
  circleSize: number
) => css`
  border-radius: 50%;
  position: relative;
  width: ${circleSize}px;
  height: ${circleSize}px;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > li {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${itemSize}px;
    height: ${itemSize}px;
    border-radius: 50%;
    background-color: red;
    margin: ${`-${itemSize / 2}`}px;

    ${loopItems(itemCount, circleSize)}
  }

  /* > div {
    
  } */
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<{ count: number }>`
  ${({ count }) => onCirlce(count, 20, 600)};
`;

const Circle: FC = () => {
  const num: number = 8;
  // const counter = useTimer(50);

  return (
    <Wrapper>
      <Container count={num}>
        {new Array(num).fill(1).map((a, i) => (
          <>
            <li key={i} />
          </>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Circle;
