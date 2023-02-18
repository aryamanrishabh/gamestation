import styled, { css } from "styled-components";

interface TextProps {
  bold?: boolean;
}

const Text = styled.span<TextProps>`
  font-family: "Oxygen", sans-serif;
  letter-spacing: 0.01em;

  ${(bold) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

export default Text;
