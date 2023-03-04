import styled, { css } from "styled-components";

const Button = styled.button<{ outline?: boolean; disabled?: boolean }>`
  text-transform: uppercase;
  width: fit-content;
  border: 2.5px solid var(--primary);
  padding: 0.75rem 1.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: var(--tertiary);
  border-radius: 2rem;
  background-color: var(--primary);
  cursor: pointer;
  transform: scale(1);
  transition: transform 200ms ease-in-out;

  :hover {
    transform: scale(1.05);
    transition: transform 200ms ease-in-out;

    @media only screen and (max-width: 768px) {
      transform: unset;
      transition: unset;
    }
  }

  ${({ outline }) =>
    outline &&
    css`
      color: var(--primary);
      background-color: transparent;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      transform: unset;
      transition: unset;
      pointer-events: none;
      filter: grayscale(70%);
    `}
`;

export default Button;
