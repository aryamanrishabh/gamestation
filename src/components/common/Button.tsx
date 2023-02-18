import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Oxygen", sans-serif;
  text-transform: uppercase;
  width: fit-content;
  border: 2.5px solid white;
  padding: 0.75rem 1.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: white;
  border-radius: 2rem;
  background-color: transparent;
  cursor: pointer;
  transform: scale(1);
  transition: transform 200ms ease-in-out;

  :hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;

    @media only screen and (max-width: 768px) {
      transform: unset;
      transition: unset;
    }
  }
`;

export default Button;
