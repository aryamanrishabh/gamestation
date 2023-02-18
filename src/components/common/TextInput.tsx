import styled from "styled-components";

const TextInput = styled.input`
  font-family: "Oxygen", sans-serif;
  border: none;
  border-radius: 0.25rem;
  padding: 0.375rem;
  box-sizing: border-box;
  font-size: 0.875rem;
  letter-spacing: 0.01em;

  :focus {
    outline: none;
  }
`;

export default TextInput;
