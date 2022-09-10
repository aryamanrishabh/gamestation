import { BLACK, WHITE } from "@constants/colors";
import React, { FC } from "react";
import styled, { css } from "styled-components";
import FlexBox from "./FlexBox";
import { TiArrowRepeat } from "react-icons/ti";
import { HiOutlineBan } from "react-icons/hi";

import { colors } from "@metadata/colors";
import { cardTypes } from "@metadata/cardTypes";
import Draw2 from "./Draw2";
import Draw4 from "./Draw4";
import WildCard from "./WildCard";

interface Props {
  className?: string;
  inDeck?: boolean;
  position?: string;
  cardSlug?: string;
  inverted?: boolean;
  cardData: CardData;
  onClick?: () => void;
}

interface CardData {
  color?: string;
  value?: string;
  action?: string;
  slug?: string;
  special?: boolean;
}

const Card: FC<Props> = ({
  className,
  inDeck,
  position,
  inverted,
  onClick,
  cardData = {},
}) => {
  const commonIconProps = {
    size: inDeck ? "5rem" : "4rem",
  };

  const RenderDisplay: FC<CardData> = ({ value = "", color = "" }) => {
    switch (value) {
      case "WILD_DRAW_4":
        return <Draw4 inDeck={inDeck} />;
      case "WILD":
        return <WildCard />;
      case "DRAW_2":
        return <Draw2 />;
      case "SKIP":
        return (
          <HiOutlineBan
            color={colors[color]}
            className="rotate"
            {...commonIconProps}
          />
        );
      case "REVERSE":
        return (
          <TiArrowRepeat
            color={colors[color]}
            className="skew"
            {...commonIconProps}
          />
        );
      default:
        return (
          <CenterText inDeck={inDeck} inverted={inverted} color={colors[color]}>
            {inverted ? "ONU" : cardTypes[value]}
          </CenterText>
        );
    }
  };

  const RenderDisplayText: FC<CardData> = ({ value = "" }) => {
    switch (value) {
      // case "WILD_DRAW_4":
      //   return <Draw4 inDeck={inDeck} />;
      // case "WILD":
      //   return <WildCard />;
      // case "DRAW_2":
      //   return <Draw2 />;
      case "SKIP":
        return <HiOutlineBan className="rotate" />;
      case "REVERSE":
        return <TiArrowRepeat className="skew" />;
      default:
        return inverted ? "ONU" : cardTypes[value];
    }
  };

  return (
    <Wrapper
      className={className}
      inDeck={inDeck}
      position={position}
      onClick={onClick}
    >
      <Container
        inDeck={inDeck}
        inverted={inverted}
        color={colors[cardData?.color]}
      >
        {!inverted && (
          <DisplayText top inDeck={inDeck}>
            <RenderDisplayText value={cardData?.value} />
          </DisplayText>
        )}

        <Display cursor="pointer" justify="center" align="center">
          <RenderDisplay value={cardData?.value} color={cardData?.color} />
        </Display>

        {!inverted && (
          <DisplayText bottom inDeck={inDeck}>
            <RenderDisplayText value={cardData?.value} />
          </DisplayText>
        )}
      </Container>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled(FlexBox)<{ inDeck?: boolean; position?: string }>`
  position: ${({ position }) => position || "static"};
  height: ${({ inDeck }) => (inDeck ? "12.5rem" : "10rem")};
  width: ${({ inDeck }) => (inDeck ? "9.375rem" : "7.5rem")};
  background-color: white;
  border-radius: ${({ inDeck }) => (inDeck ? "1.5625rem" : "1.25rem")};
  padding: ${({ inDeck }) => (inDeck ? "0.825rem" : "0.625rem")};
  box-sizing: border-box;
  border: 1px solid black;
  box-shadow: 4px 4px 12px 2px rgba(0, 0, 0, 0.6);
  font-size: ${({ inDeck }) => (inDeck ? "1.25rem" : "1rem")};
  cursor: pointer;

  transform: translateY(0);
  transition: transform 500ms linear;

  > * {
    box-sizing: border-box;
    cursor: pointer;
  }
`;

const Container = styled(FlexBox)<{
  inDeck?: boolean;
  inverted?: boolean;
  color?: string;
}>`
  position: relative;
  flex: 1;
  background-color: ${({ inverted, color }) => (inverted ? BLACK : color)};
  border-radius: ${({ inDeck }) => (inDeck ? "1.25rem" : "1rem")};
  padding: ${({ inDeck }) => (inDeck ? "1rem 0" : "0.75rem 0")};

  .skew {
    transform: skew(-10deg, 10deg);
  }

  .rotate {
    transform: rotate(90deg);
  }
`;

const Display = styled(FlexBox)`
  flex: 1;
  overflow: hidden;
  background-color: white;
  border-radius: 200% 100% 200% 100%;
`;

const CenterText = styled.span<{
  inDeck?: boolean;
  inverted?: boolean;
  color?: string;
}>`
  font-size: ${({ inDeck, inverted }) => {
    if (inDeck) {
      if (inverted) return "3rem";
      return "4rem";
    } else {
      if (inverted) return "2.25rem";
      return "3rem";
    }
  }};
  font-weight: bold;
  font-style: italic;
  color: ${({ color, inverted }) => (color && !inverted ? color : BLACK)};
`;

const DisplayText = styled.span<{
  inDeck?: boolean;
  top?: boolean;
  bottom?: boolean;
}>`
  position: absolute;
  color: ${WHITE};
  font-size: ${({ inDeck }) => (inDeck ? "1.25rem" : "1rem")};
  font-weight: 600;
  font-style: italic;

  ${({ top, inDeck }) =>
    top &&
    css`
      top: ${inDeck ? "0.5rem" : "0.35rem"};
      left: ${inDeck ? "0.5rem" : "0.35rem"};
    `};

  ${({ bottom, inDeck }) =>
    bottom &&
    css`
      bottom: ${inDeck ? "0.5rem" : "0.35rem"};
      right: ${inDeck ? "0.5rem" : "0.35rem"};
    `};
`;
